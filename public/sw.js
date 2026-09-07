/**
 * PWA Service Worker for Rajdip Ghosh Portfolio
 * Cache strategy:
 * - Network-first with Cache fallback for navigation/HTML (ensures real-time SSR)
 * - Stale-while-revalidate for static scripts, styles, and assets
 */

const CACHE_NAME = 'rajdip-portfolio-v7';

const PRECACHE_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/favicon.svg',
  '/apple-touch-icon.png',
  '/assets/img/rajdip-avatar.webp',
  '/assets/img/rajdip-avatar.png',
  '/assets/img/og-preview.png',
  '/assets/img/PwaImages/android/android-launchericon-192-192.png',
  '/assets/img/PwaImages/android/android-launchericon-512-512.png',
  '/assets/img/portfolio/chrome-extension.webp',
  '/assets/img/portfolio/chrome-extension.png',
  '/assets/img/portfolio/meter.webp',
  '/assets/img/portfolio/meter.png',
  '/assets/img/portfolio/radial-bar.webp',
  '/assets/img/portfolio/radial-bar.png',
  '/assets/img/portfolio/linear-bar.webp',
  '/assets/img/portfolio/linear-bar.png',
  '/assets/img/portfolio/gmap-clone.webp',
  '/assets/img/portfolio/gmap-clone.png',
  '/assets/img/portfolio/instaclone.webp',
  '/assets/img/portfolio/instaclone.png',
  '/assets/img/portfolio/studentcdc.webp',
  '/assets/img/portfolio/studentcdc.png',
  '/assets/img/portfolio/stopwatch.webp',
  '/assets/img/portfolio/stopwatch.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin analytics/cal.com requests
  if (request.method !== 'GET' || !url.origin.includes(self.location.origin)) {
    return;
  }

  // Navigation requests (HTML document): Network-first with cache fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('/')))
    );
    return;
  }

  // Static assets & images: Cache-first with background revalidation
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Revalidate in background to keep cache fresh
        fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
          })
          .catch(() => {});
        return cachedResponse;
      }

      // Not in cache: fetch from network and cache response
      return fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return networkResponse;
      });
    })
  );
});

import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);
  private isBrowser = isPlatformBrowser(this.platformId);

  // Active theme signal: dynamically resolved to system theme in browser, 'dark' as SSR baseline
  currentTheme = signal<ThemeMode>('dark');

  // Tracks whether the user has explicitly selected a manual theme override
  isManualPreference = signal<boolean>(false);

  private mediaQueryList?: MediaQueryList;

  constructor() {
    if (this.isBrowser) {
      this.initTheme();
    }
  }

  private getSystemTheme(): ThemeMode {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  }

  private initTheme(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get('theme') as ThemeMode;
    const explicitTheme = localStorage.getItem('rajdip_theme_explicit') as ThemeMode;

    if (themeParam === 'light' || themeParam === 'dark') {
      this.isManualPreference.set(true);
      this.currentTheme.set(themeParam);
      localStorage.setItem('rajdip_theme_explicit', themeParam);
      localStorage.setItem('rajdip_theme', themeParam);
    } else if (explicitTheme === 'light' || explicitTheme === 'dark') {
      this.isManualPreference.set(true);
      this.currentTheme.set(explicitTheme);
    } else {
      // Default theme is strictly as per system theme
      this.isManualPreference.set(false);
      this.currentTheme.set(this.getSystemTheme());
    }

    this.applyTheme(this.currentTheme());

    // Listen to real-time OS / system theme changes
    if (window.matchMedia) {
      this.mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = (e: MediaQueryListEvent) => {
        // If user hasn't explicitly set a preference, automatically follow system theme
        if (!this.isManualPreference()) {
          const newSystemTheme: ThemeMode = e.matches ? 'dark' : 'light';
          this.currentTheme.set(newSystemTheme);
          this.applyTheme(newSystemTheme);
        }
      };

      if (this.mediaQueryList.addEventListener) {
        this.mediaQueryList.addEventListener('change', listener);
      } else if ((this.mediaQueryList as any).addListener) {
        (this.mediaQueryList as any).addListener(listener);
      }
    }
  }

  toggleTheme(): void {
    const nextTheme: ThemeMode = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  setTheme(theme: ThemeMode): void {
    this.isManualPreference.set(true);
    this.currentTheme.set(theme);
    if (this.isBrowser) {
      localStorage.setItem('rajdip_theme_explicit', theme);
      localStorage.setItem('rajdip_theme', theme);
      this.applyTheme(theme);
    }
  }

  resetToSystemTheme(): void {
    this.isManualPreference.set(false);
    if (this.isBrowser) {
      localStorage.removeItem('rajdip_theme_explicit');
      localStorage.removeItem('rajdip_theme');
      const systemTheme = this.getSystemTheme();
      this.currentTheme.set(systemTheme);
      this.applyTheme(systemTheme);
    }
  }

  private applyTheme(theme: ThemeMode): void {
    if (!this.document) return;
    const root = this.document.documentElement;
    const body = this.document.body;

    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
      root.setAttribute('data-bs-theme', 'light');
      if (body) {
        body.classList.remove('dark');
        body.classList.add('light');
      }
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      root.setAttribute('data-bs-theme', 'dark');
      if (body) {
        body.classList.remove('light');
        body.classList.add('dark');
      }
    }

    const metaTheme = this.document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'light' ? '#f5f5f7' : '#070b14');
    }
  }
}

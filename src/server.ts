import { renderApplication } from '@angular/platform-server';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import bootstrap from './main.server';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtmlPath = resolve(serverDistFolder, 'index.server.html');

const app = express();

/**
 * Serve static assets
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    setHeaders: (res, path) => {
      if (path.endsWith('.ico') || path.includes('favicon') || path.includes('apple-touch-icon') || path.endsWith('.svg')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
    },
    index: false,
    redirect: false,
  }),
);

/**
 * Server-side render using Angular renderApplication
 */
app.get('**', async (req, res, next) => {
  const { originalUrl, headers } = req;
  const forwardedProto = headers['x-forwarded-proto'];
  const protocol = typeof forwardedProto === 'string' ? forwardedProto.split(',')[0].trim() : req.protocol || 'https';
  const host = headers.host || 'localhost:4000';
  const url = `${protocol}://${host}${originalUrl}`;

  // Resolve base URL from environment or current request
  const port = process.env['PORT'] || 4000;
  const defaultBaseUrl = process.env['VERCEL'] || process.env['NODE_ENV'] === 'production'
    ? 'https://rajdipghosh.vercel.app'
    : `http://localhost:${port}`;
  const activeBaseUrl = process.env['BASE_URL'] || (headers.host ? `${protocol}://${host}` : defaultBaseUrl);

  try {
    const document = await readFile(indexHtmlPath, 'utf-8');
    const html = await renderApplication(bootstrap, {
      document,
      url,
      allowedHosts: ['*'] as any,
    });
    // Replace production domain occurrences with the active environment's BASE_URL
    const finalHtml = html.replaceAll('https://rajdipghosh.vercel.app', activeBaseUrl);
    res.send(finalHtml);
  } catch (err) {
    next(err);
  }
});

export { app };
export const reqHandler = app;
export default app;

const isDirectExecution =
  Boolean(process.argv[1]) &&
  (process.argv[1].endsWith('server.mjs') || process.argv[1].endsWith('server.ts')) &&
  !process.env['VERCEL'];

if (isDirectExecution) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express SSR server listening on http://localhost:${port}`);
  });
}


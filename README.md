# Rajdip Ghosh - Senior Software Engineer Portfolio

An enterprise-grade, high-performance developer portfolio built with **Angular 19**, **Express SSR (Server-Side Rendering)**, and an **Apple-inspired Glassmorphism Design System**.

Designed and engineered for sub-second Core Web Vitals, dynamic SEO metadata, progressive offline support (PWA), and seamless multi-platform deployment on Vercel and Node.js runtimes.

---

## Technical Highlights

- **Modern Angular 19 & Zoneless SSR**: Engineered with modern standalone components, Angular Signals, reactive RxJS pipelines, and `@angular/ssr` with Express.
- **Apple Space Black & Ceramic Silver UI**: Authentic SF Pro typography, refined tracking, dual dark/light theme switching with zero Flash of Unstyled Content (FOUC).
- **Trigonometric Honeycomb Lattice**: 30-skill interactive honeycomb lattice with uniform 10px edge-to-edge spacing and synchronized motion loops.
- **Dynamic SEO & Social Sharing (OpenGraph & Twitter)**: Automated Schema.org JSON-LD graph, canonical tag resolution, and lightweight (<300 KB) high-definition preview cards optimized for WhatsApp, Twitter/X, LinkedIn, Facebook, and Slack crawlers.
- **Progressive Web App (PWA)**: Full offline service worker caching (`sw.js`), web app manifest, and multi-resolution launcher icons.
- **Dedicated 404 Experience**: Branded, standalone 404 Page Not Found component with automatic SEO noindex directives and seamless router navigation.
- **Vercel Serverless Ready**: Configured serverless SSR entrypoint (`api/index.js`) and cache-controlled edge rewrite rules (`vercel.json`).
- **Clean Component Architecture**: Strict three-file structure `(ts + html + scss)` across all features with zero inline styles.

---

## Project Structure

```
modern-portfolio/
├── api/                          # Vercel Serverless Function entrypoint
│   └── index.js                  # SSR bridge module for edge execution
├── public/                       # Static public assets served at root
│   ├── assets/img/               # Project screenshots, avatars, skill SVGs
│   │   ├── portfolio/            # Featured system showcase images
│   │   ├── PwaImages/            # iOS and Android launcher icons
│   │   ├── skills/               # Clean SVG vector tech stack icons
│   │   ├── og-preview.png        # 1200x630 social sharing card (<300 KB)
│   │   ├── og-square.png         # 800x800 square thumbnail card
│   │   └── rajdip-avatar.png     # Master transparent portrait source
│   ├── favicon.ico               # Standard browser favicon
│   ├── favicon.svg               # Crisp vector favicon
│   ├── manifest.json             # PWA web app manifest configuration
│   ├── robots.txt                # Search engine crawler permissions
│   ├── sitemap.xml               # XML sitemap with image and location tags
│   └── sw.js                     # Offline-capable service worker
├── src/
│   ├── app/
│   │   ├── core/                 # Shared data, models, and singleton services
│   │   │   ├── config/           # SEO configurations and section presets
│   │   │   ├── data/             # Centralized profile, experience & skills data
│   │   │   ├── models/           # TypeScript interfaces and domain types
│   │   │   └── services/         # SeoService, ThemeService
│   │   ├── features/             # Modular feature components (ts + html + scss)
│   │   │   ├── contact/          # Interactive contact form & Cal.com booking
│   │   │   ├── experience/       # Career timeline & client contributions
│   │   │   ├── footer/           # Global footer with social links & status
│   │   │   ├── header/           # Sticky glassmorphism navbar & theme toggle
│   │   │   ├── hero/             # Apple-style headline, badges & quick actions
│   │   │   ├── home/             # Main portfolio section container
│   │   │   ├── not-found/        # Dedicated 404 Page Not Found route
│   │   │   ├── projects/         # Featured enterprise & open-source projects
│   │   │   └── skills/           # Trigonometric honeycomb skill matrix
│   │   ├── app.component.*       # Root shell with router outlet & global events
│   │   ├── app.config.server.ts  # Server-specific application configuration
│   │   ├── app.config.ts         # Client application configuration & providers
│   │   └── app.routes.ts         # Central routing table with 404 fallback
│   ├── environments/             # Environment-specific configuration
│   │   ├── environment.ts        # Default development environment
│   │   ├── environment.development.ts # Explicit dev configuration
│   │   └── environment.prod.ts   # Production domain & settings
│   ├── index.html                # Master HTML template with SEO & build tags
│   ├── main.server.ts            # SSR bootstrap entry
│   ├── main.ts                   # Client browser bootstrap entry
│   ├── server.ts                 # Express SSR server with dynamic host mapping
│   └── styles.scss               # Global design tokens, animations, & overrides
├── angular.json                  # Angular CLI multi-target build definitions
├── package.json                  # Dependencies and standardized build scripts
├── tsconfig.json                 # TypeScript compiler configuration
└── vercel.json                   # Vercel deployment routes and caching headers
```

---

## Prerequisites

- **Node.js**: v18.19.0 or higher (v20.x or v22.x recommended)
- **npm**: v9.x or higher
- **Angular CLI**: v19.x (`npm install -g @angular/cli`)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/RajdipGhosh99/portfolio.git
cd modern-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm start
```
Navigate to `http://localhost:4200/` in your browser. The application automatically reloads on code changes.

---

## Build Scripts & Commands

All build scripts follow standard production and CI/CD conventions:

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `npm run build` | `ng build --configuration production` | Compiles optimized production bundles (client + SSR) |
| `npm run build:prod` | `ng build --configuration production` | Explicit production build target with tree-shaking |
| `npm run build:dev` | `ng build --configuration development` | Fast development build with source maps |
| `npm run build:ssr` | `ng build --configuration production` | Generates SSR server and browser distribution bundles |
| `npm run serve:ssr` | `node dist/modern-portfolio/server/server.mjs` | Starts the production Express SSR server |
| `npm run start:ssr` | `node dist/modern-portfolio/server/server.mjs` | Alias to start compiled SSR application |
| `npm run preview` | `npm run build && npm run serve:ssr` | One-step build and run local SSR preview |
| `npm run vercel-build` | `npm run build:prod` | Build hook invoked by Vercel deployment pipelines |
| `npm run watch` | `ng build --watch --configuration development` | Builds and watches files for changes |

---

## Server-Side Rendering (SSR) & Environment Architecture

The project utilizes dynamic environment substitution:
- In local development, `BASE_URL` resolves to `http://localhost:4000` (or `process.env.BASE_URL`).
- In production on Vercel, `BASE_URL` resolves to `https://rajdipghosh.vercel.app`.

To test the SSR server locally with dynamic host binding:

```bash
npm run build:prod
PORT=4000 BASE_URL=http://localhost:4000 npm run serve:ssr
```

Visit `http://localhost:4000` to inspect server-rendered HTML containing complete Schema.org metadata and pre-rendered content.

---

## Deploying to Vercel

The repository is configured for zero-configuration Vercel deployment:

1. Push your changes to GitHub or GitLab.
2. Import the project in the [Vercel Dashboard](https://vercel.com).
3. Vercel automatically detects the framework and applies settings from `vercel.json`:
   - **Build Command**: `npm run build` (or `npm run vercel-build`)
   - **Output Directory**: `dist/modern-portfolio/browser`
   - **Serverless Function**: `api/index.js` handles dynamic SSR routes.
4. Add environment variables if needed:
   - `BASE_URL`: `https://rajdipghosh.vercel.app` (or your custom domain).

---

## Design System & Styling Rules

- **Theme Palette**: Apple Space Black (`#000000`, `#161617`) and Ceramic Silver (`#f5f5f7`, `#ffffff`).
- **Typography**: Apple SF Pro typography stack with `-apple-system` fallback.
- **Component Standard**: Every component is strictly composed of three dedicated files: `[name].component.ts`, `[name].component.html`, and `[name].component.scss`. Inline styles and templates are prohibited.
- **Punctuation Standard**: Clean typography strictly using standard ASCII hyphens (`-`) for all ranges and separators.

---

## Author & Contact

**Rajdip Ghosh**  
Senior Software Engineer - Angular & Node.js Specialist  
- **Website**: [https://rajdipghosh.vercel.app](https://rajdipghosh.vercel.app)
- **LinkedIn**: [linkedin.com/in/rajdipghosh](https://www.linkedin.com/in/rajdipghosh)
- **GitHub**: [github.com/RajdipGhosh99](https://github.com/RajdipGhosh99)
- **Email**: raazdeepghosh@gmail.com
- **1-on-1 Call**: [cal.com/rajdipghosh/call](https://cal.com/rajdipghosh/call)

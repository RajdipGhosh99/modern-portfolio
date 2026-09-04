import { environment } from '../../../environments/environment';

export interface MetaTagDefinition {
  name?: string;
  property?: string;
  httpEquiv?: string;
  content: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  canonicalUrl?: string;
  robots?: string;
  themeColor?: string;
  
  // Open Graph / Social Sharing
  ogType?: 'website' | 'profile' | 'article';
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogUrl?: string;
  ogSiteName?: string;
  
  // Twitter Card
  twitterCard?: 'summary' | 'summary_large_image' | 'app';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterCreator?: string;
  twitterSite?: string;

  // Custom Meta Tags
  customTags?: MetaTagDefinition[];

  // JSON-LD Structured Data (Schema.org)
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export const DEFAULT_SEO_CONFIG: SeoConfig = {
  title: 'Rajdip Ghosh | Senior Software Engineer - Angular & Node.js Specialist',
  description: 'Senior Software Engineer with 5+ years of experience engineering high-concurrency web systems using Angular (v6-20), TypeScript, RxJS, NgRx, and Node.js. Consultant for Morgan Stanley and DS Smith.',
  keywords: 'Rajdip Ghosh, Senior Software Engineer, Senior Angular Developer, Angular Node.js Developer, Angular Specialist, AG Grid Architect, Nx Monorepo, Micro Frontend Architecture, Spec-Driven Development, Prompt Engineering, GitHub Copilot Claude Code, TypeScript, RxJS, NgRx, Node.js, Express, Morgan Stanley Consultant, DS Smith ParceLive, Angular 20 SSR, Full-Stack Developer Bengaluru India, Web Performance Optimization',
  author: 'Rajdip Ghosh',
  canonicalUrl: `${environment.BASE_URL}/`,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  themeColor: '#070b14',
  
  ogType: 'website',
  ogTitle: 'Rajdip Ghosh | Senior Software Engineer - Angular & Node.js Specialist',
  ogDescription: '5+ years engineering high-concurrency web systems, AG Grid financial ledgers, and resilient Node.js APIs across Morgan Stanley and DS Smith.',
  ogImage: `${environment.BASE_URL}/assets/img/og-preview.png`,
  ogImageAlt: 'Rajdip Ghosh - Senior Software Engineer',
  ogUrl: `${environment.BASE_URL}/`,
  ogSiteName: 'Rajdip Ghosh Portfolio',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Rajdip Ghosh | Senior Software Engineer - Angular & Node.js Specialist',
  twitterDescription: 'Senior Software Engineer with 5+ years engineering high-concurrency web systems, AG Grid financial ledgers, and resilient Node.js APIs across Morgan Stanley and DS Smith.',
  twitterImage: `${environment.BASE_URL}/assets/img/og-preview.png`,
  twitterCreator: '@raazdeepghosh',
  twitterSite: '@raazdeepghosh',

  customTags: [
    { name: 'application-name', content: 'Rajdip Ghosh Portfolio' },
    { name: 'apple-mobile-web-app-title', content: 'Rajdip Ghosh' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
  ],

  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rajdip Ghosh',
    jobTitle: 'Senior Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Accolite Digital',
      subOrganization: {
        '@type': 'Organization',
        name: 'Morgan Stanley'
      }
    },
    url: `${environment.BASE_URL}/`,
    sameAs: [
      'https://www.linkedin.com/in/rajdipghosh',
      'https://github.com/RajdipGhosh99',
      'https://twitter.com/raazdeepghosh'
    ],
    knowsAbout: [
      'Angular (v6-20)',
      'Angular Signals',
      'AG Grid Enterprise',
      'Nx Monorepo',
      'Micro Frontend Architecture (Module Federation)',
      'Spec-Driven Development',
      'Prompt Engineering',
      'GitHub Copilot & Claude Code',
      'TypeScript',
      'RxJS & NgRx State Management',
      'Node.js & Express RESTful APIs',
      'FinTech & Capital Ledger Systems',
      'Web Performance & Web Vitals Optimization',
      'WCAG 2.1 AA Accessibility',
      'Jasmine & Karma Testing'
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Maulana Abul Kalam Azad University of Technology (MAKAUT)'
    }
  }
};

export const SECTION_SEO_PRESETS: Record<string, Partial<SeoConfig>> = {
  hero: {
    title: 'Rajdip Ghosh | Senior Software Engineer & Angular Specialist',
    description: 'Senior Software Engineer with 5+ years building scalable, high-performance web systems using Angular, RxJS, and Node.js. Consultant for Morgan Stanley.',
    canonicalUrl: `${environment.BASE_URL}/#hero`,
    ogUrl: `${environment.BASE_URL}/#hero`
  },
  skills: {
    title: 'Technical Ecosystem - Angular (v6-20), Node.js & Reactive Streams | Rajdip Ghosh',
    description: 'Explore 30 battle-tested technologies: Angular (v6-20), Signals, AG Grid, Nx Monorepo, Micro Frontends, RxJS Pipelines, NgRx, Node.js, and AI workflows.',
    canonicalUrl: `${environment.BASE_URL}/#skills`,
    ogUrl: `${environment.BASE_URL}/#skills`
  },
  experience: {
    title: 'Enterprise Experience - Morgan Stanley & DS Smith | Rajdip Ghosh',
    description: '5 years of enterprise engineering across Morgan Stanley, DS Smith, and Xempla. Deep expertise in high-concurrency funding & logistics systems.',
    canonicalUrl: `${environment.BASE_URL}/#experience`,
    ogUrl: `${environment.BASE_URL}/#experience`
  },
  projects: {
    title: 'Featured Systems - FinTech & Full-Stack Platforms | Rajdip Ghosh',
    description: 'Showcase of enterprise client systems including Morgan Stanley Internal Funding Management, DS Smith ParceLive telemetry, and geospatial applications.',
    canonicalUrl: `${environment.BASE_URL}/#projects`,
    ogUrl: `${environment.BASE_URL}/#projects`
  },
  contact: {
    title: 'Connect & Book 1:1 Call | Rajdip Ghosh - Senior Software Engineer',
    description: 'Schedule a 1-on-1 intro discussion with Rajdip Ghosh regarding senior software engineering roles, enterprise architecture, or technical consulting.',
    canonicalUrl: `${environment.BASE_URL}/#contact`,
    ogUrl: `${environment.BASE_URL}/#contact`
  }
};

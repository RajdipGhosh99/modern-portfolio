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
  title: "Rajdip Ghosh | India's Best Angular & Full-Stack Developer - Affordable Low Rates",
  description: "Senior Full-Stack Engineer with 5+ years building scalable enterprise systems and real-time data platforms for Morgan Stanley and DS Smith. Specialized in Angular (v6–20), Angular Signals, TypeScript, RxJS, NgRx, Nx Monorepo, Micro Frontends, AG Grid, Node.js, Express, REST APIs, and Manifest V3 Chrome Extensions. Ranked among India's top software engineers, delivering world-class development at competitive, affordable rates.",
  keywords: "rajdip ghosh, rajdip ghosh software, rajdip ghosh bangalore, rajdip ghosh bengaluru, rajdip ghosh west, rajdip ghosh best, rajdip ghosh angular, rajdip ghosh west bengal, rajdip ghosh kolkata, rajdip ghosh developer, rajdip ghosh portfolio, rajdip ghosh frontend, rajdip ghosh fullstack, rajdip ghosh engineer, rajdip ghosh morgan stanley, rajdip ghosh resume, rajdip ghosh cv, rajdip ghosh contact, rajdip ghosh live train delay tracker, best developer in bangalore, best angular developer in bangalore, senior software engineer bangalore, hire angular developer in bangalore, freelance developer bangalore, hire remote developer from india, hire senior angular developer usa, hire offshore developer low rate, hire indian software engineer uk, hire full stack developer europe, hire remote engineer worldwide, affordable offshore software development, indias best developer, best developer in india, best software engineer india, best angular developer in india, top angular developer india, best full stack developer in india, best nodejs developer in india, low rate developer, affordable developer india, hire developer low rate, cheap developer high quality, low cost freelance developer, affordable angular developer, budget friendly software engineer, hire indian developer low rate, hire remote developer india, freelance developer india, Rajdip Ghosh, Senior Software Engineer, Senior Angular Developer, Angular Node.js Developer, AG Grid Architect, Nx Monorepo, Micro Frontend Architecture, Morgan Stanley Consultant, DS Smith ParceLive, Web Performance Optimization, Full-Stack Developer Bengaluru",
  author: 'Rajdip Ghosh',
  canonicalUrl: `${environment.BASE_URL}/`,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  themeColor: '#070b14',
  
  ogType: 'website',
  ogTitle: "Rajdip Ghosh | India's Best Angular & Full-Stack Developer - Affordable Low Rates",
  ogDescription: "Senior Full-Stack Engineer with 5+ years building scalable enterprise systems and real-time data platforms for Morgan Stanley and DS Smith. Specialized in Angular (v6–20), Angular Signals, TypeScript, RxJS, NgRx, Nx, Micro Frontends, AG Grid, Node.js, Express, REST APIs, and Chrome Extensions. Delivering world-class development at competitive, affordable rates.",
  ogImage: `${environment.BASE_URL}/assets/img/og-preview.png`,
  ogImageAlt: 'Rajdip Ghosh - Senior Software Engineer & Global Full-Stack Consultant',
  ogUrl: `${environment.BASE_URL}/`,
  ogSiteName: 'Rajdip Ghosh Portfolio',

  twitterCard: 'summary_large_image',
  twitterTitle: "Rajdip Ghosh | India's Best Angular & Full-Stack Developer - Affordable Low Rates",
  twitterDescription: "Senior Full-Stack Engineer with 5+ years building scalable enterprise systems and real-time data platforms for Morgan Stanley and DS Smith. Specialized in Angular (v6–20), Angular Signals, TypeScript, RxJS, NgRx, Nx, Micro Frontends, AG Grid, Node.js, Express, REST APIs, and Chrome Extensions. Delivering world-class development at competitive, affordable rates.",
  twitterImage: `${environment.BASE_URL}/assets/img/og-preview.png`,
  twitterCreator: '@raazdeepghosh',
  twitterSite: '@raazdeepghosh',

  customTags: [
    { name: 'application-name', content: 'Rajdip Ghosh Portfolio' },
    { name: 'apple-mobile-web-app-title', content: 'Rajdip Ghosh' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'audience', content: 'Global Recruiters, Technical Recruiters, Hiring Managers, CTOs, VPs of Engineering, Engineering Directors, Startup Founders, CEOs, Enterprise Clients, Product Managers, Outsourcing Agencies' },
    { name: 'target', content: 'Technical Recruiters, Talent Acquisition, CTOs, Engineering Managers, Tech Founders, Enterprise Clients' },
    { name: 'subject', content: 'Senior Software Engineering, Enterprise Angular Consulting, Full-Stack Architecture, Remote Engineering, Offshore Software Development' },
    { name: 'topic', content: 'Angular 20 Architecture, AG Grid Enterprise, Full-Stack Node.js, Micro Frontends, Cloud APIs, Performance Optimization, Low Rate Offshore Engineering' },
    { name: 'classification', content: 'Software Engineering, Full Stack Web Development, IT Consulting, Freelance Development, Remote Engineering, Offshore Software Development' },
    { name: 'category', content: 'Software Engineering & Web Development' },
    { name: 'coverage', content: 'Worldwide' },
    { name: 'distribution', content: 'Global' },
    { name: 'author', content: 'Rajdip Ghosh' },
    { name: 'designer', content: 'Rajdip Ghosh' },
    { name: 'owner', content: 'Rajdip Ghosh' },
    { name: 'copyright', content: 'Rajdip Ghosh' },
    { name: 'reply-to', content: 'raazdeepghosh@gmail.com' },
    { name: 'identifier-URL', content: `${environment.BASE_URL}/` },
    { name: 'url', content: `${environment.BASE_URL}/` }
  ],

  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rajdip Ghosh',
    jobTitle: 'Senior Software Engineer & Global Full-Stack Consultant',
    description: "Senior Full-Stack Engineer with 5+ years building scalable enterprise systems and real-time data platforms for Morgan Stanley and DS Smith. Specialized in Angular (v6–20), Angular Signals, TypeScript, RxJS, NgRx, Nx Monorepo, Micro Frontends, AG Grid, Node.js, Express, REST APIs, and Manifest V3 Chrome Extensions. Ranked among India's top software engineers, delivering world-class development at competitive, affordable rates.",
    audience: {
      '@type': 'Audience',
      audienceType: 'Global Recruiters, CTOs, Engineering Managers, Tech Founders, Startup CEOs, Enterprise Clients, Product Owners'
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Senior Software Engineer & Full-Stack Architect',
      skills: 'Angular, TypeScript, RxJS, NgRx, AG Grid Enterprise, Node.js, Express, Micro Frontends, High-Performance Web Architecture',
      occupationalCategory: '15-1252.00 - Software Developers'
    },
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
      'https://twitter.com/raazdeepghosh',
      'https://cal.com/rajdipghosh/call'
    ],
    knowsAbout: [
      'Software Engineering',
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
      'Affordable Web Development',
      'Enterprise Consulting at Low Rates',
      'Global Remote Engineering',
      'Bengaluru Tech Ecosystem',
      'West Bengal Tech Ecosystem',
      'WCAG 2.1 AA Accessibility',
      'Jasmine & Karma Testing'
    ],
    homeLocation: [
      {
        '@type': 'Place',
        name: 'Bengaluru, Karnataka, India'
      },
      {
        '@type': 'Place',
        name: 'Kolkata, West Bengal, India'
      }
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal, India'
    }
  }
};

export const SECTION_SEO_PRESETS: Record<string, Partial<SeoConfig>> = {
  hero: {
    title: "Rajdip Ghosh | Best Angular & Full-Stack Developer - West Bengal & Bengaluru",
    description: "Official website of Rajdip Ghosh: Senior Software Engineer & Angular Specialist. 5+ years experience building scalable enterprise systems for Morgan Stanley and DS Smith.",
    canonicalUrl: `${environment.BASE_URL}/#hero`,
    ogUrl: `${environment.BASE_URL}/#hero`,
    customTags: [
      { name: 'audience', content: 'Global Recruiters, CTOs, Tech Founders, Hiring Managers' },
      { name: 'subject', content: 'Senior Full-Stack & Angular Engineering Portfolio' }
    ]
  },
  skills: {
    title: "Rajdip Ghosh Software Skills - Angular (v6-20), Node.js & Enterprise Architecture",
    description: "Explore technical competencies of Rajdip Ghosh: Angular Signals, AG Grid, Nx Monorepo, Micro Frontends, RxJS, and Node.js.",
    canonicalUrl: `${environment.BASE_URL}/#skills`,
    ogUrl: `${environment.BASE_URL}/#skills`,
    customTags: [
      { name: 'audience', content: 'Technical Interviewers, CTOs, Engineering Leads, Tech Recruiters' },
      { name: 'subject', content: 'Angular 20, TypeScript, AG Grid, Node.js Competencies' }
    ]
  },
  experience: {
    title: "Rajdip Ghosh Enterprise Experience - Morgan Stanley & DS Smith",
    description: "5+ years of enterprise software engineering by Rajdip Ghosh across Morgan Stanley, DS Smith, and Xempla.",
    canonicalUrl: `${environment.BASE_URL}/#experience`,
    ogUrl: `${environment.BASE_URL}/#experience`,
    customTags: [
      { name: 'audience', content: 'Engineering Directors, VP of Engineering, Talent Acquisition, Enterprise Clients' },
      { name: 'subject', content: 'Morgan Stanley, DS Smith, Enterprise Architecture Track Record' }
    ]
  },
  projects: {
    title: "Rajdip Ghosh Projects - Live Train Delay Tracker, PPM & Web Applications",
    description: "Featured software applications engineered by Rajdip Ghosh: Manifest V3 Live Train Delay Tracker, Morgan Stanley PPM, and ParceLive IoT dashboard.",
    canonicalUrl: `${environment.BASE_URL}/#projects`,
    ogUrl: `${environment.BASE_URL}/#projects`,
    customTags: [
      { name: 'audience', content: 'Product Managers, Startup Founders, CTOs, Freelance Clients' },
      { name: 'subject', content: 'Production Software Portfolio & Chrome Extension' }
    ]
  },
  contact: {
    title: "Contact Rajdip Ghosh - Hire Best Software Engineer at Low Rates",
    description: "Schedule a 1:1 consultation or hire Rajdip Ghosh for senior software engineering and architecture consulting at competitive low rates.",
    canonicalUrl: `${environment.BASE_URL}/#contact`,
    ogUrl: `${environment.BASE_URL}/#contact`,
    customTags: [
      { name: 'audience', content: 'Hiring Managers, Founders, Enterprise Clients seeking Low-Rate Top Talent' },
      { name: 'subject', content: 'Hire Senior Software Engineer at Affordable Rates' }
    ]
  }
};

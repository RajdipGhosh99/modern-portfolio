import { Profile, Experience, SkillCategory, SkillItem, Project, Education } from '../models/portfolio.models';
import { environment } from '../../../environments/environment';

export const PORTFOLIO_PROFILE: Profile = {
  name: 'Rajdip',
  fullName: 'Rajdip Ghosh',
  title: 'Senior Software Engineer | Angular & Full-Stack Node.js Specialist',
  roles: [
    'Senior Software Engineer',
    'Angular & Node.js Specialist',
    'Enterprise UI & AG Grid Architect',
    'Micro Frontends & Nx Monorepos',
    'AI-Assisted & Spec-Driven Developer'
  ],
  bio: 'Senior Software Engineer with 5 years of experience building scalable, high-performance web systems and resilient APIs using Angular (v6-20), Node.js, Express, and TypeScript. Strong expertise in component architecture, AG Grid financial tables, Nx monorepos, and reactive RxJS/NgRx state management. Proven ability to optimize performance, accelerate velocity with AI workflows (GitHub Copilot / Claude Code), and deliver mission-critical platforms within Agile teams.',
  detailedBio: [
    'Senior Software Engineer with 5 years of experience engineering high-concurrency enterprise web applications and resilient backend services using Angular (v6-20), Node.js, Express, and TypeScript.',
    'Deep expertise in enterprise UI architecture: Angular Signals, standalone component APIs, RxJS declarative streaming, NgRx state management, AG Grid financial tables, and Nx monorepo workspaces.',
    'Consultant for Morgan Stanley at Accolite, engineering high-concurrency financial funding management systems (PPM) adhering to tier-1 enterprise latency, WCAG 2.1 AA accessibility, and bank-grade security protocols.',
    'Spearheading modern development workflows including Spec-Driven Development (OpenAPI contracts), Prompt Engineering, and AI-assisted pair programming with GitHub Copilot and Claude Code to accelerate velocity without regressions.',
    'Demonstrated track record of cutting initial application load time by 70% at Xempla through intelligent routing, module lazy loading, and fine-grained change detection optimization.'
  ],
  yearsExperience: '5+',
  projectsCompleted: '14+',
  companiesCount: '4',
  location: 'Bengaluru, India / Kolkata, India',
  email: 'raazdeepghosh@gmail.com',
  phone: '+91-9933159842',
  linkedin: 'https://www.linkedin.com/in/rajdipghosh',
  github: 'https://github.com/RajdipGhosh99',
  twitter: 'https://twitter.com/raazdeepghosh',
  calLink: 'rajdipghosh/call',
  resumeDriveUrl: 'https://drive.google.com/file/d/1uoW25tZkKXVFz6WTiE_7IC-qhiR3QDJU/view?usp=sharing',
  avatarUrl: '/assets/img/rajdip-avatar.avif',
  blobAvatarUrl: '/assets/img/rajdip-avatar.avif',
  status: 'Open to New Opportunities'
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  { id: 'frontend', title: 'Core Angular & Enterprise Frontend', description: 'Modern standalone components, Signals, TypeScript, & AG Grid tables' },
  { id: 'reactive', title: 'State & Reactive Architecture', description: 'Declarative streams, unidirectional data flow, and async pipelines' },
  { id: 'backend', title: 'Backend & Cloud APIs', description: 'Scalable RESTful microservices, authentication systems, and databases' },
  { id: 'tools', title: 'AI Engineering, Tooling & Architecture', description: 'Spec-driven development, GitHub Copilot, Nx monorepo, and CI/CD testing' }
];

export const SKILL_ITEMS: SkillItem[] = [
  // Row 1: Core Angular & Enterprise Frontend Architecture (10 items)
  { name: 'Angular (v6-20)', categoryId: 'frontend', icon: '/assets/img/skills/angular.svg', level: 'Expert', featured: true },
  { name: 'TypeScript', categoryId: 'frontend', icon: '/assets/img/skills/typescript.svg', level: 'Expert', featured: true },
  { name: 'Angular Signals', categoryId: 'frontend', icon: '/assets/img/skills/angular.svg', level: 'Expert', featured: true },
  { name: 'AG Grid', categoryId: 'frontend', icon: '/assets/img/skills/ag-grid.svg', level: 'Expert', featured: true },
  { name: 'Micro Frontend Architecture', categoryId: 'frontend', icon: '/assets/img/skills/angular.svg', level: 'Advanced', featured: true },
  { name: 'Nx Monorepo', categoryId: 'frontend', icon: '/assets/img/skills/nx.svg', level: 'Advanced', featured: true },
  { name: 'HTML5 & Semantic Web', categoryId: 'frontend', icon: '/assets/img/skills/html.svg', level: 'Expert', featured: true },
  { name: 'CSS3 & SCSS/SASS', categoryId: 'frontend', icon: '/assets/img/skills/sass.svg', level: 'Expert', featured: true },
  { name: 'Tailwind CSS', categoryId: 'frontend', icon: '/assets/img/skills/css.svg', level: 'Advanced', featured: true },
  { name: 'JavaScript (ES6+)', categoryId: 'frontend', icon: '/assets/img/skills/javascript.svg', level: 'Expert', featured: true },

  // Row 2: Reactive State & Full-Stack Node.js (10 items)
  { name: 'RxJS Streams', categoryId: 'reactive', icon: '/assets/img/skills/rxjs.svg', level: 'Expert', featured: true },
  { name: 'NgRx Store & Effects', categoryId: 'reactive', icon: '/assets/img/skills/redux.svg', level: 'Advanced', featured: true },
  { name: 'Node.js', categoryId: 'backend', icon: '/assets/img/skills/nodejs.svg', level: 'Advanced', featured: true },
  { name: 'Express.js', categoryId: 'backend', icon: '/assets/img/skills/express.svg', level: 'Advanced', featured: true },
  { name: 'RESTful API Design', categoryId: 'backend', icon: '/assets/img/skills/nodejs.svg', level: 'Expert', featured: true },
  { name: 'State Management', categoryId: 'reactive', icon: '/assets/img/skills/redux.svg', level: 'Expert', featured: true },
  { name: 'MongoDB', categoryId: 'backend', icon: '/assets/img/skills/mongodb.svg', level: 'Advanced', featured: true },
  { name: 'FastAPI / Python', categoryId: 'backend', icon: '/assets/img/skills/fastapi.svg', level: 'Proficient' },
  { name: 'Firebase', categoryId: 'backend', icon: '/assets/img/skills/firebase.svg', level: 'Proficient' },
  { name: 'WebSockets & Real-Time', categoryId: 'backend', icon: '/assets/img/skills/websocket.svg', level: 'Advanced', featured: true },

  // Row 3: AI Engineering, Quality & Architecture (10 items)
  { name: 'GitHub Copilot / Claude Code', categoryId: 'tools', icon: '/assets/img/skills/copilot.svg', level: 'Expert', featured: true },
  { name: 'Prompt Engineering', categoryId: 'tools', icon: '/assets/img/skills/prompt.svg', level: 'Expert', featured: true },
  { name: 'Spec-Driven Development', categoryId: 'tools', icon: '/assets/img/skills/spec.svg', level: 'Expert', featured: true },
  { name: 'Jasmine & Karma Testing', categoryId: 'tools', icon: '/assets/img/skills/angular.svg', level: 'Advanced', featured: true },
  { name: 'Web Performance & SSR', categoryId: 'tools', icon: '/assets/img/skills/angular.svg', level: 'Expert', featured: true },
  { name: 'Git & GitHub CI/CD', categoryId: 'tools', icon: '/assets/img/skills/typescript.svg', level: 'Expert', featured: true },
  { name: 'Postman & API QA', categoryId: 'tools', icon: '/assets/img/skills/javascript.svg', level: 'Advanced' },
  { name: 'Jira & Agile (Scrum)', categoryId: 'tools', icon: '/assets/img/skills/figma.svg', level: 'Expert', featured: true },
  { name: 'OOP & Clean Architecture', categoryId: 'tools', icon: '/assets/img/skills/typescript.svg', level: 'Expert', featured: true },
  { name: 'WCAG 2.1 Accessibility', categoryId: 'tools', icon: '/assets/img/skills/html.svg', level: 'Expert', featured: true }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'accolite',
    role: 'Senior Software Engineer',
    company: 'Accolite',
    companyUrl: 'https://www.accolitedigital.com/',
    client: 'Morgan Stanley',
    clientBadge: 'Fortune 500 Financial Leader',
    location: 'Bengaluru, India',
    period: 'Jan 2025 - Present',
    isCurrent: true,
    achievements: [
      'Architected internal Project & Portfolio Management (PPM) financial modules using Angular (v6-20), Nx Monorepo, and Micro Frontend Architecture.',
      'Implemented high-density AG Grid financial ledger components with virtualized scrolling, custom cell renderers, and real-time capital allocation updates.',
      'Accelerated sprint delivery and test coverage by 35% through Spec-Driven Development, Prompt Engineering, and GitHub Copilot / Claude Code workflows.',
      'Optimized runtime performance and bundle sizes using lazy loading, tree-shaking, and fine-grained OnPush change detection.',
      'Integrated frontends with enterprise Node.js and Java microservices via strictly typed contract interfaces and RESTful APIs.',
      'Enforced enterprise-grade code quality and zero regressions using Jasmine and Karma automated test suites.'
    ],
    technologies: ['Angular (v6-20)', 'AG Grid', 'Nx Monorepo', 'Micro Frontend Architecture', 'TypeScript', 'Node.js', 'Express.js', 'RxJS', 'Spec-Driven Development', 'GitHub Copilot / Claude Code', 'Jasmine', 'Karma']
  },
  {
    id: 'neosoft',
    role: 'Software Engineer',
    company: 'NeoSOFT Technologies',
    companyUrl: 'https://www.neosofttech.com/',
    client: 'DS Smith',
    clientBadge: 'Enterprise SaaS & IoT Logistics',
    location: 'Bengaluru, India',
    period: 'Feb 2024 - Jan 2025',
    achievements: [
      'Engineered core modules of the ParceLive enterprise supply-chain telemetry and tracking dashboard.',
      'Developed real-time sensor visualization pipelines using Angular 17, RxJS, and WebSockets for monitoring temperature, humidity, GPS, and shock.',
      'Standardized reusable UI component libraries and centralized validation schemas across multi-tenant applications.',
      'Collaborated with Node.js and Python backend services to ensure zero-lag telemetry ingestion and real-time alert dispatching.'
    ],
    technologies: ['Angular 17', 'TypeScript', 'SCSS', 'Tailwind CSS', 'Node.js', 'Express.js', 'Python', 'RxJS', 'WebSockets', 'REST APIs']
  },
  {
    id: 'xempla',
    role: 'Software Development Engineer',
    company: 'Xempla',
    companyUrl: 'https://www.xempla.io/',
    clientBadge: 'Enterprise Asset Management B2B SaaS',
    location: 'Kolkata, India',
    period: 'May 2022 - Jan 2024',
    achievements: [
      'Developed condition-monitoring asset dashboards and operational modules for Xemplas flagship B2B SaaS ERP platform (Xempla Core).',
      'Engineered reactive data pipelines using RxJS to optimize high-throughput API communication.',
      'Slashed initial application load time by 70% through routing and query optimization, module lazy loading, and OnPush change detection.',
      'Contributed to backend RESTful API endpoints in Node.js and Express with MongoDB data persistence.',
      'Maintained high UI quality via structured Jasmine testing, code reviews, and rapid defect resolution.'
    ],
    technologies: ['Angular 16', 'TypeScript', 'RxJS', 'Node.js', 'Express.js', 'Bootstrap', 'Python', 'MongoDB']
  },
  {
    id: 'inceptial',
    role: 'Associate Engineer',
    company: 'Inceptial Tech',
    companyUrl: 'https://www.inceptialtech.com/',
    client: 'Xempla',
    clientBadge: 'Product Engineering Squad',
    location: 'Kolkata, India',
    period: 'Nov 2021 - Apr 2022',
    achievements: [
      'Assisted in developing a new Angular frontend platform using modern HTML5, CSS3, and TypeScript.',
      'Translated complex business requirements into structured Agile development tasks and sprint stories.',
      'Worked with senior engineers to implement scalable, maintainable UI components and REST integrations.'
    ],
    technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Git', 'Agile (Scrum)']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'ppm-morgan-stanley',
    title: 'PPM - Morgan Stanley',
    subtitle: 'Internal Capital & Funding Management System',
    category: 'enterprise',
    description: 'Developed an internal funding management system for portfolio and capital allocation at Morgan Stanley, featuring AG Grid multi-tiered financial ledger tables, budget forecasting, and enterprise audit pipelines.',
    impact: 'Ensured compliance with enterprise UI performance, WCAG 2.1 AA accessibility standards, and sub-second updates for high-throughput capital allocations.',
    technologies: ['Angular', 'AG Grid', 'Nx Monorepo', 'Node.js', 'Express', 'TypeScript', 'SCSS', 'RxJS', 'Micro Frontends'],
    imageUrl: '/assets/img/portfolio/meter.avif',
    isFeatured: true
  },
  {
    id: 'parcelive-ds-smith',
    title: 'ParceLive - DS Smith',
    subtitle: 'Real-Time Logistics & Telemetry Dashboard',
    category: 'enterprise',
    description: 'Built real-time dashboards for shipment monitoring and global logistics analytics. Designed real-time sensor streams and automated telemetry alerts for temperature, humidity, GPS location, and shock detection.',
    impact: 'Engineered responsive telemetry alerts with zero lag, providing end-to-end supply-chain visibility across multi-country routes.',
    technologies: ['Angular 17', 'Node.js', 'Express', 'Tailwind CSS', 'Python', 'WebSockets', 'RxJS'],
    imageUrl: '/assets/img/portfolio/radial-bar.avif',
    isFeatured: true
  },
  {
    id: 'xempla-core',
    title: 'Xempla Core - Xempla',
    subtitle: 'Enterprise Asset Management B2B SaaS',
    category: 'enterprise',
    description: 'Developed ERP features including condition-monitoring asset dashboards, role-based access control (RBAC), and workflow automation. Built dynamic forms capable of processing complex nested datasets efficiently.',
    impact: 'Slashed initial application load time by 70% with intelligent module lazy loading and optimized reactive caching.',
    technologies: ['Angular 16', 'Node.js', 'Express', 'Bootstrap', 'Python', 'RxJS', 'MongoDB'],
    imageUrl: '/assets/img/portfolio/linear-bar.avif',
    isFeatured: true
  },
  {
    id: 'gmap-clone',
    title: 'Google Maps Clone',
    subtitle: 'Interactive Geospatial Map Platform',
    category: 'frontend',
    description: 'A lightweight Google Maps clone using Angular, TypeScript, and Mapbox GL with panning, zooming, marker placement, polygon drawing, and geolocation, offering a responsive UI and smooth map interactions.',
    impact: 'Smooth 60 FPS vector map rendering with responsive spatial control panels.',
    technologies: ['Angular', 'TypeScript', 'Mapbox GL', 'SCSS', 'Geolocation API'],
    imageUrl: '/assets/img/portfolio/gmap-clone.avif',
    demoUrl: 'https://google-maps-clone-chi.vercel.app',
    githubUrl: 'https://github.com/RajdipGhosh99/google-maps-clone',
    isFeatured: true
  },
  {
    id: 'finstagran',
    title: 'Finstagran',
    subtitle: 'Social Photo Feed Web Application',
    category: 'fullstack',
    description: 'A modern social media photo feed web app built with Angular, Firebase, and SCSS featuring user authentication, photo uploads, likes, and responsive design.',
    impact: 'Full user lifecycle with real-time Firebase Auth and Firestore syncing.',
    technologies: ['Angular', 'TypeScript', 'Firebase', 'SCSS', 'RxJS'],
    imageUrl: '/assets/img/portfolio/instaclone.avif',
    demoUrl: 'https://finstagran.web.app/',
    githubUrl: 'https://github.com/RajdipGhosh99/finstagran',
    isFeatured: false
  },
  {
    id: 'portfolio-v1',
    title: 'Personal Portfolio v1',
    subtitle: 'Initial Developer Portfolio',
    category: 'frontend',
    description: 'The first iteration of my personal portfolio website, built with Angular and SCSS featuring smooth scrolling, interactive project showcases, and contact integration.',
    impact: 'Responsive multi-section layout that served as the foundation for modern web projects.',
    technologies: ['Angular', 'TypeScript', 'HTML5', 'SCSS', 'Bootstrap'],
    imageUrl: '/assets/img/portfolio/studentcdc.avif',
    demoUrl: environment.BASE_URL,
    githubUrl: 'https://github.com/RajdipGhosh99/portfolio',
    isFeatured: false
  },
  {
    id: 'smart-dashboard',
    title: 'Analytics & Telemetry Dashboard',
    subtitle: 'High-Density Enterprise Data Views',
    category: 'frontend',
    description: 'Enterprise data analytics dashboard component library featuring custom charting, live sensor telemetry, and responsive control widgets designed for high-concurrency systems.',
    impact: 'Sub-second rendering performance for high-density tabular and graph displays.',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Chart.js'],
    imageUrl: '/assets/img/portfolio/stopwatch.avif',
    isFeatured: false
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: 'makaut',
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Maulana Abul Kalam Azad University of Technology (MAKAUT)',
    period: 'Jul 2017 - Jul 2021',
    grade: 'First Class Degree',
    highlights: [
      'Graduated with First Class in Computer Science and Engineering.',
      'Coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, and Software Engineering.',
      'Active participant in coding hackathons and technical symposiums.'
    ]
  },
  {
    id: 'school',
    degree: 'Higher Secondary Education (Science)',
    institution: 'B.M.O. High School',
    period: '2016 - 2017',
    highlights: [
      'Majored in Physics, Chemistry, and Mathematics.',
      'Developed strong foundational skills in analytical problem-solving and algorithmic thinking.'
    ]
  }
];

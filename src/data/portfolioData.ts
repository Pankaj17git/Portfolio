export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  stack: string[];
  featured?: boolean;
  problem: string;
  myContribution: string[];
  engineeringFocus: string;
  whatILearned: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  metricsOrState?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; note?: string; highlight?: boolean }[];
}

export interface CaseStudy {
  title: string;
  project: string;
  problem: string;
  challenge: string;
  approach: string[];
  tradeoffs: string;
  outcome: string;
  keyLearning: string;
}

export const portfolioData = {
  personal: {
    name: "Pankaj Choudhary",
    role: "Full-Stack Software Developer",
    subtitle: "MERN Stack · Next.js · Angular · Prisma & MySQL",
    experienceYears: "1 Year Professional Experience",
    location: "Una, Himachal Pradesh, India",
    email: "pc620042@gmail.com",
    phone: "+91 88940 57738",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resumeFilename: "Pankaj_Choudhary_Resume.pdf",
    shortBio:
      "I am an early-career full-stack developer with 1 year of professional experience building and maintaining production web applications. I focus on clean interface engineering, dependable RESTful APIs, and relational data modeling with modern frameworks like Next.js, Angular, Node.js, and Prisma + MySQL.",
    heroStatement:
      "Building practical software, from responsive interface to relational database.",
    heroDescription:
      "I have spent the past year shipping features on live products—implementing secure JWT authentication, modular React & Angular dashboards, REST API integrations, and robust database layers with Prisma and MySQL.",
  },

  skills: [
    {
      category: "Frontend Development",
      description: "Building responsive, accessible, component-driven user interfaces",
      skills: [
        { name: "React.js", highlight: true, note: "Hooks, Context API, modular patterns" },
        { name: "Next.js", highlight: true, note: "App Router, Server Components, SSR" },
        { name: "Angular", highlight: true, note: "TypeScript, Components, RxJS basics" },
        { name: "JavaScript (ES6+)", highlight: true, note: "Async/await, closures, modern syntax" },
        { name: "TypeScript", highlight: true, note: "Interfaces, strict typing, generics" },
        { name: "HTML5 & Modern CSS", note: "Flexbox, Grid, Responsive media queries" },
        { name: "State Management", note: "Context API, React Hooks, Local State" },
        { name: "Bootstrap & Material UI", note: "Design system component libraries" },
      ],
    },
    {
      category: "Backend & APIs",
      description: "Developing maintainable server-side logic and structured HTTP endpoints",
      skills: [
        { name: "Node.js", highlight: true, note: "Event-driven runtime, modular services" },
        { name: "Express.js", highlight: true, note: "RESTful routing, middleware, controllers" },
        { name: "REST APIs", highlight: true, note: "CRUD patterns, status codes, query filtering" },
        { name: "JWT & Bcrypt", highlight: true, note: "Authentication flows & password hashing" },
        { name: "Axios", note: "Interceptors, request pipelines, error handling" },
        { name: "Multer", note: "Multipart form data & file uploads" },
      ],
    },
    {
      category: "Databases & ORM",
      description: "Structuring schemas, writing queries, and ensuring data integrity",
      skills: [
        { name: "Prisma ORM", highlight: true, note: "Schema definitions, migrations, relational queries" },
        { name: "MySQL", highlight: true, note: "Relational modeling, indexing, foreign keys" },
        { name: "SQL", highlight: true, note: "Joins, aggregations, data constraints" },
        { name: "MongoDB", highlight: true, note: "Document modeling with Mongoose schemas" },
        { name: "JSON Server", note: "Rapid prototyping & mock REST endpoints" },
      ],
    },
    {
      category: "Workflow & Tools",
      description: "Version control, testing tools, and developer environments",
      skills: [
        { name: "Git & GitHub", highlight: true, note: "Branching, PRs, code reviews" },
        { name: "Postman", highlight: true, note: "API testing, payload verification" },
        { name: "VS Code", note: "Primary IDE with debugging setups" },
        { name: "Vite & Babel", note: "Modern frontend build tooling" },
        { name: "Chrome DevTools", note: "Network inspection, performance & console profiling" },
        { name: "Prettier & Linting", note: "Code formatting and standard compliance" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "workhub",
      title: "WorkHub",
      category: "Full-Stack Marketplace Platform",
      tagline: "Local services marketplace connecting customers with vetted professionals",
      featured: true,
      description:
        "A multi-sided service platform that enables clients to post service needs, receive worker applications, review bids, and book vetted professionals with real-time status tracking.",
      stack: ["Next.js", "TypeScript", "Node.js", "Express", "Prisma", "MySQL", "JWT"],
      problem:
        "Local trade service discovery frequently suffers from opaque pricing, unverified contractor availability, and disjointed phone/messaging communication.",
      myContribution: [
        "Architected multi-step job creation and direct hiring workflow with dynamic form validation.",
        "Engineered relational database schemas with Prisma ORM and MySQL, linking jobs, bids, and user profiles.",
        "Implemented role-based authorization ensuring customers and workers access appropriate dashboard views.",
        "Integrated Axios client with centralized error interception for seamless network state feedback.",
      ],
      engineeringFocus:
        "Designed the job lifecycle state transition logic (Draft → Open → Bid Accepted → In-Progress → Completed) using transactional updates in Prisma to guarantee zero race conditions on worker assignments.",
      whatILearned:
        "Relational schema indexing in MySQL, managing multi-tier form state without unnecessary re-renders, and defining strict TypeScript contract interfaces shared between frontend and API.",
      image: "/projects/workhub.svg",
      metricsOrState: "Production architecture · 5+ job lifecycle stages",
      demoUrl: "#",
      githubUrl: "https://github.com",
    },
    {
      id: "dhiyafah",
      title: "Dhiyafah",
      category: "Enterprise Hospitality & Workplace Services",
      tagline: "Corporate concierge request dispatching and employee service management",
      featured: false,
      description:
        "An internal workplace services platform facilitating employee amenity bookings, concierge service tickets, and facilities dispatching across corporate buildings.",
      stack: ["Angular", "TypeScript", "Node.js", "Express", "SQL", "REST API"],
      problem:
        "High-density corporate facilities experienced delayed turnaround on internal amenity and maintenance requests due to manual email logging.",
      myContribution: [
        "Developed responsive Angular UI components and interactive ticket tracking lists.",
        "Implemented reactive forms with synchronous and asynchronous validation rules.",
        "Created backend REST endpoints for ticket status updates, notes append, and staff assignment.",
        "Optimized client-side list rendering using Angular trackBy to handle high-frequency status updates.",
      ],
      engineeringFocus:
        "Streamlined ticket state management with RxJS observables to decouple UI components from direct HTTP calls, maintaining smooth table interactions during bulk updates.",
      whatILearned:
        "Deepened understanding of Angular's component lifecycle, reactive programming with RxJS, and strict typing conventions across complex service objects.",
      image: "/projects/dhiyafah.svg",
      metricsOrState: "Live internal workflows · Reactive state streams",
      demoUrl: "#",
      githubUrl: "https://github.com",
    },
    {
      id: "eatsbee",
      title: "EatsBee",
      category: "Restaurant Onboarding & Digital Menu System",
      tagline: "Merchant onboarding portal with dynamic multi-tier menu configuration",
      featured: false,
      description:
        "A merchant-facing onboarding portal allowing restaurant operators to digitize menus, manage food categories, configure price variants, and specify operating hours.",
      stack: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "Multer"],
      problem:
        "Restaurant owners found existing menu upload portals confusing due to complex option groups, sizes, and dietary tags.",
      myContribution: [
        "Built an interactive drag-and-drop style menu builder supporting customizable variants and addons.",
        "Implemented multipart image upload processing using Multer with client-side file dimension validation.",
        "Engineered RESTful endpoints for batch menu item creation, updates, and availability toggles.",
      ],
      engineeringFocus:
        "Constructed a resilient nested state store for food categories, items, and addon modifiers that performs optimistic UI updates with automatic rollback upon API failure.",
      whatILearned:
        "Handling deeply nested object structures without mutation, optimizing image delivery, and structuring predictable CRUD endpoints.",
      image: "/projects/eatsbee.svg",
      metricsOrState: "Modular menu hierarchy · Multer asset handling",
      demoUrl: "#",
      githubUrl: "https://github.com",
    },
    {
      id: "budgetbuddy",
      title: "BudgetBuddy",
      category: "Financial Expense Tracking & Analytics",
      tagline: "Interactive daily expense tracker with transaction analytics and budget alerts",
      featured: false,
      description:
        "A clean personal finance web app designed to record income and expenses, monitor spending distributions, and manage recurring beneficiary payments.",
      stack: ["React.js", "Material UI", "Material UI Charts", "Axios", "JSON Server"],
      problem:
        "Users needed a simple, friction-free way to log daily expenses and immediately visualize where their monthly income was being allocated.",
      myContribution: [
        "Designed and implemented clean, responsive financial dashboards with summary cards.",
        "Integrated interactive Material UI charts for instant visual categorization of expenses.",
        "Implemented CRUD operations for transactions and beneficiary listings with custom validation.",
        "Structured modular React components utilizing custom hooks for reusable API fetching logic.",
      ],
      engineeringFocus:
        "Built responsive client-side aggregation algorithms to calculate running balances, category totals, and budget variances without noticeable latency.",
      whatILearned:
        "Effective dashboard information hierarchy, custom React hook design, and asynchronous data caching patterns.",
      image: "/projects/budgetbuddy.svg",
      metricsOrState: "Full CRUD workflows · Real-time visual summaries",
      demoUrl: "#",
      githubUrl: "https://github.com",
    },
  ] as Project[],

  experience: [
    {
      company: "Kaspro Solutions Pvt. Ltd.",
      role: "Software Developer (MERN Stack)",
      period: "May 2025 – Present (1 Year)",
      location: "India",
      type: "Full-Time",
      description:
        "Contributing as a core full-stack developer on live client and product projects. Developing reusable user interfaces, robust backend REST APIs, and database migrations across modern JavaScript/TypeScript tech stacks.",
      highlights: [
        "Engineered secure authentication flows utilizing JSON Web Tokens (JWT) and React Context API for protected role-based routing.",
        "Designed modular, reusable frontend components and responsive dashboards with React, Next.js, and Angular.",
        "Built and maintained RESTful API endpoints with Express and Node.js, integrating Axios client pipelines with interceptors for error logging.",
        "Modeled and queried relational data using Prisma ORM with MySQL as well as document databases using MongoDB and Mongoose.",
        "Refactored legacy codebases to improve component render efficiency, readability, and maintainability.",
        "Participated actively in Git-based collaborative workflows, PR peer reviews, debugging live environment issues, and product sprint discussions.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Angular",
        "Node.js",
        "Express.js",
        "Prisma",
        "MySQL",
        "MongoDB",
        "TypeScript",
        "REST APIs",
        "Git",
      ],
    },
  ] as Experience[],

  caseStudy: {
    title: "Transactional Integrity in Multi-Sided Service Booking",
    project: "WorkHub Local Services Marketplace",
    problem:
      "When a client accepts a professional's bid on WorkHub, multiple interrelated records must update instantaneously: the selected bid status switches to 'Accepted', all competing bids transition to 'Closed', the job status moves to 'In-Progress', and a scheduled calendar booking record is created. If any of these operations fail halfway through, the database enters an inconsistent state.",
    challenge:
      "Preventing race conditions where two simultaneous accept actions could assign competing workers to the same job, while providing immediate, non-blocking feedback to the user on the frontend.",
    approach: [
      "Designed a strict Prisma transaction block (`prisma.$transaction`) that atomically executes the status updates and booking creation within a single database transaction.",
      "Implemented optimistic UI updates on the Next.js frontend with immediate status badges, backed by error recovery that cleanly rolls back UI state if the backend rejects the transaction.",
      "Introduced database-level composite unique constraints and status check constraints in MySQL to prevent duplicate active bookings at the persistence tier.",
      "Established standard API response envelopes with explicit error codes so the client displays contextual resolution steps rather than generic alert popups.",
    ],
    tradeoffs:
      "Opted for database-level atomic transactions over event-driven eventual consistency because WorkHub's booking volume prioritized strict ACID consistency over high-throughput eventual synchronization.",
    outcome:
      "Eliminated orphaned booking records, guaranteed zero double-bookings during concurrent bid acceptances, and achieved a sub-180ms round-trip API latency for the entire transaction.",
    keyLearning:
      "True full-stack reliability requires matching frontend optimistic expectations with ironclad backend persistence guarantees. Schema constraints are the ultimate line of defense.",
  } as CaseStudy,

  education: [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "SVSD PG College, Bhatoli, Una, Himachal Pradesh",
      period: "2022 – 2025",
      score: "CGPA: 7.8 / 10",
      description:
        "Core coursework in Data Structures, Database Management Systems (RDBMS & SQL), Object-Oriented Programming, Computer Networks, and Web Application Development.",
    },
    {
      degree: "Higher Secondary Education (Class XII)",
      institution: "Govt. Senior Secondary School, Lalhri, Himachal Pradesh",
      period: "2022",
      score: "HPBOSE: 79%",
      description: "Focus on Mathematics, Science, and Information Technology foundations.",
    },
  ],

  engineeringApproach: [
    {
      title: "Pragmatic Architecture",
      description:
        "I avoid premature over-engineering. I choose clean, understandable component hierarchies and explicit RESTful API contracts that can be easily extended and maintained by any team member.",
    },
    {
      title: "Data Integrity First",
      description:
        "Whether using Prisma with MySQL or Mongoose with MongoDB, I model relationships intentionally, validate payloads at the boundaries, and use transactions when data consistency is non-negotiable.",
    },
    {
      title: "Reliable User Feedback",
      description:
        "Applications should never leave users wondering what happened. I build explicit loading, empty, and error states into every interactive surface.",
    },
    {
      title: "Continuous Learning",
      description:
        "In my first professional year, I pushed beyond basic React into Next.js App Router, Angular reactive patterns, and typed database management with Prisma and SQL. I learn fastest by building real software.",
    },
  ],
};

const skills = [
  {
    category: "Frontend",
    items: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Swagger / OpenAPI"],
  },
  {
    category: "State Management & Architecture",
    items: [
      "Redux",
      "Zustand",
      "Context API",
      "Scalable Component Design",
      "API Integration",
    ],
  },
  {
    category: "Performance Optimization",
    items: [
      "Code Splitting",
      "Lazy Loading",
      "Memoization",
      "Virtualization",
      "Debouncing & Throttling",
    ],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Responsive Design", "React JSS"],
  },
  {
    category: "Testing & Analytics",
    items: ["Jest", "React Testing Library", "Mixpanel"],
  },
  {
    category: "Engineering Practices",
    items: [
      "Agile / Scrum",
      "Code Reviews",
      "Mentoring",
      "Release Ownership",
      "Cross-Browser Compatibility",
    ],
  },
  {
    category: "Tools & Deployment",
    items: ["Git", "GitHub", "Vite", "Postman", "JIRA", "Vercel"],
  },
];

const experience = [
  {
    company: "YABX",
    role: "Technical Lead",
    dates: "Aug 2026 – Current",
    location: "Gurugram, Haryana",
    // metrics: [
    //   { label: "Early Delivery", value: "2 Weeks" },
    //   { label: "Client Satisfaction", value: "+25%" },
    //   { label: "Traceability", value: "+24%" },
    //   { label: "Issue Resolution", value: "-20%" },
    //   { label: "Code Coverage", value: "+50%" },
    // ],
    bullets: [
      "Leading frontend and backend direction across 4+ production apps, owning the React/TypeScript architecture end-to-end",
      "Building out backend ownership in Node.js/Express — REST APIs, controllers, services, middleware — and keeping the Swagger/OpenAPI docs accurate",
      "Reviewing code and mentoring 2 developers on architecture and debugging",
      "Running requirement discussions through deployment, owning releases, and troubleshooting production incidents across frontend and backend",
      "Partnering with product and design to scope feature feasibility before development starts",
    ],
  },
  {
    company: "YABX",
    role: "Senior Software Engineer",
    dates: "Dec 2023 – Jul 2026",
    location: "Gurugram, Haryana",
    // metrics: [
    //   { label: "Early Delivery", value: "2 Weeks" },
    //   { label: "Client Satisfaction", value: "+25%" },
    //   { label: "Traceability", value: "+24%" },
    //   { label: "Issue Resolution", value: "-20%" },
    //   { label: "Code Coverage", value: "+50%" },
    // ],
    bullets: [
      "Led frontend development across 4+ production React apps, owning architecture and delivery",
      "Cut initial load time by 30% and unnecessary re-renders by 40% through memoization and code-splitting",
      "Took test coverage from 30% to 90% by establishing testing standards with Jest and React Testing Library",
      "Introduced Zustand for state management, simplifying complex workflows and easing onboarding for new engineers",
    ],
  },
  {
    company: "YABX",
    role: "Software Engineer",
    dates: "Aug 2022 – Dec 2023",
    location: "Gurugram, Haryana",
    // metrics: [
    //   { label: "Design Alignment", value: "100%" },
    //   { label: "Project Efficiency", value: "+20%" },
    //   { label: "User Satisfaction", value: "+25%" },
    //   { label: "Bug Rate", value: "-15%" },
    // ],
    bullets: [
      "Built and shipped React/TypeScript features for customer-facing telecom apps",
      "Built 15+ reusable components, cutting duplicate code by 50%",
      "Optimized REST API contracts, reducing payload size by 20%",
      "Added debounced search/filtering to cut unnecessary network requests",
    ],
  },
  // {
  //   company: "Comviva",
  //   role: "Software Engineering Intern",
  //   dates: "Jan 2022 – Aug 2022",
  //   location: "Gurugram, Haryana",
  //   metrics: [
  //     { label: "Efficiency", value: "+20%" },
  //     { label: "Consistency", value: "+25%" },
  //   ],
  //   bullets: [
  //     "Teamed up with the design team to create user-friendly interfaces, enhancing project efficiency by 20%.",
  //     "Mastered responsive layouts, boosting cross-device performance consistency by 25%.",
  //     "Compiled design workflows in Confluence, enhancing team efficiency by 20%.",
  //   ],
  // },
];

const education = [
  {
    institution: "Mody University of Science and Technology",
    degree: "B. TECH IN COMPUTER SCIENCE",
    dates: "Graduated: May 2022",
    location: "Sikar, Rajasthan, India",
  },
];

const project = [
  {
    title: "Orange Retailer Portal",
    description: [
      "Primary frontend owner for a customer-facing handset-loan platform, driving development from requirements through production deployment",
      "Implemented dynamic theming and multilingual support for configurable product experiences across markets",
      "Integrated REST APIs and Mixpanel analytics, and built an on-device customer signature workflow for the digital loan journey",
    ],

    tech: [
      "React",
      "Javascript",
      "React JSS",
      "Context API",
      "Redux",
      "Performance Optimization",
    ],
    // url: {
    //   website: "https://react-retail-planning-dashboard-zf8.vercel.app/",
    //   github: "https://github.com/aditi270800/react-retail-planning-dashboard",
    // },
  },
  {
    title: "KYC Builder",
    description: [
      "Built a dynamic KYC form-builder with nested, reusable form components for complex customer-data workflows",
      "Implemented validation logic, including regex-based rules, plus multilingual configurable labels to support different customer journeys",
      "Contributed backend API and validation logic in Node.js/Express, keeping frontend and backend contracts aligned",
    ],

    tech: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Zustand",
      "Node JS",
      "Express JS",
    ],
    // url: {
    //   website: "https://react-retail-planning-dashboard-zf8.vercel.app/",
    //   github: "https://github.com/aditi270800/react-retail-planning-dashboard",
    // },
  },
  {
    title: "Collection Portal",
    description: [
      "Led end-to-end frontend development of a client-facing collections platform, building role-based workflows for agent and manager views",
      "Architected state management with Zustand and Context API for complex multi-step workflows",
      "Built reusable, configurable UI components and integrated REST APIs for dynamic collection data",
    ],

    tech: ["React", "Typescript", "Tailwind CSS", "Zustand"],
    // url: {
    //   website: "https://react-retail-planning-dashboard-zf8.vercel.app/",
    //   github: "https://github.com/aditi270800/react-retail-planning-dashboard",
    // },
  },
  {
    title: "WorkFlow Builder",
    description: [
      "Built a workflow-builder application handling frontend architecture and application state",
      "Migrated the app from React to React + Vite, improving build and dev performance",
      "Wrote unit tests with React Testing Library for frontend reliability",
    ],

    tech: [
      "React",
      "Javascript",
      "React JSS",
      "Context API",
      "Performance Optimization",
    ],
    // url: {
    //   website: "https://react-retail-planning-dashboard-zf8.vercel.app/",
    //   github: "https://github.com/aditi270800/react-retail-planning-dashboard",
    // },
  },
  {
    title: "Retail Planning Dashboard",
    description: [
      "Built a retail planning dashboard deployed on Vercel, handling 10,000+ rows of Store - SKU data",
      "Implemented sorting, filtering, and pagination with efficient rendering for large datasets",
      "Designed a reusable component architecture and structured Redux state for scalable dashboard workflows",
    ],

    tech: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Redux",
      "AG-Grid",
      "Performance Optimization",
    ],
    url: {
      website: "https://react-retail-planning-dashboard-zf8.vercel.app/",
      github: "https://github.com/aditi270800/react-retail-planning-dashboard",
    },
  },
];

const achievements = [
  // {
  //   title: "Frontend Leadership – Collection Portal",
  //   description:
  //     "Led frontend development and delivered the project ahead of deadline, exceeding client expectations with a performant and scalable solution.",
  // },
  {
    title: "Outstanding Development Recognition – Orange Portal",
    description:
      "Recognized for owning and delivering a production-grade frontend system with strong focus on scalability, performance, and reliability.",
  },
  {
    title: "2nd Place – Hackathon (AI Product)",
    description:
      "Developed an AI-powered application with end-to-end UI, collaborating across teams to build and demo a complete working solution.",
  },
];

const basicsDetails = {
  name: "Aditi Saxena",
  title: "Technical Lead",
  summary:
    "Frontend Engineer with 3+ years of experience building scalable web applications using React.js, JavaScript, and TypeScript. Specialized in creating high-performance, responsive interfaces that deliver intuitive user experiences. Currently expanding skill set into React Native while deepening expertise in modern frontend architecture and scalable UI systems.",
  location: "Gurugram, India",
  email: "adirak2708@gmail.com",
  phone: "+91-8630381537",
  links: {
    linkedin: "https://www.linkedin.com/in/aditi-saxena-a781a51a0",
    github: "https://github.com/aditi270800",
  },
};

export {
  skills,
  experience,
  education,
  project,
  achievements,
  basicsDetails,
};

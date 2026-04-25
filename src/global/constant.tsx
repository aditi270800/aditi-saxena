const skills = [
  {
    category: "Frontend",
    items: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    category: "State Management & Architecture",
    items: ["Redux", "Zustand", "Scalable Component Design", "API Integration"],
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
    items: ["Tailwind CSS", "Responsive Design", "React JSS", "Bootstrap"],
  },
  {
    category: "Testing & Analytics",
    items: ["Jest", "React Testing Library", "Mixpanel"],
  },
  {
    category: "Tools & Deployment",
    items: ["Git", "GitHub", "VS Code", "Postman", "JIRA", "Netlify"],
  },
];

const experience = [
  {
    company: "Yabx",
    role: "Senior Software Engineer",
    dates: "Dec 2023 – Current",
    location: "Gurugram, Haryana",
    metrics: [
      { label: "Early Delivery", value: "2 Weeks" },
      { label: "Client Satisfaction", value: "+25%" },
      { label: "Traceability", value: "+24%" },
      { label: "Issue Resolution", value: "-20%" },
      { label: "Code Coverage", value: "+50%" },
    ],
    bullets: [
      "Led UI development of the Collection Portal, delivering 2 weeks early; boosted client satisfaction by 25%.",
      "Awarded “Outstanding Developer” and “Achievement Award” for impact and speed.",
      "Maintained detailed software records, improving traceability by 24% and reducing issue resolution time by 20%.",
      "Partnered with teams to modernize legacy frontend architecture, enhancing component structure and backend integration for a more scalable and responsive UI.",
      "Led the migration of class components to functional components with hooks, reducing code complexity and improving readability.",
      "Conducted peer code reviews and mentored junior developers, fostering a culture of quality and continuous learning.",
      "Translated Figma designs into pixel-perfect UIs with responsiveness and cross-browser compatibility.",
      "Improved user engagement by refining UI/UX based on user feedback and analytics insights.",
      "Integrated unit and component testing with Jest and React Testing Library, increasing frontend code coverage by 50%.",
    ],
  },
  {
    company: "Yabx",
    role: "Software Engineer",
    dates: "Aug 2022 – Dec 2023",
    location: "Gurugram, Haryana",
    metrics: [
      { label: "Design Alignment", value: "100%" },
      { label: "Project Efficiency", value: "+20%" },
      { label: "User Satisfaction", value: "+25%" },
      { label: "Bug Rate", value: "-15%" },
    ],
    bullets: [
      "Developed front-end components with HTML, CSS, and React, achieving 100% alignment with design specifications.",
      "Partnered with backend developers and product managers to align designs with business goals, enhancing project efficiency by 20%.",
      "Joined forces with designers and engineers to create user-focused interfaces, boosting user satisfaction by 25%.",
      "Collaborated closely with backend engineers, product managers, and QA teams to ensure smooth feature delivery, reducing bug rates by 15%.",
      "Wrote unit and integration tests using Jest and React Testing Library, ensuring robust and reliable frontend functionality.",
    ],
  },
  {
    company: "Comviva",
    role: "Software Engineering Intern",
    dates: "Jan 2022 – Aug 2022",
    location: "Gurugram, Haryana",
    metrics: [
      { label: "Efficiency", value: "+20%" },
      { label: "Consistency", value: "+25%" },
    ],
    bullets: [
      "Teamed up with the design team to create user-friendly interfaces, enhancing project efficiency by 20%.",
      "Mastered responsive layouts, boosting cross-device performance consistency by 25%.",
      "Compiled design workflows in Confluence, enhancing team efficiency by 20%.",
    ],
  },
];

const education = [
  {
    institution: "Mody University of Science and Technology",
    degree: "B. TECH IN COMPUTER SCIENCE",
    dates: "Graduated: May 2022",
    location: "Sikar, Rajasthan, India",
  },
  {
    institution: "Kendriya Vidyalaya",
    degree: "12th - PCM + CS",
    dates: "2013 - 2018",
  },
];

const extraDetails = [
  "Open to connecting with engineers, product teams, and recruiters building impactful web applications.",
  "Core Skills: React.js, JavaScript, TypeScript, HTML5, CSS3, Responsive Web Design, UI Development, Frontend Architecture, Web Performance, Performance Optimization, Node JS(Learning).",
];

const project = [
  {
    title: "Retail Planning Dashboard",
    description:
      "Developed a scalable retail planning application to manage complex Store × SKU level data and simulate real-world business workflows. Built with React, TypeScript, and Redux, the application supports dynamic planning, real-time financial computations (Sales, GM, GM%), and interactive analytics. Engineered a high-performance grid handling 10k+ records, leveraging virtualization and memoization to significantly reduce re-renders and maintain smooth UI performance. Improved load performance using code splitting and lazy loading, and implemented efficient state management for predictable data flow. Added interactive visualizations to surface actionable insights for decision-making. Focused on performance, scalability, and clean architecture to deliver a responsive experience in data-intensive environments.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "AG-Grid",
      "Recharts",
      "Performance Optimization",
      "State Management",
    ],
    url: {
      website: "https://react-retail-planning-dashboard-zf8.vercel.app/",
      github: "https://github.com/aditi270800/react-retail-planning-dashboard",
    },
  },
];

const achievements = [
  {
    title: "Frontend Leadership – Collection Portal",
    description:
      "Led frontend development and delivered the project ahead of deadline, exceeding client expectations with a performant and scalable solution.",
  },
  {
    title: "Outstanding Development Award – Orange Portal",
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
  title: "Senior Software Engineer",
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
  extraDetails,
  project,
  achievements,
  basicsDetails,
};

export interface Project {
  title: string;
  technologies: string[];
  description: string;
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
}

export interface SkillCategory {
  categoryName: string;
  skills: { name: string; icon?: string }[];
}

export interface Achievement {
  title: string;
  metric: string;
  description: string;
  iconName: string;
  link?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  badgeColor: string;
}

export const candidateDetails = {
  name: "Yash Rajveer Singh",
  title: "Software Engineer & Backend Developer",
  tagline: "Building scalable backend services, interactive user interfaces, and solving complex algorithmic challenges.",
  roles: ["Software Developer", "Java Backend Developer", "Problem Solver"],
  location: "Gorakhpur, Uttar Pradesh, India",
  email: "yashrajveersingh936@gmail.com",
  phone: "+91-9310490544",
  linkedin: "https://www.linkedin.com/in/yash-rajveer-singh-0292aa262",
  github: "https://github.com/YashRajveerSingh",
  leetcode: "https://leetcode.com/u/yashrajveer/",
  education: {
    degree: "B.Tech in Information Technology",
    institution: "GL Bajaj Institute of Technology & Management, Greater Noida",
    period: "2023 – 2027 (Pre-final Year)",
    cgpa: "8.09 / 10",
    focus: "Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks"
  },
  aboutSummary: "I am a passionate pre-final year Information Technology student at GL Bajaj Institute of Technology & Management targeting robust software engineering roles. With a strong foundation in block-structured languages like Java and C++, database query optimization, and enterprise tools like Spring Boot, I thrive at the intersection of logical backend architecture and responsive web technologies. Dedicated to rigorous execution and clean code guidelines, I am deeply committed to pushing standard application scopes to their finest presentation and utility."
};

export const skillsData: SkillCategory[] = [
  {
    categoryName: "Languages",
    skills: [
      { name: "Java" },
      { name: "C++" },
      { name: "C" },
      { name: "Python" }
    ]
  },
  {
    categoryName: "Web Technologies",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" }
    ]
  },
  {
    categoryName: "Frameworks & Libs",
    skills: [
      { name: "Spring Boot" },
      { name: "React.js" },
      { name: "Express.js" },
      { name: "Node.js" }
    ]
  },
  {
    categoryName: "Databases",
    skills: [
      { name: "MySQL" },
      { name: "Firebase (Realtime/Firestore)" }
    ]
  },
  {
    categoryName: "Tools & Utilities",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "IntelliJ IDEA" },
      { name: "VS Code" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: "AI SQL Generator",
    category: "Full Stack / AI",
    technologies: ["React.js", "Node.js", "Express.js", "Ollama (TinyLlama)", "Axios", "Regex Validation"],
    description: "An interactive, secure AI-powered web developer tool that translates natural language statements into precise, compliant SQL statements instantly, minimizing manual query formulation friction.",
    highlights: [
      "Designed and integrated a client-side user experience utilizing streamlined response streaming and syntax highlighting.",
      "Engineered an Express.js backend layer communicating securely with localized Ollama (TinyLlama) models.",
      "Implemented rigid regular expression validations and robust SELECT-only query security middleware to fully prevent malicious write operations or unauthorized mutations."
    ],
    githubUrl: "https://github.com/YashRajveerSingh"
  },
  {
    title: "Eco-Track Carbon Footprint Calculator",
    category: "React / Cloud",
    technologies: ["React.js", "Tailwind CSS", "Firebase Realtime DB", "Chart.js", "AI Recommendations"],
    description: "A comprehensive sustainability-oriented tracking application enabling users to calculate daily carbon offsets and get specialized recommendations tailored to their lifestyle metrics.",
    highlights: [
      "Integrated Firebase Realtime Database for instantaneous user state replication and robust data persistence of lifestyle inputs.",
      "Built custom analytical tracking charts with interactive Chart.js layers, visualizing footprint categories cleanly.",
      "Designed an AI-based suggestion engine which parses emission segments to deliver specific actionable mitigation solutions."
    ],
    githubUrl: "https://github.com/YashRajveerSingh"
  }
];

export const achievementsData: Achievement[] = [
  {
    title: "LeetCode Milestone",
    metric: "450+ Solved",
    description: "Successfully solved over 450 high-quality Data Structures and Algorithms problems, focused on arrays, string manipulation, trees, dynamic programming, and system optimization.",
    iconName: "Code2",
    link: "https://leetcode.com/u/yashrajveer/"
  },
  {
    title: "Smart India Hackathon",
    metric: "SIH 2025 Participant",
    description: "Participated in the prestigious national Smart India Hackathon 2025, collaborating in dynamic environments to tackle critical government and industrial challenges.",
    iconName: "Flame",
    link: "https://github.com/YashRajveerSingh"
  }
];

export const certificationsData: Certification[] = [
  {
    title: "Programming Using Java",
    issuer: "Infosys Springboard",
    year: "Credential issued 2026",
    badgeColor: "from-blue-600/20 to-blue-500/10 hover:border-blue-500/40"
  },
  {
    title: "5★ SQL Rating Logo & Certification",
    issuer: "HackerRank",
    year: "Credential earned 2025",
    badgeColor: "from-cyan-600/20 to-cyan-500/10 hover:border-cyan-500/40"
  }
];

export const profileData = {
  name: "LOGITHKUMAR K R",
  title: "Software Engineer | AI Integrations, Backend & Full-Stack Systems",
  tagline: "Passionate about applying system design principles and object-oriented architecture to ship production-grade software that solves real-world problems.",
  bio: "Software Development Engineer with hands-on experience building and deploying full-stack applications integrated with AI and machine learning capabilities.",
  about: "Software Development Engineer with hands-on experience building and deploying full-stack applications integrated with AI and machine learning capabilities, including two systems live in production at Bannari Amman Institute of Technology. Proficient in designing scalable backend systems, RESTful APIs, and real-time data pipelines, with practical expertise in LLM integration and constraint optimization. Passionate about applying system design principles and object-oriented architecture to ship production-grade software that solves real-world problems.",
  email: "logithkumar188@gmail.com",
  phone: "+91 9443696189",
  location: "Tamil Nadu, India",
  github: "https://github.com/logithKR",
  linkedin: "https://linkedin.com/in/LOGITHKUMAR K R",
  leetcode: "https://leetcode.com/u/user8930hC/",
};

export const skillsData = [
  { category: "Programming Languages", skills: ["Python", "JavaScript", "SQL"] },
  { category: "Frontend", skills: ["React (Vite)", "Tailwind CSS", "HTML", "CSS"] },
  { category: "Backend", skills: ["FastAPI", "Flask", "Node.js", "Express.js", "REST APIs", "WebSockets"] },
  { category: "Databases", skills: ["SQLite", "Firebase Firestore", "Redis", "SQLAlchemy"] },
  { category: "AI & Machine Learning", skills: ["LangChain", "FAISS", "Google Gemini API", "Google OR-Tools (CP-SAT)", "Stable Diffusion API"] },
  { category: "Tools & Auth", skills: ["Git", "GitHub", "JWT", "Firebase Auth", "OAuth 2.0", "Socket.io"] },
];

export const projectsData = [
  {
    name: "College Timetable Generator - CP-SAT Constraint Scheduling System",
    date: "Feb 2026 - Present",
    description: "Engineered a CP-SAT constraint solver (Google OR-Tools) that auto-generates conflict-free college timetables, enforcing faculty clash prevention, mentor-hour blocking, and lab batch rotation across a 6-day × 8-period grid.",
    features: [
      "Built a ConstraintInterpreter that compiles user-defined JSON rules into solver constraints pre-solve and injects custom sessions post-solve.",
      "Designed a multi-section dynamic enrollment engine that calculates section counts per course from live enrollment data and auto-assigns venues based on capacity."
    ],
    stack: ["Python", "FastAPI", "Google OR-Tools (CP-SAT)", "SQLAlchemy", "SQLite", "React (Vite)", "dnd-kit", "Tailwind CSS", "JWT"],
    live: "timetable.bitsathy.ac.in",
    code: "github.com/logithKR/Time-table-generator"
  },
  {
    name: "BITRA - Institutional RAG Chatbot & Knowledge Assistant",
    date: "Oct 2025 - Dec 2025",
    description: "Built a RAG chatbot using LangChain + FAISS + Gemini 2.5 Flash with a two-stage LLM pipeline — classifier routes queries to 5 departments; RAG chain delivers context-grounded answers with hallucination prevention.",
    features: [
      "Implemented Gmail API (OAuth 2.0) auto-escalation to department heads and a live FAISS index rebuild system enabling real-time knowledge base updates via a staff document portal."
    ],
    stack: ["Python", "Flask", "LangChain", "FAISS", "Gemini 2.5 Flash", "Gmail API", "Firebase Auth", "React (Vite)"],
    live: "bitra.bitsathy.ac.in",
    code: ""
  },
  {
    name: "GenJewels- Generative AI Jewelry Design Platform",
    date: "Jul 2025 - Sep 2025",
    description: "Built a generative AI platform for jewelry design featuring two core pipelines: Text-to-Image for creating custom designs from descriptive prompts, and Image-to-Image for applying AI style transfers to user-uploaded photos.",
    features: [
      "Integrated a Stable Diffusion pipeline utilizing dynamic prompt engineering and denoising strength controls to accurately process source images and user parameters into high-fidelity, photorealistic renders."
    ],
    stack: ["React (Vite)", "Tailwind CSS", "Stable Diffusion API"],
    live: "",
    code: "github.com/Ramesh-Sakthivel-18/Gen-Jewels"
  }
];

export const educationData = [
  {
    institution: "Bannari Amman Institute of Technology",
    degree: "B.E - Computer science and design",
    date: "Sep 2023 - May 2027",
    score: "CGPA - 8.14 / 10"
  },
  {
    institution: "URC Palaniammal Matriculation Higher Secondary School",
    degree: "High School - Math Computer science",
    date: "Jun 2021 - May 2023",
    score: "93.67%"
  }
];

export const certificationsData = [
  {
    title: "AI Fundamentals",
    issuer: "IBM SkillsBuild & Cisco Networking Academy",
    date: "2023",
    description: "A comprehensive certification covering the core concepts of Artificial Intelligence, machine learning models, and ethical considerations in AI deployment.",
    file: "/certificates/ibm-ai.pdf"
  },
  {
    title: "Programming, Data Structures and Algorithms using Python",
    issuer: "NPTEL",
    date: "2023",
    description: "In-depth coursework on core data structures, algorithmic design techniques, and advanced Python programming methodologies.",
    file: "/certificates/nptel-python.pdf"
  }
];

export const achievementsData = [
  {
    title: "Reliance Foundation Undergraduate Scholar 2023",
    description: "Awarded the Reliance Foundation Undergraduate Scholarship for academic excellence, selected as one of 5,000 scholars across India."
  },
  {
    title: "Selected among the Top 7 teams in iNTELLIMOBILITY",
    description: "Driving Safe Mobility Ideathon conducted by Automotive Research Association of India (ARAI), Pune, for presenting an AI-based pedestrian detection and smart safety system."
  }
];

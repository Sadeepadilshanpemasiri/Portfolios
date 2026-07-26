export const roles = [
  "Flutter Developer",
  "Full Stack Developer",
  "Mobile App Developer",
  "Backend Developer",
  "Problem Solver",
];

export const socials = {
  github: "https://github.com/Sadeepadilshanpemasiri",
  linkedin: "https://www.linkedin.com/in/sadeepa-dilshan-298924292/",
  facebook: "https://www.facebook.com/share/1ECSRAoBdt/?mibextid=wwXIfr",
  whatsapp: "https://wa.me/94717176671",
  email: "sadeepadpemasiri@gmail.com",
  phone: "+94704631853",
  phoneDisplay: "+94 70 463 1853",
  location: "Sri Lanka",
  githubUsername: "Sadeepadilshanpemasiri",
};

export const education = [
  {
    date: "2023 — Present",
    title: "BHSc Health Information & Communication Technology",
    org: "Gampaha Wickramarachchi University of Indigenous Medicine",
  },
  {
    date: "A/L — Technology Stream",
    title: "Wijeriya Sumana M.V.",
    org: "ICT — B · Engineering Technology — C · Science for Technology — C",
  },
];

export const experience = [
  {
    date: "2024 — 2025",
    role: "Junior Software Developer",
    org: "Omicron Pvt Ltd",
    desc: "Developed software applications and worked with Flutter alongside senior developers — debugging, optimizing performance, implementing features, and using Git for version control.",
  },
  {
    date: "2021 — 2022",
    role: "IT Assistant Store Keeper",
    org: "GEL Construction — Kamburupitiya Base Hospital",
    desc: "Managed inventory tracking, equipment and stock management, supplier verification, and data recording.",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  tags?: string[];
};

export const certificates: Certificate[] = [
  {
    title: "Machine Learning with Python",
    issuer: "freeCodeCamp",
    date: "Issued Nov 2023",
    tags: ["Python", "Programming"],
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Issued Jun 2023",
    tags: ["HTML5", "JavaScript"],
  },
  {
    title: "AWS Academy Graduate - AWS Academy Data Engineering",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Jun 2025",
    tags: ["AWS", "Data Engineering"],
  },
  {
    title: "AI Skills Fest 2026",
    issuer: "Microsoft",
    date: "Issued Jun 2026",
    tags: ["AI", "Machine Learning"],
  },
  {
    title: "Web Development - 1. Web Design for Beginners",
    issuer: "University of Moratuwa",
    date: "Issued Oct 2023",
    tags: ["Web Design"],
  },
  {
    title: "Programming in Python",
    issuer: "University of Moratuwa",
    date: "Issued Oct 2023",
    tags: ["Python"],
  },
];

export type SkillItem = {
  name: string;
  percent: number;
};

export const skillGroups: { label: string; items: SkillItem[] }[] = [
  {
    label: "Frontend",
    items: [
      { name: "HTML", percent: 95 },
      { name: "CSS", percent: 90 },
      { name: "JavaScript", percent: 85 },
      { name: "React", percent: 80 },
      { name: "Next.js", percent: 78 },
      { name: "Tailwind CSS", percent: 82 },
      { name: "Flutter", percent: 80 },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", percent: 82 },
      { name: "Express", percent: 76 },
      { name: "REST APIs", percent: 84 },
      { name: "MySQL", percent: 78 },
      { name: "Firebase", percent: 74 },
      { name: "Supabase", percent: 70 },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "Spring Boot", percent: 72 },
      { name: "Hibernate", percent: 68 },
      { name: "JavaFX", percent: 62 },
      { name: "Kotlin", percent: 74 },
      { name: "GraphQL", percent: 66 },
      { name: "Maven", percent: 70 },
    ],
  },
  {
    label: "Languages",
    items: [
      { name: "Java", percent: 88 },
      { name: "C#", percent: 70 },
      { name: "Python", percent: 82 },
      { name: "JavaScript", percent: 84 },
      { name: "TypeScript", percent: 76 },
      { name: "Dart", percent: 74 },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", percent: 90 },
      { name: "GitHub", percent: 88 },
      { name: "VS Code", percent: 92 },
      { name: "Android Studio", percent: 72 },
      { name: "NetBeans", percent: 70 },
      { name: "Figma", percent: 68 },
    ],
  },
];

export type Project = {
  num: string;
  name: string;
  tagline: string;
  desc: string;
  features: string[];
  tech: string[];
  team?: string;
  duration?: string;
  github: string;
  liveDemo: string | null;
};

export const projects: Project[] = [
  {
    num: "01",
    name: "RideBuddy",
    tagline: "AI-powered fuel & vehicle management",
    desc: "An offline-first Flutter app for managing vehicles: AI-driven fuel insights via the Gemini API, GPS navigation to nearby fuel stations and service centers, smart reminders for renewals, and GSM-based SMS safety alerts that work without data signal. Showcased at MINISCOPE 2026, Gampaha Wickramarachchi University of Indigenous Medicine.",
    features: ["AI fuel insights", "Offline sync", "GSM safety alerts", "Multi-vehicle"],
    tech: ["Flutter", "Supabase", "Gemini API", "SQFlite", "Google Maps API"],
    team: "5",
    duration: "6 months",
    github: socials.github,
    liveDemo: null,
  },
  {
    num: "02",
    name: "N-GEMS",
    tagline: "Hospital & healthcare management system",
    desc: "A full-stack platform for managing healthcare operations — patients, appointments and staff — with a role-based admin dashboard and authentication, built to keep day-to-day hospital workflows in one place.",
    features: ["Patient management", "Appointments", "Admin dashboard"],
    tech: ["Flutter", "Node.js", "MySQL", "REST API"],
    github: "https://github.com/kavishka2002/NGEMS",
    liveDemo: null,
  },
  {
    num: "03",
    name: "UniTrack",
    tagline: "University management, from a student's view",
    desc: "A university companion app built specifically around what students actually need day to day: attendance, timetable, assignments, a GPA calculator, notes, and event notifications, all in one dashboard.",
    features: ["Attendance", "GPA calculator", "Notifications"],
    tech: ["Flutter", "Firebase", "Node.js", "MySQL"],
    github: socials.github,
    liveDemo: null,
  },
  {
    num: "04",
    name: "Facility Management System",
    tagline: "Desktop application — Java",
    desc: "A NetBeans desktop application for booking facilities and equipment and managing room allocation, with user management and reporting for a small team environment.",
    features: ["Facility booking", "Room allocation"],
    tech: ["Java", "MySQL", "NetBeans"],
    team: "5",
    duration: "2 months",
    github: socials.github,
    liveDemo: null,
  },
];

export const aboutFocus = [
  "Mobile Development — Flutter & Dart",
  "Backend Systems — Node.js, Supabase, MySQL",
  "Applied AI — Gemini API, TensorFlow",
  "UI/UX & Software Engineering fundamentals",
];

export const terminalScript: { type: "cmd" | "out"; text: string }[] = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "name: Sadeepa Dilshan" },
  { type: "out", text: "role: Software & Mobile Developer" },
  { type: "out", text: "focus: Flutter · Full-Stack · Applied AI" },
  { type: "cmd", text: "cat education.txt" },
  { type: "out", text: "BHSc Health Info & Communication Technology" },
  { type: "out", text: "Gampaha Wickramarachchi University of Indigenous Medicine" },
  { type: "cmd", text: "./run --status" },
  { type: "out", text: "[✓] Available for junior developer roles" },
];

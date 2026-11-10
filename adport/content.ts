// All page content lives here. Placeholders in [square brackets] are still to be supplied.

export type Link = { label: string; href: string };

export type Role = {
  dates: string;
  title: string;
  org: string;
  note: string;
  stack?: string[];
};

export type Education = {
  degree: string;
  school: string;
  year: string;
  note?: string;
};

export type Project = {
  name: string;
  href: string;
  stack: string;
  desc: string;
  hardestPart?: string;
};

export const profile = {
  name: "Anthony Dong",
  title: "Anthony Dong — Software Developer",
  summary:
    "Software developer at Inov8, Wellington NZ. My expertise lies in full-stack development with a focus on .NET and modern web technologies. ",
  workingTowards: "[Developing my AI skillset by building projects]",
  links: [
    { label: "email", href: "mailto:anthonyzhdong@gmail.com" },
    { label: "github", href: "https://github.com/anthonyzhdong" },
    { label: "linkedin", href: "https://linkedin.com/in/anthonyzhdong" },
    { label: "cv.pdf", href: "/AnthonyDongCV.pdf" },
  ] satisfies Link[],
  footer: "© 2026 Anthony Dong · Wellington, New Zealand",
};

export const experience: Role[] = [
  {
    dates: "May 2022 — now",
    title: "Software Developer",
    org: "Inov8 Limited",
    note: "Upgrading and integrating full-stack .NET applications for government and enterprise clients.",
    stack: ["C#", ".NET", "SOAP/WCF", "Azure SQL"],
  },
  {
    dates: "Feb 2026 — now",
    title: "Product Manager",
    org: "Launchpanion",
    note: "Lead developer for an AI companion application for early-stage founders.",
    stack: ["Next.js", "PostgreSQL", "Stripe", "OpenAI API", "Vercel"],
  },
  {
    dates: "Jan 2019 — now",
    title: "Marketing & Web Development Manager",
    org: "Asian Events Trust",
    note: "Designed the marketing strategy & developed a static Next.js website for the Wellington Lunar New Year festival. Hosted on Vercel. .",
    stack: ["Next.js", "Vercel"],
  },
  {
    dates: "Nov 2023 — Feb 2024",
    title: "Project Administrator",
    org: "Naylor Love",
    note: "Delivered administration support on the James Cook Hotel and Wellington Town Hall projects.",
  },
  {
    dates: "Dec 2021 — Feb 2022",
    title: "Front Desk Receptionist",
    org: "Black Gates Optometrists",
    note: "Patient bookings, administration and front-desk service at an optometry clinic.",
  },
  {
    dates: "Jan 2020 — Dec 2022",
    title: "Social Media Manager",
    org: "Self-employed",
    note: "Grew a gaming brand to 16k Twitch followers and 2k+ YouTube subscribers across 70+ videos.",
  },
  {
    dates: "2022 — 2024",
    title: "BSc Computer Science",
    org: "University of Otago",
    note: "University of Otago Performance Entrance Scholarship",
  },
];

export const education: Education[] = [
  {
    degree: "BSc Computer Science",
    school: "University of Otago",
    year: "2022 - 2024",
    note: "Performance Entrance Scholarship",
  }
];

export const projects: Project[] = [
  {
    name: "LoadSync",
    href: "https://github.com/anthonyzhdong/trainingapp",
    stack: "Next.js · React · TypeScript",
    desc: "[A full-stack triathlon training tracker which logs sessions, training loads & calories.]",
    hardestPart: "Shear amount of metrics that goes into each sporting discipline & the variability and complexity of sporting calculations",
  },
  {
    name: "inboxpurge",
    href: "https://github.com/anthonyzhdong/InboxPurge",
    stack: "next.js · fastapi · GmailAPI",
    desc: "A Gmail declutter tool: sorts your inbox into categories with an LLM, then lets you bulk-clean and unsubscribe in a few clicks.",
    hardestPart: "Categorisation of emails accuracy with an LLM, and the Gmail API's strict rate limits.",
  },
  {
    name: "flat-finance-tracker",
    href: "https://github.com/anthonyzhdong/Flat-Finance-TrackerAWS",
    stack: "javascript · sql · terraform ·aws",
    desc: "Shared-expense tracking for flatmates, packaged for deployment on AWS.",
  },
  {
    name: "study-planner",
    href: "https://github.com/anthonyzhdong/StudyPlanner",
    stack: "c++",
    desc: "A command-line calendar for students to manage schedules, events and study sessions. Built test-first by a team of four.",
  },
];

export type Personal = { title: string; detail?: string };

export const personal: Personal[] = [
  { title: "Ultra Marathon Runner", detail: "42 km · 50km · 60km" },
  { title: "Professional Video Gamer", detail: "Fortnite · phluxzy, 2018-2022" },
  { title: "Hip Hop International World Champs (Megacrew Division)", detail: "Arizona · USA, 2018" },
  { title: "Working towards", detail: "[70.3 Triathlon · Half Ironman, march 2027]" },
];

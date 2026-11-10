// All page content lives here. Placeholders in [square brackets] are still to be supplied.

export type Link = { label: string; href: string };

export type Role = {
  dates: string;
  title: string;
  org: string;
  note: string;
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
    "Software developer at Inov8, Wellington NZ. I keep long-lived .NET systems for government and enterprise clients secure and dependable, and build my own products in Python and Next.js.",
  links: [
    { label: "email", href: "mailto:anthonyzhdong@gmail.com" },
    { label: "github", href: "https://github.com/anthonyzhdong" },
    { label: "linkedin", href: "https://linkedin.com/in/anthonyzhdong" },
    { label: "cv.pdf", href: "/AnthonyDongCV.pdf" },
  ] satisfies Link[],
  footer: "© 2026 Anthony Dong · Wellington, Aotearoa",
};

export const experience: Role[] = [
  {
    dates: "May 2022 — now",
    title: "Software Developer",
    org: "Inov8 Limited",
    note: ".NET services, SOAP integrations and Azure SQL for government and enterprise clients.",
  },
  {
    dates: "Feb 2026 — now",
    title: "Product Manager",
    org: "Launchpanion",
    note: "Product direction for an AI companion for early-stage founders, plus the full-stack Next.js build.",
  },
  {
    dates: "Jan 2019 — now",
    title: "Marketing & Web Development Manager",
    org: "Asian Events Trust",
    note: "Website and campaigns for Wellington's annual Lunar New Year Festival.",
  },
  {
    dates: "Nov 2023 — Feb 2024",
    title: "Project Administrator",
    org: "Naylor Love",
    note: "Delivery support on the James Cook Hotel and Wellington Town Hall projects.",
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

export const projects: Project[] = [
  {
    name: "LoadSync",
    href: "#",
    stack: "Next.js · React · TypeScript",
    desc: "[A full-stack triathlon training tracker which logs sessions, training loads & calories.]",
    hardestPart: "Shear amount of metrics that goes into each sporting discipline & the variability and complexity of sporting calculations",
  },
  {
    name: "inboxpurge",
    href: "#",
    stack: "next.js · fastapi · GmailAPI",
    desc: "A Gmail declutter tool: sorts your inbox into categories with an LLM, then lets you bulk-clean and unsubscribe in a few clicks.",
    hardestPart: "Categorisation of emails accuracy with an LLM, and the Gmail API's strict rate limits.",
  },
  {
    name: "flat-finance-tracker",
    href: "https://github.com/anthonyzhdong/Flat-Finance-TrackerAWS",
    stack: "javascript · sql · aws",
    desc: "Shared-expense tracking for flatmates, packaged for deployment on AWS.",
  },
  {
    name: "study-planner",
    href: "https://github.com/anthonyzhdong/StudyPlanner",
    stack: "c++",
    desc: "A command-line calendar for students to manage schedules, events and study sessions. Built test-first by a team of four.",
  },
];

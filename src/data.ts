export type ViewKey = "home" | "works";

export type TimelineItem = {
  year: string;
  text: string;
};

export type LinkItem = {
  label: string;
  href: string;
  icon: string;
};

export type ProjectItem = {
  title: string;
  period: string;
  description: string;
  stack: string[];
  highlights: string[];
  tone: string;
  projectUrl: string;
  linkLabel: string;
  demo: "scanner" | "memories" | "myuni";
};

export const portfolio = {
  name: "Mikhail Goranin",
  role: "Cross-Platform Developer ( Flutter / Frontend / Fullstack )",
  greeting: "Hello, I'm a Flutter developer building mobile and web products.",
  location: "Based in Minsk, working across mobile and web projects.",
  workSummary:
    "I am a cross-platform developer with 3+ years of experience building mobile apps, web interfaces, and production systems. I work from interface implementation and architecture planning to backend integration, release automation, ongoing support, and performance improvements. Right now I focus on Flutter apps, app store releases, clean UI, and maintainable product code.",
  bio: [
    {
      year: "2018",
      text: "I graduated as a PC Operator from Minsk State College of Electronics.",
    },
    {
      year: "2020",
      text: "I worked on an AI-based workflow observation tool using Python, OpenCV, and PyTorch.",
    },
    {
      year: "2023",
      text: "I built in-house web products, white-label tools, and a React estimate app.",
    },
    {
      year: "2023 to present",
      text: "I have worked as a frontend developer on automation-heavy web platforms with WordPress, ModX, SEO, and Telegram integrations.",
    },
    {
      year: "2025 to present",
      text: "I have been shipping cross-platform mini-apps for app stores with Flutter, Hive, Bloc, Provider, and Fastlane.",
    },
  ] satisfies TimelineItem[],
  interests: [
    "Flutter",
    "Dart",
    "Design systems",
    "Mobile UX",
    "Frontend performance",
    "Product interfaces",
  ],
  links: [
    { label: "Email", href: "mailto:mishagoranin1@gmail.com", icon: "@" },
    { label: "GitHub", href: "https://github.com/MishkoGo", icon: "gh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/michael-goranin-3bb5a0169/", icon: "in" },
    { label: "Telegram", href: "https://t.me/mishkoGo", icon: "tg" },
  ] satisfies LinkItem[],
  skills: {
    mobile: [
      "Flutter",
      "Dart",
      "Flutter Web",
      "In-App Purchases",
      "Hive",
      "Bloc",
      "Provider",
      "Material/Cupertino",
      "Fastlane",
    ],
    frontend: [
      "TypeScript",
      "JavaScript",
      "Vue.js",
      "Nuxt",
      "React",
      "Tailwind",
      "SCSS",
      "WordPress",
      "ModX",
    ],
    backend: ["PHP", "Python", "MySQL", "MongoDB", "Express.js"],
    tools: ["Git", "Jira", "YouTrack", "Trello", "Figma", "OpenCV", "Unity", "C#"],
  },
  projects: [
    {
      title: "Scanner PDF",
      period: "Flutter project",
      description:
        "I built a Flutter document scanning app focused on capturing pages, preparing clean PDF files, and keeping the mobile flow simple.",
      stack: ["Flutter", "Dart", "PDF flow", "Mobile UI"],
      highlights: [
        "I designed a mobile-first scanner flow from capture to export.",
        "I built the interface around quick document review and PDF preparation.",
        "I structured the project as a practical Flutter portfolio app.",
      ],
      tone: "teal",
      projectUrl: "https://github.com/MishkoGo/scanner_pdf",
      linkLabel: "GitHub",
      demo: "scanner",
    },
    {
      title: "Your Best Memories",
      period: "Flutter map scenario",
      description:
        "I worked on a mobile memories app scenario with map-based interaction, places, and a visual journey through saved moments.",
      stack: ["Flutter", "Dart", "Mapbox", "Mobile UX"],
      highlights: [
        "I worked on the map scenario branch and location-based user experience.",
        "I prepared a product-style flow around memory points and routes.",
        "I focused on making map interactions understandable for mobile users.",
      ],
      tone: "blue",
      projectUrl: "https://github.com/Julia-ops-star/Your-Best-Memories-Mobile-App/tree/map_box_scenario",
      linkLabel: "GitHub",
      demo: "memories",
    },
    {
      title: "MyUni",
      period: "Google Play release",
      description:
        "I worked with a student-focused mobile app for study, work, events, classifieds, courses, and social university life.",
      stack: ["Flutter", "Dart", "Mobile UX", "Google Play"],
      highlights: [
        "I worked with a real published Android product available on Google Play.",
        "I built product flows around jobs, events, announcements, and student services.",
        "I focused on clear mobile navigation for a multi-feature student app.",
      ],
      tone: "pink",
      projectUrl: "https://play.google.com/store/apps/details?id=com.melonytech.myuni&hl=ru",
      linkLabel: "Google Play",
      demo: "myuni",
    },
  ] satisfies ProjectItem[],
  sourceUrl: "https://github.com/MishkoGo",
} as const;

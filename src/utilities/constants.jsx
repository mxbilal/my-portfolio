import { LuLinkedin, LuGithub } from "react-icons/lu";
import { SiCodewars } from "react-icons/si";
import lyca from "../assets/engagement.png";
import plexaar from "../assets/plex.jpg";
import traderos from "../assets/traderos.png";
import eventooz from "../assets/eventooz.png";

export const navLinks = [
  {
    url: "/#",
    name: "Home",
  },
  {
    url: "/#about",
    name: "About",
  },
  {
    url: "/#experience",
    name: "Experience",
  },
  {
    url: "/#projects",
    name: "Projects",
  },
  {
    url: "/#contact",
    name: "Contact",
  },
];

export const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js / NestJS",
  "Express.js",
  "GraphQL",
  "MongoDB",
  "Redux / RTK Query",
  "Tailwind / MUI",
  "AWS / GCP / Vercel",
];

export const social_links = [
  {
    url: "https://github.com/mxbilal/",
    icon: <LuGithub className="w-[22px] h-[22px]" />,
    name: "Github",
  },
  {
    url: "https://www.linkedin.com/in/mxbilal0/",
    icon: <LuLinkedin className="w-[22px] h-[22px]" />,
    name: "Linkedin",
  },
  {
    url: "https://www.codewars.com/users/bilalCode/",
    icon: <SiCodewars className="w-[22px] h-[22px]" />,
    name: "CodeWar",
  },
];

export const experience = [
  {
    company: "Irtiqa Business Solutions",
    role: "Full Stack Developer",
    location: "Remote, Saudi Arabia",
    period: "Sep 2023 — Present",
    points: [
      "Built REST APIs with NestJS and MongoDB for production SaaS products.",
      "Designed SSO flows in React to streamline authentication across apps.",
      "Shipped micro-frontend and microservices architecture for scalability.",
      "Deployed and operated apps on AWS and Vercel.",
    ],
  },
  {
    company: "Xint Solutions",
    role: "Frontend Developer",
    location: "Lahore, Pakistan",
    period: "Mar 2023 — Aug 2023",
    points: [
      "Built feature-rich web apps with React, Next.js, and Node.",
      "Wrote clean, maintainable code following industry standards.",
      "Integrated Google Maps for real-time location tracking.",
    ],
  },
  {
    company: "Selteq IT Solutions",
    role: "Full Stack Developer",
    location: "Islamabad, Pakistan",
    period: "Mar 2021 — Mar 2023",
    points: [
      "Developed booking REST APIs with Node.js.",
      "Built the admin site for managing customers and providers.",
      "Shipped reusable UI components and performance-focused frontend work.",
    ],
  },
];

export const education = {
  school: "COMSATS University",
  degree: "Bachelor of Science in Computer Science",
  location: "Islamabad, Pakistan",
  period: "Sep 2017 — Jul 2021",
};

export const mainProjects = [
  {
    title: "TraderOS",
    description:
      "AI trading workspace for chat-driven research, market reports, a TradingView extension, and journal workflows. Primary frontend engineer on the product, with NestJS billing and auth surfaces.",
    tags: ["React", "TypeScript", "Vite", "FastAPI", "NestJS", "Supabase"],
    github: "",
    demo: "https://beta.traderos.ai",
    image: traderos,
  },
  {
    title: "Eventooz",
    description:
      "Event discovery and ticketing for India — registrations, Razorpay checkout, QR passes, and organizer check-in. Built the attendee/organizer web app, NestJS API, and AWS deployment.",
    tags: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "Supabase",
      "Razorpay",
      "AWS",
    ],
    github: "",
    demo: "https://eventooz.com",
    image: eventooz,
  },
  {
    title: "Plexaar CRM & Expert Services",
    description:
      "A CRM with VoIP built in. Businesses sign up, manage clients and staff, book meetings, and run expert service flows. Built booking APIs, staff management, and a Storybook UI library.",
    tags: ["React", "MUI", "Storybook", "Node.js", "MongoDB", "Redux"],
    github: "",
    demo: "https://plexaar.com/",
    image: plexaar,
  },
  {
    title: "LYCA Audit Tool",
    description:
      "Enterprise audit software for creating clients, running audits, and managing auditor assignments. NestJS APIs on the backend with React and RTK Query on the frontend.",
    tags: ["TypeScript", "React", "NestJS", "MongoDB", "Redux", "RTK Query"],
    github: "",
    demo: "https://devapp-sso.lyca.sa/",
    image: lyca,
  },
];

export const otherProjects = [
  {
    title: "Haq",
    description:
      "Source-first explorer for Pakistan's Constitution — Article browse/search, English/Urdu layouts, and cited Ask Haq answers. Next.js frontend with a NestJS + Supabase API.",
    tags: ["Next.js", "NestJS", "Supabase", "TypeScript", "Tailwind"],
    github: "https://github.com/mxbilal/haq-frontend",
    demo: "",
  },
  {
    title: "Traddoo Trading App",
    description:
      "Prop trading firm UI with GraphQL integration, charts, and multi-platform trading flows. Built the user-facing React interface and API integrations.",
    tags: ["Next.js", "MUI", "Tailwind", "Chart.js", "GraphQL"],
    github: "https://github.com/mxbilal/Trado_User_UI",
    demo: "https://trado-user-ui.vercel.app/",
  },
  {
    title: "Github Profile Previewer",
    description:
      "Fetches GitHub data via API and presents a clean showcase of repositories. Built with HTML, CSS, and JavaScript DOM.",
    tags: ["HTML", "CSS", "JavaScript", "Github API"],
    github: "https://github.com/mxbilal/github-profile-search",
    demo: "https://github-profile-search-eight.vercel.app/",
  },
];

export const resumeUrl = "/Muhammad_Bilal_Full_Stack.pdf";

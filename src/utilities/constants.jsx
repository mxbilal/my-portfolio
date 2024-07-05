import { LuLinkedin, LuGithub } from "react-icons/lu";
import { RiSwordLine } from "react-icons/ri";
import { SiGeeksforgeeks, SiCodewars } from "react-icons/si";
import lyca from "../assets/engagement.png";
import plexaar from "../assets/plex.jpg";
import eventImg from "../assets/event.png";

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
    url: "/#projects",
    name: "Projects",
  },
  {
    url: "/#contact",
    name: "Contact",
  },
];

export const skills = [
  "JavaScript",
  "React Js",
  "Next Js",
  "NodeJS",
  "Redux Toolkit",
  "RTK Query",
  "React Storybook",
  "Tailwind",
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

export const mainProjects = [
  {
    title: "LYCA Audit Tool",
    description:
      "This is a audit firm which manages and audit different companies through registering them as a client and doing their audit",
    tags: ["React", "Redux", "RTK Query", "Mui", "Microfrontend Architecture"],
    github: "",
    demo: "https://devapp-sso.lyca.sa/",
    image: lyca,
  },
  {
    title: "Plexaar CRM",
    description:
      "Plexaar is a CRM Application, where different businesses register themself and manage their clients and staff.",
    tags: ["React", "Redux", "Scss", "Mui", "React Storybook"],
    github: "",
    demo: "https://plexaar.com/",
    image: plexaar,
  },
  {
    title: "Event Organizer",
    description:
      "This is a event Organizer Website, where users watch live and recorded videos events, also it have live questions and answers and live polls",
    tags: ["React", "Mui", "API", "SCSS", "Live poll and events"],
    github: "",
    demo: "",
    image: eventImg,
  },
];

export const otherProjects = [
  {
    title: "Github Profile Previewer",
    description:
      "Crafted using HTML, CSS, and JavaScript DOM, it fetches your GitHub data via API, presenting a clean showcase of repositories.",
    tags: ["HTML", "CSS", "JavaScript", "Github API"],
    github: "https://github.com/mxbilal/github-profile-search",
    demo: "https://github-profile-search-eight.vercel.app/",
  },
];

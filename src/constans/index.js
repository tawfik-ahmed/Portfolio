import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "NextJs Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Case Cobra",
    description:
      "CaseCobra is an innovative e-commerce web app where users can create and purchase personalized phone cases using their uploaded images, unique designs, colors, materials, and finishes. ",
    tags: [
      {
        name: "next.js",
        color: "pink-text-gradient",
      },
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: "/CaseCobra.png",
    live_link: "https://casecobra-ten-beryl.vercel.app",
    source_code_link: "https://github.com/tawfik-ahmed/casecobra",
  },
  {
    name: "The Wild Oasis Admin",
    description:
      "This hotel management web app allows employees to manage cabins, bookings, and guests efficiently, while enabling users to edit their accounts and control cabins and bookings.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: "/the-wild-oasis-admins.jpg",
    live_link: "https://the-wild-oasis-t.netlify.app",
    source_code_link: "https://github.com/tawfik-ahmed/the-wild-oasis",
  },
  {
    name: "The Wild Oasis",
    description:
      "The Wild Oasis Customers is a web platform for booking cabins. Users can log in with their Google accounts, submit booking requests, and track them until approval by the official company.",
    tags: [
      {
        name: "next.js",
        color: "pink-text-gradient",
      },
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: "/the-wild-oasis.png",
    live_link: "https://the-wild-oasis-t-website.vercel.app",
    source_code_link: "https://github.com/tawfik-ahmed/the-wild-oasis-website",
  },
  {
    name: "Threads Clone",
    description:
      "This is a clone of the popular social media platform Threads, built with modern technologies. The web app provides a full set of features, including user authentication, thread creation, profile management, and community building, designed with an elegant and responsive user interface.",
    tags: [
      {
        name: "next.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: "/threads-clone.png",
    live_link: "https://threads-clone-t.vercel.app",
    source_code_link: "https://github.com/tawfik-ahmed/Threads",
  },
];

export { services, technologies, projects };

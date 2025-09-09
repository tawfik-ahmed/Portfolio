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
  docker,
  express,
  graphql,
  jsonwebtoken,
  postgresql,
  restapi,
  socketio,
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
    title: "Frontend Services",
    icon: mobile,
  },
  {
    title: "Backend Services",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Rest API",
    icon: restapi,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "JWT",
    icon: jsonwebtoken,
  },
  {
    name: "Socket.io",
    icon: socketio,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Nasa Mission Control",
    description:
      "NASA Mission Control is an interactive web app for exploring and managing NASA mission data, featuring real-time updates, smooth animations, and an immersive interface. ",
    tags: [
      {
        name: "express.js",
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
    ],
    image: "/NasaApp.png",
    live_link: "https://nasa-mission.up.railway.app",
    source_code_link: "https://github.com/tawfik-ahmed/NASA_Mission_Control",
  },
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
      "This is a clone of the popular social media platform Threads. the web app provides a full set of features, including user authentication, thread creation, profile management, and community building.",
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

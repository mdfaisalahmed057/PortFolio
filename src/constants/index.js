import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  nike,
  mediumpro,
  linkclone,
  threejs,
 
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "React Native",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Sql",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MySql",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Pre-University (PUC)",
    company_name: "Crescent Pu College of Science",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2017 - April 2019",
    points: "7.4%"
  },
  {
    title: "B.E (ISE)",
    company_name: "AMC Engineering College Bnglr",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - jun 2023",
    points: "7.9 CGPA"
  },
 
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "I have developed a mobile application for selling Nike shoes, featuring a visually stunning user interface and fortified authentication using JWT. The app utilizes MongoDB as its database for storing and querying data, and incorporates the Redux Toolkit library for state management",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb,Nodejs,Expressjs",
        color: "green-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/mdfaisalahmed057/Nike_App",
  },
  {
    name: "Medium",
    description:
      "This web application empowers users to engage in knowledge sharing on diverse topics like tech, food, and entertainment. It implements secure JWT authentication to safeguard user privacy. With functionalities to create, delete, and edit posts, users maintain complete control over their content, fostering an interactive and personalized experience",
    tags: [
      {
        name: "React,#Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: mediumpro,
    source_code_link: "https://github.com/mdfaisalahmed057/medium",
  },
  {
    name: "Blog-Web-App",
    description:

    "Developed a static blog web app using Material UI, React.js, and CSS, with responsive design for mobile and desktop devices. Includes dark mode for better readability in low-light settings and a pop post section with a user-friendly navbar and menu bar for smooth navigation."   ,
     tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: linkclone,
    source_code_link: "https://github.com/mdfaisalahmed057/linkdin-clone",
  },
];

export { services, technologies, experiences, testimonials, projects };

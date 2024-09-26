import React from "react";
import GerichtImg from "@/public/web-image (2).png";
import portfolioImg from "@/public/web-image (1).png";
import reachImg from "@/public/web-image (3).png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: portfolioImg,
    link: "https://muzna-portfolio.vercel.app",
  },
 { title: "Gericht",
  description:"A resturant app which shows the menu with the prices and ambience of the place ",
  tags: ["React", "JavaScript", "CSS"],
  imageUrl: GerichtImg,
  link: "https://my-app-resturant.vercel.app/", 
},
{
  title: "Yariga",
  description:
    "A fully functional dashboard app with CRUD implementation and database management as well. Charts are also used to show analytics",
  tags: ["MongoDB", "Express", "React", "Node.js"],
  imageUrl: reachImg,
  link: "#",
},
  {
    title: "REACH Portal",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["HTML", "CSS", "Bootstrap"],
    imageUrl: reachImg,
    link: "#",
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Figma",
  "Webflow",
  "Python",
  "Framer Motion",
] as const;

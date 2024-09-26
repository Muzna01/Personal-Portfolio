import React from "react";
import GerichtImg from "@/public/web-image (2).png";
import portfolioImg from "@/public/web-image (1).png";
import reachImg from "@/public/web-image (3).png";
import gptImg from "@/public/web-image(4).png";
import yarigaImg from "@/public/web-image (5).png";
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
    title: "My Portfolio",
    description:
      "A simple NextJs portfolio that showcases my projects and skills. Implemented smooth animations and a responsive design. Click to visit the website",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: portfolioImg,
    link: "https://muzna-portfolio.vercel.app",
  },
 { title: "Gericht",
  description:"A resturant layout which shows the menu with the prices and ambience of the place made by following a figma design. Click to visit the website",
  tags: ["React", "JavaScript", "CSS"],
  imageUrl: GerichtImg,
  link: "https://my-app-resturant.vercel.app/", 
},
{
title: "GPT3",
description:
  "A simple React layout made also by following a figma design. Learned different concepts by making this layout. Click to visit the github repo",
tags: ["React", "JavaScript", "CSS"],
imageUrl: gptImg,
link: "https://github.com/Muzna01/my-app",
},
{
  title: "Yariga",
  description:
    "A fully functional dashboard app with CRUD implementation and database management as well. Charts are also used to show analytics. Click to visit the github repo",
  tags: ["MongoDB", "Express", "React", "Node.js"],
  imageUrl: yarigaImg,
  link: "https://github.com/Muzna01/MernApp-Yariga",
},
  {
    title: "REACH Portal",
    description:
      " A user-firendly data management portal layout designed and developed by me so that the management can save their data. ",
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

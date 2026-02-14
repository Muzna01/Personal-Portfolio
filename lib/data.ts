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
    name: "Skills",
    hash: "#experience",
  },
  {
    name: "Testimonials",
    hash: "#projects",
  },
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },

  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;


export const projectsData = [
  {
    title: "Johnsngoni",
    description:
      "I am speechless. He has embodied me. I am reading the work like it's what I would write, the perfect word and expression, the warmth and care, it all is so familiar. When I decided to get help because I developed brain fog, I couldn't have asked for anyone better to finish what I started, fine tune my work. Take the time to read all my research material, ask the right questions and channel me. I am forever grateful, truly humbled.",
    tags: ["5.0 rating"],
  },
  {
    title: "Teewayn",
    description: "During the writing process, the seller became more than an author but a friend / family. The writing experience was intense but worth it. Enjoyed every moment and will definitely work with him again",
    tags: ["5.0 rating"],
  },
  {
    title: "Johnsngon",
    description:
      "Thank you Mehwish for another great project delivery. I sincerely appreciate your support in bringing this book to life. Taking on my crazy Ideas and excessive notes. It's been a real pleasure. It's a page turner!",
    tags: ["5.0 rating"],
  },
  {
    title: "Johnsngon",
    description:
      "Yet another project delivered to an exceptional standard. I have learnt so much working with Mehwish, his adaptability to my writing style continues to show and I am forever grateful. I cannot walt to work together on future projects. Thank you for helping me bring my story to life",
    tags: ["5.0 rating"],
  },
  {
    title: "Islamsami",
    description:
      " Mehwish G did an AMAZING job on my book, going above and beyond with exceptional professionalism and attention to detail. Her quick responsiveness, politeness, and deep understanding made the entire process smooth and enjoyable. Thank you so much-I'l definitely reach out again! ",
    tags: ["5.0 rating"],
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

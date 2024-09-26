"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {

  return (
    <motion.section
     
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >  
    <SectionHeading>About me</SectionHeading> 
      <p className="mb-3">
        As a recent{" "}
        <span className="font-semibold  italic">Computer Science </span>graduate from{" "}
        <span className="font-semibold  italic">COMSATS University Lahore,</span>{" "}
        I&apos;m a driven and passionate web developer with a deep focus on frontend technologies. With hands-on expertise in  <span className="font-semibold  italic">JavaScript, TypeScript, React, and Next.js,</span> I build sleek, high-performance web applications that merge functionality with creativity. My approach is rooted in 
        <span className="font-medium italic"> problem-solving and writing clean, efficient code that delivers seamless user experiences. </span> I thrive on tackling new challenges and am eager to bring my energy and skills to a dynamic team where I can make an immediate impact. 
      </p>

      <p>
        <span className="italic">Beyond coding, I have a strong flair for design, with proficiency in </span>{" "}
        <span className="font-semibold  italic">Figma and Sketch</span> to create visually compelling, intuitive interfaces. I&apos;m continuously exploring new tools and technologies. , I&apos;m actively seeking a full-time opportunity where I can make an {" "}
        <span className="font-medium italic">impact and continue growing in the fast-evolving world of web development.</span>.
      </p>
    </motion.section>
  );
}




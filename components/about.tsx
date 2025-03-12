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
      As a <span className="font-semibold italic">Computer Science</span> graduate from  
  <span className="font-semibold italic"> COMSATS University Lahore,</span> I thrive at the intersection of  
  <span className="font-semibold "> web development and process automation.</span> Currently interning at  
  <span className="font-semibold italic"> CONFIZ,</span> I’m gaining hands-on experience with  
  <span className="font-semibold "> ISO standards, Power Automate, and SharePoint,</span> optimizing workflows for efficiency.  
  With a strong command of <span className="font-semibold"> JavaScript, TypeScript, React, and Next.js,</span>  
   I build high-performance web applications that seamlessly blend functionality and creativity.  
  <span className="font-medium "> I thrive on continuous learning and problem-solving, always seeking innovative solutions.</span>
</p>

<p>
  <span className="italic">Beyond coding, my passion for design drives me to craft user-centric experiences with </span>  
  <span className="font-semibold ">Figma</span>. I’m always eager to learn, grow, and push the boundaries of what’s possible.  
  <span className="font-medium ">With an ever-curious mindset, I embrace new challenges and strive to make a real impact.</span>
</p>
    </motion.section>
  );
}




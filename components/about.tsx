"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import image from "../public/dashboard.jpeg"
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
      <p className="mb-8">I’m Mehwish Gul, a Content Strategist and Writer who believes every data point has a story to tell. My journey began in the pages of everything from romance novels to dense nonfiction, giving me a unique edge: the ability to blend narrative warmth with analytical depth. Whether it's a deep-dive SaaS article or a structured academic guide, I write to turn readers into results.

      </p>
      <SectionHeading>Highlights</SectionHeading>
      <p className="mb-8">
        1M+ Words Delivered: Proven expertise across Tech, SaaS, and Lifestyle. <br></br>
        85% Repeat Client Rate: Built on a foundation of reliability and consistency.<br></br>
        17+ International Brands: Delivering high-quality content for a global audience.<br></br>
        Dual Expertise: Seamlessly pivoting between creative storytelling and rigorous academic/technical writing.<br></br>

      </p>
      <div className="mb-12 flex justify-center bg-red">
        <Image
          src="/dashboard.jpeg"
          alt="Dashboard preview"
          width={700}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      <SectionHeading>What Sets Me Apart</SectionHeading>
      <p className="mb-8">
        Human-Centric Strategy: I use AI-assisted efficiency to handle the heavy lifting, ensuring the final output remains original, deep, and focused on real human connection.<br></br>
        Research-First Mindset: From CSS-level Islamic Studies to backend product descriptions, my work is grounded in credible data and structured for clarity.<br></br>
        Growth-Oriented: I don’t just write; I build brand authority and boost engagement through SEO-optimized, narrative-driven content.<br></br>


      </p>
      <SectionHeading>Featured Project "Islamic Studies Mastery" </SectionHeading>
      <p>
        I specialize in transforming complex theological and historical concepts into clear, exam-oriented material
        <a href="https://shop.nearpeer.org/products/css-pms-islamic-studies-premium-handwritten-notes-by-mohammad-murtaza" className="text-blue-700 underline" target="_blank">(Link to Shop)</a>
      </p>
    </motion.section >
  );
}




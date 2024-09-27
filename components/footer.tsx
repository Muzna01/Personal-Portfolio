"use client";

import React from 'react'
import SectionHeading from './section-heading'
import {motion} from "framer-motion"
export default function Footer() {
  return (
    <motion.footer className="  py-4 bg-gray-200 w-full"
    id='contact'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.1,
    }}>
        <SectionHeading> Contact Me</SectionHeading>
      <div className="container mx-auto text-center  text-gray-500">
        
        <ul className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-2 sm:space-y-0 font-medium pb-5">

          <li>
            muznaahmer@gmail.com
          </li>
          <li>
            <a href="https://linkedin.com/in/muzna-ahmer-215829301/" className="hover:text-gray-800" target="_blank" >
              LinkedIn
            </a>
          </li>
        </ul>
        <p className="text-xs sm:text-sm"        >
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}


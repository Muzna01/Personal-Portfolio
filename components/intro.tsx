"use client";

import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import image from "@/public/vecteezy_3d-illustration-of-a-teenage-female-programmer-at-the_35893311.png"
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";


export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] "
    id='home'>
        <div className="flex items-center justify-center">
            <div className= "relative">
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  duration: 0.5,
                }}
                >

                    <Image
                    src={image}
                    alt='image'
                    height="300"
                    width="300"
                    priority={true}
                    className="rounded-full object-cover border-[0.1rem] border-white shadow-xl"

                    />
                </motion.div>                          
            </div>
        </div>
        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="font-bold">Hi, I&apos;m Muzna.</p> {""}
        <p className="font-bold ">I&apos;m a Web Developer.</p>
        </motion.h1>


        <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 sm-text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 mr-2 active:scale-105 transition cursor-pointer borderBlack"
          href="/CV.pdf"
          download
        >
          CV File{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a> 

        <a
          className="bg-black p-4 text-gray-100  flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://linkedin.com/in/muzna-ahmer-215829301/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-black p-4 text-gray-100 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/Muzna01"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        </motion.div>
    </section>
  )
}

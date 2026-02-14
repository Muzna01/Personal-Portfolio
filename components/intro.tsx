"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import image from "@/public/IMG_3149.JPG.jpeg"
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaBookOpen } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] "
      id='home'>
      <div className="flex items-center justify-center">
        <div className="relative">
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
        <p className="font-bold">Hi, myself Mehwish Gul.</p> {""}
        <p className="font-bold ">I&apos;m a Content Writer.</p>
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
          href="/Mehwish CV 25' Final.pdf"
          download
        >
          CV File{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-black p-4 text-gray-100  flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="/Compiling Tees life into a book.pdf"
          download
        >
          <FaBookOpen />
        </a>
        <a
          className="bg-black p-4 text-gray-100  flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/mehwish-gul-857123179"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-black p-4 text-gray-100 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.fiverr.com/mehwishgull"
          target="_blank"
        >
          <TbBrandFiverr />
        </a>
      </motion.div>
    </section>
  )
}

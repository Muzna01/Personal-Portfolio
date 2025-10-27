"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";
import visionImg from "@/public/vision.jpeg";
import confizImg from "@/public/confiz.png";

type ExperienceData = {
    title: string;
    company: string;
    location: string;
    description: string[];
    icon: string;
    date: string;
};

const experienceData: ExperienceData[] = [
    {
        title: "Software Developer",
        company: "VisionSwipe",
        location: "Remote",
        date: "Dec 2024 - Present",
        description: [
            "Developed and maintained applications using JavaScript, TypeScript, React, and Next.js, ensuring responsive and scalable user interfaces",
            "Created and integrated REST APIs, debugged issues, and developed new functionality to support scalable applications",
            "Designed and deployed AI-powered chatbots and assistants on multiple websites, enabling users to ask questions and receive instant support",
            "Incorporated AI-driven message interception systems to ensure communications remained compliant with platform policies",
            "Currently working on an online pharmacy and marketplace platform, enhancing both the user-facing site and vendor dashboard with new features and usability improvements",
            "Ensured clean, maintainable code through modular components, rigorous testing with Postman, Swagger, ngrok, and reliable deployment using Docker",
            "Collaborated directly with clients and end users to gather requirements, integrate feedback, and deliver effective updates",
            "Contributed to backend development tasks, strengthening understanding of full-stack workflows",
        ],
        icon: "vision",
    },
    {
        title: "Process Audit Intern",
        company: "Confiz",
        location: "Lahore, Pakistan",
        date: "Dec 2024 - Sept 2025",
        description: [
            "Collaborated with cross-functional teams to analyze and document processes",
            "Supported internal audit for ISO standards: ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), ISO 45001:2018 (Health & Safety), ISO 27001:2022 (Information Security), ISO 20000-1:2018 (IT Service Management)",
            "Supported external audit for ISO 45001:2018 (Health & Safety)",
            "Supported audit lifecycle: scheduling, coordination, execution, and documentation of internal audits across departments",
            "Assisted in preparing audit plans, compiling audit findings, and tracking non-compliance follow-ups",
            "Created and published audit and diagnostic reports; contributed to action plans and compliance documentation",
            "Developed automated workflows using Power Automate to streamline routine audit and reporting tasks",
            "Designed ISO training materials and coordinated training sessions across departments",
            "Learned Sharepoint and revamped the department's site",
            "Contributed to project management activities, supporting planning, coordination, and execution of tasks",
            "Coordinated project activities on Jira, ensuring timely task completion and audit readiness",
            "Actively learning and exploring Generative AI applications to enhance process optimization capabilities",
        ],
        icon: "confiz",
    },
];

export default function Experience() {
    return (
        <motion.section
            id="experience"
            className="scroll-mt-28 mb-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <SectionHeading>Experience</SectionHeading>
            <div className="w-full">
                <div className="overflow-x-auto pb-4">
                    <div className="flex md:gap-6 px-4 gap-8 justify-center flex-wrap lg:flex-nowrap ">
                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 min-w-[18rem] sm:w-[22rem] sm:flex-shrink-0 transition-all duration-300 shadow-lg hover:shadow-xl group"
                            >
                                {/* Company Icon */}
                                <div className="flex items-center gap-4 mb-6">
                                    <motion.div
                                        className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white border-2 border-gray-200 shadow-lg group-hover:border-gray-400 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        {exp.icon === "vision" ? (
                                            <Image
                                                src={visionImg}
                                                alt={exp.company}
                                                width={64}
                                                height={64}
                                                className="object-cover"
                                            />
                                        ) : (
                                            <Image
                                                src={confizImg}
                                                alt={exp.company}
                                                width={64}
                                                height={64}
                                                className="object-cover"
                                            />
                                        )}
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                                        <p className="text-sm text-gray-600 font-medium">{exp.company}</p>
                                    </div>
                                </div>

                                {/* Date and Location */}
                                <div className="mb-5 pb-4 border-b border-gray-200">
                                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                        <p>{exp.date}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mt-1">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                        <p>{exp.location}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                    {exp.description.map((desc, descIndex) => (
                                        <motion.p
                                            key={descIndex}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 + descIndex * 0.05 }}
                                            className="text-sm text-gray-700 leading-relaxed flex items-start group/item"
                                        >
                                            <span className="mr-3 text-blue-500 font-bold group-hover/item:text-blue-600 transition-colors">•</span>
                                            <span className="flex-1">{desc}</span>
                                        </motion.p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </motion.section>
    );
}


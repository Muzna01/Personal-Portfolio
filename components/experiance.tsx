"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

type ExperienceData = {
    title: string;
    description: string[];
};

const experienceData: ExperienceData[] = [
    {
        title: "SaaS & Tech Content Writing",
        description: ["Clear, engaging, and conversion-focused content that simplifies complex technology for targeted audiences."
        ],

    },
    {
        title: "Academic & Exam-Oriented Writing",
        description: ["Structured, research-backed material designed to enhance clarity, retention, and exam performance."
        ],
    },
    {
        title: "SEO-Optimized Blog Content",
        description: ["Keyword-strategic, value-driven articles that improve search rankings and drive organic traffic."
        ],

    },
    {
        title: "Brand Authority & Narrative Strategy",
        description: ["Story-driven content that builds credibility, strengthens brand voice, and deepens audience trust."
        ],
    },
    {
        title: "Research-Based Structured Guides",
        description: ["Well-organized, data-supported guides that transform complex information into actionable insights."
        ],

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
            <SectionHeading>My Skills</SectionHeading>
            <div className="w-full">
                <div className="overflow-x-auto pb-4">
                    <div className="flex md:gap-6 px-4 gap-8 justify-center flex-no-wrap lg:flex-wrap ">
                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 min-w-[18rem] sm:w-[22rem] sm:flex-shrink-0 transition-all duration-300 shadow-lg hover:shadow-xl group"
                            >
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
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


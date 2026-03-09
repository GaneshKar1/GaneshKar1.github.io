"use client";

import { motion } from "framer-motion";
import { Briefcase, Activity, Database, Users } from "lucide-react";

type ExperienceType = {
    id: string;
    role: string;
    company: string;
    date: string;
    points: string[];
    icon: React.ReactNode;
};

const experiences: ExperienceType[] = [
    {
        id: "shepard",
        role: "AI Quant Research Intern",
        company: "Shepard Ventures",
        date: "Present",
        icon: <Activity size={20} className="text-teal-400" />,
        points: [
            "Developed an algorithmic stress testing framework to evaluate strategy robustness under extreme market conditions.",
            "Implemented GARCH models to forecast volatility and optimize portfolio risk exposure.",
            "Designed and deployed an 18-stock defensive Mean Variance Optimizer, significantly improving risk-adjusted returns."
        ],
    },
    {
        id: "dealprint",
        role: "Data Science Research Intern",
        company: "DealPrint",
        date: "Past",
        icon: <Database size={20} className="text-blue-400" />,
        points: [
            "Engineered a k-Nearest Neighbors (k-NN) machine learning valuation model to predict accurate deal metrics.",
            "Compiled and cleaned a massive proprietary dataset comprising 50,000+ M&A deals for advanced quantitative analysis.",
            "Collaborated with researchers to enhance data pipeline efficiency and model inference speed."
        ],
    },
    {
        id: "gspp",
        role: "IT Assistant",
        company: "GSPP @ UC Berkeley",
        date: "Past",
        icon: <Briefcase size={20} className="text-zinc-400" />,
        points: [
            "Provided robust technical support and IT troubleshooting for faculty and graduate student systems.",
            "Streamlined technical operations to ensure zero downtime for critical academic infrastructure."
        ],
    },
    {
        id: "cs61b",
        role: "Academic Intern (CS 61B)",
        company: "UC Berkeley",
        date: "Past",
        icon: <Users size={20} className="text-purple-400" />,
        points: [
            "Mentored students in Data Structures and Algorithms, focusing on Java memory models and graph theory.",
            "Led review sessions to reinforce concepts in hashing, tree traversals, and dynamic programming."
        ],
    }
];

export default function Experience() {
    return (
        <section className="py-20" id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-zinc-500 font-mono text-sm">01.</span>
                    The Alpha (Experience)
                </h2>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-zinc-800 group-hover:border-zinc-500">
                                {exp.icon}
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/20 hover:bg-zinc-900/50 transition-colors backdrop-blur-sm">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-semibold text-zinc-100">{exp.role}</h3>
                                        <div className="font-mono text-sm text-zinc-400 mt-1">{exp.company}</div>
                                    </div>
                                    <div className="font-mono text-xs px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-300 w-fit">
                                        {exp.date}
                                    </div>
                                </div>
                                <ul className="space-y-2 text-zinc-400 text-sm leading-relaxed">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-zinc-600 mt-1">▹</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "Ganesh Karayi";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i >= fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-[85vh] flex flex-col justify-center gap-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="font-mono text-zinc-400 mb-2">~ {'>'} whoami</div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-100">
                    {text}
                    <span className="animate-pulse">_</span>
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="max-w-2xl"
            >
                <h2 className="text-xl md:text-2xl text-zinc-300 font-light mb-4">
                    Applied Mathematics & Data Science <span className="text-zinc-500">@</span> UC Berkeley
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    AI Quant Research Intern. Passionate about algorithmic stress testing, machine learning for financial applications, and high-performance quantitative models.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 font-mono text-sm">
                    <div className="flex items-center gap-2 text-zinc-500 bg-zinc-900/50 p-2 rounded-md border border-zinc-800/50">
                        <GraduationCap size={16} className="text-zinc-400" />
                        <span>Expected May 2028</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 bg-zinc-900/50 p-2 rounded-md border border-zinc-800/50">
                        <MapPin size={16} className="text-zinc-400" />
                        <span>Berkeley, CA</span>
                    </div>
                </div>

                <div className="flex gap-4 mt-8">
                    <a
                        href="mailto:ganeshkarayi@berkeley.edu"
                        className="flex items-center gap-2 bg-zinc-100 text-zinc-900 px-4 py-2 rounded-md font-medium hover:bg-zinc-300 transition-colors"
                    >
                        <Mail size={18} />
                        <span>Email Me</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/ganeshkarayi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-100 px-4 py-2 rounded-md font-medium hover:bg-zinc-800 hover:border-zinc-700 transition-colors"
                    >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

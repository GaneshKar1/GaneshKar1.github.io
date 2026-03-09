import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Award, ChevronDown } from "lucide-react";

type Course = {
    id: string;
    code: string;
    name: string;
    term: string;
    color: string;
    bg: string;
    description: string;
};

const courses: Course[] = [
    // Computer Science (Blue)
    { id: "eecs126", code: "EECS 126", name: "Probability & Random Processes", term: "Spring 2026", color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20", description: "Rigorous foundation in probability theory, stochastic processes, and information theory tailored for machine learning." },
    { id: "cs61b", code: "CS 61B", name: "Data Structures", term: "Fall 2025", color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20", description: "Advanced implementation and analysis of fundamental data structures, graph theory, and sorting algorithms in Java." },
    { id: "cs61a", code: "CS 61A", name: "Structure & Interpretation of Computer Programs", term: "Spring 2025", color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20", description: "Core concepts of software engineering, abstraction, and functional programming methodologies using Python." },

    // Math/Data (Purple)
    { id: "math104", code: "MATH 104", name: "Introduction to Analysis", term: "Spring 2026", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20", description: "Rigorous proofs and theoretical foundations of real analysis, limits, topology, and metric spaces." },
    { id: "data100", code: "DATA 100", name: "Principles & Techniques of Data Science", term: "Spring 2026", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20", description: "Applied machine learning pipeline architecture, from data wrangling in Pandas to predictive modeling." },
    { id: "datac104", code: "DATA C104", name: "Human Contexts & Ethics of Data", term: "Spring 2026", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20", description: "Evaluating the ethical, legal, and social implications of deployed algorithmic and data systems." },
    { id: "math55", code: "MATH 55", name: "Discrete Mathematics", term: "Fall 2025", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20", description: "Combinatorics, logic, cryptography, and proof techniques essential for theoretical computer science." },
    { id: "math54", code: "MATH 54", name: "Linear Algebra & Differential Equations", term: "Spring 2025", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20", description: "Matrix operations, vector spaces, eigenvalues, and solving systems of differential equations." },
    { id: "math53", code: "MATH 53", name: "Multivariable Calculus", term: "Fall 2024", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20", description: "Optimization, multiple integration, and vector calculus via Green's, Stokes', and Divergence theorems." },
    { id: "data8", code: "DATA 8", name: "Foundations of Data Science", term: "Spring 2025", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20", description: "Introductory statistical inference, hypothesis testing, and empirical distributions." },

    // Economics/Finance (Green)
    { id: "econ143", code: "ECON 143", name: "Macroeconomics (Advanced)", term: "Spring 2026", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20", description: "Dynamic modeling of aggregate economic variables, monetary policy, and long-term fiscal forecasting." },
    { id: "ieor198", code: "IEOR 198", name: "Intro to Quantitative Finance", term: "Fall 2025", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20", description: "Derivatives pricing, Black-Scholes modeling, asset management, and algorithmic trading theory." },
    { id: "econ141", code: "ECON 141", name: "Econometric Analysis", term: "Fall 2025", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20", description: "Statistical tools for analyzing economic data, isolating causal relationships, and mitigating omitted variable bias." },
];

export default function LedgerTab() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="flex flex-col h-full animate-in fade-in duration-500 pb-20">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h2 className="text-3xl font-bold flex items-center gap-3 text-white">
                        <GraduationCap className="text-[#007AFF]" size={28} />
                        Academic Ledger
                    </h2>
                    <p className="text-zinc-400 mt-2 font-mono text-sm max-w-xl">
                        A comprehensive mapping of my analytical foundation across Computer Science, Applied Mathematics, and Quantitative Economics.
                    </p>
                </div>

                {/* GPA Badge */}
                <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4 border border-[#10B981]/30">
                    <div className="p-2 bg-[#10B981]/10 rounded-full text-[#10B981]">
                        <Award size={24} />
                    </div>
                    <div>
                        <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Cumulative</div>
                        <div className="text-2xl font-bold text-white">3.8 <span className="text-[#10B981] text-lg font-mono">GPA</span></div>
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        onClick={() => toggleExpand(course.id)}
                        className={`glass-card rounded-xl border p-5 cursor-pointer transition-all duration-300 ${course.bg} hover:brightness-125`}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className={`font-mono font-bold text-lg tracking-tight ${course.color}`}>
                                {course.code}
                            </h3>
                            <motion.div
                                animate={{ rotate: expandedId === course.id ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown size={16} className="text-zinc-500" />
                            </motion.div>
                        </div>
                        <p className="text-white font-medium text-sm mb-2 line-clamp-2">{course.name}</p>
                        <div className="text-xs font-mono text-zinc-500">{course.term}</div>

                        <AnimatePresence>
                            {expandedId === course.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-sm text-zinc-300 leading-relaxed border-t border-white/10 pt-3">
                                        {course.description}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

        </div>
    );
}

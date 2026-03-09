"use client";

import { motion } from "framer-motion";
import { ActivitySquare, Zap, Target, Network } from "lucide-react";

type ProjectType = {
    title: string;
    description: string;
    tech: string[];
    metrics: string[];
    icon: React.ReactNode;
};

const projects: ProjectType[] = [
    {
        title: "Quantitative Trading Engine",
        description: "Designed a high-throughput trading engine executing a momentum-based Long/Short strategy. Included custom backtesting protocols minimizing latency bias.",
        tech: ["Python", "Pandas", "NumPy", "Backtrader"],
        metrics: ["Sharpe Ratio > 1.8", "Drawdown < 10%"],
        icon: <ActivitySquare className="text-green-400" size={24} />
    },
    {
        title: "Economic Simulation Sandbox",
        description: "Built an agent-based economic sandbox with an AI-driven logic engine powered by an MCP API. Modeled distinct market variables and consumer behaviors.",
        tech: ["Python", "FastAPI", "AI/MCP API", "React"],
        metrics: ["1000+ Agents", "Real-time updates"],
        icon: <Target className="text-red-400" size={24} />
    },
    {
        title: "Formula Electric Simulations",
        description: "Created physics-based vehicle dynamics simulations using numerical integration models to optimize downforce, drag, and electrical load distribution.",
        tech: ["Python", "SciPy", "Matplotlib", "C++"],
        metrics: ["Sub-ms integration", "Aero optimization"],
        icon: <Zap className="text-yellow-400" size={24} />
    },
    {
        title: "Open Project: GNN Market Topology",
        description: "Led a research team to map and analyze market interdependencies utilizing Graph Neural Networks on a vast interconnected corporate dataset.",
        tech: ["PyTorch Geometric", "NetworkX", "SQL"],
        metrics: ["8,000+ JSON entities", "Edge prediction"],
        icon: <Network className="text-blue-400" size={24} />
    }
];

export default function Projects() {
    return (
        <section className="py-20" id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-zinc-500 font-mono text-sm">02.</span>
                    Technical Portfolio
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="group rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6 flex flex-col h-full hover:bg-zinc-900/80 hover:border-zinc-700 transition-all"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                                    {project.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-zinc-100 mb-3 group-hover:text-white transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-col gap-4 mt-auto">
                                {/* Metrics */}
                                <div className="flex flex-wrap gap-2">
                                    {project.metrics.map((metric, j) => (
                                        <span
                                            key={j}
                                            className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 rounded"
                                        >
                                            {metric}
                                        </span>
                                    ))}
                                </div>
                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-x-3 gap-y-1 text-zinc-500 font-mono text-xs">
                                    {project.tech.map((tech, j) => (
                                        <span key={j}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

import { motion } from "framer-motion";
import { TrendingUp, Database, Server, ChevronRight } from "lucide-react";

export default function QuantLabTab() {
    return (
        <div className="flex flex-col h-full animate-in fade-in duration-500 gap-6">

            {/* Shepard Ventures - Primary Focus */}
            <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center border-[#007AFF]/20">
                <div className="flex-1 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#007AFF]/30 text-[#007AFF] text-xs font-mono">
                        Feb 2026 - Present
                    </div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <TrendingUp className="text-[#007AFF]" />
                        Shepard Ventures
                    </h3>
                    <p className="font-mono text-sm text-zinc-400">Quant Research Intern</p>
                    <p className="text-zinc-300 leading-relaxed text-sm max-w-2xl">
                        Spearheading quantitative research focused on Black Swan market events. Developing and implementing Mean-Variance Optimization (MVO) portfolio estimating strategies designed to mitigate risk and optimize performance during extreme market crashes.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* DealPrint */}
                <div className="md:col-span-2 glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between group hover:border-[#007AFF]/30 transition-colors">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-zinc-800/50 rounded-lg text-zinc-300">
                                <Database size={20} />
                            </div>
                            <span className="text-xs font-mono text-zinc-500">Aug 2025 - Jan 2026</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">DealPrint</h3>
                        <p className="text-sm font-mono text-zinc-400 mb-4">ML Valuation Architect</p>
                        <p className="text-sm text-zinc-400 leading-relaxed max-w-lg mb-6">
                            Engineered a k-Nearest Neighbors (k-NN) machine learning valuation model. Leveraged multi-dimensional company characteristics (revenue, SDE, NAICS code) to predict accurate, data-driven estimations for SMB acquisitions.
                        </p>
                    </div>

                    <div className="mt-auto p-4 rounded-xl bg-gradient-to-r from-[#007AFF]/10 to-transparent border-l-2 border-[#007AFF]">
                        <p className="text-sm text-zinc-400 font-mono uppercase tracking-wider mb-1">Dataset Processed</p>
                        <p className="text-3xl font-bold text-white">50,000+ <span className="text-[#007AFF] text-lg">M&A Deals</span></p>
                    </div>
                </div>

                {/* IT Assistant */}
                <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col group hover:border-zinc-600 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-zinc-800/50 rounded-lg text-zinc-300">
                            <Server size={20} />
                        </div>
                        <span className="text-xs font-mono text-zinc-500">Sep 2024 - Present</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">IT Assistant</h3>
                    <p className="text-xs font-mono text-zinc-400 mb-4">Goldman School (GSPP)</p>

                    <ul className="space-y-3 text-sm text-zinc-400 flex-1">
                        <li className="flex gap-2 items-start">
                            <ChevronRight size={16} className="text-[#007AFF] shrink-0 mt-0.5" />
                            <span>Remediated instructional materials for accessibility (alt-text, color contrast).</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <ChevronRight size={16} className="text-[#007AFF] shrink-0 mt-0.5" />
                            <span>Provided rapid technical/AV support during live faculty lectures.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <ChevronRight size={16} className="text-[#007AFF] shrink-0 mt-0.5" />
                            <span>Assisted in deploying building security anti-theft systems.</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

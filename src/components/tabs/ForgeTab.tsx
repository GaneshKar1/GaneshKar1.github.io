import { motion } from "framer-motion";
import { LineChart, Globe, Zap, Network, Activity, Cpu } from "lucide-react";

export default function ForgeTab() {
    return (
        <div className="flex flex-col h-full animate-in fade-in duration-500 gap-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-white">
                    <Hammer className="text-[#007AFF]" size={28} />
                    The Forge
                </h2>
                <p className="text-zinc-400 mt-2 font-mono text-sm">
                    Technical architecture, algorithmic models, and deployed simulations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">

                {/* Trading Engine */}
                <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col group hover:border-[#007AFF]/30 transition-all overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981] opacity-[0.05] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="flex justify-between items-start mb-6 z-10">
                        <div className="p-3 bg-zinc-800/50 rounded-lg text-emerald-400 group-hover:bg-[#10B981]/10 transition-colors">
                            <LineChart size={24} />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-[#10B981] border border-[#10B981]/30 px-2 py-1 rounded-sm bg-[#10B981]/10 uppercase">Quantitative</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 z-10">Quantitative Trading Engine</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm mb-8 z-10 flex-1">
                        Engineered a high-throughput trading engine executing a momentum-based Long/Short strategy. Developed custom vectorized backtesting protocols in Python to eliminate loop bottlenecks and minimize latency bias.
                    </p>

                    <div className="grid grid-cols-2 bg-[#10B981]/5 rounded-xl border border-[#10B981]/20 p-4 gap-4 z-10 font-mono">
                        <div>
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Performance</div>
                            <div className="text-lg font-bold text-white flex items-center gap-2">
                                <Activity size={14} className="text-[#10B981]" />
                                1.8 <span className="text-[#10B981] text-xs font-sans font-medium">SHARPE</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Risk Profile</div>
                            <div className="text-lg font-bold text-white">
                                <span className="text-red-400">&lt;</span> 10% <span className="text-red-400 text-xs font-sans font-medium">MAX DD</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Economic Simulation */}
                <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col group hover:border-[#007AFF]/30 transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#007AFF] opacity-[0.05] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="flex justify-between items-start mb-6 z-10">
                        <div className="p-3 bg-zinc-800/50 rounded-lg text-[#007AFF] group-hover:bg-[#007AFF]/10 transition-colors">
                            <Globe size={24} />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-[#007AFF] border border-[#007AFF]/30 px-2 py-1 rounded-sm bg-[#007AFF]/10 uppercase">Simulation</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 z-10">Economic Sandbox</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm mb-6 z-10 flex-1">
                        Built an agent-based country-scale economic sandbox. Modeled distinct market variables, supply chains, and consumer behaviors to visualize the real-time macroeconomic impacts of policy decisions.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto z-10">
                        {["AI Logic Engine", "Python", "MCP API", "FastAPI", "Agent-based Modeling", "React"].map(tech => (
                            <div key={tech} className="px-3 py-1.5 glass rounded-md border border-zinc-700/50 text-xs font-mono text-zinc-400 flex items-center gap-1.5 hover:text-white hover:border-zinc-500 transition-colors">
                                <Cpu size={10} className="text-[#007AFF]" />
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Formula Electric */}
                <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col group hover:border-yellow-500/30 transition-all">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-zinc-800/50 rounded-lg text-yellow-500 group-hover:bg-yellow-500/10 transition-colors">
                            <Zap size={24} />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Formula Electric Dynamics</h3>
                    <p className="text-zinc-400 text-sm mb-4 flex-1">
                        Numerically integrated physics-based vehicle dynamics models optimizing downforce, drag, and electrical load distribution utilizing SciPy and C++.
                    </p>
                    <div className="flex gap-2">
                        <span className="px-2 py-1 bg-zinc-800 text-zinc-300 text-[10px] font-mono border border-zinc-700 rounded">C++</span>
                        <span className="px-2 py-1 bg-zinc-800 text-zinc-300 text-[10px] font-mono border border-zinc-700 rounded">SciPy</span>
                    </div>
                </div>

                {/* Open Project */}
                <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col group hover:border-purple-500/30 transition-all">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-zinc-800/50 rounded-lg text-purple-500 group-hover:bg-purple-500/10 transition-colors">
                            <Network size={24} />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">GNN Market Topology</h3>
                    <p className="text-zinc-400 text-sm mb-4 flex-1">
                        Applying Graph Neural Networks (GNNs) across 8,000+ JSON corporate entities to predict edge relationships and map market interdependencies.
                    </p>
                    <div className="flex gap-2">
                        <span className="px-2 py-1 bg-zinc-800 text-zinc-300 text-[10px] font-mono border border-zinc-700 rounded">PyTorch Geo</span>
                        <span className="px-2 py-1 bg-zinc-800 text-zinc-300 text-[10px] font-mono border border-zinc-700 rounded">NetworkX</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

// Ensure Hammmer import
import { Hammer } from "lucide-react";

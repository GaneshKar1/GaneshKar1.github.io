import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Calendar, MapPin, ExternalLink } from "lucide-react";

export default function TerminalTab() {
    return (
        <div className="flex flex-col h-full animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row gap-6 h-full">

                {/* Main Identity Bento */}
                <div className="flex-2 glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#007AFF] opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[#10B981]/30 text-[#10B981] text-xs font-mono mb-8 relative z-10 w-fit">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                        </span>
                        📍 Currently: Interning @ Shepard Ventures
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Hi, I'm Ganesh.
                    </h2>

                    <div className="space-y-6 text-zinc-400 leading-relaxed max-w-2xl relative z-10">
                        <p className="text-lg">
                            I'm an undergraduate at <span className="text-zinc-200">UC Berkeley</span> studying Applied Math and Data Science, graduating in May 2028. I am deeply interested in the intersection of finance, AI, and machine learning, specifically exploring how they combine to solve complex forecasting challenges.
                        </p>
                        <p>
                            Currently, I'm conducting Quantitative Research at Shepard Ventures, focusing on analyzing Black Swan market events using sophisticated estimation strategies. On campus, I support the community as an Academic Intern for CS 61B (Data Structures) and an IT Assistant at the Goldman School of Public Policy.
                        </p>
                        <p>
                            When I'm not in a terminal or analyzing risk models, I'm an avid fan of rock climbing and always open to discussing industry trends, side projects, or casual interests!
                        </p>
                    </div>
                </div>

                {/* Action Column */}
                <div className="flex-1 flex flex-col gap-6">

                    {/* Calendly CTA */}
                    <a
                        href="https://calendly.com/ganeshkarayi-berkeley/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card flex-1 min-h-[160px] rounded-2xl p-8 flex flex-col justify-between hover:bg-[#007AFF]/10 hover:border-[#007AFF]/30 transition-all group"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-[#007AFF]/20 text-[#007AFF] rounded-xl">
                                <Calendar size={24} />
                            </div>
                            <ExternalLink size={18} className="text-zinc-500 group-hover:text-[#007AFF] transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Book a Chat</h3>
                            <p className="text-sm text-zinc-400 font-mono">30 Min // Coffee or Tech</p>
                        </div>
                    </a>

                    {/* Social Links Bento */}
                    <div className="glass-card flex-1 min-h-[160px] rounded-2xl p-6 grid grid-cols-2 gap-4">
                        <a href="mailto:ganeshkarayi@berkeley.edu" className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl hover:bg-zinc-800/50 transition-colors group">
                            <Mail className="text-zinc-400 group-hover:text-white transition-colors" size={24} />
                            <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300">Email</span>
                        </a>
                        <a href="https://www.linkedin.com/in/ganesh-karayi/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl hover:bg-zinc-800/50 transition-colors group">
                            <Linkedin className="text-zinc-400 group-hover:text-[#007AFF] transition-colors" size={24} />
                            <span className="text-xs font-mono text-zinc-500 group-hover:text-[#007AFF]">LinkedIn</span>
                        </a>
                        <a href="https://instagram.com/ganeshkarayi" target="_blank" rel="noopener noreferrer" className="col-span-2 flex flex-col items-center justify-center gap-3 p-4 rounded-xl hover:bg-zinc-800/50 transition-colors group">
                            <Instagram className="text-zinc-400 group-hover:text-pink-500 transition-colors" size={24} />
                            <span className="text-xs font-mono text-zinc-500 group-hover:text-pink-500">Instagram</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

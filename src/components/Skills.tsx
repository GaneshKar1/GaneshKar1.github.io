"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Heart } from "lucide-react";

export default function Skills() {
    const categories = [
        {
            title: "Core Languages & Tech",
            icon: <Code2 className="text-emerald-400" size={20} />,
            items: ["Python (Pandas/NumPy)", "SQL", "Java", "AWS", "FastAPI", "Git"]
        },
        {
            title: "Spoken Languages",
            icon: <Globe className="text-blue-400" size={20} />,
            items: ["English", "French", "Malayalam"]
        },
        {
            title: "The Human Side",
            icon: <Heart className="text-rose-400" size={20} />,
            items: ["Prediction Markets (Kalshi)", "Poker", "Rock Climbing", "Origami"]
        }
    ];

    return (
        <section className="py-20" id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-zinc-500 font-mono text-sm">03.</span>
                    Capabilities & Interests
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800/50">
                                <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-zinc-200">
                                    {category.title}
                                </h3>
                            </div>

                            <ul className="space-y-3 font-mono text-sm">
                                {category.items.map((item, j) => (
                                    <li key={j} className="flex items-center gap-2 text-zinc-400">
                                        <span className="text-zinc-600">›</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

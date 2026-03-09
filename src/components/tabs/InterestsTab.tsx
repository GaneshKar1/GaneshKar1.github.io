import { motion } from "framer-motion";
import { Mountain, Spade, TrendingUp, Scissors } from "lucide-react";

export default function InterestsTab() {
    return (
        <div className="flex flex-col h-full animate-in fade-in duration-500 gap-6">
            <div className="mb-6">
                <h2 className="text-3xl font-bold flex items-center gap-3 text-white">
                    <span className="text-pink-500">Off-Chain</span> Life
                </h2>
                <p className="text-zinc-400 mt-2 font-mono text-sm">
                    Disconnecting from the terminal. Tactical probability, physical puzzles, and paper geometry.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-20">

                {/* Rock Climbing */}
                <div className="glass-card border border-zinc-800/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-zinc-800/50 hover:-translate-y-1 transition-all group">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-zinc-400 border border-zinc-700 group-hover:border-blue-400 group-hover:text-blue-400 transition-colors">
                        <Mountain size={28} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold tracking-tight mb-1">Rock Climbing</h3>
                        <p className="text-xs text-zinc-500 font-mono">Bouldering & Sport</p>
                    </div>
                </div>

                {/* Poker */}
                <div className="glass-card border border-zinc-800/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-zinc-800/50 hover:-translate-y-1 transition-all group">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-zinc-400 border border-zinc-700 group-hover:border-red-400 group-hover:text-red-400 transition-colors">
                        <Spade size={28} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold tracking-tight mb-1">Poker</h3>
                        <p className="text-xs text-zinc-500 font-mono">Game Theory Optimal</p>
                    </div>
                </div>

                {/* Prediction Markets */}
                <div className="glass-card border border-zinc-800/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-zinc-800/50 hover:-translate-y-1 transition-all group">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-zinc-400 border border-zinc-700 group-hover:border-[#10B981] group-hover:text-[#10B981] transition-colors">
                        <TrendingUp size={28} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold tracking-tight mb-1">Kalshi</h3>
                        <p className="text-xs text-zinc-500 font-mono">Prediction Markets</p>
                    </div>
                </div>

                {/* Origami */}
                <div className="glass-card border border-zinc-800/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-zinc-800/50 hover:-translate-y-1 transition-all group">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-zinc-400 border border-zinc-700 group-hover:border-yellow-400 group-hover:text-yellow-400 transition-colors">
                        <Scissors size={28} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold tracking-tight mb-1">Origami</h3>
                        <p className="text-xs text-zinc-500 font-mono">Precision Folds</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

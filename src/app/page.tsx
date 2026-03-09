"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TerminalSquare, FlaskConical, BookOpen, Hammer, Heart } from "lucide-react";

// Placeholder components - we will build these next
import TerminalTab from "@/components/tabs/TerminalTab";
import QuantLabTab from "@/components/tabs/QuantLabTab";
import LedgerTab from "@/components/tabs/LedgerTab";
import ForgeTab from "@/components/tabs/ForgeTab";
import InterestsTab from "@/components/tabs/InterestsTab";

const tabs = [
  { id: "terminal", label: "Terminal", icon: <TerminalSquare size={18} /> },
  { id: "lab", label: "The Quant Lab", icon: <FlaskConical size={18} /> },
  { id: "ledger", label: "Ledger", icon: <BookOpen size={18} /> },
  { id: "forge", label: "Forge", icon: <Hammer size={18} /> },
  { id: "interests", label: "Interests", icon: <Heart size={18} /> },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("terminal");

  return (
    <main className="min-h-screen bg-[#121212] text-zinc-100 selection:bg-[#007AFF] selection:text-white flex flex-col md:flex-row">

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 glass border-r border-zinc-800/50 p-6 z-50">
        <div className="mb-12 font-mono">
          <h1 className="text-xl font-bold tracking-tighter electric-glow text-[#fafafa] mb-1">Ganesh Karayi</h1>
          <p className="text-xs text-zinc-500 uppercase tracking-widest">Workspace // 2026</p>
        </div>

        <div className="flex flex-col gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm transition-all duration-200 text-left ${activeTab === tab.id
                  ? "bg-[#007AFF]/10 text-[#007AFF] border border-[#007AFF]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 border border-transparent"
                }`}
            >
              <span className={activeTab === tab.id ? "text-[#007AFF]" : "text-zinc-500"}>
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-zinc-800/50 font-mono text-[10px] text-zinc-600">
          <p>SYSTEM STATUS: ONLINE</p>
          <p>LATENCY: 12ms</p>
        </div>
      </nav>

      {/* Mobile Top Bar (Hidden on desktop) */}
      <header className="md:hidden glass sticky top-0 z-50 p-4 flex justify-between items-center border-b border-zinc-800/50">
        <div className="font-mono">
          <h1 className="font-bold text-zinc-100">Ganesh Karayi</h1>
        </div>
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 p-4 md:p-8 lg:p-12 pb-24 md:pb-12 min-h-screen">
        <div className="max-w-6xl mx-auto h-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full"
            >
              {activeTab === "terminal" && <TerminalTab />}
              {activeTab === "lab" && <QuantLabTab />}
              {activeTab === "ledger" && <LedgerTab />}
              {activeTab === "forge" && <ForgeTab />}
              {activeTab === "interests" && <InterestsTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full glass border-t border-zinc-800/50 z-50 pb-safe">
        <div className="flex justify-around items-center p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl transition-colors ${activeTab === tab.id
                  ? "text-[#007AFF]"
                  : "text-zinc-500 hover:text-zinc-300"
                }`}
            >
              {tab.icon}
              <span className="text-[10px] mt-1 font-mono tracking-tighter">{tab.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </nav>

    </main>
  );
}

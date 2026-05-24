"use client";

import { useState } from "react";
import BioTab from "@/components/tabs/TerminalTab";
import WorkTab from "@/components/tabs/QuantLabTab";
import ProjectsTab from "@/components/tabs/ForgeTab";
import CourseworkTab from "@/components/tabs/LedgerTab";
import ActivitiesTab from "@/components/tabs/ActivitiesTab";

const tabs = [
  { id: "bio",        label: "Bio",        color: "#666666" },
  { id: "work",       label: "Work",       color: "#5599ff" },
  { id: "projects",   label: "Projects",   color: "#aa44ee" },
  { id: "coursework", label: "Coursework", color: "#22bb22" },
  { id: "activities", label: "Activities", color: "#888888" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <div className="h-screen bg-[#111111] text-[#dddddd] font-mono flex flex-col overflow-hidden">

      {/* ── Mobile top bar ── */}
      <div className="md:hidden bg-[#0d0d0d] border-b-2 border-[#666666] px-4 py-3 flex items-center justify-between shrink-0">
        <span className="text-[#666666] font-bold text-sm">Ganesh Karayi</span>
        <div className="flex gap-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-2 py-1 text-xs border transition-all"
              style={{
                borderColor:     activeTab === tab.id ? tab.color : "#333",
                color:           activeTab === tab.id ? tab.color : "#666",
                backgroundColor: activeTab === tab.id ? tab.color + "18" : "transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <nav className="hidden md:flex w-36 shrink-0 flex-col bg-[#0d0d0d] border-r-2 border-[#666666]">
          <div className="px-4 py-5 border-b border-[#666666]/40">
            <div className="text-[#666666] font-bold text-sm leading-snug">Ganesh</div>
            <div className="text-[#666666] font-bold text-sm leading-snug">Karayi</div>
          </div>

          <div className="flex flex-col py-2">
            {tabs.map(tab => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="text-left px-4 py-3 text-sm transition-colors border-b border-[#1a1a1a]"
                  style={{
                    color:           active ? tab.color : "#666",
                    borderLeft:      `3px solid ${active ? tab.color : "transparent"}`,
                    backgroundColor: active ? tab.color + "12" : "transparent",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-auto px-4 py-4 border-t border-[#666666]/20 text-[10px] text-[#444] leading-5">
            <div>UC Berkeley</div>
            <div>GPA: 3.8</div>
            <div>Cls of 2028</div>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22bb22] inline-block" />
              <span className="text-[#22bb22]">online</span>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Stats header */}
          <div className="bg-[#0d0d0d] px-6 md:px-10 py-4 shrink-0">
            <div className="text-sm text-[#aaa]">
              You have{" "}
              <span className="text-[#666666] font-bold text-base">5</span>
              {" "}work experiences. You are currently at{" "}
              <span className="text-white font-bold">Shepard Ventures</span>
              {" "}(Senior Quant Analyst).
            </div>
            <div className="text-sm text-[#666] mt-0.5">
              Applied Mathematics &amp; Data Science at{" "}
              <span className="text-[#999]">UC Berkeley</span>.
              {" "}GPA: <span className="text-[#999]">3.8</span>.
              {" "}Graduating <span className="text-[#999]">May 2028</span>.
              {" "}Units: <span className="text-[#999]">93</span>.
            </div>
            <div className="text-xs text-[#3d3d3d] mt-0.5">
              Experiences produce ×2.1 more opportunities per skill upgrade. Total prestige layers: 5 semesters.
            </div>
          </div>

          {/* Green separator */}
          <div className="h-[2px] bg-[#22bb22] shrink-0" />

          {/* Tab content */}
          <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8">
            {activeTab === "bio"        && <BioTab />}
            {activeTab === "work"       && <WorkTab />}
            {activeTab === "projects"   && <ProjectsTab />}
            {activeTab === "coursework" && <CourseworkTab />}
            {activeTab === "activities" && <ActivitiesTab />}
          </div>

          {/* Status bar */}
          <div className="bg-[#0d0d0d] border-t border-[#666666]/40 px-6 py-1 shrink-0 flex gap-4 text-[10px] text-[#444]">
            <span>Updated: May 2026</span>
            <span>|</span>
            <span>Status: Open to internships &amp; research</span>
            <span>|</span>
            <span>ganeshkarayi@berkeley.edu</span>
          </div>
        </div>
      </div>
    </div>
  );
}

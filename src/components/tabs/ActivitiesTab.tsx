type Activity = {
  org: string;
  role: string;
  location: string;
  date: string;
  featured?: boolean;
  bullets: string[];
  tags?: string[];
};

const activities: Activity[] = [
  {
    org: "Open Project @ Berkeley",
    role: "Vice President of Projects",
    location: "Berkeley, CA",
    date: "Aug 2025 – Present",
    featured: true,
    bullets: [
      "Oversee 15+ simultaneous client projects and 40+ Project Managers across the full product lifecycle — from cold outreach and client sourcing through scoping, build, and delivery.",
      "Shipped 5 client projects per semester across a 300+ member organization, the largest tech club on campus.",
      "Interviewed and selected 50+ PM candidates, evaluating leadership, communication, and technical fit.",
      "Organized logistics and operations across multiple concurrent workstreams and client relationships.",
    ],
    tags: ["Leadership", "Project Management", "Client Relations", "Recruiting"],
  },
  {
    org: "Formula Electric @ Berkeley",
    role: "Simulations Team",
    location: "Berkeley, CA",
    date: "Aug 2024 – May 2025",
    bullets: [
      "Developed track discretization algorithms to parse map geometry, calculating turn radii and lateral traction limits to determine theoretical maximum cornering speeds.",
      "Integrated empirical battery discharge data into a physics engine to model track-specific acceleration and energy consumption for an electric vehicle.",
    ],
    tags: ["Python", "Docker", "Physics Simulation", "OpenLap"],
  },
];

const hobbies = [
  { label: "Poker",                     desc: "Tournament and cash game play.",                           color: "#666666" },
  { label: "Prediction Markets",        desc: "Active trader on Kalshi.",                                 color: "#5599ff" },
  { label: "Rock Climbing",             desc: "Bouldering and top rope.",                                 color: "#22bb22" },
];

export default function ActivitiesTab() {
  return (
    <div className="flex flex-col gap-5 max-w-3xl">

      {activities.map(act => (
        <div
          key={act.org}
          className="border p-6"
          style={{ borderColor: act.featured ? "#66666655" : "#2a2a2a" }}
        >
          <div className="flex justify-between items-start mb-4 gap-4">
            <div>
              {act.featured && (
                <div className="text-[10px] uppercase tracking-widest mb-1 text-[#666666]">
                  Current
                </div>
              )}
              <div className="text-white font-bold text-lg leading-tight">{act.org}</div>
              <div className="text-[#888] text-sm mt-0.5">{act.role}</div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-[#555] text-xs">{act.date}</div>
              <div className="text-[#444] text-[10px] mt-0.5">{act.location}</div>
            </div>
          </div>

          <ul className="space-y-2 mb-4">
            {act.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-[#aaa] text-sm leading-relaxed">
                <span className="text-[#666]">›</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {act.tags && (
            <div className="flex flex-wrap gap-2">
              {act.tags.map(t => (
                <span key={t} className="border border-[#2a2a2a] text-[#666] text-[10px] px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Hobbies */}
      <div className="border border-[#2a2a2a] p-6">
        <div className="text-[#555] text-[10px] uppercase tracking-widest mb-4">Outside the Terminal</div>
        <div className="flex flex-col gap-3">
          {hobbies.map(h => (
            <div key={h.label} className="flex items-baseline gap-3">
              <div
                className="border px-2 py-0.5 text-xs shrink-0"
                style={{ borderColor: h.color + "44", color: h.color }}
              >
                {h.label}
              </div>
              <div className="text-[#666] text-sm">{h.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

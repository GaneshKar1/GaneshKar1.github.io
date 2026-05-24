const PURPLE = "#aa44ee";

type Project = {
  title: string;
  context: string;
  tag?: string;
  featured?: boolean;
  bullets: string[];
  stats?: { label: string; value: string }[];
  tech: string[];
};

const projects: Project[] = [
  {
    title: "Solar Panel Market Quantile Analysis",
    tag: "Econometrics",
    context: "Class Project · 2026",
    featured: true,
    bullets: [
      "Self-sourced and cleaned a 332,000-row, 266-column California solar interconnection dataset; engineered storage tier bins and a cost-per-Watt outcome variable.",
      "Implemented a Minimum Distance Estimator for quantile regression from scratch following asymptotic theory — fitting KDE sparsity functions and running WLS to recover the asymptotic covariance.",
      "Estimated OLS baselines with HC3 heteroskedasticity-robust standard errors; cross-validated MDE against statsmodels.QuantReg.",
      "Identified nonlinear cost dynamics across solar tiers: extreme price premium at 90th percentile and economies of scale for larger battery systems.",
    ],
    tech: ["Python", "pandas", "NumPy", "statsmodels", "Quantile Regression", "MDE"],
  },
  {
    title: "Eco Sim",
    tag: "Simulation",
    context: "Team Project · 2025",
    featured: true,
    bullets: [
      "Built a full-stack agent-based simulation modeling 100K+ autonomous agents (households, firms, government) with emergent behaviors: demand-responsive pricing, just-in-time production, and worker skill development.",
      "Engineered a multi-phase Python simulation engine with firm personality archetypes (aggressive/moderate/conservative) and a wellbeing model (happiness × morale × health) feeding back into labor productivity.",
      "Developed a real-time React dashboard with live GDP graphs, policy control sliders (tax rate, inflation, birth rate), and animated agent-state visualizations.",
    ],
    tech: ["Python", "FastAPI", "React", "Tailwind CSS", "SQLite"],
  },
  {
    title: "Quantitative Trading Strategy",
    tag: "Quantitative",
    context: "DeCal Project · 2025",
    bullets: [
      "Built a statistical pairs trading engine on WMT/TGT using rolling 60-day OLS regression to compute dynamic hedge ratios, eliminating forward-looking bias.",
      "Generated z-score mean-reversion signals with ±2σ entry/exit thresholds; modeled 0.1% round-trip transaction costs to produce net Sharpe estimates.",
      "Calculated key risk-adjusted performance metrics including Sharpe Ratio and Maximum Drawdown.",
    ],
    tech: ["Python", "pandas", "NumPy", "statsmodels", "yfinance"],
  },
  {
    title: "Build Your Own World",
    tag: "Software",
    context: "CS 61B Final Project · 2024",
    bullets: [
      "Engineered a procedurally generated 2D dungeon game with seeded randomization, producing unique interconnected room-and-hallway layouts across 100×50 tile grids.",
      "Implemented BFS-based dynamic lighting propagating torch illumination with distance-layered intensity; optimized by recalculating only on state change, eliminating per-tick recomputation.",
      "Designed a save/load system via keystroke replay — exact deterministic reconstruction of any game state from a seed.",
    ],
    tech: ["Java", "BFS", "Procedural Generation"],
  },
];

export default function ProjectsTab() {
  return (
    <div className="max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map(p => (
          <div
            key={p.title}
            className="border p-6 flex flex-col"
            style={{ borderColor: p.featured ? PURPLE + "55" : "#2a2a2a" }}
          >
            <div className="flex justify-between items-start mb-1">
              {p.tag && (
                <div className="text-[10px] uppercase tracking-widest" style={{ color: PURPLE }}>
                  {p.tag}
                </div>
              )}
              <div className="text-[#444] text-[10px] ml-auto">{p.context}</div>
            </div>

            <div className="text-white font-bold text-lg mb-3 mt-1">{p.title}</div>

            <ul className="space-y-2 flex-1 mb-4">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-[#aaa] text-sm leading-relaxed">
                  <span style={{ color: PURPLE }}>›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {p.stats && (
              <div
                className="grid gap-3 p-3 mb-4"
                style={{
                  gridTemplateColumns: `repeat(${p.stats.length}, 1fr)`,
                  border: `1px solid ${PURPLE}22`,
                  backgroundColor: PURPLE + "08",
                }}
              >
                {p.stats.map(s => (
                  <div key={s.label}>
                    <div className="text-[#555] text-[10px] uppercase tracking-wider mb-1">{s.label}</div>
                    <div className="text-white font-bold">{s.value}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-auto">
              {p.tech.map(t => (
                <span key={t} className="border border-[#2a2a2a] text-[#666] text-[10px] px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

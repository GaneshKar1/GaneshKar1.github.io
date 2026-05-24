const BLUE = "#5599ff";

type Exp = {
  company: string;
  role: string;
  location: string;
  date: string;
  current?: boolean;
  featured?: boolean;
  bullets: string[];
  tags?: string[];
};

const experiences: Exp[] = [
  {
    company: "Shepard Ventures",
    role: "Senior Quantitative Analyst",
    location: "San Diego, CA",
    date: "Jan 2026 – Present",
    current: true,
    featured: true,
    bullets: [
      "Engineered a Black Swan stress-testing pipeline: inject historical drawdown vectors into pre-crash price histories, apply K-Means to preselect resilient equities, then run MVO on the filtered set.",
      "Used Holt Estimators to forecast time-variant beta for the next crash window; GARCH for volatility modeling to construct the covariance matrix fed into MVO.",
      "Backtested portfolio against historical crash events — achieved an estimated 54% downside capture ratio relative to the S&P 100.",
      "Co-leads the internal AI research team, conducting weekly meetings.",
    ],
    tags: ["Python", "K-Means", "MVO", "Holt Smoothing", "GARCH", "Davies-Bouldin Index"],
  },
  {
    company: "IPick.AI",
    role: "AI Engineer",
    location: "Cupertino, CA",
    date: "Jan 2026 – May 2026",
    featured: true,
    bullets: [
      "Led a team of 14 to ship a live equity intelligence platform covering 4,000+ public companies, visualizing supplier, competitor, and subsidiary relationships as an interactive knowledge graph.",
      "Engineered an NLP extraction pipeline processing 8,000+ SEC EDGAR filings — classifying corporate relationships via FinBERT, Claude API, and Llama 3.2.",
      "Directed architecture decisions across the full stack (Python/Flask, PostgreSQL, Docker, AWS EC2, D3.js) and managed delivery across multiple workstreams.",
      "Scraped 20+ financial news sources (Bloomberg, Reuters), filtering articles against ticker-linked keywords and generating AI stock analyses via Claude.",
    ],
    tags: ["Python", "Flask", "PostgreSQL", "Docker", "AWS", "FinBERT", "Claude API", "Llama 3.2", "D3.js"],
  },
  {
    company: "UC Berkeley EECS — CS 61B",
    role: "Course Staff / Academic Intern",
    location: "Berkeley, CA",
    date: "Jan 2026 – May 2026",
    bullets: [
      "Led portions of weekly discussion sections for a 1,100-student course, delivering mini-lectures and debugging help on data structures, algorithms, and Java.",
      "Independently facilitated ~50% of student support during section, operating alongside TAs in a co-teaching capacity.",
      "Held shared office hours providing targeted one-on-one mentorship.",
    ],
    tags: ["Java", "Data Structures", "Algorithms", "Teaching"],
  },
  {
    company: "DealPrint",
    role: "Data Science Research Intern",
    location: "Berkeley, CA",
    date: "Aug 2025 – Jan 2026",
    bullets: [
      "Built a Chrome extension to automate extraction from a legacy web platform, scraping 50,000 M&A transactions spanning 40 years via async UI state handling.",
      "Engineered a tiered KNN comparables engine with adjustable similarity weights across NAICS codes (2/4/6-digit), geography, and deal type.",
      "Combined comps engine with a regression model on revenue, SDE/EBITDA margin, state, and industry features — achieved MAPE of 0.25 on held-out transactions.",
      "Delivered as an interactive Streamlit dashboard with real-time parameter tuning and Plotly visualizations.",
    ],
    tags: ["Python", "pandas", "scikit-learn", "KNN", "JavaScript", "Streamlit", "Plotly"],
  },
  {
    company: "Goldman School of Public Policy",
    role: "IT Assistant",
    location: "Berkeley, CA",
    date: "Aug 2024 – Present",
    current: true,
    bullets: [
      "Restructured 300+ course documents across 2 classes to meet ALLY accessibility score requirements (90%+ threshold).",
      "Provided technical support across 20+ classrooms, assisting faculty with in-class tech issues and AV setup.",
    ],
    tags: ["ALLY Platform", "Accessibility", "IT Support"],
  },
];

function Arrow() {
  return <span style={{ color: BLUE }}>›</span>;
}

export default function WorkTab() {
  return (
    <div className="flex flex-col gap-5 max-w-3xl">
      {experiences.map(exp => (
        <div
          key={exp.company}
          className="border p-6"
          style={{ borderColor: exp.featured ? BLUE + "55" : "#2a2a2a" }}
        >
          <div className="flex justify-between items-start mb-4 gap-4">
            <div>
              {exp.current && (
                <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: BLUE }}>
                  Current
                </div>
              )}
              <div className="text-white font-bold text-lg leading-tight">{exp.company}</div>
              <div className="text-[#888] text-sm mt-0.5">{exp.role}</div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-[#555] text-xs">{exp.date}</div>
              <div className="text-[#444] text-[10px] mt-0.5">{exp.location}</div>
            </div>
          </div>

          <ul className="space-y-2 mb-4">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-[#aaa] text-sm leading-relaxed">
                <Arrow />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {exp.tags && (
            <div className="flex flex-wrap gap-2">
              {exp.tags.map(t => (
                <span key={t} className="border border-[#2a2a2a] text-[#666] text-[10px] px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

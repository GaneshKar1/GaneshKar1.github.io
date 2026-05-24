const links = [
  { label: "Email",       href: "mailto:ganeshkarayi@berkeley.edu",                 color: "#666666" },
  { label: "LinkedIn",    href: "https://www.linkedin.com/in/ganesh-karayi/",        color: "#5599ff" },
  { label: "Instagram",   href: "https://instagram.com/ganeshkarayi",               color: "#aa44ee" },
  { label: "Book a Chat", href: "https://calendly.com/ganeshkarayi-berkeley/30min", color: "#22bb22" },
];

const hobbies = [
  { label: "Poker",              color: "#666666" },
  { label: "Prediction Markets", color: "#5599ff" },
  { label: "Rock Climbing",      color: "#22bb22" },
];

export default function BioTab() {
  return (
    <div className="flex flex-col gap-6 max-w-3xl">

      {/* Identity */}
      <div className="border border-[#666666]/40 p-6">
        <div className="flex items-start gap-5 mb-6">
          <img
            src="/images/meprofessional.png"
            alt="Ganesh Karayi"
            className="w-20 h-20 object-cover border border-[#333] shrink-0"
          />
          <div>
            <div className="text-white text-2xl font-bold mb-1">Ganesh Karayi</div>
            <div className="text-[#666666] text-sm">Applied Mathematics &amp; Data Science</div>
            <div className="text-[#555] text-xs mt-0.5">UC Berkeley · GPA 3.8 · Class of 2028</div>
          </div>
        </div>

        <div className="space-y-3 text-sm text-[#aaa] leading-relaxed">
          <p>
            I&apos;m studying Applied Mathematics and Data Science at{" "}
            <span className="text-white">UC Berkeley</span> (concentrations: Statistics &amp; Economics),
            graduating May 2028. I build quantitative systems at the intersection of finance, AI, and ML —
            from crash-resilient portfolios to NLP pipelines to agent-based simulations.
          </p>
          <p>
            Currently Senior Quant Analyst at{" "}
            <span className="text-white">Shepard Ventures</span>, where I&apos;m engineering a Black Swan
            stress-testing framework using K-Means, MVO, and GARCH. Also VP of Projects at{" "}
            <span className="text-white">Open Project</span>, Berkeley&apos;s largest tech org (300+ members),
            overseeing 15+ concurrent client projects and 40+ PMs.
          </p>
          <p>
            Previously: AI Engineer at <span className="text-white">IPick.AI</span> (led team of 14
            to ship an equity intelligence platform for 4,000+ companies), and Data Science intern
            at <span className="text-white">DealPrint</span> (scraped &amp; modeled 50K M&amp;A transactions).
          </p>
        </div>
      </div>

      {/* Hobbies */}
      <div className="border border-[#222] p-5">
        <div className="text-[#555] text-[10px] uppercase tracking-widest mb-3">Current Hobbies</div>
        <div className="flex gap-3 flex-wrap">
          {hobbies.map(h => (
            <div
              key={h.label}
              className="border px-3 py-1.5 text-sm"
              style={{ borderColor: h.color + "44", color: h.color }}
            >
              {h.label}
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {links.map(link => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="border px-4 py-3 text-sm text-center transition-opacity hover:opacity-70"
            style={{
              borderColor:     link.color + "55",
              color:           link.color,
              backgroundColor: link.color + "0d",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 selection:bg-zinc-700 selection:text-white">
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/50 hidden md:block">
        <div className="max-w-5xl mx-auto px-12 py-4 flex justify-between items-center text-sm font-mono text-zinc-400">
          <a href="#" className="font-bold text-zinc-100 uppercase tracking-widest hover:text-white transition-colors">
            GK.
          </a>
          <div className="flex gap-8">
            <a href="#experience" className="hover:text-zinc-100 transition-colors">
              <span className="text-zinc-600 mr-1">01.</span>Experience
            </a>
            <a href="#projects" className="hover:text-zinc-100 transition-colors">
              <span className="text-zinc-600 mr-1">02.</span>Projects
            </a>
            <a href="#skills" className="hover:text-zinc-100 transition-colors">
              <span className="text-zinc-600 mr-1">03.</span>Skills
            </a>
            <a
              href="mailto:ganeshkarayi@berkeley.edu"
              className="text-zinc-100 px-4 py-1.5 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="md:mt-16 space-y-32">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </div>

      <footer className="mt-40 pb-8 text-center font-mono text-xs text-zinc-600">
        <p>Built with Next.js & Tailwind CSS.</p>
        <p className="mt-2">Deployed on GitHub Pages.</p>
      </footer>
    </main>
  );
}

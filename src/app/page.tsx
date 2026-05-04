import CachedProjectList from "@/components/CachedProjectList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-glass-bg border border-glass-border backdrop-blur-glass p-12 rounded-3xl shadow-glass">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            Digital <br />Architect
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl leading-relaxed mb-8">
            Crafting immersive digital experiences through the lens of minimalist design 
            and high-performance engineering. Focused on the future of web interaction.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all">
              View Projects
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-48 w-full bg-white/5 animate-pulse rounded-2xl" />}>
        <section>
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <CachedProjectList />
        </section>
      </Suspense>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-glass-bg border border-glass-border backdrop-blur-glass p-8 rounded-2xl hover:scale-[1.02] transition-all">
            <span className="text-xs font-mono text-white/40 uppercase mb-4 block">0{i} / Insight</span>
            <h3 className="text-2xl font-semibold mb-2">Modern Stack</h3>
            <p className="text-foreground/60">Leveraging Next.js 16 and React 19 for unmatched performance.</p>
          </div>
        ))}
      </section>
    </div>
  );
}

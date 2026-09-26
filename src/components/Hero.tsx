import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

interface HeroProps {
  onLaunchStudio: () => void;
  onOpenDocs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLaunchStudio, onOpenDocs }) => {
  return (
    <section className="relative overflow-hidden pt-14 pb-24 lg:pt-20 lg:pb-32 bg-[#0a0a0a] border-b border-white/[0.06]">

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-orange-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-green-500/8 blur-[140px] rounded-full pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="lg:col-span-6 space-y-7">

            {/* Label */}
            <div className="text-xs font-mono font-bold tracking-[0.25em] text-slate-500 uppercase">
              AGENT COMPUTER PLATFORM
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Give your agent
              <br />
              <span className="text-orange-500">a real computer.</span>
            </h1>

            {/* Body */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              NodeBox runs each agent on its own isolated machine — a full sub-14ms V8 isolate with its own kernel guardrails, POSIX filesystem, and network. Keep it for months, throw it away in seconds, or hand one to every CI job.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button onClick={onLaunchStudio}
                className="px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-sm shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center gap-2">
                Join the waitlist <ArrowRight className="w-4 h-4" />
              </button>

              <button onClick={onLaunchStudio}
                className="px-7 py-3.5 rounded-full bg-transparent hover:bg-white/5 text-white font-semibold text-sm border border-white/10 hover:border-white/20 transition-all flex items-center gap-2">
                <Terminal className="w-4 h-4 text-green-400" />
                Talk to sales
              </button>
            </div>

            {/* Platform badges */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs font-mono text-slate-500 border-t border-white/[0.06]">
              {['Linux', 'Windows', 'macOS', 'iOS', 'Android'].map((p) => (
                <span key={p} className="flex items-center gap-1.5 hover:text-slate-300 transition-colors cursor-default">
                  <span className="w-1 h-1 rounded-full bg-orange-500" />
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: 3D Cube ── */}
          <div className="lg:col-span-6 relative">

            {/* Floating orbits decoration */}
            <div className="absolute -top-8 -right-8 w-64 h-64 rounded-full border border-orange-500/10 pointer-events-none float-a" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 rounded-full border border-green-500/10 pointer-events-none float-b" />

            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group cursor-pointer">
              {/* Orange corner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-green-500/5 pointer-events-none z-10" />

              <img
                src="/images/nodebox_3d_hero_cube.jpg"
                alt="NodeBox V8 Isolate 3D Engine"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Status bar overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 bg-black/80 backdrop-blur-md rounded-xl border border-white/[0.08] z-20">
                <div className="flex items-center gap-2 font-mono text-xs text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-400 pulse-ring" />
                  Isolate Kernel: ACTIVE
                </div>
                <span className="font-mono text-xs text-orange-400 font-bold">Boot: 12ms</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

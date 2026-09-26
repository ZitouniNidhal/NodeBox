import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Terminal, Zap, Shield, Globe, Clock, ChevronDown } from 'lucide-react';

interface HeroProps {
  onLaunchStudio: () => void;
  onOpenDocs: () => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Animated terminal line component — renders text with a typing effect
// ─────────────────────────────────────────────────────────────────────────────
interface TerminalLineProps {
  text: string;
  delay: number;
  color?: string;
  prefix?: string;
}

const TerminalLine: React.FC<TerminalLineProps> = ({ text, delay, color = 'text-slate-300', prefix = '' }) => {
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
      let i = 0;
      const typeTimer = setInterval(() => {
        setTyped(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(typeTimer);
      }, 22);
      return () => clearInterval(typeTimer);
    }, delay);
    return () => clearTimeout(showTimer);
  }, [text, delay]);

  if (!visible) return null;

  return (
    <div className={`font-mono text-xs leading-relaxed ${color}`}>
      {prefix && <span className="text-orange-400 mr-2">{prefix}</span>}
      {typed}
      {typed.length < text.length && (
        <span className="inline-block w-1.5 h-3 bg-orange-400 ml-0.5 animate-pulse" />
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Live stats ticker — cycles through real-time sandbox metrics
// ─────────────────────────────────────────────────────────────────────────────
interface StatTickerItem {
  label: string;
  value: string;
  unit: string;
  icon: React.ReactNode;
}

const StatsTicker: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stats: StatTickerItem[] = [
    { label: 'Cold Start', value: '< 14', unit: 'ms', icon: <Zap className="w-3 h-3" /> },
    { label: 'Memory Footprint', value: '6', unit: 'MB', icon: <Shield className="w-3 h-3" /> },
    { label: 'Isolation Depth', value: 'L3', unit: 'kernel', icon: <Globe className="w-3 h-3" /> },
    { label: 'Uptime', value: '99.99', unit: '%', icon: <Clock className="w-3 h-3" /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(i => (i + 1) % stats.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [stats.length]);

  const stat = stats[activeIndex];

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-lg">
      <span className="text-orange-400">{stat.icon}</span>
      <span className="text-xs font-mono text-slate-400">{stat.label}:</span>
      <span className="text-xs font-mono font-bold text-white">{stat.value}</span>
      <span className="text-xs font-mono text-slate-500">{stat.unit}</span>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Floating orbiting node — decorative animated ring element
// ─────────────────────────────────────────────────────────────────────────────
interface OrbitNodeProps {
  size: string;
  color: string;
  top: string;
  left: string;
  animClass: string;
  label?: string;
}

const OrbitNode: React.FC<OrbitNodeProps> = ({ size, color, top, left, animClass, label }) => (
  <div
    className={`absolute ${size} rounded-full border ${color} pointer-events-none ${animClass} flex items-center justify-center`}
    style={{ top, left }}
  >
    {label && (
      <span className="text-[9px] font-mono text-slate-600 opacity-60 select-none">{label}</span>
    )}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Trust badge component — shows verified security/compliance logos
// ─────────────────────────────────────────────────────────────────────────────
interface TrustBadgeProps {
  text: string;
  color: string;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ text, color }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold
    border ${color} bg-white/[0.03] hover:bg-white/[0.06] transition-colors cursor-default`}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
    {text}
  </span>
);

// ─────────────────────────────────────────────────────────────────────────────
// Hero section — main landing view with copy, CTA, and visual
// ─────────────────────────────────────────────────────────────────────────────
export const Hero: React.FC<HeroProps> = ({ onLaunchStudio, onOpenDocs }) => {
  const [terminalReady, setTerminalReady] = useState(false);
  const [scrollHint, setScrollHint] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  // Trigger terminal animation after a short delay for better LCP performance
  useEffect(() => {
    const t = setTimeout(() => setTerminalReady(true), 600);
    return () => clearTimeout(t);
  }, []);

  // Hide scroll hint after first scroll
  useEffect(() => {
    const handler = () => setScrollHint(false);
    window.addEventListener('scroll', handler, { once: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const trustBadges = [
    { text: 'SOC 2 Ready', color: 'border-orange-500/30 text-orange-400' },
    { text: 'GDPR Compliant', color: 'border-slate-500/30 text-slate-400' },
    { text: 'Zero-Trust', color: 'border-orange-500/20 text-orange-500' },
    { text: 'Open Source', color: 'border-slate-600/30 text-slate-500' },
  ];

  const platforms = ['Linux', 'Windows', 'macOS', 'iOS', 'Android', 'WASM'];

  const terminalLines = [
    { text: 'const box = await NodeBox.create();', delay: 0, color: 'text-orange-300', prefix: '>' },
    { text: 'await box.fs.write("/workspace/app.js", src);', delay: 480, color: 'text-slate-300', prefix: '>' },
    { text: 'const result = await box.run("node app.js");', delay: 1100, color: 'text-slate-300', prefix: '>' },
    { text: '{ stdout: "Hello from isolate!", exitCode: 0 }', delay: 1800, color: 'text-amber-400/80', prefix: '' },
    { text: 'Boot time: 11.4ms  ·  Memory: 6.1MB  ·  Syscalls: 12', delay: 2400, color: 'text-slate-500', prefix: '//' },
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden pt-14 pb-24 lg:pt-20 lg:pb-32 bg-[#0a0a0a] border-b border-white/[0.06]"
    >
      {/* ── Ambient background glows ── */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-orange-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-slate-500/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* ── Dot grid background ── */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      {/* ── Floating orbit decoration (desktop) ── */}
      <div className="hidden lg:block">
        <OrbitNode size="w-64 h-64" color="border-orange-500/10" top="-2rem" left="58%" animClass="float-a" />
        <OrbitNode size="w-40 h-40" color="border-slate-700/20" top="60%" left="52%" animClass="float-b" />
        <OrbitNode size="w-24 h-24" color="border-orange-500/15" top="10%" left="88%" animClass="float-a" label="V8" />
        <OrbitNode size="w-16 h-16" color="border-slate-600/25" top="75%" left="90%" animClass="float-b" label="FS" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh] lg:min-h-0">

          {/* ─────────────── LEFT: Copy & CTAs ─────────────── */}
          <div className="lg:col-span-6 space-y-7">

            {/* Label / eyebrow */}
            <div className="flex items-center gap-3">
              <div className="text-xs font-mono font-bold tracking-[0.25em] text-slate-500 uppercase">
                AGENT COMPUTER PLATFORM
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
            </div>

            {/* Hero headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Give your agent
              <br />
              <span className="text-orange-500">a real computer.</span>
            </h1>

            {/* Body copy */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              NodeBox runs each agent on its own isolated machine — a full sub-14ms V8 isolate
              with its own kernel guardrails, POSIX filesystem, and network. Keep it for months,
              throw it away in seconds, or hand one to every CI job.
            </p>

            {/* Live stats ticker */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs text-slate-600 font-mono uppercase tracking-wider">Live:</span>
              <StatsTicker />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onLaunchStudio}
                id="hero-cta-waitlist"
                aria-label="Join the NodeBox waitlist"
                className="px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400
                  text-black font-extrabold text-sm shadow-xl shadow-orange-500/30
                  hover:shadow-orange-500/50 hover:scale-[1.03] active:scale-[0.97]
                  transition-all flex items-center gap-2 group"
              >
                Join the waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenDocs}
                id="hero-cta-docs"
                aria-label="Read NodeBox documentation"
                className="px-7 py-3.5 rounded-full bg-transparent hover:bg-white/5
                  text-white font-semibold text-sm border border-white/10 hover:border-white/20
                  transition-all flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-orange-400" />
                Read the docs
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {trustBadges.map((badge) => (
                <TrustBadge key={badge.text} {...badge} />
              ))}
            </div>

            {/* Platform support badges */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs font-mono text-slate-500 border-t border-white/[0.06]">
              <span className="text-slate-600 uppercase tracking-widest text-[10px]">Runs on</span>
              {platforms.map((p) => (
                <span
                  key={p}
                  className="flex items-center gap-1.5 hover:text-slate-300 transition-colors cursor-default"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-500" />
                  {p}
                </span>
              ))}
            </div>

          </div>

          {/* ─────────────── RIGHT: Visual Panel ─────────────── */}
          <div className="lg:col-span-6 relative space-y-4">

            {/* Main hero image card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group cursor-pointer">
              {/* Orange corner glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-slate-500/5 pointer-events-none z-10" />

              <img
                src="/images/nodebox_3d_hero_cube.jpg"
                alt="NodeBox V8 Isolate 3D Engine visualization"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="eager"
              />

              {/* Status bar overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 bg-black/80 backdrop-blur-md rounded-xl border border-white/[0.08] z-20">
                <div className="flex items-center gap-2 font-mono text-xs text-orange-400">
                  <span className="w-2 h-2 rounded-full bg-orange-400 pulse-ring" />
                  Isolate Kernel: ACTIVE
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-slate-400">Workers: 8</span>
                  <span className="font-mono text-xs text-slate-300 font-bold">Boot: 12ms</span>
                </div>
              </div>
            </div>

            {/* Interactive terminal preview */}
            <div className="rounded-xl border border-white/[0.08] bg-[#0d0d0d] overflow-hidden shadow-xl">
              {/* Terminal header bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500/60" />
                </div>
                <span className="text-xs font-mono text-slate-500 ml-2">nodebox — v8-isolate-shell</span>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-orange-400">LIVE</span>
                </div>
              </div>

              {/* Terminal body */}
              <div className="p-4 space-y-1 min-h-[140px]">
                {terminalReady && terminalLines.map((line, i) => (
                  <TerminalLine key={i} {...line} />
                ))}
                {!terminalReady && (
                  <div className="font-mono text-xs text-slate-600 animate-pulse">
                    Initializing NodeBox runtime...
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ── Scroll hint ── */}
        {scrollHint && (
          <div className="flex justify-center pt-10 lg:pt-16">
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Scroll to features"
              className="flex flex-col items-center gap-1.5 text-slate-600 hover:text-slate-400 transition-colors group"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest">Explore</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform animate-bounce" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

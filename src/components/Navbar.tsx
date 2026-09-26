import React from 'react';
import { Box, ChevronDown, BookOpen, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenDocs: () => void;
  onScrollToStudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDocs, onScrollToStudio }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06] px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Brand + Nav */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5 cursor-pointer group">
            {/* Logo mark */}
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-shadow">
              <Box className="w-4.5 h-4.5 text-black" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-black tracking-tight text-white">NodeBox</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <div className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
              Product <ChevronDown className="w-3.5 h-3.5" />
            </div>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <button onClick={onOpenDocs} className="hover:text-white transition-colors">Docs</button>
            <a href="#architecture" className="hover:text-white transition-colors">Blog</a>
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/nodebox-dev/nodebox" target="_blank" rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          <button onClick={onOpenDocs} className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:block">
            Sign in
          </button>

          <button onClick={onScrollToStudio}
            className="px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all hover:scale-[1.03] active:scale-[0.97]">
            Join the waitlist →
          </button>
        </div>
      </div>
    </header>
  );
};

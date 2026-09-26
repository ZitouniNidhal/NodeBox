import React from 'react';
import { Box, Heart } from 'lucide-react';

interface FooterProps {
  onOpenDocs: () => void;
  onScrollToStudio: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDocs, onScrollToStudio }) => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <Box className="w-4 h-4 text-orange-400" />
              </div>
              <span className="text-lg font-extrabold text-slate-100 tracking-tight">
                NodeBox Labs
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Open-source V8 isolate sandbox runtime for autonomous AI agents, dynamic tool execution, and local-first microVM environments.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400 pt-2">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                MIT License
              </span>
              <span className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400">
                GitHub Org Ready
              </span>
            </div>
          </div>

          {/* Quick Links (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs">
            <div>
              <h4 className="font-bold text-slate-200 mb-3 uppercase tracking-wider text-[11px] text-orange-400">
                Product
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="hover:text-orange-300 transition-colors">Engine Features</a></li>
                <li><a href="#architecture" className="hover:text-orange-300 transition-colors">V8 Architecture</a></li>
                <li><a href="#benchmarks" className="hover:text-orange-300 transition-colors">Performance Benchmarks</a></li>
                <li><button onClick={onScrollToStudio} className="hover:text-orange-300 transition-colors">Playground Studio</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-200 mb-3 uppercase tracking-wider text-[11px] text-slate-400">
                Documentation
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={onOpenDocs} className="hover:text-slate-200 transition-colors">SDK Reference</button></li>
                <li><button onClick={onOpenDocs} className="hover:text-slate-200 transition-colors">MCP Tool Spec</button></li>
                <li><button onClick={onOpenDocs} className="hover:text-slate-200 transition-colors">Security Model</button></li>
                <li><button onClick={onOpenDocs} className="hover:text-slate-200 transition-colors">CLI Manual</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-200 mb-3 uppercase tracking-wider text-[11px] text-amber-400">
                Community
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="https://github.com/nodebox-dev/nodebox" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 fill-current text-slate-400" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub Org
                  </a>
                </li>
                <li><a href="https://github.com/nodebox-dev/nodebox" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors">Issues & Roadmap</a></li>
                <li><a href="https://github.com/nodebox-dev/nodebox" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors">Contributing</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            &copy; {new Date().getFullYear()} NodeBox Labs (nodebox-dev). Published under MIT License.
          </div>
          <div className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-orange-500 fill-current inline" /> for AI Agents
          </div>
        </div>

      </div>
    </footer>
  );
};


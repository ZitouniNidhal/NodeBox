import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Features } from './components/Features';
import { Architecture } from './components/Architecture';
import { SocialProof } from './components/SocialProof';
import { InteractiveStudio } from './components/InteractiveStudio';
import { Pricing } from './components/Pricing';
import { ApiReference } from './components/ApiReference';
import { CTA } from './components/CTA';
import { DocsModal } from './components/DocsModal';
import { Footer } from './components/Footer';

export function App() {
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  const scrollToStudio = () => {
    const el = document.getElementById('studio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      <Navbar
        onOpenDocs={() => setIsDocsOpen(true)}
        onScrollToStudio={scrollToStudio}
      />

      <main>
        <Hero onLaunchStudio={scrollToStudio} onOpenDocs={() => setIsDocsOpen(true)} />
        <Marquee />
        <Features />
        <Architecture />
        <SocialProof />
        <InteractiveStudio />
        <Pricing />
        <ApiReference />
        <CTA onLaunchStudio={scrollToStudio} onOpenDocs={() => setIsDocsOpen(true)} />
      </main>

      <Footer
        onOpenDocs={() => setIsDocsOpen(true)}
        onScrollToStudio={scrollToStudio}
      />

      <DocsModal isOpen={isDocsOpen} onClose={() => setIsDocsOpen(false)} />
    </div>
  );
}

export default App;

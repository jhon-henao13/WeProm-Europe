import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhoWeAre } from './components/WhoWeAre';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-weprom-dark selection:text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <AboutSection />
        <WhoWeAre />
      </main>

      <footer className="py-20 px-8 md:px-16 border-t border-slate-50 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-slate-400 tracking-[0.4em] uppercase">
            © 2026 WeProm Europe. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
             <span>France</span>
             <span>México</span>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default App;
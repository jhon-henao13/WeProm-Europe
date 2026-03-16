import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhoWeAre } from './components/WhoWeAre';

function App() {
  useEffect(() => {
    // 1. Lógica de Intersection Observer (Reveal)
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // 2. Lógica de Parallax Optimizada
    const handleParallax = () => {
      const image = document.getElementById('parallax-building');
      if (image) {
        const rect = image.parentElement.getBoundingClientRect();
        const screenCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        
        // Calcula la distancia del elemento al centro de la pantalla
        const distanceFromCenter = elementCenter - screenCenter;
        const speed = 0.06; // Ajuste fino de velocidad
        
        image.style.setProperty('--parallax-y', `${distanceFromCenter * speed}px`);
      }
    };

    window.addEventListener('scroll', handleParallax);

    // Limpieza de eventos
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
    

  return (
    <div className="min-h-screen bg-white selection:bg-weprom-dark selection:text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        {/* Envolvemos las secciones en contenedores reveal para la transición */}
        <div className="reveal">
          <AboutSection />
        </div>
        <div className="reveal">
          <WhoWeAre />
        </div>
      </main>

      <footer className="py-20 px-8 md:px-16 border-t border-slate-50 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-8">
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
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhoWeAre } from './components/WhoWeAre';
import { InternationalGroup } from './components/InternationalGroup';
import { Capabilities } from './components/Capabilities';
import { StrategicArchitecture } from './components/StrategicArchitecture';

import { MultisectoralExpertise } from './components/MultisectoralExpertise';

import { OurApproach } from './components/OurApproach';

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

    const handleParallax = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // 0. HERO PARALLAX (Visible y fluido)
      const hero = document.getElementById('parallax-hero');
      if (hero && scrollY < viewportHeight) {
        // Nota: Accedemos al parentElement porque es el que tiene el ID o el estilo de translateY
        // Si aplicaste el estilo al div contenedor en el paso 1:
        const container = hero.parentElement;
        container.style.setProperty('--parallax-hero-y', `${scrollY * 0.4}px`);
      }

      // 3. Logo (Strategic Architecture)
      const archLogo = document.getElementById('parallax-logo-architecture');
      if (archLogo) {
        const rect = archLogo.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const distanceFromCenter = (rect.top + rect.height / 2) - (viewportHeight / 2);
          // Cambiamos a --parallax-logo-y para consistencia
          archLogo.style.setProperty('--parallax-logo-y', `${distanceFromCenter * -0.12}px`);
        }
      }

      // 4. Cubo Multisectoral (Efecto elegante)
      const multiCube = document.getElementById('parallax-multisectoral');
      if (multiCube) {
        const rect = multiCube.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const distanceFromCenter = (rect.top + rect.height / 2) - (viewportHeight / 2);
          // Multiplicador -0.08 para un movimiento muy suave y profesional
          multiCube.style.setProperty('--parallax-multisectoral-y', `${distanceFromCenter * -0.08}px`);
        }
      }

    
      // 1. Edificio (WhoWeAre)
      const building = document.getElementById('parallax-building');
      if (building) {
        const rect = building.parentElement.getBoundingClientRect();
        // Solo calcular si está cerca de la pantalla para ahorrar recursos
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const distanceFromCenter = (rect.top + rect.height / 2) - (viewportHeight / 2);
          building.style.setProperty('--parallax-y', `${distanceFromCenter * 0.07}px`);
        }
      }
    
      // 2. Logo (Capabilities) - CORREGIDO
      const logoContainer = document.getElementById('parallax-logo-container');
      if (logoContainer) {
        const rect = logoContainer.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const distanceFromCenter = (rect.top + rect.height / 2) - (viewportHeight / 2);
          // Multiplicador negativo para que suba mientras bajas (efecto profundidad)
          logoContainer.style.setProperty('--parallax-logo-y', `${distanceFromCenter * -0.15}px`);
        }
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

          <InternationalGroup />



          {/* Sección Unificada de Capacidades */}
          <div className="relative overflow-visible bg-white">
            {/* BLOQUE INMÓVIL (Sticky) */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="sticky top-32 px-8 md:px-16 max-w-full mx-auto">
                <h2 className="reveal text-[oklch(0.54_0.2_263.94)] text-4xl md:text-[60px] font-bold uppercase leading-tight pointer-events-auto pt-[1rem]">
                  Strategic Capabilities
                </h2>
                
                {/* Isotipo Único Difuminado */}
                <div className="absolute top-0 right-0 md:-right-[23%] w-[45%] opacity-20 select-none">
                  <img src="/icon.webp" alt="" className="w-full h-auto object-contain grayscale brightness-50" />
                </div>
              </div>
            </div>
          
            {/* CONTENIDO QUE HACE SCROLL */}
            <Capabilities />
            <StrategicArchitecture />
          </div>


          <MultisectoralExpertise />

          <OurApproach />

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
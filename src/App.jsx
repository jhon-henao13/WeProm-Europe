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

import { Insights } from './components/Insights';

import { Contact } from './components/Contact';

import { Footer } from './components/Footer';

import { WhatsAppButton } from './components/WhatsAppButton'

import { Routes, Route, useLocation } from 'react-router-dom';

import { BlogIndex } from './components/BlogIndex';
import { BlogPost } from './components/BlogPost';

function App() {

  const location = useLocation();


  useEffect(() => {
      // Si la URL tiene un hash (ej: #contact)
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          // Pequeño timeout para asegurar que el DOM esté listo y las animaciones no bloqueen el scroll
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else if (location.pathname === '/') {
        // Si vas al home sin hash desde otra página, sube al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, [location]);


  useEffect(() => {
    // 1. Lógica de Intersection Observer (Reveal)
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
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
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white selection:bg-weprom-dark selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={
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
              <div id="capabilities" className="relative overflow-visible bg-white">
    
                {/* BLOQUE INMÓVIL (Sticky) */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  {/* 1. Contenedor sticky con top aumentado para bajar el título */}
                  <div className="sticky top-40 w-full">
                    
                    {/* 2. BARRA BLANCA SÓLIDA: Cubre el texto al hacer scroll */}
                    <div className="bg-white w-full py-6 px-8 md:px-16">
                      <div className="max-w-full mx-auto relative">
                        
                        {/* Título: El bg-white aquí asegura que no haya transparencia */}
                        <h2 className="reveal text-[oklch(0.54_0.2_263.94)] text-4xl md:text-[60px] font-bold uppercase leading-tight pointer-events-auto bg-white inline-block">
                          Strategic Capabilities
                        </h2>
      
                        {/* 3. ISOTIPO: Nítido (opacity-100), sin blur, desplazado a la derecha (mitad fuera) */}
                        
                        <div className="absolute top-0 right-0 w-[30%] translate-x-[13%] opacity-15 select-none pointer-events-none">
                          <img src="/isotipo.png" alt="" className="w-full h-auto object-contain grayscale brightness-50" />
                        </div>
      
                      </div>
                    </div>
                  </div>
                </div>            
    
    
              
                {/* CONTENIDO QUE HACE SCROLL */}
                <Capabilities />
                <StrategicArchitecture />
              </div>
    
    
              <MultisectoralExpertise />
    
              <OurApproach />
    
              <div id="insights" className="reveal scroll-mt-32">
                <Insights />
              </div>
    
              <div id="contact" className="reveal scroll-mt-48">
                <Contact />
              </div>
    
          </main>
        } />

        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
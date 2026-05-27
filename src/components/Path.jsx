import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Importaciones de imágenes verticales (Trayectoria)
import cocaColaImg from '../assets/path/cocacola.png';
import mcdonaldsImg from '../assets/path/mcdonals.png';
import selloRojoImg from '../assets/path/sellorojo.png';
import kiaImg from '../assets/path/kia.png';
import mercedesImg from '../assets/path/mercedes.png';
import lizMueblesImg from '../assets/path/lizmuebles.png';

import vitromexImg from '../assets/path/vitromex.png';
import tequilahuizacheImg from '../assets/path/tequilahuizache.png';
import promexicoImg from '../assets/path/promexico.png';

const PROJECTS_DATA = [
  { id: 1, brand: "Coca-Cola", image: cocaColaImg },
  { id: 2, brand: "McDonald’s", image: mcdonaldsImg },
  { id: 3, brand: "Sello Rojo", image: selloRojoImg },
  { id: 4, brand: "KIA", image: kiaImg },
  { id: 5, brand: "Mercedes-Benz", image: mercedesImg },
  { id: 6, brand: "Liz Muebles", image: lizMueblesImg },
  { id: 7, brand: "Vitromex", image: vitromexImg },
  { id: 8, brand: "Tequila Huizache", image: tequilahuizacheImg },
  { id: 9, brand: "ProMéxico", image: promexicoImg },
];

export const Path = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const rafRef = useRef(null);
  const interactionTimeoutRef = useRef(null);

  // Duplicamos la data para que el scroll infinito nunca encuentre un tope visual
  const duplicatedProjects = [...PROJECTS_DATA, ...PROJECTS_DATA];

  useEffect(() => {
    let lastTime = 0;
    const SPEED = 0.45; // Velocidad óptima ultra-premium de deslizamiento

    const step = (now) => {
      if (!lastTime) lastTime = now;
      const dt = now - lastTime;
      lastTime = now;

      const el = scrollContainerRef.current;
      if (el && !isDragging.current && !isUserInteracting) {
        const halfScrollWidth = el.scrollWidth / 2;
        
        // Si pasa de la mitad del contenedor duplicado, resetea al inicio imperceptiblemente
        if (el.scrollLeft >= halfScrollWidth) {
          el.scrollLeft = el.scrollLeft - halfScrollWidth;
        } else {
          el.scrollLeft += SPEED * (dt / 16.67);
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    };
  }, [isUserInteracting]);

  const resetUserInteractionTimeout = () => {
    setIsUserInteracting(true);
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 1500); // Se reanuda de forma fluida a los 1.5 segundos de inactividad
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth } = scrollContainerRef.current;
      const halfScrollWidth = scrollWidth / 2;
      
      // Normalizar el scroll real para calcular el índice correcto del 0 al 5
      const currentScroll = scrollLeft % halfScrollWidth;
      const card = scrollContainerRef.current.firstChild;
      if (card) {
        const cardWidth = card.offsetWidth + 24; // ancho + gap (6 = 24px)
        const index = Math.round(currentScroll / cardWidth) % PROJECTS_DATA.length;
        setActiveIndex(index);
      }
    }
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      resetUserInteractionTimeout();
      const card = scrollContainerRef.current.firstChild;
      if (card) {
        const cardWidth = card.offsetWidth + 24;
        scrollContainerRef.current.scrollTo({
          left: index * cardWidth,
          behavior: 'smooth'
        });
        setActiveIndex(index % PROJECTS_DATA.length);
      }
    }
  };

  const handlePrev = () => {
    resetUserInteractionTimeout();
    const prevIndex = activeIndex - 1 < 0 ? PROJECTS_DATA.length - 1 : activeIndex - 1;
    scrollToIndex(prevIndex);
  };

  const handleNext = () => {
    resetUserInteractionTimeout();
    const nextIndex = activeIndex + 1 >= PROJECTS_DATA.length ? 0 : activeIndex + 1;
    scrollToIndex(nextIndex);
  };

  const onMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    isDragging.current = true;
    resetUserInteractionTimeout();
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollStart.current = scrollContainerRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const dist = (x - startX.current) * 1.25; // Sensibilidad de arrastre balanceada
    scrollContainerRef.current.scrollLeft = scrollStart.current - dist;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="relative bg-slate-50 py-24 md:py-32 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* ENCABEZADO EDITORIAL */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4 block">
              Trayectoria
            </p>
            <h2 className="text-slate-900 font-montserrat text-2xl md:text-4xl lg:text-[35px] font-semibold leading-tight tracking-wide mb-6">
              Más de 10,000 proyectos a lo largo de 35 años desarrollando negocios multisectoriales.
            </h2>
            <div className="w-16 h-[2px] bg-[#2d61e0] mb-6" />
            <p className="text-black font-montserrat text-sm md:text-base font-light leading-relaxed tracking-wide">
              Nuestro equipo ha contribuido directamente al desarrollo de negocios exitosos en diversos sectores, conectando mercados, impulsando marcas y generando resultados que superan expectativas.
            </p>
          </div>

          {/* CONTROLES PREMIUM DEL CARRUSEL */}
          <div className="flex items-center gap-4 hidden md:flex">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center border border-slate-200 bg-white text-slate-800 transition-all duration-300 hover:border-slate-400 hover:bg-slate-900 hover:text-white cursor-pointer"
              aria-label="Proyecto anterior"
            >
              <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center border border-slate-200 bg-white text-slate-800 transition-all duration-300 hover:border-slate-400 hover:bg-slate-900 hover:text-white cursor-pointer"
              aria-label="Siguiente proyecto"
            >
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* CONTENEDOR INTERACTIVO CON EVENTOS CORREGIDOS */}
        <div className="relative -mx-6 md:-mx-16 px-6 md:px-16 mb-12 group/container">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={resetUserInteractionTimeout}
            className="flex gap-6 overflow-x-auto scrollbar-none pb-8 touch-pan-x"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              cursor: isDragging.current ? 'grabbing' : 'grab'
            }}
          >
            {duplicatedProjects.map((project, idx) => (
              <div 
                key={`${project.id}-${idx}`}
                onClick={() => scrollToIndex(idx % PROJECTS_DATA.length)}
                className="w-[70vw] sm:w-[40vw] lg:w-[22vw] shrink-0 aspect-[3/4] bg-slate-100 border border-slate-200/40 overflow-hidden relative group cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-slate-300/30 hover:border-slate-300/80"
              >
                {/* Imagen con efecto Zoom interactivo */}
                <img 
                  src={project.image} 
                  alt={project.brand}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradiente Premium de protección de contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Indicador sutil de línea superior de enfoque */}
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#2d61e0] group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            ))}
          </div>

          {/* Degradados ópticos laterales premium para suavizar los bordes en Desktop */}
          <div className="absolute top-0 left-0 h-[calc(100%-2rem)] w-16 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none hidden md:block" />
          <div className="absolute top-0 right-0 h-[calc(100%-2rem)] w-16 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none hidden md:block" />
        </div>

        {/* TEXTO DE CONSOLIDACIÓN Y BARRAS DE PROGRESO DEBAJO DEL CARRUSEL */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-16 border-b border-slate-200">
          <p className="max-w-2xl text-slate-800 font-montserrat text-sm md:text-base font-light tracking-wide leading-relaxed">
            Hemos logrado posicionar múltiples empresas en nuevos territorios, optimizar procesos comerciales y desarrollar alianzas estratégicas que hoy siguen generando valor.
          </p>
          
          {/* Indicadores Visuales Dot Matrix exactos basados en la longitud real */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-2">
            {PROJECTS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-1 transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'w-8 bg-[#2d61e0]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir al proyecto ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* BANDA INFERIOR: METRICAS CONSOLIDADAS */}
        <div className="pt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center lg:text-left">
          <div className="reveal flex flex-col justify-center lg:border-l lg:border-slate-200 lg:pl-8 first:border-0 first:pl-0">
            <span className="font-montserrat text-3xl md:text-4xl lg:text-[42px] font-light text-slate-900 tracking-tight leading-none mb-2 block">
              +35 años
            </span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 leading-snug">
              De Trayectoria Global
            </span>
          </div>

          <div className="reveal flex flex-col justify-center lg:border-l lg:border-slate-200 lg:pl-8">
            <span className="font-montserrat text-3xl md:text-4xl lg:text-[42px] font-light text-slate-900 tracking-tight leading-none mb-2 block">
              +10,000
            </span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 leading-snug">
              Proyectos Desarrollados
            </span>
          </div>

          <div className="reveal flex flex-col justify-center lg:border-l lg:border-slate-200 lg:pl-8">
            <span className="font-montserrat text-3xl md:text-4xl lg:text-[42px] font-light text-slate-900 tracking-tight leading-none mb-2 block">
              +1,000
            </span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 leading-snug">
              Clientes Globales
            </span>
          </div>

          <div className="reveal flex flex-col justify-center lg:border-l lg:border-slate-200 lg:pl-8">
            <span className="font-montserrat text-3xl md:text-4xl lg:text-[42px] font-light text-slate-900 tracking-tight leading-none mb-2 block">
              3 Sedes
            </span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 leading-snug">
              Internacionales Activas
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
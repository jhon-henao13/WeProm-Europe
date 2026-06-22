import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Importaciones de imágenes verticales (Trayectoria)
import cocaColaImg from '../assets/path/cocacola.jpeg';
import mcdonaldsImg from '../assets/path/mcdonals.jpeg';
import selloRojoImg from '../assets/path/pepsi.jpeg';
// import selloRojoImg from '../assets/path/sellorojo.png';
import kiaImg from '../assets/path/kia.jpeg';
import mercedesImg from '../assets/path/mercedes.jpeg';
import fordImg from '../assets/path/ford.jpeg';
// import lizMueblesImg from '../assets/path/lizmuebles.png';
// import vitromexImg from '../assets/path/vitromex.png';
import axaImg from '../assets/path/axa.jpeg';
import tequilahuizacheImg from '../assets/path/tequilahuizache.jpeg';
import promexicoImg from '../assets/path/promexico.jpeg';

const PROJECTS_DATA = [
  { id: 1, brand: "Coca-Cola", image: cocaColaImg },
  { id: 2, brand: "McDonald’s", image: mcdonaldsImg },
  { id: 3, brand: "Sello Rojo", image: selloRojoImg },
  { id: 4, brand: "KIA", image: kiaImg },
  { id: 5, brand: "Mercedes-Benz", image: mercedesImg },
  { id: 6, brand: "Ford", image: fordImg },
  { id: 7, brand: "Axa", image: axaImg },
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

  // Duplicamos la data para scroll infinito
  const duplicatedProjects = [...PROJECTS_DATA, ...PROJECTS_DATA];

  useEffect(() => {
    let lastTime = 0;
    const SPEED = 0.45;

    const step = (now) => {
      if (!lastTime) lastTime = now;
      const dt = now - lastTime;
      lastTime = now;

      const el = scrollContainerRef.current;
      if (el && !isDragging.current && !isUserInteracting) {
        const halfScrollWidth = el.scrollWidth / 2;
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
    }, 1500);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth } = scrollContainerRef.current;
      const halfScrollWidth = scrollWidth / 2;
      const currentScroll = scrollLeft % halfScrollWidth;
      const card = scrollContainerRef.current.firstChild;
      if (card) {
        const cardWidth = card.offsetWidth + 24;
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
    const dist = (x - startX.current) * 1.25;
    scrollContainerRef.current.scrollLeft = scrollStart.current - dist;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="relative bg-transparent pt-24 md:pt-32 pb-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* ENCABEZADO EDITORIAL */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4 block">
              Trayectoria
            </p>
            <h2 className="text-white font-montserrat text-2xl md:text-4xl lg:text-[35px] font-semibold leading-tight tracking-wide mb-6">
              Más de 10,000 proyectos a lo largo de 35 años desarrollando negocios multisectoriales.
            </h2>
            <div className="w-16 h-[2px] bg-[#2d61e0] mb-6" />
            <p className="text-slate-300 font-montserrat text-base md:text-xl font-light leading-relaxed tracking-wide">
              Nuestro equipo ha contribuido directamente al desarrollo de negocios exitosos en diversos sectores, conectando mercados, impulsando marcas y generando resultados que superan expectativas.
            </p>
          </div>

          {/* CONTROLES PREMIUM - Estilo oscuro/azul */}
          <div className="flex items-center gap-4 hidden md:flex">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center border border-white/20 bg-white/5 text-white transition-all duration-300 hover:border-[#2d61e0] hover:bg-[#2d61e0] hover:shadow-lg hover:shadow-[#2d61e0]/30 cursor-pointer"
              aria-label="Proyecto anterior"
            >
              <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center border border-white/20 bg-white/5 text-white transition-all duration-300 hover:border-[#2d61e0] hover:bg-[#2d61e0] hover:shadow-lg hover:shadow-[#2d61e0]/30 cursor-pointer"
              aria-label="Siguiente proyecto"
            >
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* CARRUSEL INTERACTIVO */}
        <div className="relative -mx-6 md:-mx-16 px-6 md:px-16 mb-12 group/container">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={resetUserInteractionTimeout}
            className="flex gap-10 overflow-x-auto scrollbar-none pb-8 touch-pan-x"
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
                className="w-[71vw] sm:w-[41vw] lg:w-[23vw] shrink-0 bg-white/5 border border-white/10 rounded-xl overflow-hidden relative group cursor-pointer transition-all duration-500 hover:border-[#2d61e0]/50 hover:shadow-2xl hover:shadow-[#2d61e0]/20 hover:-translate-y-1"
              >
                {/* Imagen con zoom */}
                <img 
                  src={project.image} 
                  alt={project.brand}
                  className="w-full  h-full transition-transform duration-700 ease-out group-hover:scale-102"
                  loading="lazy"
                />

                {/* Gradiente de protección (más intenso) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Línea superior de enfoque */}
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#2d61e0] group-hover:w-full transition-all duration-700 ease-out" />

                {/* Etiqueta con el nombre de la marca (aparece en hover) */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white font-montserrat text-xs font-bold tracking-widest uppercase bg-slate-950/60 px-3 py-1.5 rounded border border-white/10">
                    {project.brand}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Degradados laterales para suavizar bordes (ahora oscuros) */}
          <div className="absolute top-0 left-0 h-[calc(100%-2rem)] w-16 bg-gradient-to-r from-[#0b0f19] to-transparent pointer-events-none hidden md:block" />
          <div className="absolute top-0 right-0 h-[calc(100%-2rem)] w-16 bg-gradient-to-l from-[#0b0f19] to-transparent pointer-events-none hidden md:block" />
        </div>

        {/* INDICADORES (DOTS) Y TEXTO DE CIERRE */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-16 border-b border-white/10">
          <p className="max-w-2xl text-slate-300 font-montserrat text-sm md:text-base font-light tracking-wide leading-relaxed">
            Hemos logrado posicionar múltiples empresas en nuevos territorios, optimizar procesos comerciales y desarrollar alianzas estratégicas que hoy siguen generando valor.
          </p>
          
          <div className="flex items-center gap-1.5 overflow-x-auto py-2">
            {PROJECTS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-1 transition-all duration-300 cursor-pointer ${
                  activeIndex === idx 
                    ? 'w-8 bg-[#2d61e0] shadow-[0_0_12px_#2d61e0]' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ir al proyecto ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* BANDA INFERIOR: MÉTRICAS CONSOLIDADAS (descomentadas y adaptadas) */}
        {/* <div className="pt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center lg:text-left">
          <div className="flex flex-col justify-center lg:border-l lg:border-white/10 lg:pl-8 first:border-0 first:pl-0">
            <span className="font-montserrat text-3xl md:text-4xl lg:text-[42px] font-light text-white tracking-tight leading-none mb-2 block">
              +35 años
            </span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 leading-snug">
              De Trayectoria Global
            </span>
          </div>

          <div className="flex flex-col justify-center lg:border-l lg:border-white/10 lg:pl-8">
            <span className="font-montserrat text-3xl md:text-4xl lg:text-[42px] font-light text-white tracking-tight leading-none mb-2 block">
              +10,000
            </span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 leading-snug">
              Proyectos Desarrollados
            </span>
          </div>

          <div className="flex flex-col justify-center lg:border-l lg:border-white/10 lg:pl-8">
            <span className="font-montserrat text-3xl md:text-4xl lg:text-[42px] font-light text-white tracking-tight leading-none mb-2 block">
              +1,000
            </span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 leading-snug">
              Clientes Globales
            </span>
          </div>

          <div className="flex flex-col justify-center lg:border-l lg:border-white/10 lg:pl-8">
            <span className="font-montserrat text-3xl md:text-4xl lg:text-[42px] font-light text-white tracking-tight leading-none mb-2 block">
              3 Sedes
            </span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 leading-snug">
              Internacionales Activas
            </span>
          </div>
        </div> */}

      </div>
    </section>
  );
};
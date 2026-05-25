import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react';

const PROJECTS_DATA = [
  {
    brand: "Coca-Cola",
    description: "Desarrollo de estrategia de marketing comercial y eventos especiales a nivel nacional, rompiendo récord histórico de ventas."
  },
  {
    brand: "McDonald’s",
    description: "Validación de entrada al mercado latinoamericano, desarrollo de estrategia operacional y esquema de franquicias."
  },
  {
    brand: "Sello Rojo",
    description: "Desarrollo del área de Mercadotecnia y creación de campañas promocionales para más de 60 productos a nivel nacional."
  },
  {
    brand: "KIA",
    description: "Creación de campaña promocional y de posicionamiento de marca para más de 13 concesionarios a nivel nacional."
  },
  {
    brand: "Mercedes-Benz",
    description: "Creación de campaña a nivel nacional para el lanzamiento de la línea eléctrica EQ de Mercedes-Benz."
  },
  {
    brand: "Liz Muebles",
    description: "Desarrollo y ejecución de plan de marketing nacional y expansión en Centro y Sudamérica."
  },
  {
    brand: "Vitromex",
    description: "Desarrollo del área comercial y estrategia de marketing a nivel nacional rompiendo récords en ventas."
  },
  {
    brand: "Tequila Huizache",
    description: "Desarrollo de imagen de marca, estrategia de posicionamiento e identificación de nicho de negocio con exitosa entrada al mercado europeo."
  },
  {
    brand: "ProMéxico",
    description: "Creación y dirección del área de marketing, comunicación y relaciones públicas a nivel mundial."
  }
];

export const Path = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sincronizar el indicador activo basado en el scroll real (para Mobile y Desktop por igual)
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.8)); // Ajustado a la proporción visual
      setActiveIndex(Math.min(Math.max(index, 0), PROJECTS_DATA.length - 1));
    }
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstChild.offsetWidth + 32; // Ancho + gap
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIndex = activeIndex - 1 < 0 ? PROJECTS_DATA.length - 1 : activeIndex - 1;
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = activeIndex + 1 >= PROJECTS_DATA.length ? 0 : activeIndex + 1;
    scrollToIndex(nextIndex);
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

        {/* CONTENEDOR DEL INTERACTIVO CON SNAPPING */}
        <div className="relative -mx-6 md:-mx-16 px-6 md:px-16 mb-12">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 touch-pan-x"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {PROJECTS_DATA.map((project, idx) => (
              <div 
                key={idx}
                className="w-[85vw] sm:w-[45vw] lg:w-[30vw] shrink-0 bg-white border border-slate-200/60 p-8 md:p-10 snap-start flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-300 group select-none min-h-[260px]"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-[10px] tracking-widest text-[#2d61e0]/80 font-bold uppercase">
                      Case Study // 0{idx + 1}
                    </span>
                    <Layers className="w-4 h-4 text-slate-300 group-hover:text-[#2d61e0] transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <h3 className="text-slate-900 font-montserrat text-lg font-semibold uppercase tracking-wider mb-4">
                    {project.brand}
                  </h3>
                  <p className="text-slate-600 font-montserrat text-xs md:text-sm font-light leading-relaxed tracking-wide">
                    {project.description}
                  </p>
                </div>
                
                <div className="w-0 h-[2px] bg-[#2d61e0] group-hover:w-full transition-all duration-500 mt-6" />
              </div>
            ))}
          </div>
        </div>

        {/* TEXTO DE CONSOLIDACIÓN Y BARRAS DE PROGRESO DEBAJO DEL CARRUSEL */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-16 border-b border-slate-200">
          <p className="max-w-2xl text-slate-800 font-montserrat text-base md:text-base font-light tracking-wide leading-relaxed">
            Hemos logrado posicionar múltiples empresas en nuevos territorios, optimizar procesos comerciales y desarrollar alianzas estratégicas que hoy siguen generando valor.
          </p>
          
          {/* Indicadores Visuales Dot Matrix */}
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

        {/* BANDA INFERIOR: METRICAS CONSOLIDADAS (Diseño Espejo del Hero) */}
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
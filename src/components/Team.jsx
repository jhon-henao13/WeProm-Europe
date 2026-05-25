import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Users } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// ESTRUCTURA DE DATOS DEL EQUIPO (Datos oficiales del documento)
// ─────────────────────────────────────────────────────────────
const TEAM_DATA = [
  {
    id: 1,
    name: "José Miguel Ventura Michel",
    role: "Director General, WeProm Europe",
    desc: "Publicista, Comunicólogo y especialista en marketing trilingüe. Más de diez años de experiencia en marketing estratégico, estudios de mercado y desarrollo de negocios internacionales.",
    initials: "JM"
  },
  {
    id: 2,
    name: "Juan Carlos Ventura Pimentel",
    role: "Strategic Advisor / Asesor General, Grupo WeProm",
    desc: "Más de 35 años en marketing y desarrollo comercial internacional. Experiencia pública y privada en proyectos con gobiernos, embajadas y organismos multilaterales en América, Europa, África y Asia.",
    initials: "JC"
  },
  {
    id: 3,
    name: "Juan Carlos Ventura Michel",
    role: "Strategic Advisor / Director General, WeProm LATAM",
    desc: "Empresario y consultor con más de 15 años de experiencia internacional en marketing, estudios de mercado, posicionamiento de marca y expansión comercial.",
    initials: "JV"
  },
  {
    id: 4,
    name: "Oscar Santamaría Casas",
    role: "Consultor Internacional Asociado, WeProm Europe",
    desc: "Más de 35 años de experiencia en cooperación internacional, atracción de inversión extranjera, y desarrollo de negocios entre México y la Unión Europea para el sector público y privado.",
    initials: "OS"
  },
  {
    id: 5,
    name: "Lisa Lenselle",
    role: "Dirección Comercial y Relaciones Públicas",
    desc: "Marketing internacional, y desarrollo de oportunidades comerciales con experiencia en sectores públicos y privados en Europa y LATAM.",
    initials: "LL"
  },
  {
    id: 6,
    name: "Emilia López Matute",
    role: "Dirección de Comunicación",
    desc: "Especialización en comunicación política, corporativa, y digital, enfocada en el desarrollo de estrategias multicanal para la promoción y posicionamiento de marcas e instituciones.",
    initials: "EL"
  },
  {
    id: 7,
    name: "Joe Karam",
    role: "Gestión de Procesos y Riesgos Financieros",
    desc: "Ingeniero especializado en entornos financieros internacionales, asesorando a clientes globales en análisis funcionales y gestión de riesgos financieros.",
    initials: "JK"
  },
  {
    id: 8,
    name: "Josh Biner",
    role: "Operaciones y Expansión Internacional",
    desc: "Asesor internacional para proyectos de planeación estratégica, innovación, sustentabilidad y expansión, especializado en fusiones, adquisiciones y transformación comercial en corporativos multinacionales.",
    initials: "JB"
  },
  {
    id: 9,
    name: "Pablo De la Garza",
    role: "Creatividad y Comunicación Europa-LATAM",
    desc: "Desarrollo de áreas creativas y tropicalización de estrategias de comunicación, con una profunda comprensión multicultural.",
    initials: "PG"
  },
  {
    id: 10,
    name: "Gustavo Cuéllar",
    role: "Internacionalización y Cultura de Negocios",
    desc: "Especialista en internacionalización empresarial, enfocado en diseño de modelos de negocio y planes de trabajo para startups y empresas globales adaptados a nuevos mercados.",
    initials: "GC"
  },
  {
    id: 11,
    name: "Carlos Martínez",
    role: "Relaciones Diplomáticas y Asuntos Legal Internacionales",
    desc: "Abogado internacional especializado en relaciones exteriores, implantación en nuevos mercados y asesoría jurídica.",
    initials: "CM"
  }
];

export const Team = () => {
  // Inicializamos con el primer miembro activo para que el bloque de detalle nunca esté vacío
  const [activeId, setActiveId] = useState(1);
  const scrollContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const activeMember = TEAM_DATA.find(m => m.id === activeId) || TEAM_DATA[0];

  // ── Lógica de Navegación por Flechas ──
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // ── Lógica de Drag & Scroll (Mouse y Touch) ──
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="relative bg-white py-24 md:py-32 px-6 md:px-16 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* CABECERA DE LA SECCIÓN */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal">
          <div className="max-w-3xl">
            <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4">
              Nuestro equipo
            </p>
            <h2 className="text-slate-900 font-montserrat text-3xl md:text-[35px] font-semibold uppercase leading-tight tracking-wide mb-6">
              Somos un equipo multicultural, multidisciplinario y multigeneracional.
            </h2>
            <p className="text-black font-montserrat text-sm md:text-base font-light leading-relaxed tracking-wide">
              Combinamos décadas de experiencia internacional con la visión y agilidad de las nuevas generaciones. Nuestro equipo reúne perfiles de distintas disciplinas — marketing, comercio exterior, finanzas, economía, comunicación, relaciones internacionales y más — porque internacionalizar un negocio requiere exactamente eso: visión integral, no especialización aislada.
            </p>
          </div>
          
          {/* Controles de Navegación de Escritorio */}
          <div className="flex gap-2 mt-8 md:mt-0 select-none">
            <button 
              onClick={() => handleScroll('left')}
              className="w-12 h-12 border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
              aria-label="Anterior"
            >
              <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="w-12 h-12 border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
              aria-label="Siguiente"
            >
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* CARRUSEL DESLIZABLE PREMIUM */}
        <div className="relative mb-12 reveal">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory touch-pan-x cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TEAM_DATA.map((member) => {
              const isSelected = activeId === member.id;
              return (
                <div
                  key={member.id}
                  onClick={() => setActiveId(member.id)}
                  className="flex-shrink-0 w-[260px] bg-white border p-6 snap-start transition-all duration-300 cursor-pointer select-none relative group"
                  style={{
                    borderColor: isSelected ? '#2d61e0' : 'rgba(226, 232, 240, 0.8)',
                    boxShadow: isSelected ? '0 10px 25px -5px rgba(45, 97, 224, 0.08)' : 'none'
                  }}
                >
                  {/* Contenedor del Avatar Reticular / Placeholder Elegante */}
                  <div className="w-16 h-16 rounded-full border border-slate-200 mb-6 flex items-center justify-center bg-slate-50 relative overflow-hidden transition-colors duration-300 group-hover:border-[#2d61e0]/40">
                    <span className="font-montserrat text-sm font-semibold text-slate-700 tracking-wider">
                      {member.initials}
                    </span>
                    {/* Anillo de Selección Activo */}
                    {isSelected && (
                      <div className="absolute inset-0 border-2 border-[#2d61e0] rounded-full animate-ping opacity-25 pointer-events-none" />
                    )}
                  </div>

                  {/* Info Primaria */}
                  <h3 className="text-slate-900 font-montserrat text-sm font-semibold uppercase tracking-wider mb-2 line-clamp-2 min-h-[40px]">
                    {member.name}
                  </h3>
                  <p className="text-[#2d61e0] font-montserrat text-[11px] font-medium uppercase tracking-wider line-clamp-2 min-h-[32px]">
                    {member.role}
                  </p>

                  <div className="mt-4 text-[11px] text-slate-400 font-mono tracking-widest uppercase pt-4 border-t border-slate-100 flex justify-between items-center">
                    
                    <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Sombra de desvanecimiento lateral en Desktop */}
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block" />
        </div>

        {/* PANEL DINÁMICO DE DETALLE (EXECUTIVE DRAWER) */}
        <div className="bg-slate-50 border border-slate-200/60 p-8 md:p-10 reveal transition-all duration-300 min-h-[160px] flex flex-col md:flex-row gap-6 md:gap-12 items-start">
          <div className="flex-shrink-0 bg-[#2d61e0]/10 text-[#2d61e0] w-12 h-12 flex items-center justify-center border border-[#2d61e0]/20">
            <Users className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
              <h4 className="text-slate-900 font-montserrat text-base font-bold uppercase tracking-wider">
                {activeMember.name}
              </h4>
              <span className="hidden md:inline text-slate-300">|</span>
              <span className="text-[#2d61e0] font-montserrat text-xs font-semibold uppercase tracking-widest">
                {activeMember.role}
              </span>
            </div>
            <p className="text-black font-montserrat text-xs md:text-xl font-light leading-relaxed tracking-wide max-w-5xl transition-opacity duration-300">
              {activeMember.desc}
            </p>
          </div>
        </div>

        {/* PIE DE SECCIÓN */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 reveal">
          <p className="text-black font-montserrat text-xs md:text-base italic font-light leading-relaxed">
            Respaldados por el equipo internacional de Grupo WeProm con más de 50 colaboradores y 30 asesores asociados en Europa, América Latina y Norteamérica.
          </p>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1.5 whitespace-nowrap select-none">
            Global Network Asset
          </div>
        </div>

      </div>
    </section>
  );
};
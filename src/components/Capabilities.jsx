import React from 'react';

export const Capabilities = () => {
  const serviciosInvestigacion = [
    "Estudios de factibilidad para nuevos negocios y expansions internacionales.",
    "Análisis comparativo de los competidores (benchmarking) e identificación de actores clave por zona y sector.",
    "Estudios de hábitos, preferencias y percepción de marca, producto o servicio.",
    "Mystery shopping internacional y auditorías de experiencia de compra.",
    "Evaluación de áreas de oportunidad en empresa, sector e industria.",
    "Encuestas y sondeos de opinión."
  ];

  return (
    <section className="relative bg-white px-6 md:px-16 overflow-visible">
      <div className="max-w-7xl mx-auto">
        
        {/* BLOQUE INTRODUCTORIO GENERAL */}
        <div className="relative z-30 mt-[60px] md:mt-[120px] mb-24 max-w-4xl">
          <p className="text-black font-montserrat text-base md:text-lg font-light leading-relaxed tracking-wide">
            <strong className="font-semibold text-slate-900">No operamos como una agencia.</strong> Somos un socio estratégico que integra investigación de mercados, estrategia y ejecución bajo nuestra propia metodología, con un equipo internacional que entiende los dos lados del Atlántico. Trabajamos en tres áreas que se refuerzan entre sí:
          </p>
        </div>

        {/* 1. INVESTIGACIÓN Y ANÁLISIS DE MERCADOS */}
        <div className="relative z-10 border-t border-slate-100 pt-16 reveal">
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* Título de Bloque y Descripción */}
            <div className="lg:col-span-5">
              <h3 className="text-sm font-bold text-[#2d61e0] tracking-[0.25em] uppercase border-l-4 border-[#2d61e0] pl-6 mb-6">
                1. Investigación y análisis de mercados — Europa y América Latina
              </h3>
              <p className="text-black font-montserrat text-sm md:text-base font-light leading-relaxed tracking-wide mb-6">
                Transformamos la incertidumbre en datos precisos para validar expansiones, lanzamientos o fusiones; interpretamos la información para entregar estrategias claras de marketing, comercialización y operaciones, minimizando el riesgo financiero de cada proyecto y aumentando al máximo las probabilidades de éxito.
              </p>
              <p className="text-slate-700 font-montserrat text-sm italic font-light leading-relaxed">
                Hemos trabajado con prácticamente todas las industrias y sectores productivos. Si el mercado existe, tenemos la capacidad técnica y operativa para analizarlo a nivel local, nacional o internacional.
              </p>
            </div>

            {/* Listado de Servicios */}
            <div className="lg:col-span-7 bg-slate-50/50 p-8 border border-slate-100">
              <ul className="space-y-4">
                {serviciosInvestigacion.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-black font-montserrat text-xs md:text-base font-light leading-relaxed">
                    <span className="text-[#2d61e0] font-medium text-xs mt-[2px]">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
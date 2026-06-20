import React from 'react';

export const MarketOpportunity = () => {
  const actors = [
    {
      title: "Empresas",
      desc: "Compañías preparadas para entrar, construir presencia o acelerar su crecimiento en el mercado europeo o latinoamericano."
    },
    {
      title: "Instituciones",
      desc: "Actores públicos y privados que trabajan para convertir la cooperación bilateral en proyectos reales, viables y ejecutables."
    },
    {
      title: "Ecosistemas de crecimiento",
      desc: "Redes, cámaras, grupos y socios estratégicos que buscan transformar conexiones transfronterizas en oportunidades estructuradas de crecimiento."
    }
  ];

  return (
    <section id="oportunidad" className="relative bg-transparent py-24 md:py-32 overflow-hidden border-b border-slate-100">
      <div className="max-w-[90%] xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PARTE 1: BLOQUE EDITORIAL ASIMÉTRICO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-4 md:mb-6">
          
          {/* Columna Izquierda: Kicker & Header Fijo Visual */}
          <div className="lg:col-span-5 sticky top-28 max-[1015px]:top-0">
            <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] md:text-[12px] mb-4 block">
              Contexto Estratégico
            </p>
            <h2 className="text-slate-900 font-montserrat text-2xl md:text-[34px] font-semibold uppercase leading-tight tracking-wide">
              Una oportunidad, <br className="hidden md:inline"/>por sí sola, no abre un mercado.
            </h2>
            <div className="w-16 h-[2px] bg-[#2d61e0] mt-8 hidden lg:block"></div>
          </div>

          {/* Columna Derecha: Manifiesto y Puntos de Dolor */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10 text-slate-600 text-sm md:text-base leading-relaxed font-light">
            
            <div className="flex gap-4 items-start border-b border-slate-100 pb-6">
              <span className="text-[#2d61e0] font-montserrat font-medium text-xs pt-1">01</span>
              <p>
                <strong className="font-semibold text-slate-900">Las empresas</strong> identifican potencial, pero no siempre tienen clara la ruta adecuada para entrar en un nuevo mercado.
              </p>
            </div>

            <div className="flex gap-4 items-start border-b border-slate-100 pb-6">
              <span className="text-[#2d61e0] font-montserrat font-medium text-xs pt-1">02</span>
              <p>
                <strong className="font-semibold text-slate-900">Las instituciones</strong> abren puertas, pero necesitan aliados con capacidad de ejecución que les ayuden a reducir riesgos y transformar oportunidades en proyectos viables y accionables.
              </p>
            </div>

            <div className="flex gap-4 items-start border-b border-slate-100 pb-6">
              <span className="text-[#2d61e0] font-montserrat font-medium text-xs pt-1">03</span>
              <p>
                <strong className="font-semibold text-slate-900">Los ecosistemas de crecimiento, promoción e inversión</strong> generan conexiones, pero muchas veces carecen de la estructura necesaria para convertirlas en oportunidades de negocio sostenibles.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-slate-900 font-medium text-base md:text-lg">
                <strong className="font-semibold">El desafío no está únicamente en detectar el potencial o identificar una oportunidad.</strong> Está en convertirla en algo claro, estructurado y ejecutable.
              </p>
              
              <p className="font-montserrat text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#2d61e0] mt-8 flex items-center gap-3">
                Ahí es donde entramos nosotros <span className="text-lg">→</span>
              </p>
            </div>

          </div>
        </div>

        {/* SEPARADOR INTEGRADO ELEGANTE */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-24"></div>

        {/* PARTE 2: TABLA ESTRUCTURADA DE ACTORES (3 COLUMNAS) */}
        <div className="space-y-12">
          
          <div className="max-w-3xl">
            <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.3em] uppercase text-[10px] mb-3">
              Nuestra Cooperación
            </p>
            <h3 className="text-slate-900 font-montserrat text-lg md:text-2xl font-medium uppercase tracking-wide">
              Trabajamos con actores que impulsan el crecimiento económico entre Europa y América Latina.
            </h3>
          </div>

          {/* Grilla / Tabla Adaptativa */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-slate-200/60 rounded-sm overflow-hidden shadow-sm">
            {actors.map((actor, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/50 p-8 md:p-10 border-b border-r border-slate-200/60 hover:bg-white transition-all duration-500 group relative flex flex-col justify-between min-h-[220px]"
              >
                {/* Efecto decorativo premium de línea superior al hacer hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2d61e0] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div>
                  <h4 className="font-montserrat text-slate-900 font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
                    {actor.title}
                  </h4>
                  <p className="text-slate-600 text-xs md:text-[13.5px] leading-relaxed font-light">
                    {actor.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusión Inferior Estilo Cierre de Folleto Corporativo */}
          <div className="mt-12 bg-slate-900 p-8 md:p-12 relative overflow-hidden rounded-sm">
            {/* Isotipo geométrico sutil de fondo */}
            <div className="absolute right-0 bottom-0 opacity-[0.03] translate-x-1/4 translate-y-1/4 pointer-events-none">
              <div className="w-96 h-96 border-[20px] border-white rotate-45"></div>
            </div>
            
            <p className="text-slate-200 text-sm md:text-base max-w-4xl leading-relaxed font-light relative z-10">
              Nuestro rol se vuelve <span className="text-white font-medium">determinante</span> ahí donde una oportunidad entre Europa y América Latina requiere mayor claridad, estructura y capacidad de ejecución para convertirse en un proyecto viable.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
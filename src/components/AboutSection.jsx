import React from 'react';

export const AboutSection = () => (
  <section className="bg-white py-32 px-8 md:px-16 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      {/* Título Superior con Tracking Extremo */}
      <div className="text-center mb-4 reveal" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <h2 className="text-blue-600 font-extrabold uppercase 
                       /* Móvil (Default) */
                       text-[1.7rem] tracking-normal 
                       /* Desktop (desde 768px en adelante) */
                       md:text-[35px] md:tracking-[0.1em]">
          W E &nbsp; K N O W &nbsp; B U S I N E S S
        </h2>
        <div className="w-12 h-[1px] bg-weprom-dark/20 mx-auto mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Lado Izquierdo: Mapa Europa Negro */}
        <div className="relative group reveal" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <img 
            src="/map-azul.png"
            alt="European Market Context" 
            className="w-full h-auto opacity-90 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-[1.02]"
          />
          {/* Overlay sutil decorativo */}
          
        </div>

        {/* Lado Derecho: Texto P */}
        <div className="space-y-8 reveal" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <div className="space-y-6 text-slate-700 leading-relaxed text-[1.1rem] font-light">
            <p className="font-montserrat tracking-widest font-normal text-black leading-snug">
              International markets are increasingly interconnected – and structurally complex.
            </p>
            <p className="font-montserrat tracking-wider font-normal text-black leading-snug">
              Companies, investors and governments operate in environments shaped by regulatory asymmetries, 
              cultural differences, competitive pressures and rapidly shifting economic dynamics. 
              Expansion across regions is no longer simply a matter of opportunity, but of strategic precision.
            </p>
            <p className="font-montserrat tracking-wider font-normal text-black leading-snug">
              Europe and Latin America represent a particularly distinctive axis of growth, cooperation 
              and market development. Yet, this corridor also demands deep contextual understanding, 
              reliable intelligence and carefully designed positioning strategies.
            </p>
            <p className="tracking-wider nt-serif text-weprom-dark border-l-2 border-slate-100 pl-2">
              In such environments, decisions cannot rely on intuition alone. They require structured 
              analysis, market insight and cross-border strategic thinking.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
import React from 'react';

export const AboutSection = () => (
  <section className="bg-white py-32 px-8 md:px-16 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      {/* Título Superior con Tracking Extremo */}
      <div className="text-center mb-16 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <h2 className="text-weprom-dark text-[35px] font-extrabold tracking-[0.1em] uppercase">
          W E &nbsp; K N O W &nbsp; B U S I N E S S
        </h2>
        <div className="w-12 h-[1px] bg-weprom-dark/20 mx-auto mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Lado Izquierdo: Mapa Europa Negro */}
        <div className="relative group opacity-0 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <img 
            src="/map-europe.png" 
            alt="European Market Context" 
            className="w-full h-auto opacity-90 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-[1.02]"
          />
          {/* Overlay sutil decorativo */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
        </div>

        {/* Lado Derecho: Texto P */}
        <div className="space-y-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
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
            <p className="italic tracking-wider nt-serif text-weprom-dark border-l-2 border-slate-100 pl-6 py-2">
              In such environments, decisions cannot rely on intuition alone. They require structured 
              analysis, market insight and cross-border strategic thinking.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
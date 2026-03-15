import React from 'react';

export const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-[6rem]">
    {/* Imagen de Fondo con Zoom Sutil */}
    <div className="absolute inset-0 z-0">
      <img 
        src="/hero-image.jpg" 
        alt="WeProm Strategic Background" 
        className="w-full h-full object-cover scale-100 animate-subtle-zoom"
      />
      <div className="absolute inset-0 bg-slate-950/30 mix-blend-multiply"></div>
      {/* Gradiente extra para legibilidad inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"></div>
    </div>

    {/* Contenido con Animación de entrada */}
    <div className="relative z-10 max-w-[100%] mx-auto px-8 md:px-16 w-full animate-fadeIn">
      <div className="max-w-5xl">

        {/*<p className="text-slate-300 font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block opacity-0 animate-[slideUp_0.8s_ease-out_forwards]">
          Strategic Intelligence • Europe & Latin America
        </p>*/}
        
        <h1 className="font-montserrat text-4xl font-semibold md:text-5xl text-white leading-[1.1] mb-6 tracking-wide opacity-0 animate-slide-up">

          International Market Expansion & <br />


          <span className="block font-montserrat tracking-wider mt-[10px]">Business Development</span>
          <span className="block font-montserrat font-semibold text-4xl md:text-5xl block mt-[10px] tracking-wide">
            Between Europe and Latin America
          </span>
        </h1>

        <div className="space-y-8 text-slate-200 max-w-4xl leading-relaxed text-[1.25rem] mb-7 opacity-0 animate-slide-up">
          <p className="font-sans tracking-widest font-light">
            WeProm Europe is a strategy and market intelligence firm based in France,
            specialized in international expansion, brand positioning, and cross-border
            business development between Europe and Latin America.

          </p>
          <p className="font-sans font-extralight opacity-70 tracking-wider border-l border-white/20 pl-6 italic">
            We support companies, institutions and territories in navigating complex markets,
            reducing uncertainty and transforming information into strategic decisions.
  
          </p>
        </div>

        <div className="opacity-0 animate-slide-up">
          <button className="group relative overflow-hidden bg-white text-weprom-dark px-6 py-4 text-[10px] font-bold uppercase tracking-[0.3em] rounded-full transition-all duration-500 hover:pr-12">
            <span className="relative z-10">Explore Our Capabilities</span>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
              →
            </span>
          </button>
        </div>
      </div>
    </div>

    {/* CSS Inline para animaciones (puedes moverlo a index.css si prefieres) */}
    <style jsx>{`
      @keyframes subtle-zoom {
        from { transform: scale(1); }
        to { transform: scale(1.1); }
      }
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn { animation: fadeIn 1.5s ease-out; }
    `}</style>
  </section>
);
import React from 'react';

export const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-[6rem]">
    {/* Imagen de Fondo con Zoom Sutil */}
    <div className="absolute inset-0 z-0">
      <img 
        src="/hero-image2.webp"
        alt="WeProm Strategic Background" 
        className="w-full h-full object-cover scale-100 animate-subtle-zoom"
      />
      <div className="absolute inset-0 bg-slate-950/10 mix-blend-multiply"></div>
      {/* Gradiente extra para legibilidad inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"></div>
    </div>

    {/* Contenido con Animación de entrada */}
    <div className="relative z-10 max-w-[100%] mx-auto px-8 md:px-16 w-full animate-fadeIn">
      <div className="max-w-5xl">

        {/*<p className="text-slate-300 font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block opacity-0 animate-[slideUp_0.8s_ease-out_forwards]">
          Strategic Intelligence • Europe & Latin America
        </p>*/}
        
        <h1 className="font-montserrat text-4xl font-semibold md:text-5xl text-white leading-[1.1] mb-6 tracking-wide reveal">

          International Market Expansion & <br />


          <span className="block font-montserrat tracking-wider mt-[10px]">Business Development</span>
          <span className="block font-montserrat font-semibold text-4xl md:text-5xl block mt-[10px] tracking-wide">
            Between Europe and Latin America
          </span>
        </h1>

        <div className="space-y-8 text-slate-200 max-w-4xl leading-relaxed text-[1.25rem] mb-7 reveal opacity-100">
          <p className="font-montserrat tracking-widest font-light leading-snug">
            WeProm Europe is a strategy and market intelligence firm based in France,
            specialized in international expansion, brand positioning, and cross-border
            business development between Europe and Latin America.

          </p>
          <p className="font-montserrat font-extralight opacity-90 tracking-wider border-l border-white/20 pl-6 italic leading-snug">
            We support companies, institutions and territories in navigating complex markets,
            reducing uncertainty and transforming information into strategic decisions.
  
          </p>
        </div>

        <div className="reveal">
          <button className="group relative w-[25pc] overflow-hidden bg-white/15 border border-white/30 backdrop-blur-md text-white px-12 py-5 text-[11px] font-extrabold uppercase tracking-[0.4em] rounded-full transition-all duration-700 ease-in-out shadow-[0_0_0_0_rgba(255,255,255,0)] hover:bg-white hover:text-weprom-dark hover:border-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
            
            {/* Haz de luz interno sutil */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
            
            <span className="relative z-10 flex items-center justify-center gap-4 transition-all duration-500 group-hover:gap-6">
              Explore Our Capabilities
              <span className="text-[14px] transform transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </span>
        
            {/* Sombra interna 3D sutil */}
            <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] rounded-full pointer-events-none"></div>
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
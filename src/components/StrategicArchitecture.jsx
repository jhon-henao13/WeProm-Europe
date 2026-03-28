import React from 'react';

export const StrategicArchitecture = () => {
  return (
    <section className="relative bg-white px-8 md:px-16 overflow-visible border-b border-slate-50">
      <div className="max-w-full mx-auto pb-32">
        {/* Espaciado para que no se pegue al bloque anterior, manteniendo la fluidez */}
        <div className="relative z-10 space-y-20 pt-16 md:pt-20">
          
          {/* Bloque 1 */}
          <div className="reveal group" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-[1.1rem] font-bold mb-6 text-weprom-dark tracking-[0.3em] uppercase border-l-4 border-blue-600 pl-6 transition-all duration-500 group-hover:pl-8">
              Strategic Positioning & Communication
            </h3>
              <p className="text-black font-montserrat leading-snug text-lg font-normal max-w-2xl max-w-5xl tracking-wide">
                In competitive and international markets, positioning is a fundamental pillar of commercial viability. We help 
                organizations define and articulate authoritative value narratives, ensuring coherence between market 
                realities, brand perception and institutional communication. By deploying targeted communication strategies 
                and effective outreach initiatives, we accelerate market entry and strengthen commercial influence.
              </p>
            </div>

            {/* Bloque 2 */}
            <div className="reveal group" style={{ transitionDelay: '0.2s' }}>
              <h3 className="text-[1.1rem] font-bold mb-6 text-weprom-dark tracking-[0.3em] uppercase border-l-4 border-blue-600 pl-6 transition-all duration-500 group-hover:pl-8">
                Global Trade & Supply Chain Architecture
              </h3>
              <p className="text-black font-montserrat leading-snug text-lg font-normal max-w-2xl max-w-5xl tracking-wide">
                Beyond strategy, we provide the technical architecture for international trade. Our expertise covers the 
                complexities of global logistics, customs compliance, and tariff optimization, allowing us to manage the entire 
                trade cycle. We navigate regulatory frameworks to mitigate risk and ensure operational efficiency, facilitating 
                cross-border trade flows.
              </p>
            </div>

            {/* Bloque 3 */}
            <div className="reveal group" style={{ transitionDelay: '0.3s' }}>
              <h3 className="text-[1.1rem] font-bold mb-6 text-weprom-dark tracking-[0.3em] uppercase border-l-4 border-blue-600 pl-6 transition-all duration-500 group-hover:pl-8">
                Territorial & Country Brand Strategy
              </h3>
              <p className="text-black font-montserrat leading-snug text-lg font-normal max-w-2xl max-w-5xl tracking-wide">
                Territories compete for investment, talent, and economic relevance. WeProm Europe collaborates with 
                governments and institutions in developing strategic frameworks for Foreign Direct Investment (FDI) 
                attraction, territorial positioning, and international perception management. We design economic 
                promotion initiatives that help entities build resilient business ecosystems.
              </p>
            </div>

            {/* Botón Call to Action */}
            <div className="reveal pt-0">
              

              <button className="group relative w-[17pc] overflow-hidden bg-transparent border-2 border-blue-500/50 backdrop-blur-[4px] text-blue-600 px-12 py-5 text-[12px] font-extrabold uppercase tracking-[0.4em] rounded-full transition-all duration-700 ease-out shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:border-blue-600 hover:text-blue-700 hover:shadow-[0_10px_25px_rgba(59,130,246,0.2),inset_0_0_15px_rgba(59,130,246,0.2)] hover:scale-105 active:scale-95">
                {/* Efecto de brillo más intenso */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></span>
                
                <span className="relative z-10 transition-transform duration-500 group-hover:tracking-[0.5em]">
                  Contact us
                </span>
              </button>

            </div>
          </div>


      </div>
    </section>
  );
};
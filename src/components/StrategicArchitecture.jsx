import React from 'react';

export const StrategicArchitecture = () => {
  return (
    <section className="relative bg-white py-32 px-8 md:px-16 overflow-hidden border-b border-slate-50">
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-center">
        
        {/* LADO IZQUIERDO: Alineado 100% a la izquierda */}
        <div className="w-full md:w-[70%] z-10">
          
          
          <div className="space-y-20">
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
              <button className="group relative overflow-hidden bg-weprom-dark text-white px-14 py-5 text-[12px] font-bold uppercase tracking-[0.4em] rounded-full transition-all duration-500 hover:shadow-[0_20px_40px_rgba(15,23,42,0.3)] hover:-translate-y-1">
                <span className="relative z-10">Contact us</span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
              </button>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: Logo con Parallax Independiente */}
        <div 
          id="parallax-logo-architecture"
          className="absolute top-1/2 -right-[25%] w-full md:w-[50%] opacity-20 select-none flex justify-end transition-transform duration-200 ease-out hover-slide-left cursor-default"
          style={{ 
            transform: 'translateY(calc(-50% + var(--parallax-logo-y, 0px)))' 
          }}
        >
          <img 
            src="/icon.webp" 
            alt="" 
            className="w-full h-auto object-contain grayscale brightness-50" 
          />
        </div>


      </div>
    </section>
  );
};
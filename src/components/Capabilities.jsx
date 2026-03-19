import React from 'react';

export const Capabilities = () => {
  return (
    <section className="relative bg-white py-32 px-8 md:px-16 overflow-hidden border-b border-slate-50">
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-center">
        
        {/* LADO IZQUIERDO: 60% de ancho */}
        <div className="w-full md:w-[70%] z-10">
          <h2 className="reveal text-blue-600 text-[60px] font-bold uppercase mb-12">
            Strategic Capabilities
          </h2>
          
          <div className="space-y-16">
            {/* Capacidad 1 */}
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <h3 className="text-[0.7rem] md:text-[1.3rem] font-semibold mb-6 text-weprom-dark tracking-[0.44rem]">
                Market Research & Business Intelligence
              </h3>
              <p className="text-black font-montserrat leading-snug text-lg font-normal max-w-8xl tracking-wide">
                We analyze markets, sectors, and competitive environments to generate structured insights that 
                support high-level decision-making. Our intelligence frameworks help organizations understand 
                demand structures, risks, and opportunity landscapes across complex international contexts. We 
                transform raw data into actionable strategic intelligence to provide a clear competitive advantage.
              </p>
            </div>

            {/* Capacidad 2 */}
            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <h3 className="text-[0.7rem] md:text-[1.2rem] font-semibold mb-6 text-weprom-dark tracking-[0.44rem]">
                International Expansion & Market Entry
              </h3>
              <p className="text-black font-montserrat leading-snug text-lg font-normal max-w-2xl max-w-5xl tracking-wide">
                WeProm Europe supports companies and institutions in designing and executing expansion strategies 
                between Europe and Latin America. From feasibility assessment to market entry architecture, we 
                navigate the regulatory, commercial, and cultural dimensions of cross-border growth. Our 
                methodology ensures a structured transition into new markets, minimizing friction and optimizing 
                resource allocation.
              </p>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: Logo Gris con ID corregido */}
        <div 
          id="parallax-logo-container"
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
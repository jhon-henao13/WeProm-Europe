import React from 'react';

export const Capabilities = () => {
  return (
    <section className="relative bg-white px-8 md:px-16 overflow-visible">
      <div className="max-w-full mx-auto pt-22 pb-0">
        {/* Contenedor de servicios 1 y 2 - Manteniendo el margen para no chocar con el título que ahora viene de App.jsx */}
        <div className="relative z-10 space-y-16 mt-[50px] md:mt-[100px]">
          {/* Capacidad 1 */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-[1.1rem] font-bold mb-6 text-weprom-dark tracking-[0.3em] uppercase border-l-4 border-blue-600 pl-6 transition-all duration-500 group-hover:pl-8">
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
            <h3 className="text-[1.1rem] font-bold mb-6 text-weprom-dark tracking-[0.3em] uppercase border-l-4 border-blue-600 pl-6 transition-all duration-500 group-hover:pl-8">
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

    </section>
  );
};
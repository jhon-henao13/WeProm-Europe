import React from 'react';

export const MultisectoralExpertise = () => {
  return (
    <section className="relative bg-white py-32 px-8 md:px-16 overflow-hidden border-b border-slate-50">
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-center">
        
        {/* LADO IZQUIERDO: Alineado 100% a la izquierda */}
        <div className="w-full md:w-[70%] z-10">
          
          <div className="space-y-20">
            {/* Título y Párrafo 1 */}
            <div className="reveal group" style={{ transitionDelay: '0.1s' }}>
              <h3 className="text-[3.2rem] max-w-4xl font-bold mb-6 text-weprom-dark tracking-[0.07em] uppercase border-l-4 border-blue-600 pl-6 transition-all duration-500 group-hover:pl-8">
                Our Multisectoral Expertise
              </h3>

              <br />
 
              <p className="text-black font-montserrat leading-snug text-[1.25rem] font-normal max-w-5xl tracking-wide">
                WeProm Europe operates across multiple productive sectors.
              </p>

              <br/>

              <p className="text-black font-montserrat leading-snug text-[1.25rem] font-normal max-w-[60%] tracking-wide">
               We detect international business opportunities for products and services regardless of industry, identifying viable regions and strategic pathways for international development.
              </p>

              <br /> 

              <p className="text-black font-montserrat leading-snug text-[1.25rem] font-normal max-w-[60%] tracking-wide">
                Our multisectoral approach allows adaptive strategic design tailored to specific 
                competitive and regulatory environments.
              </p>

            </div>

            {/* Párrafo 2 */}
            <div className="reveal group" style={{ transitionDelay: '0.2s' }}>

              <h3 className="text-[1.1rem] font-bold mb-6 text-black tracking-[0.1em] uppercase border-l-4 border-blue-600 pl-6 transition-all duration-500 max-w-2xl">
                We have directly contributed to the 
                success of projects that are now benchmarks in their sector.
              </h3>
              
            </div>

            {/* CTA opcional para mantener simetría con la sección anterior si lo deseas, 
                o puedes eliminarlo si prefieres menos carga visual en esta sección */}
            

          </div>
        </div>

        {/* LADO DERECHO: Imagen/Logo con Parallax (Consistencia de marca) */}
        

        {/* LADO DERECHO: Imagen/Logo con Parallax - Responsive Fix */}
        <div 
          id="parallax-multisectoral"
          className="
            /* Mobile: Centrado, detrás del texto y más pequeño */
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] opacity-10 pointer-events-none
            /* Desktop (md): Recupera posición original y estilo */
            md:left-auto md:right-[-6.5%] md:translate-x-0 md:w-[50%] md:opacity-100 md:pointer-events-auto
            select-none flex justify-end transition-all duration-700 ease-out cursor-pointer group/cube z-0 md:z-10"
          style={{ 
            transform: 'translateY(calc(-0% + var(--parallax-multisectoral-y, 0px)))' 
          }}
        >
          <img 
            src="/cubo2.png" 
            alt="WeProm Institutional" 
            className="w-full h-auto object-contain transition-transform duration-500 ease-in-out group-hover/cube:scale-102" 
          />
        </div>


      </div>
    </section>
  );
};
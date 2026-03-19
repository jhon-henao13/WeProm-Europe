import React from 'react';

export const InternationalGroup = () => {
  return (
    <section className="bg-slate-50 py-42 px-8 md:px-16 border-y border-slate-100 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Párrafo 1 */}
        <p className="reveal font-montserrat text-black text-[1rem] md:text-[1.3rem] font-normal tracking-wider leading-snug">
          WeProm Europe is part of an international corporate group with{" "}
          <span className="font-semibold text-weprom-dark">
            over 35 years of experience
          </span>{" "}
          in multisector business development, export strategy, territorial positioning, 
          and cross-border market expansion.
        </p>
        
        {/* Línea divisoria animada */}
        <div 
          className="reveal w-16 h-[1px] bg-weprom-dark/20 mx-auto my-12"
          style={{ transitionDelay: '0.2s' }}
        ></div>

        {/* Párrafo 2 */}
        <p 
          className="reveal font-montserrat text-black leading-snug text-[1rem] md:text-[1.3rem] font-normal tracking-wider"
          style={{ transitionDelay: '0.4s' }}
        >
          <span className="font-semibold text-weprom-dark">
            With operational presence in both Europe and Latin America
          </span>
          , our structure ensures coordinated strategies and local execution 
          capacity across both regions.
        </p>
      </div>
    </section>
  );
};
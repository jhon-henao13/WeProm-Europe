import React from 'react';

export const WhoWeAre = () => (
  <section className="bg-white border-t border-slate-50 overflow-hidden min-h-[600px] flex items-stretch">
    <div className="w-full grid md:grid-cols-2 gap-0 items-stretch">
      
      {/* Lado Izquierdo: Contenido */}
      <div className="space-y-12 order-2 md:order-1 opacity-0 animate-slide-up py-24 px-8 md:px-24 flex flex-col justify-center" style={{ animationFillMode: 'forwards' }}>
        <div>
          <h2 className="text-weprom-dark text-[40px] font-extrabold tracking-[0.01em] uppercase mb-8">
            W H O &nbsp; W E &nbsp; A R E
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed text-[1.1rem] font-light">
            <p className="font-montserrat tracking-wider font-normal text-black leading-snug">
              WeProm Europe is a France-based strategic firm dedicated to supporting international business expansion and market development between Europe and Latin America.
            </p>
            <p className="font-montserrat tracking-wider font-normal text-black leading-snug">
              We operate at the intersection of market intelligence, strategy, brand positioning, and business development, assisting companies and organizations that seek to enter, expand or strengthen their presence across regions characterized by regulatory diversity and competitive complexity.
            </p>
            <p className="font-montserrat tracking-wider font-normal text-black leading-snug">
              Our work is grounded in analytical rigor, contextual understanding and a long-term strategic perspective. Rather than offering isolated tactical solutions, we focus on building coherent frameworks that align market realities, organizational objectives and sustainable growth pathways.
            </p>
          </div>
        </div>

        <button className="group relative w-[17pc] overflow-hidden bg-transparent border-2 border-blue-500/50 backdrop-blur-[4px] text-blue-600 px-12 py-5 text-[12px] font-extrabold uppercase tracking-[0.4em] rounded-full transition-all duration-700 ease-out shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:border-blue-600 hover:text-blue-700 hover:shadow-[0_10px_25px_rgba(59,130,246,0.2),inset_0_0_15px_rgba(59,130,246,0.2)] hover:scale-105 active:scale-95">
          {/* Efecto de brillo más intenso */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></span>
          
          <span className="relative z-10 transition-transform duration-500 group-hover:tracking-[0.5em]">
            Contact us
          </span>
        </button>

      </div>

      {/* Lado Derecho: Imagen Vertical Edificio */}
      <div className="order-1 md:order-2 opacity-0 animate-slide-up relative min-h-[500px] md:min-h-full" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/building-vertical.jpg" 
            alt="Strategic Infrastructure" 
            className="w-full h-full object-cover object-center" 
          />
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-weprom-dark/5 pointer-events-none"></div>
        </div>
      </div>

    </div>
  </section>
);
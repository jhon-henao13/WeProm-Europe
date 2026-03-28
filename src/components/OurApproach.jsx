import React from 'react';

export const OurApproach = () => {
  const points = [
    "Analytical rigor over assumption",
    "Structural positioning over visibility alone",
    "Long-term competitiveness over short-term exposure",
    "Institutional coordination over isolated action"
  ];

  return (
    <section className="relative bg-white py-22 px-8 md:px-16 overflow-hidden border-b border-slate-50">
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-center">
        
        {/* LADO IZQUIERDO: Contenido */}
        <div className="w-full md:w-[70%] z-10">
          <div className="space-y-12">
            
            {/* Título Superior */}
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h3 className="text-[2.9rem] font-bold mb-6 text-weprom-dark tracking-[0.1em] uppercase border-l-4 border-blue-600 pl-6">
                Our Approach
              </h3>
              <h2 className="text-black font-montserrat leading-tight text-[1.2rem] md:text-[1.5rem] font-bold max-w-4xl mt-10 ml-14">
                Effective expansion and positioning require intelligence before execution.
              </h2>
            </div>


            {/* Lista Interactiva con Puntos Elegantes */}
            <ul className="space-y-6 ml-16 md:ml-20">
              {points.map((point, index) => (
                <li 
                  key={index}
                  className="reveal flex items-center space-x-6 group cursor-default"
                  style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                >
                  {/* Punto Dinámico */}
                  <span className="relative flex h-3 w-3 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600 transition-all duration-500 group-hover:h-3 group-hover:w-3 group-hover:bg-blue-500"></span>
                  </span>
            
                  <p className="text-black font-montserrat text-[1.1rem] md:text-[1.25rem] tracking-wide group-hover:text-blue-900 transition-all duration-500 ease-out">
                    {point}
                  </p>
                </li>
              ))}
            </ul>

            {/* Texto Final y CTA */}
            <div className="reveal space-y-8 ml-14" style={{ transitionDelay: '0.7s' }}>
              <div className="max-w-5xl mb-14">
                <h2 className="text-[1.3rem] font-bold text-black tracking-[0.04em] border-l-4 border-blue-600 pl-6">
                  We do not operate as an agency.
                </h2>
                <h2 className="text-[1.3rem] font-bold text-black tracking-[0.04em] border-l-4 border-blue-600 pl-6">
                  We operate as a strategic partner in international market development.
                </h2>
              </div>

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

        {/* LADO DERECHO: Cubo Decorativo con Parallax */}
        

      </div>
    </section>
  );
};
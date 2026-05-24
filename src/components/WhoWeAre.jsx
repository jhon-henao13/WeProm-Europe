import React from 'react';

export const WhoWeAre = () => {
  return (
    <section className="bg-white border-t border-slate-100 overflow-hidden min-h-screen flex items-stretch">
      <div className="w-full grid lg:grid-cols-12 gap-0 items-stretch">
        
        {/* BLOQUE IZQUIERDO: TEXTO EDITORIAL Y CITA DE DIRECCIÓN */}
        <div className="lg:col-span-7 order-2 lg:order-1 py-20 px-6 md:px-16 lg:px-24 flex flex-col justify-center bg-white">
          
          {/* Encabezado de Sección */}
          <div className="mb-10">
            <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4">
              Quiénes somos
            </p>
            <h2 className="text-slate-900 font-montserrat text-2xl md:text-3xl lg:text-[38px] font-semibold leading-tight tracking-wide">
              Tres generaciones desarrollando negocios alrededor del mundo.
            </h2>
            <div className="w-12 h-[2px] bg-slate-300 mt-6"></div>
          </div>

          {/* Cuerpo Principal (3 Párrafos Cortos Solicitados) */}
          <div className="space-y-6 text-slate-600 font-montserrat text-sm md:text-base font-light leading-relaxed tracking-wide mb-14 max-w-3xl">
            <p>
              WeProm Europe es la sede europea de <strong className="font-medium text-slate-900">Grupo WeProm</strong>, una firma internacional con más de 35 años experiencia, tres generaciones y más de 10,000 proyectos ejecutados para empresas globales, gobiernos e instituciones en Europa, América Latina, Norteamérica y Asia.
            </p>
            <p>
              Operamos desde Francia, México y Estados Unidos, en tres de las regiones que más oportunidades generan hoy. Cada cliente accede, a través nuestro, a la infraestructura, la red y la capacidad operativa acumulada por nuestro Grupo a lo largo de más de tres décadas.
            </p>
            <p>
              Conectamos empresas, gobiernos e instituciones mediante inteligencia de negocios, estrategia, marketing y comunicación, creando alianzas sostenibles y resultados tangibles que impulsan el crecimiento económico entre ambos continentes.
            </p>
          </div>

          {/* Cita Destacada (Estilo Editorial Premium) */}
          <blockquote className="border-t border-b border-slate-200 py-8 my-2 max-w-2xl relative">
            {/* Comilla Decorativa Sutil */}
            <span className="absolute -top-4 left-0 font-serif text-6xl text-slate-300 select-none pointer-events-none">
              “
            </span>
            <p className="text-slate-800 font-montserrat text-sm md:text-[15px] font-medium italic leading-relaxed tracking-wide mb-4 relative z-10">
              “Conectamos culturas y economías con el propósito de generar un impacto positivo que trascienda fronteras, creando un legado de progreso, colaboración y prosperidad compartida entre ambos continentes.”
            </p>
            <footer className="author">
              <cite className="not-italic block font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-[#2d61e0]">
                — José Miguel Ventura Michel
              </cite>
              <span className="block font-montserrat text-[10px] uppercase tracking-[0.15em] text-slate-400 mt-1">
                Director General, WeProm Europe
              </span>
            </footer>
          </blockquote>

        </div>

        {/* BLOQUE DERECHO: IMAGEN VERTICAL CON PARALLAX PRESERVADO */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative min-h-[400px] lg:min-h-full overflow-hidden bg-slate-950">
          <div className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <img 
              id="parallax-building"
              src="/building-vertical.jpg" 
              alt="WeProm Corporate Infrastructure" 
              className="w-full h-full object-cover object-center transition-transform duration-300 ease-out brightness-[0.85] contrast-[1.05]"
              style={{
                transform: 'translateY(var(--parallax-y, 0))'
              }}
            />
            {/* Degradados de fusión para emular fotografía premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent lg:hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent hidden lg:block"></div>
          </div>
        </div>

      </div>
    </section>
  );
};
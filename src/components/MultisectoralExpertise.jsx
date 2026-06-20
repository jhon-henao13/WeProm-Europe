import React from 'react';
import { 
  Plane, 
  Car, 
  Apple, 
  Zap, 
  Activity, 
  Cpu, 
  Sparkles 
} from 'lucide-react';

export const MultisectoralExpertise = () => {
  const sectores = [
    {
      icon: <Plane className="w-6 h-6 stroke-[1.25]" />,
      title: "Aeronáutica y aeroespacial",
      desc: "La aviación entre Europa y América Latina combina crecimiento de conectividad, exigencias de sostenibilidad y una fuerte demanda de proveedores especializados. Apoyamos a empresas, clústeres e instituciones a identificar socios estratégicos, resolver requisitos técnicos y rutas de certificación, y estructurar su entrada entre ambas regiones."
    },
    {
      icon: <Car className="w-6 h-6 stroke-[1.25]" />,
      title: "Automotriz y autopartes",
      desc: "La electrificación, las baterías y la reorganización de las cadenas de suministro están transformando la industria a ambos lados del Atlántico. Ayudamos a fabricantes y proveedores a posicionarse fuera del comercio intrafirma de las grandes marcas y a integrarse en nuevas cadenas de valor internacionales. "
    },
    {
      icon: <Apple className="w-6 h-6 stroke-[1.25]" />,
      title: "Agroalimentaria y agroindustria",
      desc: "América Latina es una región clave de producción agroalimentaria y Europa uno de los mercados más exigentes en calidad, trazabilidad y sostenibilidad. Acompañamos a productores y marcas a validar nichos de negocio, adaptar su oferta a nuevos mercados y construir relaciones comerciales sostenibles entre ambas regiones."
    },
    {
      icon: <Zap className="w-6 h-6 stroke-[1.25]" />,
      title: "Energías limpias y transición ecológica",
      desc: "Renovables, hidrógeno verde y eficiencia energética están impulsando la cooperación entre Europa y América Latina. Apoyamos la identificación de oportunidades, la construcción de alianzas estratégicas y la estructuración de proyectos viables con potencial de crecimiento."
    },
    {
      icon: <Activity className="w-6 h-6 stroke-[1.25]" />,
      title: "Salud, farma y dispositivos médicos",
      desc: "El sector combina demanda creciente, innovación y estándares regulatorios estrictos en ambas regiones. Acompañamos a empresas e instituciones a gestionar requisitos regulatorios, identificar socios locales y estructurar su entrada a nuevos mercados."
    },
    {
      icon: <Cpu className="w-6 h-6 stroke-[1.25]" />,
      title: "Tecnologías de la información, IA y deep-tech",
      desc: "La cooperación digital entre Europa y América Latina abre oportunidades en inteligencia artificial, datos y ciberseguridad. Ayudamos a startups, scale-ups e instituciones a convertir su innovación en pilotos, alianzas y estrategias de entrada y penetración de mercado."
    },
    {
      icon: <Sparkles className="w-6 h-6 stroke-[1.25]" />,
      title: "Cosmética, cuidado personal y bienes premium ",
      desc: "Europa es referente global en cosmética y bienes de alto valor; América Latina ofrece mercados dinámicos y consumidores cada vez más sofisticados. Acompañamos a las empresas en la viabilidad y entrada a mercados, el acceso regulatorio y la construcción de canales comerciales y alianzas de distribución. "
    }
  ];

  return (
    <section className="relative bg-transparent py-24 md:py-32 px-6 md:px-16 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto relative z-30">
        
        {/* CABECERA DE LA SECCIÓN */}
        <div className="max-w-4xl mb-20 reveal">
          <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4">
            Sectores estratégicos
          </p>
          <h2 className="text-slate-100 font-montserrat text-3xl md:text-[45px] font-semibold uppercase leading-tight tracking-wide mb-8">
            Trabajamos donde Europa y América Latina se necesitan.
          </h2>
          <p className="text-white font-montserrat text-base md:text-lg font-light leading-relaxed tracking-wide">
            Operamos con un enfoque multisectorial, con especial atención en las verticales donde el corredor Europa-LATAM concentra la mayor parte de las oportunidades reales. En cada uno hemos acompañado proyectos —algunos hoy considerados referencia en su industria.
          </p>
        </div>

        {/* GRID EDITORIAL DE TARJETAS ASIMÉTRICAS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-px bg-white/5 rounded-md  reveal mb-20">
          {sectores.map((sector, idx) => (
            <div 
              key={idx} 
              className="bg-black/30 p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:bg-black/60 group border border-white/15"
            >
              <div>
                {/* Contenedor del Icono Estilo Minimal */}
                <div className="w-12 h-12 border border-white/50 bg-black/50 rounded-md text-[#2d61e0] flex items-center justify-center mb-8 transition-colors duration-300 group-hover:border-[#2d61e0] group-hover:bg-black">
                  {sector.icon}
                </div>
                
                {/* Título del Sector */}
                <h3 className="text-slate-200 font-montserrat text-base font-semibold uppercase tracking-wider mb-4 group-hover:text-[#2d61e0] transition-colors duration-300">
                  {sector.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-white font-montserrat text-xs md:text-base font-light leading-relaxed tracking-wide">
                  {sector.desc}
                </p>
              </div>

              
              
              {/* Indicador de Línea Sutil en Base */}
              <div className="w-0 h-[2px] bg-[#2d61e0] mt-8 transition-all duration-500 group-hover:w-12" />
            </div>
          ))}


          <div className="reveal border-t border-slate-200 py-6 px-6 flex flex-col justify-center items-center text-center md:items-center gap-6">
            <p className="text-white font-montserrat text-xs md:text-base italic font-light max-w-3xl leading-relaxed">
              Como grupo multisectorial, operamos en todos los niveles de la industria. Tenemos la capacidad operativa para concretar negocios y proyectos en cualquier mercado, sin importar su escala local o internacional.
            </p>
            
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2d61e0] whitespace-nowrap bg-slate-50 px-4 py-2 border border-slate-100 select-none">
              Cross-Border Execution
            </div>
          </div>


        </div>

        

      </div>

      {/* ELEMENTO PARALLAX RESPONSIVE (CUBO 3D DE RESPALDO) */}
      {/* <div 
        id="parallax-multisectoral"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] opacity-[0.03] md:opacity-[0.06] pointer-events-none md:left-auto md:right-[-10%] md:translate-x-0 md:w-[45%] select-none flex justify-end transition-all duration-700 ease-out z-10"
        style={{ 
          transform: 'translateY(calc(-50% + var(--parallax-multisectoral-y, 0px)))' 
        }}
      >
        <img 
          src="/cubo2.png" 
          alt="" 
          className="w-full h-auto object-contain grayscale" 
        />
      </div> */}

    </section>
  );
};
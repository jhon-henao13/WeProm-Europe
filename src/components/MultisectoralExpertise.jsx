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
      icon: <Plane className="w-5 h-5 stroke-[1.25]" />,
      title: "Aeronáutica y aeroespacial",
      desc: "México es el país donde Francia tiene su mayor fuerza laboral aeronáutica fuera de Europa, generando 1 de cada 4 empleos en la industria aeroespacial mexicana. Acompañamos a proveedores Tier 2/3 y maquiladoras certificadas en su entrada al otro lado del Atlántico."
    },
    {
      icon: <Car className="w-5 h-5 stroke-[1.25]" />,
      title: "Automotriz y autopartes",
      desc: "Trabajamos con fabricantes y proveedores especializados que buscan colocarse fuera del comercio intrafirma de las grandes marcas, con un foco creciente en electromovilidad, electrónica de potencia y sensores."
    },
    {
      icon: <Apple className="w-5 h-5 stroke-[1.25]" />,
      title: "Agroalimentaria y agroindustria",
      desc: "El acuerdo modernizado UE-México prevé acceso libre de aranceles para más del 83% de los productos agroalimentarios. Posicionamos productores mexicanos premium en el mercado europeo y empresas francesas en el mercado latinoamericano."
    },
    {
      icon: <Zap className="w-5 h-5 stroke-[1.25]" />,
      title: "Energías limpias y transición ecológica",
      desc: "Hidrógeno verde, energía solar, eólica, eficiencia energética: la complementariedad entre Plan México y France 2030 abre proyectos bancables vía AFD-Proparco, BEI y Global Gateway."
    },
    {
      icon: <Activity className="w-5 h-5 stroke-[1.25]" />,
      title: "Salud, farma y dispositivos médicos",
      desc: "Comercio intraindustrial consolidado: México importa medicamentos franceses, Europa importa dispositivos mexicanos. Acompañamos registros, posicionamiento y entrada a nuevos mercados en ambos sentidos."
    },
    {
      icon: <Cpu className="w-5 h-5 stroke-[1.25]" />,
      title: "Tecnologías de la información, IA y deep-tech",
      desc: "La French Tech, Next México, Plan México TI: iniciativas públicas para conectar startups y scale-ups. Acompañamos a nuestros clientes en misiones comerciales y match-making sectorial."
    },
    {
      icon: <Sparkles className="w-5 h-5 stroke-[1.25]" />,
      title: "Lujo, cosméticos y bienes de consumo premium",
      desc: "Empresas familiares europeas en expansión hacia LATAM y marcas premium latinoamericanas hacia retail europeo: dos sentidos del mismo flujo."
    }
  ];

  return (
    <section className="relative bg-white py-24 md:py-32 px-6 md:px-16 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto relative z-30">
        
        {/* CABECERA DE LA SECCIÓN */}
        <div className="max-w-4xl mb-20 reveal">
          <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4">
            Sectores estratégicos
          </p>
          <h2 className="text-slate-900 font-montserrat text-3xl md:text-[45px] font-semibold uppercase leading-tight tracking-wide mb-8">
            Trabajamos donde Europa y América Latina se necesitan.
          </h2>
          <p className="text-black font-montserrat text-base md:text-lg font-light leading-relaxed tracking-wide">
            Operamos con un enfoque multisectorial, con especial atención en las verticales donde el corredor Europa-LATAM concentra la mayor parte de las oportunidades reales. En cada uno hemos acompañado proyectos —algunos hoy considerados referencia en su industria.
          </p>
        </div>

        {/* GRID EDITORIAL DE TARJETAS ASIMÉTRICAS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 reveal mb-20">
          {sectores.map((sector, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:bg-slate-50/70 group"
            >
              <div>
                {/* Contenedor del Icono Estilo Minimal */}
                <div className="w-10 h-10 border border-slate-200 text-[#2d61e0] flex items-center justify-center mb-8 transition-colors duration-300 group-hover:border-[#2d61e0] group-hover:bg-[#2d61e0]/5">
                  {sector.icon}
                </div>
                
                {/* Título del Sector */}
                <h3 className="text-slate-900 font-montserrat text-base font-semibold uppercase tracking-wider mb-4 group-hover:text-[#2d61e0] transition-colors duration-300">
                  {sector.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-black font-montserrat text-xs md:text-base font-light leading-relaxed tracking-wide">
                  {sector.desc}
                </p>
              </div>
              
              {/* Indicador de Línea Sutil en Base */}
              <div className="w-0 h-[2px] bg-[#2d61e0] mt-8 transition-all duration-500 group-hover:w-12" />
            </div>
          ))}
        </div>

        {/* PIE DE SECCIÓN (FOOTNOTE DE ALTO IMPACTO) */}
        <div className="reveal border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-black font-montserrat text-xs md:text-base italic font-light max-w-3xl leading-relaxed">
            Como grupo multisectorial, operamos en todos los niveles de la industria. Tenemos la capacidad operativa para concretar negocios y proyectos en cualquier mercado, sin importar su escala local o internacional.
          </p>
          
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2d61e0] whitespace-nowrap bg-slate-50 px-4 py-2 border border-slate-100 select-none">
            Cross-Border Execution
          </div>
        </div>

      </div>

      {/* ELEMENTO PARALLAX RESPONSIVE (CUBO 3D DE RESPALDO) */}
      <div 
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
      </div>
    </section>
  );
};
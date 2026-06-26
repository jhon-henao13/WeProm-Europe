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
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales';

export const MultisectoralExpertise = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Los iconos los asociamos manualmente al objeto de traducción, o podemos mantener un array de iconos fijos.
  // Como el orden es fijo, creamos un array de iconos en el mismo orden que en el PDF.
  const iconos = [
    <Plane className="w-6 h-6 stroke-[1.25]" />,
    <Car className="w-6 h-6 stroke-[1.25]" />,
    <Apple className="w-6 h-6 stroke-[1.25]" />,
    <Zap className="w-6 h-6 stroke-[1.25]" />,
    <Activity className="w-6 h-6 stroke-[1.25]" />,
    <Cpu className="w-6 h-6 stroke-[1.25]" />,
    <Sparkles className="w-6 h-6 stroke-[1.25]" />
  ];

  // Obtener los sectores desde traducciones
  const sectores = t.sectors.sectors.map((s, idx) => ({
    icon: iconos[idx],
    title: s.name,
    desc: s.desc
  }));

  return (
    <section className="relative bg-transparent py-24 md:py-32 px-6 md:px-16 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto relative z-30">
        
        {/* CABECERA DE LA SECCIÓN */}
        <div className="max-w-4xl mb-20 reveal">
          <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4">
            {t.sectors.kicker}
          </p>
          <h2 className="text-slate-100 font-montserrat text-3xl md:text-[45px] font-semibold uppercase leading-tight tracking-wide mb-8">
            {t.sectors.title}
          </h2>
          <p className="text-white font-montserrat text-base md:text-lg font-light leading-relaxed tracking-wide">
            {t.sectors.intro}
          </p>
        </div>

        {/* GRID EDITORIAL DE TARJETAS ASIMÉTRICAS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-px bg-white/5 rounded-md reveal mb-20">
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

          {/* Bloque de cierre (última tarjeta, ocupando todo el ancho?) En tu diseño tienes un div aparte, lo dejamos igual pero traducido */}
          <div className="reveal border-t border-slate-200 py-6 px-6 flex flex-col justify-center items-center text-center md:items-center gap-6">
            <p className="text-white font-montserrat text-xs md:text-base italic font-light max-w-3xl leading-relaxed">
              {t.sectors.closing}
            </p>
            
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2d61e0] whitespace-nowrap bg-slate-50 px-4 py-2 border border-slate-100 select-none">
              {t.sectors.slogan}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';

import { useLanguage } from '../context/LanguageContext';
import translations from '../locales';

export const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const stats = [
    { value: '+35', label: t.hero.stats.years },
    { value: '+10 000', label: t.hero.stats.projects },
    { value: '+1 000', label: t.hero.stats.clients },
    { value: '3', label: t.hero.stats.offices },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-32 md:pt-40">
      
      {/* BACKGROUND: Contenedor de Imagen con Parallax */}
      <div className="absolute inset-0 z-0 will-change-transform">
        <img 
          id="parallax-hero"
          src="/hero-image2.webp"
          alt="WeProm Strategic Background" 
          className="w-full h-full object-cover brightness-[0.50]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/90"></div>
      </div>
      
      {/* PRINCIPAL: Contenido del Hero */}
      <div className="relative z-10 max-w-full mx-auto px-8 md:px-16 w-full flex-grow flex items-center">
        <div className="max-w-5xl w-full">

          {/* Antetítulo (Kicker) */}
          <p className="reveal text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[13px] md:text-[15px] mb-6 block">
            {t.hero.kicker}
          </p>
          
          {/* Título Principal (H1) con text-balance equilibrado */}
          <h1 className="reveal font-montserrat text-3xl md:text-[43px] font-semibold text-white leading-tight md:leading-[1.15] mb-8 tracking-wide" style={{ textWrap: 'balance' }}>
            {t.hero.title}
          </h1>

          {/* Subtítulo (Lead) Estilo Editorial Premium */}
          <div className="reveal space-y-6 text-slate-200 max-w-4xl leading-relaxed text-sm md:text-base mb-10">
            <p className="font-montserrat tracking-wide font-light border-l-2 border-[#2d61e0] pl-6">
              {/* WeProm Europe es la sede europea de un grupo internacional con más de{' '}
              <strong className="font-semibold text-white">35 años</strong>, tres generaciones y más de{' '}
              <strong className="font-semibold text-white">10,000 proyectos ejecutados</strong>. Ayudamos a empresas e instituciones a entrar y crecer en nuevos mercados entre Europa y América Latina con menor riesgo y mayor probabilidad de éxito. */}
              {t.hero.lead.replace('{years}', '35').replace('{projects}', '10,000')}
            </p>
          </div>

          {/* CTAs: Dos botones uno al lado del otro */}
          <div className="reveal flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            
            {/* Botón Primario (Oscuro/Corporativo) */}
            <a href="#contact" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-64 overflow-hidden bg-slate-900 border border-slate-800 text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:bg-[#2d61e0] hover:border-[#2d61e0] shadow-xl">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {t.hero.cta1}
                  <span className="text-[13px] transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </button>
            </a>

            {/* Botón Secundario (Contorno Estilizado) */}
            <a href="#capabilities" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-64 overflow-hidden bg-white/5 border border-white/20 backdrop-blur-sm text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:bg-white hover:text-slate-950 hover:border-white">
                <span className="relative z-10 flex items-center justify-center">
                  {t.hero.cta2}
                </span>
              </button>
            </a>

          </div>

        </div>
      </div>

      {/* INFERIOR: Banda de cifras corporativa (4 Columnas) */}
      <div className="relative z-10 w-full bg-slate-950/40 backdrop-blur-md border-t border-white/5 py-8 md:py-12 mt-16 px-8 md:px-16">
        <div className="max-w-full mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center lg:text-left">
          {stats.map((stat, index) => (
            <div key={index} className="reveal flex flex-col justify-center lg:border-l lg:border-white/10 lg:pl-8 first:border-0 first:pl-0">
              {/* Número grande */}
              <span className="font-montserrat text-3xl md:text-4xl lg:text-[42px] font-light text-white tracking-tight leading-none mb-2 block">
                {stat.value}
              </span>
              {/* Descripción */}
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
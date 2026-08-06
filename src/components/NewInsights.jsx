import React from 'react';
import { ArrowRight, FileText, Download, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales';

const STATIC_INSIGHTS = [
  {
    title: "Del bicentenario al TLCUEM: la nueva etapa México-Francia.",
    description: "Lectura estratégica del Acuerdo Global Modernizado y de las oportunidades que abre para empresas medianas.",
    date: "Mayo 2026",
    tag: "Análisis Geopolítico"
  },
  {
    title: "Lo que cambia con el Acuerdo UE-Mercosur.",
    description: "Análisis de la zona comercial de 700 millones de personas que entra en vigor provisional el 1 de mayo.",
    date: "Mayo 2026",
    tag: "Acuerdos Comerciales"
  },
  {
    title: "Calendario estratégico 2026: SIAL, VivaTech, Choose France y la firma del AGM.",
    description: "Cómo posicionarse en los hitos del año.",
    date: "Junio 2026",
    tag: "Agenda Corporativa"
  }
];

export const NewInsights = () => {

  const { language } = useLanguage();
  const t = translations[language];
  const articles = t.insights.articles;

  const handleDossierDownload = () => {
    // Mapeo de idioma a archivo PDF mensual
    const reportMap = {
      ES: '/monthlyReport/july2026ES.pdf',
      FR: '/monthlyReport/july2026FR.pdf',
      EN: '/monthlyReport/july2026EN.pdf',
    };
    const dossierUrl = reportMap[language] || reportMap.ES;
    window.open(dossierUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-16 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* CABECERA EDITORIAL PREMIUM */}
        <div className="mb-16 md:mb-24">
          <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4 block">
            {t.insights.kicker}
          </p>
          <h2 className="text-slate-900 font-montserrat text-2xl md:text-4xl lg:text-[35px] font-semibold leading-tight max-w-4xl tracking-wide mb-6">
            {t.insights.title}
          </h2>
          <div className="w-16 h-[2px] bg-[#2d61e0] mb-6" />
          <p className="text-black font-montserrat text-sm md:text-base font-light leading-relaxed tracking-wide max-w-4xl">
            {t.insights.description}
          </p>
        </div>

        {/* GRID DE TRES TARJETAS DE ARTÍCULOS DESTACADOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {articles.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-50 border border-slate-200/60 p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300 group min-h-[340px]"
            >
              <div>
                {/* Meta data de la tarjeta */}
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-6">
                  <span className="text-[#2d61e0]">{item.tag}</span>
                  <span className="flex items-center gap-1 font-normal normal-case">
                    <Calendar className="w-3 h-3 text-slate-300" /> {item.date}
                  </span>
                </div>

                {/* Contenido principal */}
                <h3 className="text-slate-900 font-montserrat text-base md:text-lg font-semibold tracking-wide leading-snug mb-4 group-hover:text-[#2d61e0] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-black font-montserrat text-xs md:text-base font-light leading-relaxed tracking-wide mb-6">
                  {item.description}
                </p>
              </div>

              {/* Botón de acción integrado */}
              <div className="inline-flex items-center gap-2 text-slate-900 text-[11px] font-bold uppercase tracking-[0.2em] pt-4 border-t border-slate-100 group-hover:text-[#2d61e0] transition-colors duration-300">
                {t.insights.cta} 
                <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* CONTENEDOR PRINCIPAL CTA BLOG */}
        <div className="text-center mb-18">
          <Link to="/blog" className="inline-block w-full sm:w-auto">
            <button className="group relative w-full sm:w-80 overflow-hidden bg-transparent border border-slate-900 text-slate-900 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:bg-slate-900 hover:text-white shadow-sm">
              <span className="relative z-10">
                {t.insights.cta}
              </span>
            </button>
          </Link>
        </div>

        {/* SECCIÓN ASIMÉTRICA: WEPROM DOSSIER */}
        <div className="bg-slate-900 text-white p-8 md:p-16 relative overflow-hidden border border-slate-800">
          {/* Isotipo de Fondo Translúcido */}
          <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-5 pointer-events-none select-none hidden md:block">
            <img src="/isotipo.png" alt="" className="w-full h-full object-contain object-right translate-x-[15%] translate-y-[15%]" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Texto Descriptivo */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 text-[#2d61e0] font-montserrat font-bold tracking-[0.3em] uppercase text-[11px]">
                <FileText className="w-4 h-4 stroke-[2]" />
                <span>{t.insights.dossier.label}</span>
              </div>
              <h4 className="text-white font-montserrat text-xl md:text-2xl font-medium tracking-wide">
                {t.insights.dossier.label}
              </h4>
              <p className="text-slate-200 font-montserrat text-xs md:text-sm font-light leading-relaxed tracking-wide max-w-2xl">
                {t.insights.dossier.description}
              </p>
            </div>

            {/* Acción Corporativa de Descarga */}
            <div className="lg:col-span-5 flex lg:justify-end w-full">
              <button 
                onClick={handleDossierDownload}
                className="group relative w-full lg:w-72 overflow-hidden bg-[#2d61e0] border border-[#2d61e0] text-white px-8 py-5 text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-500 hover:bg-transparent hover:text-white hover:border-white flex items-center justify-center gap-3 shadow-lg"
              >
                <Download className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>{t.insights.dossier.cta}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
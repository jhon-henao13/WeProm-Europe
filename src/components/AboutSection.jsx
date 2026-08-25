import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales';

export const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cards = t.about.cards;

  // Después de const cards = t.about.cards;
  const handleContextAnalysis = () => {
    const pdfMap = {
      ES: '/trimestralReport/july2026ES.pdf',
      FR: '/trimestralReport/july2026FR.pdf',
      EN: '/trimestralReport/july2026EN.pdf',
    };
    const pdfUrl = pdfMap[language] || pdfMap.ES;
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      const pdfUrl = '/ruta-de-tu-archivo/analisis-contexto.pdf'; 
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
      setShowModal(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <>
      <section className="bg-transparent py-24 md:py-32 px-6 md:px-16 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-10 md:mb-16">
            <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4">
              {t.about.kicker}
            </p>
            <h2 className="text-white font-montserrat text-2xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-[1.2] max-w-6xl" style={{ textWrap: 'balance' }}>
              {t.about.title}
            </h2>
            <div className="w-16 h-[2px] bg-[#2d61e0] mt-8"></div>
          </div>
    
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
            <div className="lg:col-span-5">
              <p className="text-white font-montserrat text-base md:text-[17px] font-medium leading-relaxed tracking-wide border-l-4 border-[#2d61e0] pl-6 py-2">
                {t.about.intro}
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-slate-300 font-montserrat text-sm md:text-base font-light leading-relaxed tracking-wide">
                {t.about.paragraph}
              </p>
            </div>
          </div>
    
          <div className="border-t border-white/10 pt-16 mb-24">
            <h3 className="text-slate-400 font-montserrat text-[11px] font-bold uppercase tracking-[0.3em] mb-12">
              {t.about.figuresKicker}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {cards.map((card, index) => (
                <div 
                  key={index} 
                  className="bg-black/[0.30] backdrop-blur-md border border-white/10 p-8 md:p-10 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-[#2d61e0]/20 hover:border-[#2d61e0]/50 hover:bg-black/[0.45] flex flex-col justify-between group rounded-sm"
                >
                  <div>
                    <div className="font-montserrat text-2xl md:text-3xl font-light text-[#2d61e0] tracking-tight mb-4 group-hover:scale-105 transform origin-left transition-transform duration-500">
                      {card.metric}
                    </div>
                    <p className="text-slate-200 font-montserrat text-xs md:text-sm font-normal leading-relaxed tracking-wide mb-6">
                      {card.text}
                    </p>
                  </div>
                  
                  <div className="border-t border-white/10 pt-3 mt-auto">
                    <p className="text-slate-400 font-sans text-[11px] md:text-[12px] leading-normal italic text-end">
                      {card.source}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-16 mb-24">
            <div className="max-w-3xl mb-12">
              <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.3em] uppercase text-[11px] mb-3">
                {t.about.perspective.kicker}
              </p>
              <h3 className="text-white font-montserrat text-xl md:text-2xl font-semibold uppercase tracking-wide">
                {t.about.perspective.title}
              </h3>
              <p className="text-slate-400 font-sans text-sm md:text-base font-light leading-relaxed mt-4">
                {t.about.perspective.text}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-md border border-white/5 border-l-2 border-l-[#2d61e0] p-8 shadow-lg hover:shadow-[0_0_30px_rgba(45,97,224,0.15)] hover:bg-white/10 transition-all duration-300 rounded-sm">
                <span className="text-[10px] font-bold font-montserrat uppercase tracking-[0.2em] text-[#2d61e0] block mb-3">{t.about.perspective.block1.title}</span>
                <p className="text-slate-300 text-sm md:text-[14.5px] leading-relaxed font-light">
                  {/* <strong className="font-semibold text-white">Para las empresas francesas</strong>, México representa un mercado de consumo y crecimiento dinámico, una base industrial sólida y <strong className="font-semibold text-white">una plataforma estratégica para entrar a los mercados de América Latina</strong> y Norteamérica. */}
                  {t.about.perspective.block1.text}
                </p>
              </div>

              <div className="bg-[#0f172a]/60 backdrop-blur-md border border-white/5 border-l-2 border-l-weprom-gold p-8 shadow-lg hover:bg-[#0f172a]/80 transition-all duration-300 rounded-sm">
                <span className="text-[10px] font-bold font-montserrat uppercase tracking-[0.2em] text-weprom-gold block mb-3">{t.about.perspective.block2.title}</span>
                <p className="text-slate-300 text-sm md:text-[14.5px] leading-relaxed font-light">
                  {/* <strong className="font-semibold text-white">Para las empresas mexicanas</strong>, Francia representa acceso a un mercado europeo exigente y sofisticado, mayor credibilidad institucional, sectores de alto valor y una puerta de entrada hacia <strong className="font-semibold text-white">nuevas oportunidades en Europa</strong>. */}
                  {t.about.perspective.block2.text}
                </p>
              </div>
            </div>

            <div className="bg-black/[0.35] backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-none text-center max-w-4xl mx-auto shadow-2xl">
              <p className="text-slate-200 font-montserrat text-xs md:text-sm lg:text-base font-medium uppercase tracking-wide leading-relaxed">
                <strong className="font-bold text-[#2d61e0]">{t.about.perspective.highlight}</strong>
              </p>
            </div>
          </div>
    
          <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 text-white p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-10 rounded-sm">
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.03] pointer-events-none select-none mix-blend-screen">
              <img src="/isotipo.png" alt="" className="w-full h-full object-contain object-right scale-125" />
            </div>
            
            <div className="max-w-2xl relative z-10">
              <p className="font-montserrat text-slate-300 text-sm md:text-base font-light leading-relaxed tracking-wide">
                {t.about.perspective.closing}
              </p>
            </div>
            
            <div className="relative z-10 flex-shrink-0">

              <button 
                onClick={handleContextAnalysis}
                className="group text-white font-montserrat text-[11px] font-bold uppercase tracking-[0.25em] flex items-center gap-4 border-b border-white/30 pb-2 transition-all duration-300 hover:border-[#2d61e0] hover:text-[#2d61e0]"
              >
                {t.about.perspective.cta}
                <span className="text-sm transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              
            </div>
          </div>
            
        </div>
      </section>

      {/* Modal Adaptado a Dark Theme UI Premium */}
      {showModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-[#0f172a]/80 backdrop-blur-md">
          <div className="bg-[#0f172a] w-full max-w-md p-8 md:p-10 shadow-2xl relative border border-white/10 z-10 rounded-sm">

            <button 
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white text-lg font-bold p-2 cursor-pointer z-20 transition-colors"
            >
              ✕
            </button>

            <p className="text-[#2d61e0] font-montserrat text-[9px] font-bold tracking-[0.3em] uppercase mb-2">
              Lectura Exclusiva
            </p>
            <h4 className="text-white font-montserrat text-lg font-bold uppercase tracking-wider mb-6">
              Análisis de Contexto
            </h4>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-slate-400 font-montserrat text-[10px] font-bold uppercase tracking-wider mb-2">
                  Nombre Completo
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#0a0f1c] border border-white/10 px-4 py-3 text-sm font-montserrat text-white focus:outline-none focus:border-[#2d61e0] focus:ring-1 focus:ring-[#2d61e0]/50 transition-all rounded-none"
                  placeholder="Ej. Carlos Mendoza"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-montserrat text-[10px] font-bold uppercase tracking-wider mb-2">
                  Correo Corporativo
                </label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#0a0f1c] border border-white/10 px-4 py-3 text-sm font-montserrat text-white focus:outline-none focus:border-[#2d61e0] focus:ring-1 focus:ring-[#2d61e0]/50 transition-all rounded-none"
                  placeholder="ejemplo@empresa.com"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-[#2d61e0] text-white font-montserrat text-[11px] font-bold uppercase tracking-[0.2em] py-4 transition-all duration-300 hover:bg-[#1f47a8] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(45,97,224,0.4)] hover:shadow-[0_0_25px_rgba(45,97,224,0.6)]"
              >
                {isSubmitted ? 'Abriendo PDF...' : 'Leer análisis en nueva pestaña'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
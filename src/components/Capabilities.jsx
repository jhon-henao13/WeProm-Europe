import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales';

export const Capabilities = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative bg-transparent px-6 md:px-16 overflow-visible">
      <div className="max-w-7xl mx-auto">
        
        {/* BLOQUE INTRODUCTORIO GENERAL */}
        <div className="relative z-30 mt-[10px] md:mt-[-60px] mb-24 max-w-4xl">
          
        </div>

        {/* 1. INVESTIGACIÓN Y ANÁLISIS DE MERCADOS */}
        <div className="relative z-10 border-t border-slate-100 pt-6 reveal">

          <p className="text-black font-montserrat text-base md:text-lg font-light leading-relaxed tracking-wide mb-14">
            {t.capabilities.intro}
          </p>

          <div className="grid lg:grid-cols-12 gap-10">
            
            
            {/* Título de Bloque y Descripción */}
            <div className="lg:col-span-5">
              <h3 className="text-sm font-bold text-[#2d61e0] tracking-[0.25em] uppercase border-l-4 border-[#2d61e0] pl-6 mb-6">
                {t.capabilities.area1.title}
              </h3>
              <p className="text-black font-montserrat text-sm md:text-base font-light leading-relaxed tracking-wide mb-6">
                {t.capabilities.area1.paragraph}
              </p>
              <p className="text-slate-900 font-montserrat text-sm italic font-light leading-relaxed">
                {t.capabilities.area1.paragraph2}
              </p>
            </div>

            {/* Listado de Servicios */}
            <div className="lg:col-span-7 bg-slate-50/50 p-8 rounded-md border-r border-slate-200/90">

              <ul className="space-y-4">
                {t.capabilities.area1.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 !text-black font-montserrat text-xs md:text-base font-light               leading-relaxed">
                    <span className="text-[#2d61e0] font-medium text-xl mt-[2px]">0{idx + 1}.</span>
                    <span className='text-black'>{item}</span>
                  </li>
                ))}
              </ul>
              
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
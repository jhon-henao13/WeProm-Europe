import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales';

export const StrategicArchitecture = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative bg-transparent px-6 md:px-16 overflow-visible border-b border-slate-100">
      <div className="max-w-7xl mx-auto pb-4 pt-20 space-y-24">
        
        {/* 2. CONSULTORÍA EN CREACIÓN, DESARROLLO Y EXPANSIÓN */}
        <div className="reveal border-t border-slate-100 pt-16">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h3 className="text-sm font-bold text-[#2d61e0] tracking-[0.25em] uppercase border-l-4 border-[#2d61e0] pl-6 mb-6">
                {t.capabilities.area2.title}
              </h3>
              <p className="text-black font-montserrat text-sm md:text-base font-light leading-relaxed tracking-wide">
                {t.capabilities.area2.paragraph}
              </p>
            </div>
            <div className="lg:col-span-7 bg-slate-50/50 p-8 rounded-md border-r border-slate-200/90">
              <ul className="space-y-4">
                {t.capabilities.area2.items.map((item, idx) => (
                  
                  <li key={idx} className="flex items-start gap-4 text-black font-montserrat text-xs md:text-base font-light leading-relaxed">
                    <span className="text-[#2d61e0] font-medium text-xl mt-[2px]">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. MARKETING Y POSICIONAMIENTO INTERNACIONAL */}
        <div className="reveal border-t border-slate-100 pt-16 mb-16">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 ">
              <h3 className="text-sm font-bold text-[#2d61e0] tracking-[0.25em] uppercase border-l-4 border-[#2d61e0] pl-6 mb-6">
                {t.capabilities.area3.title}
              </h3>
              <p className="text-black font-montserrat text-sm md:text-base font-light leading-relaxed tracking-wide">
                {t.capabilities.area3.paragraph}
              </p>
            </div>
            <div className="lg:col-span-7 bg-slate-50/50 p-8 rounded-md border-r border-slate-200/90">
              <ul className="space-y-4">
                {t.capabilities.area3.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-black font-montserrat text-xs md:text-base font-light leading-relaxed">
                    <span className="text-[#2d61e0] font-medium text-xl mt-[2px]">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SECCIÓN INTERNA DE LLAMADA A LA ACCIÓN (CTA FINAL) */}
        <div className="reveal pt-2 pb-20 flex justify-center">
          <a href="#contact" className="
              inline-flex
              items-center
              justify-center
              mt-10
              px-10
              py-4
              bg-slate-900
              text-white
              text-[11px]
              font-bold
              uppercase
              tracking-[0.3em]
              border
              border-slate-900
              transition-all
              duration-500
              hover:bg-[#2d61e0]
              hover:border-[#2d61e0]
              hover:shadow-[0_20px_40px_rgba(45,97,224,0.35)]
            ">
            {t.capabilities.cta}
            <span className="text-xs transform transition-transform duration-300 group-hover:translate-x-2 pl-6"> →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
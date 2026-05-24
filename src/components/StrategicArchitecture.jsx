import React from 'react';

export const StrategicArchitecture = () => {
  const serviciosConsultoria = [
    "Desarrollo de ideas de negocio, diversificación y nuevos productos.",
    "Reingeniería de negocio y estructura organizacional.",
    "Expansión comercial nacional e internacional con plan de entrada estructurado.",
    "Profesionalización e inteligencia de negocios en áreas comerciales y marketing.",
    "Estrategias de comercio exterior, logística internacional y gestión aduanera.",
    "Esquemas de franquicias y redes de distribución.",
    "Relaciones públicas, alianzas estratégicas y eventos de networking institucional.",
    "Automatización comercial e inteligencia artificial aplicada al crecimiento de negocios.",
    "Coaching ejecutivo y consultoría de alto nivel para puestos directivos y mandos intermedios."
  ];

  const serviciosMarketing = [
    "Desarrollo de nuevas marcas: nombre comercial, imagen e identidad.",
    "Estrategia de posicionamiento para marcas, productos y servicios en nuevos mercados.",
    "Comunicación corporativa e institucional internacional.",
    "Comunicación digital, fortalecimiento de presencia online y posicionamiento web.",
    "Diseño e implementación de campañas de promoción internacional.",
    "Presencia y acompañamiento en ferias, foros y eventos comerciales clave.",
    "Desarrollo de alianzas estratégicas e institucionales."
  ];

  return (
    <section className="relative bg-white px-6 md:px-16 overflow-visible border-b border-slate-100">
      <div className="max-w-7xl mx-auto pb-32 pt-20 space-y-24">
        
        {/* 2. CONSULTORÍA EN CREACIÓN, DESARROLLO Y EXPANSIÓN */}
        <div className="reveal border-t border-slate-100 pt-16">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h3 className="text-sm font-bold text-[#2d61e0] tracking-[0.25em] uppercase border-l-4 border-[#2d61e0] pl-6 mb-6">
                2. Consultoría en creación, desarrollo y expansión de negocios — de la estrategia a la ejecución.
              </h3>
              <p className="text-slate-600 font-montserrat text-sm md:text-base font-light leading-relaxed tracking-wide">
                Diseñamos y ejecutamos estrategias de creación, consolidación y expansión transcontinental. Acompañamos cada etapa del proceso —desde la concepción de una idea, hasta la operación local— con un equipo internacional que conoce ambos contextos regulatorios, comerciales y culturales.
              </p>
            </div>
            <div className="lg:col-span-7 bg-slate-50/50 p-8 border border-slate-100">
              <ul className="space-y-4">
                {serviciosConsultoria.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-700 font-montserrat text-xs md:text-sm font-light leading-relaxed">
                    <span className="text-[#2d61e0] font-medium text-xs mt-[2px]">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. MARKETING Y POSICIONAMIENTO INTERNACIONAL */}
        <div className="reveal border-t border-slate-100 pt-16">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h3 className="text-sm font-bold text-[#2d61e0] tracking-[0.25em] uppercase border-l-4 border-[#2d61e0] pl-6 mb-6">
                3. Marketing y posicionamiento internacional
              </h3>
              <p className="text-slate-600 font-montserrat text-sm md:text-base font-light leading-relaxed tracking-wide">
                Ayudamos a empresas y organismos a construir presencia, reputación y visibilidad en mercados internacionales. Diseñamos y ejecutamos estrategias de posicionamiento de marca, comunicación internacional y relaciones públicas que conectan con audiencias clave en Europa y América Latina.
              </p>
            </div>
            <div className="lg:col-span-7 bg-slate-50/50 p-8 border border-slate-100">
              <ul className="space-y-4">
                {serviciosMarketing.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-700 font-montserrat text-xs md:text-sm font-light leading-relaxed">
                    <span className="text-[#2d61e0] font-medium text-xs mt-[2px]">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SECCIÓN INTERNA DE LLAMADA A LA ACCIÓN (CTA FINAL) */}
        <div className="reveal pt-4 flex justify-start">
          <a href="#contact" className="group inline-flex items-center gap-6 border border-slate-900 bg-slate-900 text-white px-10 py-5 font-montserrat text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:bg-[#2d61e0] hover:border-[#2d61e0] w-full md:w-auto justify-center">
            Conversemos sobre tu proyecto
            <span className="text-xs transform transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
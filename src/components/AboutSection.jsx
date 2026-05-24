import React, { useState } from 'react';

export const AboutSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cards = [
    {
      metric: "45,000 M€",
      text: "Agenda Global Gateway UE–LAC en ejecución, con proyectos verdes, digitales y de integración eléctrica regional ya en marcha."
    },
    {
      metric: "40,871 MDD",
      text: "Récord histórico de IED en México en 2025; con Francia como cuarto inversor europeo y récord histórico francés de 1,223 MDD."
    },
    {
      metric: "+700 filiales",
      text: "Francesas operan en México y generan más de 180,000 empleos; México es además el primer inversionista latinoamericano en Francia (≈2,800 M€)."
    },
    {
      metric: "+35%",
      text: "Crecimiento esperado del comercio México-UE con el TLCUEM modernizado, según el COMCE; +40% en exportaciones hacia Europa."
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);

      // 1. Abrir inmediatamente el PDF en una pestaña nueva para evitar el bloqueo del navegador
      // Cambia el '#' por la ruta real de tu archivo PDF (Ej: '/analisis-de-contexto.pdf')
      const pdfUrl = '/ruta-de-tu-archivo/analisis-contexto.pdf'; 
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');

      // 2. Limpiar estados y cerrar el modal ordenadamente
      setShowModal(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <>
      <section className="bg-slate-50 py-24 md:py-32 px-6 md:px-16 overflow-hidden border-b   border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          {/* CABECERA EDITORIAL */}
          <div className="mb-10 md:mb-16">
            <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text- [11px] mb-4">
              El momento
            </p>
            <h2 className="text-slate-900 font-montserrat text-2xl md:text-4xl lg:text-[40px]   font-semibold leading-tight md:leading-[1.2] max-w-4xl" style={{ textWrap: 'balance' }}>
              La relación comercial entre Europa y América Latina está en una etapa de crecimiento  estratégico.
            </h2>
            <div className="w-16 h-[2px] bg-[#2d61e0] mt-8"></div>
          </div>
    
          {/* BLOQUE INTRODUCTORIO ASIMÉTRICO */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
            <div className="lg:col-span-5">
              <p className="text-slate-900 font-montserrat text-base md:text-[17px] font-medium   leading-relaxed tracking-wide border-l-4 border-slate-900 pl-6 py-2">
                Tres dinamicas convergen en 2026 y definen la nueva frontera de competitividad para   ambas regiones.
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="text-slate-800 font-montserrat text-sm md:text-base font-light  leading-relaxed tracking-wide">
                La firma del Acuerdo Global Modernizado UE-México, la entrada en vigor del Acuerdo  UE-Mercosur el 1 de mayo de 2026 —que crea una zona comercial de 700 millones de   personas— y el bicentenario México-Francia, dan marco político e institucional a la   nueva agenda económica bilateral.
              </p>
            </div>
          </div>
    
          {/* SUBTÍTULO E INDICADORES (GRID 2x2) */}
          <div className="border-t border-slate-200 pt-16 mb-16">
            <h3 className="text-slate-500 font-montserrat text-[11px] font-bold uppercase tracking-[0.  3em] mb-12">
              Las cifras lo confirman
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {cards.map((card, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-slate-200/60 p-8 md:p-10 shadow-sm transition-all   duration-300 hover:shadow-md hover:border-slate-300"
                >
                  <div className="font-montserrat text-2xl md:text-3xl font-light text-[#2d61e0]  tracking-tight mb-4">
                    {card.metric}
                  </div>
                  <p className="text-slate-600 font-montserrat text-xs md:text-sm font-normal   leading-relaxed tracking-wide">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
            
          {/* BLOQUE DE CIERRE Y ACCIÓN INTEGRADA */}
          <div className="bg-slate-900 text-white p-8 md:p-16 relative overflow-hidden flex flex-col  lg:flex-row lg:items-center justify-between gap-10">
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none   select-none">
              <img src="/isotipo.png" alt="" className="w-full h-full object-contain object-right   scale-125" />
            </div>
            
            <div className="max-w-2xl relative z-10">
              <p className="font-montserrat text-slate-300 text-sm md:text-base font-light  leading-relaxed tracking-wide">
                Esta apertura comercial representa un eje de crecimiento determinante para medianas y   grandes empresas que requieren inteligencia de mercado, estrategia y acompañamiento   para posicionarse en nuevos mercados de alto potencial.
              </p>
            </div>
            
            {/* <div className="relative z-10 flex-shrink-0">
              <button 
                onClick={() => setShowModal(true)}
                className="group text-white font-montserrat text-[11px] font-bold uppercase tracking- [0.25em] flex items-center gap-4 border-b border-white/30 pb-2 transition-all  duration-300 hover:border-[#2d61e0] hover:text-[#2d61e0]"
              >
                Lee nuestro análisis de contexto 
                <span className="text-sm transform transition-transform duration-300  group-hover:translate-x-1">→</span>
              </button>
            </div> */}

            <div className="relative z-10 flex-shrink-0">
              <button 
                onClick={() => window.open('/ruta-de-tu-archivo/analisis-contexto.pdf', '_blank',   'noopener,noreferrer')}
                className="group text-white font-montserrat text-[11px] font-bold uppercase tracking- [0.25em] flex items-center gap-4 border-b border-white/30 pb-2 transition-all  duration-300 hover:border-[#2d61e0] hover:text-[#2d61e0]"
              >
                Lee nuestro análisis de contexto 
                <span className="text-sm transform transition-transform duration-300    group-hover:translate-x-1">→</span>
              </button>
            </div>


          </div>
            
        </div>
            
        {/* MODAL / MICROFORMULARIO EMBAJADOR (Gated Content) */}
            
            
      </section>

    
      {showModal && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-950/80  backdrop-blur-sm">
            <div className="bg-white w-full max-w-md p-8 md:p-10 shadow-2xl relative border   border-slate-100 z-10">

              {/* Botón de cierre corregido */}
              <button 
                type="button"
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg   font-bold p-2 cursor-pointer z-20"
                aria-label="Cerrar modal"
              >
                ✕
              </button>

              <p className="text-[#2d61e0] font-montserrat text-[9px] font-bold tracking-[0.3em]  uppercase mb-2">
                Lectura Exclusiva
              </p>
              <h4 className="text-slate-900 font-montserrat text-lg font-bold uppercase tracking-wider  mb-6">
                Análisis de Contexto
              </h4>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-slate-500 font-montserrat text-[10px] font-bold  uppercase tracking-wider mb-2">
                    Nombre Completo
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm   font-montserrat text-slate-800 focus:outline-none focus:border-[#2d61e0]  focus:bg-white transition-all rounded-none"
                    placeholder="Ej. Carlos Mendoza"
                  />
                </div>

                <div>
                  <label className="block text-slate-500 font-montserrat text-[10px] font-bold  uppercase tracking-wider mb-2">
                    Correo Corporativo
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm   font-montserrat text-slate-800 focus:outline-none focus:border-[#2d61e0]  focus:bg-white transition-all rounded-none"
                    placeholder="ejemplo@empresa.com"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-slate-900 text-white font-montserrat text-[11px] font-bold   uppercase tracking-[0.2em] py-4 transition-all duration-300 hover:bg-[#2d61e0]  disabled:bg-slate-400"
                >
                  {isSubmitted ? 'Abriendo PDF...' : 'Leer análisis en nueva pestaña'}
                </button>
              </form>
            </div>
          </div>
        )}
    </>);


};
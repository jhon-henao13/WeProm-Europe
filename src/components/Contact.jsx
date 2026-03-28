import React from 'react';

export const Contact = () => {
  return (
    <section className="relative bg-white py-12 px-8 md:px-16 overflow-hidden border-b border-slate-50">
      <div className="max-w-full mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* LADO IZQUIERDO: Información de contacto */}
        <div className="w-full md:w-[55%] z-10">
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-[2.2rem] font-bold mb-8 text-weprom-dark tracking-[0.1em] uppercase border-l-4 border-blue-600 pl-6 leading-tight">
              Contact WeProm Europe
            </h3>
            <p className="text-black font-montserrat text-xl font-normal max-w-3xl mt-10 ml-3 leading-relaxed">
              For institutional cooperation, partnerships or business inquiries, 
              our team remains available for confidential and strategic discussions.
            </p>

            {/* Lista de datos de contacto */}
            <div className="mt-12 space-y-8 ml-3">
              <div className="flex items-center space-x-5 group">
                <div className="p-3 rounded-full bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-black text-2xl font-montserrat font-normal tracking-wide">info@wepromeurope.com</span>
              </div>

              <div className="flex items-center space-x-5 group">
                <div className="p-3 rounded-full bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-black text-2xl font-montserrat font-normal tracking-wide">+ 52 56 5916 5635</span>
              </div>

              <div className="flex items-center space-x-5 group">
                <div className="p-3 rounded-full bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-black text-2xl font-montserrat font-normal tracking-wide">142 Rue de Rivoli, 75001, Paris, France.</span>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: Formulario */}
        <div className="w-full md:w-[28%] z-10">
          <form className="reveal space-y-6" style={{ transitionDelay: '0.3s' }}>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="space-y-2">
                <label className="text-[13px] uppercase tracking-[0.3em] font-bold text-black ml-1">Full name</label>
                <input type="text" placeholder="Tu nombre" className="w-full bg-white border border-slate-300 mt-[8px] rounded-[13px] px-6 py-4 font-montserrat focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[13px] uppercase tracking-[0.3em] font-bold text-black ml-1">Company</label>
                <input type="text" placeholder="Nombre de tu empresa" className="w-full bg-white border border-slate-300 mt-[8px] rounded-[13px] px-6 py-4 font-montserrat focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] uppercase tracking-[0.3em] font-bold text-black ml-1">Email</label>
              <input type="email" placeholder="tucorreo@ejemplo.com" className="w-full bg-white border border-slate-300 mt-[8px] rounded-[13px] px-6 py-4 font-montserrat focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] uppercase tracking-[0.3em] font-bold text-black ml-1">Message</label>
              <textarea rows="4" placeholder="Cuéntanos sobre tu proyecto o idea.." className="w-full bg-white border border-slate-300 mt-[8px] rounded-[13px] px-6 py-4 font-montserrat focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"></textarea>
            </div>

            <div className="flex items-start space-x-3 py-2">
              <input type="checkbox" className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
              <p className="text-[12px] text-slate-500 font-montserrat leading-relaxed max-w-full">
                I agree to the Privacy Policy and the processing of my personal data.
              </p>
            </div>

            <div className="pt-0">
              <button type="submit" className="group relative w-full md:w-[26pc] overflow-hidden bg-transparent border-2 border-blue-500/50 backdrop-blur-[4px] text-blue-600 px-2 py-4 text-[12px] font-extrabold uppercase tracking-[0.4em] rounded-[15px] transition-all duration-700 ease-out shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:border-blue-600 hover:text-white hover:bg-blue-600 hover:shadow-[0_10px_25px_rgba(59,130,246,0.2)] hover:scale-[1.02] active:scale-95">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></span>

                <span className="relative z-10 flex items-center justify-center gap-4 transition-all duration-500 group-hover:gap-6">
                  Send Message
                  <span className="text-[14px] transform transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </span>

              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales';

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-white pt-20 pb-12 px-6 md:px-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* PARTE SUPERIOR: BRANDING, NAV Y REDES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-100 items-start">
          
          {/* BLOQUE 1: BRANDING & GEOGRAFÍAS */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-[#2d61e0] font-montserrat text-xl font-bold tracking-[0.15em]">
              WeProm Europe
            </h3>
            <p className="text-slate-900 font-montserrat text-base font-light leading-relaxed max-w-md tracking-wide">
              {t.footer.descriptor}
            </p>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase pt-2">

              <a href="#inicio" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d61e0] transition-colors duration-300">{t.footer.locations.split(' · ')[0]}</a>

              <span className="text-slate-300">•</span>
              <a href="https://grupoweprom.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d61e0] transition-colors duration-300"> {t.footer.locations.split(' · ')[1]}</a>
              <span className="text-slate-300">•</span>

              <a href="https://weprom.us " target="_blank" rel="noopener noreferrer" className="hover:text-[#2d61e0] transition-colors duration-300">{t.footer.locations.split(' · ')[2]}</a>

            </div>
          </div>

          {/* BLOQUE 2: NAVEGACIÓN RÁPIDA */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-slate-900 font-montserrat text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
              Navegación Estratégica
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-[0.15em] text-slate-600">
              <a href="#el-momento" onClick={(e) => handleNavigation(e, 'el-momento')} className="hover:text-[#2d61e0] transition-colors duration-300">El momento</a>
              <a href="#capabilities" onClick={(e) => handleNavigation(e, 'capabilities')} className="hover:text-[#2d61e0] transition-colors duration-300">Servicios</a>
              <a href="#capabilities" onClick={(e) => handleNavigation(e, 'capabilities')} className="hover:text-[#2d61e0] transition-colors duration-300">Sectores</a>
              <a href="#team" onClick={(e) => handleNavigation(e, 'team')} className="hover:text-[#2d61e0] transition-colors duration-300">Equipo</a>
              <a href="#trayectoria" onClick={(e) => handleNavigation(e, 'trayectoria')} className="hover:text-[#2d61e0] transition-colors duration-300">Trayectoria</a>
              <a href="#insights" onClick={(e) => handleNavigation(e, 'insights')} className="hover:text-[#2d61e0] transition-colors duration-300">Insights</a>
              <a href="#contact" onClick={(e) => handleNavigation(e, 'contact')} className="hover:text-[#2d61e0] transition-colors duration-300">Contacto</a>
            </div>
          </div>

          {/* BLOQUE 4: REDES SOCIALES */}
          <div className="lg:col-span-2 space-y-4 lg:text-right">
            <h4 className="text-slate-900 font-montserrat text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
              {t.footer.cta}
            </h4>
            <div className="flex lg:justify-end items-center gap-4">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/wepromeurope" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:bg-[#2d61e0] hover:text-white hover:border-[#2d61e0] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/wepromeurope/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:bg-[#2d61e0] hover:text-white hover:border-[#2d61e0] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>

              {/* X / Twitter */}
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:bg-[#2d61e0] hover:text-white hover:border-[#2d61e0] transition-all duration-300"
                aria-label="X"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/people/WeProm-Europe/61586910983969/#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:bg-[#2d61e0] hover:text-white hover:border-[#2d61e0] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* PARTE INFERIOR: LEGAL & COPYRIGHT (BLOQUE 3) */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-montserrat text-slate-400 tracking-wide">
          
          {/* Copyright */}
          <div className="order-2 md:order-1 font-light">
            {t.footer.copyright}
          </div>

          {/* Enlaces Legales */}
          {/* Enlaces Legales Unificados en PDF */}
          <div className="order-1 md:order-2 text-center md:text-right">
            <a 
              href="/weprom-europe-mentions-legales-es.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline decoration-slate-300 hover:decoration-[#2d61e0] hover:text-[#2d61e0] font-medium uppercase tracking-[0.1em] text-slate-500 transition-all duration-300 inline-block"
            >
              {t.footer.legal}
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
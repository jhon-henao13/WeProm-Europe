// src/components/ConsentBanner.jsx
import React from 'react';
import { Cookie } from 'lucide-react';
import { useCookies } from '../context/CookieContext';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales';

export const ConsentBanner = () => {
  const { cookiesAccepted, acceptCookies, rejectCookies, openSettings } = useCookies();
  const { language } = useLanguage();
  const t = translations[language];

  if (cookiesAccepted !== null) return null;

  const legalPdfMap = {
    ES: '/weprom-europe-mentions-legales-es.pdf',
    FR: '/Politique_de_confidentialite_FR.pdf',
    EN: '/Privacy_Policy_EN.pdf',
  };
  const legalPdfUrl = legalPdfMap[language] || legalPdfMap.ES;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[200] animate-slide-up">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-[#2d61e0]/30 shadow-[0_-10px_60px_rgba(45,97,224,0.15)]">
        {/* Línea de luz superior */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2d61e0] to-transparent opacity-70" />

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-[#2d61e0]/10 text-[#2d61e0] border border-[#2d61e0]/20 flex-shrink-0">
              <Cookie size={20} strokeWidth={1.5} />
            </div>
            <div className="text-center md:text-left">
              <p className="text-white font-montserrat text-sm leading-relaxed">
                {t.cookieBanner.message}
                <button
                  onClick={openSettings}
                  className="text-[#2d61e0] hover:underline font-medium bg-transparent border-none cursor-pointer ml-1"
                >
                  {t.cookieBanner.settingsLink}
                </button>
                <a
                  href={legalPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white underline underline-offset-2 text-xs ml-2"
                >
                  {t.cookieBanner.policyLink}
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <button
              onClick={rejectCookies}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-300 hover:bg-white/5"
            >
              {t.cookieBanner.reject}
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 text-xs font-bold uppercase tracking-wider bg-[#2d61e0] text-white rounded-full transition-all duration-300 hover:bg-[#1f47a8] shadow-lg hover:shadow-[#2d61e0]/40 hover:scale-105 active:scale-95"
            >
              {t.cookieBanner.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// src/components/ConsentSettingsModal.jsx
import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { useCookies } from '../context/CookieContext';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales';

export const ConsentSettingsModal = () => {
  const { showSettings, closeSettings, acceptCookies, rejectCookies } = useCookies();
  const { language } = useLanguage();
  const t = translations[language];

  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
    personalization: false,
  });

  const [expanded, setExpanded] = useState(null);

  if (!showSettings) return null;

  const handleSave = () => {
    localStorage.setItem('weprom-cookie-preferences', JSON.stringify(preferences));
    const anyAccepted = Object.values(preferences).some(v => v === true);
    if (anyAccepted) {
      acceptCookies();
    } else {
      rejectCookies();
    }
    closeSettings();
  };

  const handleToggle = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleExpand = (key) => {
    setExpanded(expanded === key ? null : key);
  };

  const cookieCategories = [
    {
      key: 'necessary',
      label: t.cookieSettings.necessaryLabel,
      desc: t.cookieSettings.necessaryDesc,
      alwaysOn: true,
      details: 'Estas cookies son esenciales para el funcionamiento del sitio web y no pueden desactivarse. Se utilizan para recordar tus preferencias de cookies y para la seguridad del sitio.',
    },
    {
      key: 'analytics',
      label: t.cookieSettings.analyticsLabel,
      desc: t.cookieSettings.analyticsDesc,
      alwaysOn: false,
      details: 'Recopilan información sobre cómo los visitantes interactúan con el sitio web. Nos ayudan a mejorar la experiencia del usuario y a entender qué contenido es más relevante.',
    },
    {
      key: 'marketing',
      label: t.cookieSettings.marketingLabel,
      desc: t.cookieSettings.marketingDesc,
      alwaysOn: false,
      details: 'Se utilizan para mostrar anuncios relevantes para ti y para medir la efectividad de las campañas publicitarias. No compartimos tu información personal con terceros sin tu consentimiento.',
    },
    {
      key: 'personalization',
      label: 'Cookies de personalización',
      desc: 'Permiten recordar tus preferencias de idioma, región y otras configuraciones para ofrecerte una experiencia más personalizada.',
      alwaysOn: false,
      details: 'Almacenan tus preferencias para que no tengas que configurarlas cada vez que visitas el sitio. Ejemplo: idioma seleccionado, región, temas visuales.',
    },
  ];

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 md:p-10 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeSettings}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Cerrar"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <h2 className="text-slate-900 font-montserrat text-2xl font-bold mb-2">
            {t.cookieSettings.title}
          </h2>
          <p className="text-slate-600 text-sm">
            {t.cookieSettings.description}
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {cookieCategories.map((cat) => (
            <div key={cat.key} className="border border-slate-100 rounded-xl p-4 transition-all hover:border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-montserrat font-semibold text-slate-900 text-sm">
                    {cat.label}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">{cat.desc}</p>
                </div>
                <div className="flex items-center gap-3">
                  {cat.alwaysOn ? (
                    <div className="w-12 h-6 bg-[#2d61e0] rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-inner">
                      {t.cookieSettings.alwaysOn}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleToggle(cat.key)}
                      className={`w-12 h-6 rounded-full transition-all duration-300 ${
                        preferences[cat.key] ? 'bg-[#2d61e0] shadow-md shadow-[#2d61e0]/30' : 'bg-slate-300'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                          preferences[cat.key] ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  )}
                  <button
                    onClick={() => toggleExpand(cat.key)}
                    className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                    aria-label="Más información"
                  >
                    {expanded === cat.key ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>
              </div>
              {expanded === cat.key && (
                <div className="mt-3 pt-3 border-t border-slate-100 text-slate-600 text-xs leading-relaxed">
                  {cat.details}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={handleSave}
            className="flex-1 py-3 bg-[#2d61e0] text-white font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-[#1f47a8] transition-all shadow-lg hover:shadow-[#2d61e0]/30 hover:scale-[1.02] active:scale-95"
          >
            {t.cookieSettings.save}
          </button>
          <button
            onClick={() => { rejectCookies(); closeSettings(); }}
            className="flex-1 py-3 border border-slate-300 text-slate-700 font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-slate-50 transition-all"
          >
            {t.cookieSettings.rejectAll}
          </button>
        </div>

        <div className="mt-4 text-center">
          <a
            href="/weprom-europe-mentions-legales-es.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-[#2d61e0] underline transition-colors"
          >
            {t.cookieSettings.policyLink}
          </a>
        </div>
      </div>
    </div>
  );
};
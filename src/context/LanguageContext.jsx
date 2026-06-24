// src/context/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Detectar idioma del navegador o localStorage
  const getInitialLanguage = () => {
    const stored = localStorage.getItem('weprom-lang');
    if (stored && ['ES', 'FR', 'EN'].includes(stored)) return stored;
    
    const browserLang = navigator.language || navigator.languages?.[0] || 'ES';
    const lang = browserLang.substring(0, 2).toUpperCase();
    if (['ES', 'FR', 'EN'].includes(lang)) return lang;
    return 'ES'; // fallback
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('weprom-lang', language);
    document.documentElement.lang = language.toLowerCase();
    // También podrías actualizar meta tags aquí si no lo haces en App
  }, [language]);

  const value = { language, setLanguage };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
// src/context/CookieContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [cookiesAccepted, setCookiesAccepted] = useState(null);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
    personalization: false,
  });
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('weprom-cookies-accepted');
    if (stored === 'true') setCookiesAccepted(true);
    else if (stored === 'false') setCookiesAccepted(false);

    const prefs = localStorage.getItem('weprom-cookie-preferences');
    if (prefs) {
      try {
        const parsed = JSON.parse(prefs);
        setPreferences(parsed);
      } catch (e) {}
    }
  }, []);

  const acceptCookies = () => {
    setCookiesAccepted(true);
    localStorage.setItem('weprom-cookies-accepted', 'true');
  };

  const rejectCookies = () => {
    setCookiesAccepted(false);
    localStorage.setItem('weprom-cookies-accepted', 'false');
  };

  const openSettings = () => setShowSettings(true);
  const closeSettings = () => setShowSettings(false);

  const value = {
    cookiesAccepted,
    preferences,
    setPreferences,
    showSettings,
    acceptCookies,
    rejectCookies,
    openSettings,
    closeSettings,
  };

  return (
    <CookieContext.Provider value={value}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
};
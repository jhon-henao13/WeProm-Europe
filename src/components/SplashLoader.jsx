import React, { useState, useEffect } from 'react';

export const SplashLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Incremento elegante y asíncrono de la barra/contador
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Incrementos variables para simular carga inteligente
        const next = prev + Math.floor(Math.random() * 12) + 4;
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Retraso para que el usuario admire el 100% antes de desvanecerse hacia arriba
      const timeout = setTimeout(() => {
        setIsFadingOut(true);
        // Esperamos a que la animación de CSS termine (800ms) para desmontar el loader
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 800);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-[#070b13] z-[9999] flex flex-col items-center justify-center pointer-events-auto transition-all duration-800 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isFadingOut ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Luz ambiental azul de fondo */}
      <div className="absolute w-[500px] h-[500px] bg-[#2d61e0]/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[4000ms]" />

      <div className="relative flex flex-col items-center max-w-[280px] md:max-w-[340px] px-6">
        
        {/* Contenedor del Logo con Efecto Revelado Cinematográfico */}
        <div className="overflow-hidden mb-8 relative group">
          <img 
            src="/LOGO3AZUL.png" 
            alt="WeProm Europe Loading" 
            className="w-full h-auto object-contain animate-splash-reveal brightness-110 contrast-105"
          />
          {/* Brillo lineal pasando sobre el logo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer duration-[2000ms]" />
        </div>

        {/* Indicador Minimalista UI Premium */}
        <div className="w-full space-y-3">
          {/* Barra de progreso de microgrosor */}
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#2d61e0] to-blue-400 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Metadatos en formato institucional */}
          <div className="flex justify-between items-center text-[9px] font-montserrat font-bold tracking-[0.3em] uppercase text-slate-400/70">
            <span>WeProm Europe</span>
            <span className="font-mono tabular-nums text-white">{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
};
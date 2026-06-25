import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 4;
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 700);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 bg-[#070b13] z-[9999] flex flex-col items-center justify-center overflow-hidden pointer-events-auto will-change-transform"
      initial={{ y: 0 }}
      animate={{ y: isFadingOut ? "-100%" : "0%" }}
      transition={{
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96] // Curva idéntica a la versión Promocionales
      }}
    >
      {/* ================= BACKGROUND ORBS DE ALTA DISPERSIÓN (60FPS GPUT-ACCELERATED) ================= */}
      {/* Orb 1: Superior Izquierda */}
      <motion.div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#2d61e0]/5 rounded-full blur-[90px] pointer-events-none will-change-transform"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 2: Inferior Derecha */}
      <motion.div
        className="absolute -bottom-24 -right-24 w-[450px] h-[450px] bg-blue-700/4 rounded-full blur-[100px] pointer-events-none will-change-transform"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -25, 0],
          y: [0, -35, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= CENTRO DE ENFOQUE: LOGO & PREMIUM BACK-GLOW ================= */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-[340px] px-6 z-10">
        
        {/* Esfera Central Líquida (Justo detrás del logotipo, sin formas rectangulares) */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-tr from-[#2d61e0] to-blue-500 rounded-full blur-[55px] pointer-events-none z-0 will-change-transform"
          animate={{
            scale: [0.9, 1.15, 0.9],
            opacity: [0.15, 0.30, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Contenedor del Logo Orgánico (Filtros pesados eliminados para optimizar FPS) */}
        {/* Contenedor del Logo Orgánico con Animación Cinemática Replicada (GPU Accelerated) */}
        <motion.div 
          className="relative z-10 mb-10 w-full flex justify-center will-change-transform"
          initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
          animate={{ 
            opacity: isFadingOut ? 0 : 1, 
            scale: isFadingOut ? 0.9 : 1,
            rotate: 0 
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.43, 0.13, 0.23, 0.96] // Misma curva Bézier que Promocionales
          }}
        >
          {/* Brillo sutil clonado que flota en sintonía detrás de la imagen */}
          <motion.div
            className="absolute inset-0 bg-[#2d61e0]/15 rounded-2xl blur-xl pointer-events-none z-0"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Imagen con elevación flotante infinita ultra fluida (60fps) */}
          <motion.img 
            src="/LOGO1BLANCO.png" 
            alt="WeProm Europe Loading" 
            className="w-48 sm:w-56 md:w-64 h-auto object-contain select-none pointer-events-none relative z-10"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* UI HUD Minimalista de Carga */}
        {/* UI HUD Minimalista de Carga Animado en Salida */}
        <motion.div 
          className="w-full space-y-3 relative z-10 will-change-transform"
          animate={{ 
            opacity: isFadingOut ? 0 : 1, 
            y: isFadingOut ? 15 : 0 
          }}
          transition={{ 
            duration: 0.5, 
            ease: [0.43, 0.13, 0.23, 0.96] 
          }}
        >
          {/* Micro-track de progreso (1px) */}
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-[#2d61e0] via-blue-400 to-[#2d61e0] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Texto Institucional */}
          <div className="flex justify-between items-center text-[9px] font-montserrat font-bold tracking-[0.35em] uppercase text-slate-400/60 select-none">
            <span>WeProm Europe</span>
            <span className="font-mono tabular-nums text-white/90">{progress}%</span>
          </div>
        </motion.div>

      </div>

      {/* ================= MICRO PARTÍCULAS DE ATMÓSFERA PREMIUM ================= */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full pointer-events-none will-change-transform"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${25 + Math.random() * 50}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};
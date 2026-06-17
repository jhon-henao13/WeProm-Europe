import React, { useMemo } from 'react';

export const InteractiveBackground = ({ children, className = '' }) => {
  // Generamos las partículas de forma aleatoria solo una vez para optimizar rendimiento
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      opacity: Math.random() * 0.6 + 0.1,
      animationDuration: `${Math.random() * 15 + 10}s`,
      animationDelay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-weprom-dark ${className}`}>
      
      {/* CAPA 1: Grid técnico muy sutil (Aporta textura premium) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* CAPA 2: Auroras dinámicas (Basado en la imagen de referencia) */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#2d61e0]/30 rounded-full blur-[130px] mix-blend-screen animate-fluid-slow pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#081b3f]/60 rounded-full blur-[150px] mix-blend-screen animate-fluid-slow pointer-events-none" style={{ animationDelay: '-5s', animationDuration: '25s' }}></div>
      <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] bg-[#2d61e0]/20 rounded-full blur-[120px] mix-blend-screen animate-fluid-slow pointer-events-none" style={{ animationDelay: '-10s', animationDuration: '30s' }}></div>

      {/* CAPA 3: Partículas interactivas fluidas */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white shadow-[0_0_10px_#2d61e0] animate-particle-float"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
            }}
          />
        ))}
      </div>

      {/* CAPA 4: Contenido renderizado (children) */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
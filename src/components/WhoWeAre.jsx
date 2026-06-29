// src/components/WhoWeAre.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales';

// --- Iconos SVG (tomados del Hero de ejemplo) ---
const ArrowRight = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" className={className}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const Target = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

const TrendingUp = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
  </svg>
);

const BarChart2 = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const Brain = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
    <path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/>
  </svg>
);

const WepromLogo = ({ className = "" }) => (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className={`w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 transition-all duration-500 ${className}`}>
    <defs>
      <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4A7FFF"/>
        <stop offset="100%" stopColor="#1A43A8"/>
      </linearGradient>
    </defs>
    {/* Círculos concéntricos representativos del isotipo */}
    <circle cx="250" cy="250" r="200" fill="none" stroke="url(#circleGrad)" strokeWidth="15" opacity="1.0" />
    <circle cx="250" cy="250" r="140" fill="none" stroke="url(#circleGrad)" strokeWidth="15" opacity="1.3" />
    <circle cx="250" cy="250" r="80" fill="url(#circleGrad)" />
    {/* Nodos de conexión sugeridos en el isotipo */}
    <circle cx="250" cy="50" r="15" fill="#4A7FFF" />
    <circle cx="450" cy="250" r="15" fill="#1A43A8" />
  </svg>
);

// --- Subcomponente de Órbita (Satélite) - VERSIÓN JAVASCRIPT ---
const OrbitSatellite = ({
  rotationX,
  rotationY,
  diameter,
  duration,
  delay = '0s',
  color,
  tooltipText,
  icon
}) => {
  return (
    <div 
      className="absolute top-1/2 left-1/2 preserve-3d pointer-events-none" 
      style={{ transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)` }}
    >
      {/* Anillo de la órbita */}
      <div 
        className="absolute border rounded-full -translate-x-1/2 -translate-y-1/2" 
        style={{ 
          width: `${diameter}px`, 
          height: `${diameter}px`,
          borderColor: `${color}20` 
        }}
      />
      
      {/* Nodo rotatorio */}
      <div 
        className="absolute preserve-3d animate-spin-z" 
        style={{ animationDuration: duration, animationDelay: delay }}
      >
        <div className="absolute preserve-3d" style={{ transform: `translateY(-${diameter / 2}px)` }}>
          <div className="absolute preserve-3d animate-reverse-spin-z" style={{ animationDuration: duration, animationDelay: delay }}>
            <div 
              className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2" 
              style={{ transform: `rotateY(${-rotationY}deg) rotateX(${-rotationX}deg)` }}
            >
              {/* Tooltip e Icono Interactivo */}
              <div 
                style={{ 
                  borderColor: color, 
                  boxShadow: `0 0 20px ${color}40` 
                }}
                className="group relative bg-[#0a0a0a]/95 backdrop-blur-md border w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center pointer-events-auto cursor-default hover:scale-110 transition-transform"
              >
                {icon}
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                  <div 
                    style={{ borderColor: `${color}60`, boxShadow: `0 0 20px ${color}40` }}
                    className="bg-[#0a0a0a]/95 backdrop-blur-sm border px-4 py-2 rounded-lg whitespace-nowrap"
                  >
                    <span style={{ color }} className="font-montserrat font-bold text-xs sm:text-sm tracking-widest uppercase">
                      {tooltipText}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Componente PlanetVisual (el planeta 3D con sus órbitas) ---
const PlanetVisual = () => {
  return (
    <div className="relative w-full max-w-[450px] aspect-square preserve-3d flex items-center justify-center scale-90 sm:scale-100">
      
      {/* Inyección de keyframes (solo una vez) */}
      <style dangerouslySetInnerHTML={{__html: `
        .preserve-3d { transform-style: preserve-3d; }
        @keyframes globe-spin {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes orbit-spin-z {
          from { transform: rotateZ(0deg); }
          to { transform: rotateZ(360deg); }
        }
        @keyframes orbit-spin-z-reverse {
          from { transform: rotateZ(360deg); }
          to { transform: rotateZ(0deg); }
        }
        .animate-globe-spin { animation: globe-spin 40s linear infinite; }
        .animate-spin-z { animation: orbit-spin-z linear infinite; }
        .animate-reverse-spin-z { animation: orbit-spin-z-reverse linear infinite; }

        .globe-container {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          -webkit-mask-image: -webkit-radial-gradient(white, black);
        }
          
        .globe-mask {
          -webkit-mask-image: url('/world-map-blank.svg');
          -webkit-mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-image: url('/world-map-blank.svg');
          mask-size: 100% 100%;
          mask-repeat: no-repeat;
        }
      `}} />

      {/* Logo de fondo difuminado */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25 blur-[6px] animate-pulse" style={{ transform: 'translateZ(-140px) scale(1.4)' }}>
        <WepromLogo />
      </div>

      {/* Planeta central */}
      <div className="globe-container relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#030914] shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.9),inset_10px_10px_30px_rgba(89,157,223,0.35),0_0_40px_rgba(89,157,223,0.15)] overflow-hidden flex items-center justify-center preserve-3d">
        {/* Mapa giratorio */}
        <div className="absolute top-0 left-0 h-full w-[400%] animate-globe-spin flex opacity-60 mix-blend-screen">
          <div className="w-[50%] h-full bg-[#599ddf] globe-mask"></div>
          <div className="w-[50%] h-full bg-[#599ddf] globe-mask"></div>
        </div>
        {/* Glow y reflejo */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_25px_#599ddf] pointer-events-none" />
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_40%)] pointer-events-none" />
      </div>

      {/* Órbitas */}
      <OrbitSatellite 
        rotationX={70} rotationY={-15} diameter={260} duration="16s" 
        color="#599ddf" tooltipText="Insights de Consumo" 
        icon={<Target className="text-[#599ddf]" size={18} />} 
      />
      <OrbitSatellite 
        rotationX={65} rotationY={25} diameter={350} duration="24s" delay="-6s"
        color="#e6af41" tooltipText="Tendencias de Mercado" 
        icon={<TrendingUp className="text-[#e6af41]" size={18} />} 
      />
      <OrbitSatellite 
        rotationX={75} rotationY={5} diameter={440} duration="32s" 
        color="#80b67d" tooltipText="Análisis Competitivo" 
        icon={<BarChart2 className="text-[#80b67d]" size={18} />} 
      />
      <OrbitSatellite 
        rotationX={75} rotationY={5} diameter={440} duration="32s" delay="-16s"
        color="#c5362e" tooltipText="Análisis Predictivo" 
        icon={<Brain className="text-[#c5362e]" size={18} />} 
      />

      {/* Puntos estelares de ambiente */}
      <div className="absolute top-[20%] left-[25%] w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white] animate-pulse" style={{ transform: 'translateZ(100px)' }} />
      <div className="absolute bottom-[25%] right-[20%] w-1.5 h-1.5 bg-[#80b67d] rounded-full shadow-[0_0_10px_#80b67d] animate-pulse" style={{ transform: 'translateZ(80px)' }} />
    </div>
  );
};

// ============================================================
// COMPONENTE PRINCIPAL WhoWeAre
// ============================================================
export const WhoWeAre = () => {

  const { language } = useLanguage();
  const t = translations[language];

  // Configuración de las métricas clave del Grupo WeProm
  // Iconos para las métricas (basados en los originales que funcionaban)
  // Configuración de las métricas clave del Grupo WeProm
  // Iconos premium optimizados con geometría institucional y UI de alta fidelidad
  const metricIcons = [
    // Icono 1: Alcance Global / Presencia Internacional
    <svg className="w-12 h-12 text-[#2d61e0]" fill="none" stroke="currentColor" strokeWidth="0.7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.5 3.5 3.5 5.5 3.5 9s-1 5.5-3.5 9M12 3C9.5 6.5 8.5 8.5 8.5 12s1 5.5 3.5 9" />
    </svg>,
    // Icono 2: Alianzas Estratégicas / Sinergia de Negocios
    <svg className="w-12 h-12 text-[#2d61e0]" fill="none" stroke="currentColor" strokeWidth="0.7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>,
    // Icono 3: Asesores Asociados (Avatar / Persona Individual)
    <svg className="w-12 h-12 text-[#2d61e0]" fill="none" stroke="currentColor" strokeWidth="0.7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  ];

  
  
  const metrics = t.whoWeAre.metrics.map((m, i) => ({
    ...m,
    icon: metricIcons[i] // asignar según índice
  }));

  const regions = t.whoWeAre.hubs.regions.map((r, idx) => ({
    ...r,
    url: (() => {
      if (idx === 0) return "https://grupoweprom.com";
      if (idx === 1) return "#";
      return "https://weprom.us";
    })(),
    delay: String(idx * 100)
  }));

  const sharedCapabilities = t.whoWeAre.hubs.capabilities;

  return (
    <section className="bg-transparent border-t border-slate-100 overflow-hidden min-h-screen py-24 px-6 md:px-16 lg:px-24 relative">
      
      {/* Sutil textura geométrica de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none select-none z-0" />
      
      <div className="w-full max-w-7xl mx-auto relative z-10">

        {/* ==================== NUEVO LAYOUT: DOS COLUMNAS ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: Texto "Quiénes somos" */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start text-left"
          >
            <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4">
              {t.whoWeAre.kicker}
            </p>
            <h2 className="text-slate-900 font-montserrat text-2xl md:text-3xl lg:text-[40px] font-semibold leading-tight tracking-wide max-w-3xl" style={{ textWrap: 'balance' }}>
              {t.whoWeAre.title}
            </h2>
            <div className="w-16 h-[2px] bg-[#2d61e0] mt-8 mb-8"></div>
            
            <div className="space-y-6 text-slate-900 font-montserrat text-sm md:text-base font-normal leading-relaxed tracking-wide max-w-2xl text-justify md:text-left">
              <p>
                {t.whoWeAre.paragraph1}
              </p>
              <p>
                {t.whoWeAre.paragraph2}
              </p>
              <p>
                {t.whoWeAre.paragraph3}
              </p>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: Planeta 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center items-center"
          >
            <PlanetVisual />
          </motion.div>
        </div>

        {/* ==================== RESTO DEL CONTENIDO (Diagrama de hubs, cita, etc.) ==================== */}
        <div className="mt-20 md:mt-28 flex flex-col items-center text-center">
          
          {/* Diagrama de nodos (árbol estructural) */}
          <div className="w-full relative flex flex-col items-center mb-14">
            
            <p className='text-black font-montserrat font-semibold !text-xl md:text-base my-10'>
              {t.whoWeAre.groupIntro}
            </p>

            {/* Fila Horizontal de 3 Métricas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl mb-6 relative z-20">
              {metrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl p-5 md:p-6 flex items-center gap-5 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 hover:border-slate-300/80 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2d61e0]/5 flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                    {metric.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-montserrat font-bold text-2xl md:text-3xl text-[#2d61e0] tracking-tight leading-none mb-1">
                      {metric.value}
                    </span>
                    <span className="font-montserrat font-semibold text-[11px] md:text-xs uppercase tracking-wider text-black">
                      {metric.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Nodo Raíz Superior */}
            <div className="relative z-20 bg-white border border-slate-200 rounded-2xl px-12 py-2 shadow-lg shadow-slate-200/50 flex flex-col items-center mb-8 md:mb-0 w-[18rem] max-w-[720px]:w-[10rem]">

              <img 
                id="parallax-hero"
                src="/LOGOGWPVARIACION1.png"
                alt="WeProm Strategic Background" 
                className="w-full h-full"
              />

              
            </div>

            {/* Líneas conectoras (solo visible en desktop/tablet) */}
            <div className="hidden md:block absolute top-[390px] w-[66.66%] h-[60px] z-10">
              <div className="absolute top-0 left-1/2 w-[2px] h-[30px] bg-[#2d61e0] -translate-x-1/2"></div>
              <div className="absolute top-[30px] left-0 w-full h-[2px] bg-[#2d61e0]"></div>
              <div className="absolute top-[30px] left-0 w-2.5 h-2.5 rounded-full bg-[#2d61e0] -translate-y-1/2 -translate-x-1/2 shadow-[0_0_8px_#2d61e0]"></div>
              <div className="absolute top-[30px] left-1/2 w-2.5 h-2.5 rounded-full bg-[#2d61e0] -translate-y-1/2 -translate-x-1/2 shadow-[0_0_8px_#2d61e0]"></div>
              <div className="absolute top-[30px] right-0 w-2.5 h-2.5 rounded-full bg-[#2d61e0] -translate-y-1/2 translate-x-1/2 shadow-[0_0_8px_#2d61e0]"></div>
              <div className="absolute top-[30px] left-0 w-[2px] h-[30px] bg-[#2d61e0]"></div>
              <div className="absolute top-[30px] left-1/2 w-[2px] h-[30px] bg-[#2d61e0] -translate-x-1/2"></div>
              <div className="absolute top-[30px] right-0 w-[2px] h-[30px] bg-[#2d61e0]"></div>
            </div>

            {/* Grid de Nodos Operativos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full relative z-20 pt-0 md:pt-[100px]">
              {regions.map((region, idx) => (
                <a
                  key={idx}
                  href={region.url}
                  target={region.url !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  style={{ animationDelay: `${region.delay}ms` }}
                  className="group flex flex-col bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-[#2d61e0]/10 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#2d61e0]/10 flex items-center justify-center text-[#2d61e0] group-hover:bg-[#2d61e0] group-hover:text-white transition-colors duration-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-slate-900 font-montserrat text-lg font-bold tracking-[0.10em] mb-4 group-hover:text-[#2d61e0] transition-colors duration-300">
                    {region.name}
                  </h4>
                  <div className="flex-grow flex flex-col bg-slate-50 border border-slate-100 rounded-xl p-5 text-left transition-all duration-500 group-hover:bg-slate-900 group-hover:border-slate-800 relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2d61e0] group-hover:bg-[#3b82f6]"></span>
                      
                      <span className="font-montserrat font-bold text-[12px] tracking-[0.25em] text-[#2d61e0] group-hover:text-[#60a5fa] uppercase transition-colors duration-300">
                        {region.location}
                      </span>
                    </div>
                    <p className="text-slate-600 font-sans text-[13px] leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      <strong className="text-slate-900 font-semibold group-hover:text-white block mb-1">
                        {region.label}
                      </strong>
                      {region.desc}
                    </p>
                    <div className="absolute bottom-4 right-4 opacity-0 transform translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      <span className="text-white text-lg">→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          
          {/* ==================== CAPACIDADES COMPARTIDAS ==================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full mt-20 mb-10"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-[#09152c] via-[#10254a] to-[#09152c] shadow-[0_20px_80px_rgba(45,97,224,0.12)]">
                      
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#2d61e0]/10 blur-3xl rounded-full pointer-events-none" />
                      
              {/* Header */}
              <div className="relative z-10 px-8 pt-8 md:px-12">
                      
                <div className="flex items-center justify-center gap-3 mb-4">
                      
                  <div className="h-px w-10 bg-[#599ddf]/50" />
                      
                  <span className="font-montserrat text-[11px] md:text-xs uppercase tracking-[0.35em] text-[#599ddf] font-bold">
                    {t.whoWeAre.hubs.sharedCapabilities}
                  </span>
                      
                  <div className="h-px w-10 bg-[#599ddf]/50" />
                      
                </div>
                      
                <h3
                  className="
                  text-white
                  text-xl
                  md:text-3xl
                  font-semibold
                  text-center
                  tracking-tight
                "
                >
                  Capacidades compartidas en todo el grupo
                </h3>
                      
                
              </div>
                      
              {/* Pills */}
              <div className="relative z-10 px-6 md:px-12 py-10">
                      
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                      
                  {sharedCapabilities.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.04
                      }}
                      className="
                        group
                        relative
                        overflow-hidden
                      "
                    >
                      <div
                        className="
                        bg-white/95
                        backdrop-blur-md
                        border
                        border-white/20
                        rounded-full
                        px-5
                        py-4
                        h-full
                        flex
                        items-center
                        justify-center
                        text-center
                        transition-all
                        duration-500
                        hover:bg-white
                        hover:shadow-[0_12px_30px_rgba(89,157,223,0.25)]
                      "
                      >
                        <span
                          className="
                          text-slate-800
                          font-montserrat
                          text-xs
                          md:text-[13px]
                          font-semibold
                          leading-snug
                        "
                        >
                          {item}
                        </span>
                      </div>
                    </motion.div>
                  ))}
          
                </div>
              </div>
                
              {/* Footer */}
                
              <div className="border-t border-white/10 px-8 py-8">
                <p
                  className="
                  text-center
                  text-white
                  font-montserrat
                  text-xl
                  md:text-3xl
                  font-semibold
                "
                >
                  {t.whoWeAre.hubs.slogan}
                </p>

                <p className='text-center text-white font-monserrat text-xl mt-4 font-normal'>{t.whoWeAre.hubs.closing}</p>

              </div>
                
            </div>
          </motion.div>


          {/* Cita destacada editorial centrada */}
          <blockquote className="border-t border-b border-slate-200/70 py-10 w-full max-w-2xl relative px-4 mt-8">
            <span className="absolute top-2 left-1/2 -translate-x-1/2 font-serif text-7xl text-slate-100 select-none pointer-events-none z-0">
              “
            </span>
            <p className="text-slate-800 font-montserrat text-sm md:text-[15px] font-medium italic leading-relaxed tracking-wide mb-6 relative z-10" style={{ textWrap: 'balance' }}>
              {t.whoWeAre.hubs.quote}
            </p>
            <footer className="author relative z-10">
              <cite className="not-italic block font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-[#2d61e0]">
                {t.whoWeAre.hubs.author}
              </cite>
              <span className="block font-montserrat text-[10px] uppercase tracking-[0.15em] text-slate-500 mt-1.5">
                {t.whoWeAre.hubs.authorTitle}
              </span>
            </footer>
          </blockquote>

        </div>
        {/* Fin del resto del contenido */}
        
      </div>
    </section>
  );
};
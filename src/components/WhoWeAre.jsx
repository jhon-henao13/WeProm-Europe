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

// --- Logo Weprom (SVG) ---
const WepromLogo = ({ className = "" }) => (
  <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780.55 712.65" className={`w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 drop-shadow-[0_0_50px_rgba(89,157,223,0.25)] transition-all duration-500 ${className}`}>
    <defs>
      <linearGradient id="Degradado_sin_nombre_194" x1="689.73" y1="503.15" x2="689.73" y2="506.87" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#f09428"/><stop offset=".21" stopColor="#f29d2b"/><stop offset=".64" stopColor="#f7ac31"/><stop offset="1" stopColor="#f9b233"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_194-2" x1="734.92" y1="96.62" x2="734.92" y2="554.63" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f09428"/><stop offset="1" stopColor="#f9b233"/></linearGradient>
      <linearGradient id="Degradado_sin_nombre_6" x1="3.05" y1="515.94" x2="3.11" y2="515.84" gradientUnits="userSpaceOnUse">
        <stop offset=".07" stopColor="#e6332a"/><stop offset="1" stopColor="#009fe3"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_6-2" x1="81.77" y1="583.27" x2="374.34" y2="76.54" gradientUnits="userSpaceOnUse"><stop offset=".07" stopColor="#e6332a"/><stop offset="1" stopColor="#009fe3"/></linearGradient>
      <linearGradient id="Degradado_sin_nombre_22" x1="42.84" y1="505.91" x2="42.84" y2="271.32" gradientUnits="userSpaceOnUse"><stop offset=".01" stopColor="#a3332a"/><stop offset="1" stopColor="#e6332a"/></linearGradient>
      <linearGradient id="Degradado_sin_nombre_3" x1="728.43" y1="52.76" x2="460.78" y2="516.35" gradientUnits="userSpaceOnUse"><stop offset=".05" stopColor="#f9b233"/><stop offset="1" stopColor="#579966"/></linearGradient>
      <linearGradient id="Degradado_sin_nombre_201" x1="72.81" y1="406.73" x2="706.31" y2="406.73" gradientUnits="userSpaceOnUse"><stop offset=".08" stopColor="#e6332a"/><stop offset=".58" stopColor="#009fe3"/><stop offset="1" stopColor="#f9b233"/></linearGradient>
      <linearGradient id="Degradado_sin_nombre_170" x1="476.57" y1="292.44" x2="476.57" y2="683.68" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0072bc"/><stop offset="1" stopColor="#60b87b"/></linearGradient>
    </defs>
    <g id="Capa_1-2" data-name="Capa 1">
      <g>
        <path fill="url(#Degradado_sin_nombre_194)" d="M689.65,503.45c-.02,1.21.04,2.41.15,3.6,0-.34,0-.67,0-1.02-.1-1.02-.14-2.04-.14-3.08,0,.16,0,.34,0,.49Z"/>
        <path fill="url(#Degradado_sin_nombre_194-2)" d="M689.63,73.54c-.5,31.91.61,381.87.05,428.04.07,1.52.11,3,.12,4.46,3.9,41.46,85.93,70.25,85.93,70.25-.02.33-.04.66-.07.98.04.02.07.02.07.02,1.05-62.18,4.22-381.27,4.61-419.89-22.48-67.07-71.63-81.03-90.71-83.86Z"/>
        <path fill="url(#Degradado_sin_nombre_6)" d="M3.1,515.98s0-.02,0-.03c-.02-.19-.05-.17,0,.03h0Z"/>
        <path fill="url(#Degradado_sin_nombre_6-2)" d="M431.96,221.95c-.13-54.69-44.85-157.97-137.14-157.99-63.84-.01-107.65,44.61-115.62,78.86-2.17,9.34-5.02,32.33-4.68,42.53.91,27.13.68,261.45-.33,275.79-.44,6.34,9,77.5-43.57,110.47-13.3,8.34-29.17,12.53-44.57,9.54-56.62-10.99-82.24-66.42-82.58-66.96,0,0,2.89,18.21,6.04,25.9,42.24,103.24,120.38,95.8,129.9,95.81,41.25.06,111.55-13.84,117.71-110.67.18-2.83-2.19-305.52-.44-309.75,8.56-63.57,46.31-76.16,61.68-77.55,79.89-12.58,113.6,84.02,113.6,84.02Z"/>
        <path fill="url(#Degradado_sin_nombre_22)" d="M85.03,580.94c-1.33-34.92,0-214.45.64-266.37l-16.69-147.31c-45.39,9.82-59.23,54.27-64.18,71.89-9.06,32.24-2.78,235.33-1.41,274.66.02.48,4.33,8.89,11.93,19.6,12.55,17.11,35.35,40.49,69.7,47.53Z"/>
        <path fill="url(#Degradado_sin_nombre_3)" d="M644.41,0c-93.28,0-119.15,63.97-123.25,91.33-2.17,14.48-1.84,49.14-1.91,53.97-.26,17.39,0,34.8,0,52.19,0,35.8-.58,294.56-.54,311.14.23,121.3,1.06,148.46-.19,153.58,36.49-.13,73.68-22.95,87.88-71.01.16-4.11.24-10.35.21-14.74-.21-38.72-.44-357.05-.4-364.78.27-54.87-6.83-138.05,75.64-138.83-.02-.14,70.61.32,98.71,85.14C778.08,38.21,693.73,0,644.41,0Z"/>
        <path fill="url(#Degradado_sin_nombre_201)" d="M689.65,502.45c0-.34.01-.71.02-1.1,2.31,49.53-24.6,68.58-63.68,44.95-7.02-4.24-453.47-351.17-462.71-357.04-50.68-32.22-94.3-22-94.3-22,2.75,20.65,16.33,144.9,16.69,147.31-.64-81.57,64.92-75.98,95.29-51.61-8.3-6.66,431.17,335.9,460.54,353.92,12.4,7.6,24.78,15.6,37.68,22.34,12.61,6.6,27.45,9.42,42.05,8.26,17.39-1.38,31.93-12.96,40.25-27.49,7.3-12.75,11.86-25.71,13.93-40.34.12-.86.23-2.11.31-3.37,0,0-86.8-30.46-86.08-73.83Z"/>
        <path fill="url(#Degradado_sin_nombre_170)" d="M431.83,578.79c-2.69-24.65,1.42-351.8.27-355.44-9.74-30.89-38.95-75.63-85.43-85.33,0,0,.71,393.75.54,405.37-1.54,102.5,60.48,163.96,132.95,168.81,133.65,8.95,126.23-121.02,126.23-121.02-30.09,101.91-163.57,88.4-174.56-12.4Z"/>
      </g>
    </g>
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
      <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#030914] shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.9),inset_10px_10px_30px_rgba(89,157,223,0.35),0_0_40px_rgba(89,157,223,0.15)] overflow-hidden flex items-center justify-center preserve-3d">
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
  const metrics = t.whoWeAre.metrics.map((m, i) => ({
    ...m,
    icon: ( // mantener los iconos fijos
      <svg className="w-12 h-12 text-[#2d61e0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        {/* ... cada icono según el índice, o puedes usar m.icon si lo defines en el objeto de traducción, pero aquí lo dejamos fijo */}
      </svg>
    )
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
            <div className="hidden md:block absolute top-[330px] w-[66.66%] h-[60px] z-10">
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
                  <h4 className="text-slate-900 font-montserrat text-lg font-bold tracking-tight mb-4 group-hover:text-[#2d61e0] transition-colors duration-300">
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
                        hover:-translate-y-1
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

                <p className='text-center text-white font-monserrat text-xl mt-4 font-normal'>Una infraestructura práctica para conectar LATAM, Europa y Norteamérica.</p>

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
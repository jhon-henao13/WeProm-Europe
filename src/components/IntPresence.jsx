import React from 'react';
import { Globe, MapPin, Compass } from 'lucide-react';

const PRESENCE_DATA = [
  {
    id: 1,
    region: "WeProm Europe",
    city: "París, Francia",
    description: "Sede europea. Hub estratégico para el desarrollo de negocios entre Europa y América Latina.",
    
    accent: "bg-blue-50 text-[#2d61e0] border-[#2d61e0]/20"
  },
  {
    id: 2,
    region: "Grupo WeProm LATAM",
    city: "Guadalajara, México",
    description: "Sede matriz. Centro de operaciones para América Latina y eje histórico de nuestra trayectoria de más de 35 años.",
    
    accent: "bg-slate-900 text-white border-slate-800"
  },
  {
    id: 3,
    region: "WeProm USA",
    city: "Austin, Texas",
    description: "Sede norteamericana. Plataforma estratégica para los mercados de Estados Unidos y Canadá; operación coordinada con LATAM y Europa.",
    
    accent: "bg-slate-50 text-slate-800 border-slate-200"
  }
];

export const IntPresence = () => {
  return (
    <section className="relative bg-white py-14 md:py-24 px-6 md:px-16 overflow-hidden border-b border-slate-100">
      
      {/* Elemento Decorativo Geométrico Premium de Fondo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] h-[60%] opacity-[0.03] pointer-events-none select-none hidden lg:block">
        <svg className="w-full h-full text-slate-900" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="40" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="25" />
          <line x1="10" y1="50" x2="90" y2="50" />
          <line x1="50" y1="10" x2="50" y2="90" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* CABECERA */}
        <div className="max-w-3xl mb-20 reveal">
          <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4">
            Presencia internacional
          </p>
          <h2 className="text-slate-900 font-montserrat text-3xl md:text-[35px] font-semibold uppercase leading-tight tracking-wide mb-6">
            Estratégicamente posicionados en tres mercados clave del comercio bilateral.
          </h2>
          <div className="w-12 h-[2px] bg-[#2d61e0] mb-6" />
          <p className="text-black font-montserrat text-sm md:text-base font-light leading-relaxed tracking-wide">
            Operamos desde Europa, América Latina y Norteamérica con sedes propias estratégicamente ubicadas en los principales hubs comerciales de cada región.
          </p>
        </div>

        {/* RETÍCULA DE TARJETAS ASIMÉTRICAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 reveal">
          {PRESENCE_DATA.map((location) => {
            const isMatriz = location.id === 2;
            return (
              <div 
                key={location.id}
                className={`relative border p-8 md:p-10 flex flex-col justify-between transition-all duration-300 group select-none min-h-[340px] ${
                  isMatriz 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/10' 
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-400 hover:shadow-lg hover:shadow-slate-100/50'
                }`}
              >
                <div>
                  {/* Fila de Encabezado Técnico de la Tarjeta */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 flex items-center justify-center border transition-transform duration-500 group-hover:rotate-[15deg] ${
                      isMatriz ? 'bg-slate-800 border-slate-700 text-[#2d61e0]' : 'bg-slate-50 border-slate-200 text-[#2d61e0]'
                    }`}>
                      {location.id === 1 && <Globe className="w-5 h-5 stroke-[1.5]" />}
                      {location.id === 2 && <Compass className="w-5 h-5 stroke-[1.5]" />}
                      {location.id === 3 && <MapPin className="w-5 h-5 stroke-[1.5]" />}
                    </div>
                    
                  </div>

                  {/* Identificadores Principales */}
                  <h3 className="font-montserrat text-lg font-semibold uppercase tracking-wider mb-2">
                    {location.region}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <span className={`w-1.5 h-1.5 rounded-full ${isMatriz ? 'bg-[#2d61e0]' : 'bg-[#2d61e0]'}`} />
                    <p className={`font-montserrat text-xs font-medium uppercase tracking-widest ${
                      isMatriz ? 'text-slate-300' : 'text-black'
                    }`}>
                      {location.city}
                    </p>
                  </div>

                  {/* Breve Descriptivo Requerido */}
                  <p className={`font-montserrat text-xs md:text-sm font-light leading-relaxed tracking-wide ${
                    isMatriz ? 'text-slate-300' : 'text-black'
                  }`}>
                    {location.description}
                  </p>
                </div>

                {/* Línea decorativa técnica al fondo de la tarjeta */}
                <div className="mt-8 pt-4 border-t border-dashed w-full flex justify-end opacity-40 group-hover:opacity-100 transition-opacity duration-300 style-border ${
                  isMatriz ? 'border-slate-800' : 'border-slate-100'
                }">
                  
                </div>
              </div>
            );
          })}
        </div>

        {/* PIE DE SECCIÓN */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 reveal">
          <p className="text-slate-800 font-montserrat text-xs md:text-base font-light tracking-wide leading-relaxed">
            * Una operación integrada entre las tres regiones que más oportunidades generan hoy.
          </p>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#2d61e0] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">
              Interconnected Tri-Regional Engine
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
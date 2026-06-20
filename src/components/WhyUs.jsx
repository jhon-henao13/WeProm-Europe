import React from 'react';
import { 
  ShieldCheck, 
  SearchCode, 
  Layers, 
  Zap,
  Network, 
  Eye 
} from 'lucide-react';

export const WhyUs = () => {
  const pilares = [
    {
      icon: <ShieldCheck className="w-5 h-5 stroke-[1.25]" />,
      title: "Bloque 1 — Especialización privada, no orientación general",
      text: "Las cámaras de comercio, los organismos públicos y las agencias gubernamentales de promoción cumplen un rol valioso en el ecosistema de internacionalización. Sin embargo, su mandato es amplio y su capacidad de ejecución es limitada: atienden a cientos de empresas simultáneamente, con recursos institucionales acotados y procesos estandarizados.\n\nWeProm Europe es una firma privada especializada. Cada proyecto recibe atención dedicada, estrategia personalizada y un equipo comprometido con resultados concretos — no con estadísticas de atención."
    },
    {
      icon: <SearchCode className="w-5 h-5 stroke-[1.25]" />,
      title: "Bloque 2 — Investigación de mercados con profundidad real",
      text: "La mayoría de los estudios de mercado que ofrecen organismos públicos son exploratorios: útiles como punto de partida, pero insuficientes para tomar decisiones de inversión o entrada a un nuevo mercado con seguridad.\n\nNosotros realizamos investigación de mercado con la profundidad que una decisión empresarial real requiere: análisis competitivo, validación de demanda, mapeo de canales, identificación de barreras de entrada y estrategia de posicionamiento. No te decimos si el mercado existe — te decimos cómo entrar y ganar en él."
    },
    {
      icon: <Layers className="w-5 h-5 stroke-[1.25]" />,
      title: "Bloque 3 — Ciclo completo, un solo equipo",
      text: "Internacionalizar una empresa requiere investigación, estrategia, creación de marca, desarrollo comercial, relaciones institucionales y posicionamiento. La mayoría de las empresas terminan coordinando múltiples proveedores para cada etapa, perdiendo tiempo, coherencia y dinero.\n\nWeProm Europe acompaña todo el ciclo desde un solo punto de contacto. Desde el diagnóstico inicial hasta la operación en el nuevo mercado — sin que tengas que empezar de cero con cada proveedor."
    },
    {
      icon: <Zap className="w-5 h-5 stroke-[1.25]" />,
      title: "Bloque 4 — Agilidad, discreción y compromiso privado",
      text: "Trabajar con una firma privada tiene ventajas concretas que pocas empresas verbalizan pero todas valoran:\n\n• Agilidad — Sin comités de aprobación, sin procesos burocráticos, sin tiempos institucionales. Tomamos decisiones rápido y ejecutamos con la misma velocidad.\n• Discreción — Tu estrategia de entrada, tus planes de expansión y tu información comercial se quedan entre nosotros. Sin registros públicos, sin expedientes institucionales, sin exposición innecesaria.\n• Compromiso real — No cobramos participaciones ni porcentajes sobre tu negocio. Nuestro modelo es de honorarios profesionales: nuestro incentivo es que tu proyecto funcione, no que te hagamos dependiente de nosotros."
    },
    {
      icon: <Network className="w-5 h-5 stroke-[1.25]" />,
      title: "Bloque 5 — Una red, no un directorio",
      text: "Muchos organismos te ofrecen acceso a una base de datos de contactos. Nosotros te ofrecemos relaciones activas, construidas a lo largo de más de 35 años de operación en Europa, América Latina y Norteamérica.\n\nLa diferencia es simple: un directorio te da un nombre. Una red te abre una puerta."
    },
    {
      icon: <Eye className="w-5 h-5 stroke-[1.25]" />,
      title: "Bloque 6 — Experiencia que viene de adentro del sistema",
      text: "Nuestro equipo incluye profesionales que han trabajado dentro de los organismos públicos de promoción internacional — conocemos sus procesos, sus limitaciones y sus alcances reales. Esa experiencia nos permite ofrecerte lo que ellos no pueden: ejecución privada con visión institucional."
    }
  ];

  return (
    <section className="relative bg-transparent py-24 md:py-32 px-6 md:px-16 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* CABECERA PRINCIPAL */}
        <div className="max-w-4xl mb-20 reveal">
          <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4">
            Por qué nosotros
          </p>
          <h2 className="text-slate-900 font-montserrat text-3xl md:text-[45px] font-semibold uppercase leading-tight tracking-wide mb-8">
            Somos el puente estratégico entre Europa y América Latina.
          </h2>
          <p className="text-black font-montserrat text-base md:text-lg font-light leading-relaxed tracking-wide">
            Hay agencias para servicios puntuales, asesores para tareas específicas y firmas consultoras para proyectos ambiciosos. <strong className="font-medium text-slate-900">Nosotros operamos en un espacio distinto:</strong> somos un <strong className="font-medium text-slate-900">socio estratégico bilateral</strong> que promueve negocios, inversión y posicionamiento comercial entre Europa y América Latina, acompañando a cada cliente desde el primer estudio de oportunidad hasta la operación local consolidada.
          </p>
        </div>

        {/* ESTRUCTURA DE REJILLA EDITORIAL */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 reveal mb-24">
          {pilares.map((pilar, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 md:p-10 border border-slate-200/60 shadow-sm flex flex-col justify-between group transition-all duration-300 hover:border-slate-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-9 h-9 bg-slate-50 border border-slate-200 text-[#2d61e0] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#2d61e0] group-hover:text-white group-hover:border-[#2d61e0]">
                    {pilar.icon}
                  </div>
                  
                </div>

                <h3 className="text-slate-900 font-montserrat text-base font-semibold uppercase tracking-wide mb-4 transition-colors duration-200 group-hover:text-[#2d61e0]">
                  {pilar.title.split(' — ')[1] || pilar.title}
                </h3>
                
                {/* Renderizado limpio respetando los saltos de línea del texto */}
                <p className="text-black font-montserrat text-xs md:text-base font-light leading-relaxed tracking-wide whitespace-pre-line">
                  {pilar.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MANIFIESTO CORPORATIVO DE CIERRE */}
        <div className="reveal bg-slate-900 text-white p-8 md:p-16 relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-[30%] h-full opacity-5 pointer-events-none select-none hidden md:block">
            <img src="/isotipo.png" alt="" className="w-full h-full object-contain object-right scale-125 grayscale invert" />
          </div>
          
          <div className="max-w-3xl relative z-10">
            <h4 className="text-[#2d61e0] font-montserrat font-bold tracking-[0.3em] uppercase text-[11px] mb-6">
              Declaración Institucional
            </h4>
            <p className="font-montserrat text-lg md:text-2xl font-light leading-relaxed tracking-wide mb-8 text-slate-100">
              "WeProm Europe no es una opción más en el mercado de la internacionalización. Es la opción para quienes entienden que entrar a un nuevo mercado sin el socio correcto no es una apuesta — <strong className="font-medium text-white border-b border-[#2d61e0] pb-1">es un riesgo evitable.</strong>"
            </p>
            <p className="text-slate-300 font-montserrat text-xs md:text-sm font-light tracking-wide uppercase">
              Trabajamos con empresas que toman decisiones serias. <span className="text-[#2d61e0] font-medium">//</span> Y nos comprometemos con sus resultados de la misma manera.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
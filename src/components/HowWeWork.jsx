import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico de entrada al mercado",
    subtitle: "Clarificamos la oportunidad antes de tomar decisiones.",
    description:
      "Investigación de mercado, estudios de factibilidad, benchmarking, conocimiento de la audiencia, panorama competitivo, actores clave y mapeo de oportunidades.",
  },
  {
    number: "02",
    title: "Dirección estratégica",
    subtitle: "Definimos qué significa la oportunidad y hasta dónde puede llegar realmente.",
    description:
      "Estrategia de posicionamiento, propuesta de valor, priorización de mercados, reducción de riesgos y primeras decisiones estratégicas.",
  },
  {
    number: "03",
    title: "Ruta de entrada al mercado",
    subtitle: "Estructuramos el camino hacia el nuevo mercado.",
    description:
      "Estrategia comercial, plan financiero, esquemas de distribución, desarrollo de modelo de socios, acercamiento institucional, logística de exportación/entrada, requerimientos operativos y preparación local.",
  },
  {
    number: "04",
    title: "Mensaje y posicionamiento",
    subtitle: "Adaptamos la oferta y el contexto local.",
    description:
      "Narrativa de marca, argumentos de venta, estrategia de comunicación, materiales de pitch, presencia digital, comunicación corporativa y adaptación cultural.",
  },
  {
    number: "05",
    title: "Activación local",
    subtitle: "Hacemos la oportunidad visible, accesible y accionable.",
    description:
      "Contacto con socios, herramientas comerciales, comunicación y contenido, campañas, relaciones públicas, eventos, medios, redes sociales y ejecución de terreno.",
  },
  {
    number: "06",
    title: "Optimización y crecimiento",
    subtitle: "Consolidamos resultados sostenibles.",
    description:
      "Seguimiento, reporting, análisis de desempeño y escalamiento de la estrategia.",
  },
];

export const HowWeWork = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">

      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#2d61e0]/5 rounded-full blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(#dbe4f0_1px,transparent_1px)] [background-size:34px_34px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4">
            Cómo trabajamos
          </p>

          <h2 className="font-montserrat text-3xl md:text-5xl font-semibold leading-tight tracking-wide bg-gradient-to-r from-slate-950 via-slate-900 to-[#2d61e0] bg-clip-text text-transparent selective-gradient-animate drop-shadow-[0_2px_10px_rgba(45,97,224,0.03)]">
              Nuestro proceso de expansión internacional
            </h2>

          <p className="mt-8 text-black leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
            <b>Una forma estructurada de hacer avanzar oportunidades UE-LATAM, acompañados por expertos en cada paso. </b>
            La expansión internacional no es una sola acción. Es un proceso claro.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Línea Desktop */}
          {/* Línea Conectora Premium */}
            <div className="hidden lg:block absolute top-12 left-8 right-8 h-[1px] bg-gradient-to-r from-[#2d61e0]/10 via-[#2d61e0]/30 to-[#2d61e0]/10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.215, 0.610, 0.355, 1.000]
                }}
                className="group relative h-full flex flex-col"
              >
                {/* Nodo Indicador Superior (Desktop) */}
                <div className="hidden lg:flex absolute -top-[5px] left-8 z-20">
                  <div className="w-[10px] h-[10px] rounded-full bg-slate-200 group-hover:bg-[#2d61e0] group-hover:scale-125 transition-all duration-500 ring-4 ring-white" />
                </div>
            
                {/* Cuerpo de la Card Premium */}
                <div
                  className="
                    relative
                    flex-1
                    flex
                    flex-col
                    bg-white
                    border
                    border-slate-100
                    rounded-2xl
                    p-8
                    transition-all
                    duration-500
                    ease-out
                    hover:-translate-y-1.5
                    hover:border-[#2d61e0]/20
                    hover:shadow-[0_30px_70px_rgba(15,23,42,0.06)]
                  "
                >
                  {/* Glow de Fondo Interactivo Sutil */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#2d61e0]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            
                  {/* Fila Superior: Número Institucional y Decoración */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <span 
                      className="
                        font-montserrat
                        text-4xl
                        font-light
                        tracking-tight
                        text-[#2d61e0]/60
                        group-hover:text-[#2d61e0]/90
                        transition-colors
                        duration-500
                        
                        
                      "
                    >
                      {step.number}
                    </span>

                    {/* Badge Técnico de Etapa */}
                    <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 group-hover:border-[#2d61e0]/10 group-hover:bg-[#2d61e0]/5 group-hover:text-[#2d61e0] transition-all duration-500">
                      Fase {step.number}
                    </div>
                  </div>
            
                  {/* Contenido Principal */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="font-montserrat text-slate-900 font-medium text-xl leading-snug tracking-tight mb-3 group-hover:text-[#2d61e0] transition-colors duration-300">
                      {step.title}
                    </h3>
            
                    <p className="text-[#2d61e0]/90 text-xs font-medium tracking-wide leading-relaxed mb-4 uppercase">
                      {step.subtitle}
                    </p>
            
                    <p className="text-slate-950 text-sm leading-relaxed font-light mt-auto">
                      {step.description}
                    </p>
                  </div>
            
                  {/* Línea de Progreso Micro-interactiva en la Base */}
                  <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-slate-100/70 overflow-hidden">
                    <div
                      className="
                        h-full
                        w-0
                        group-hover:w-full
                        transition-all
                        duration-700
                        ease-out
                        bg-[#2d61e0]
                      "
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statement Institucional */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-24"
        >
          <div className="max-w-4xl mx-auto text-center">

            <h3 className="font-montserrat text-2xl md:text-3xl font-semibold text-slate-900">
              No forzamos cada proyecto por el mismo camino.
            </h3>

            <p className="mt-5 text-slate-800 leading-relaxed">
              Evaluamos las áreas de crecimiento de cada actor y
              construimos el siguiente paso para hacerlo avanzar
            </p>

            <a
              href="#contact"
              className="
              inline-flex
              items-center
              justify-center
              mt-10
              px-10
              py-4
              bg-slate-900
              text-white
              text-[11px]
              font-bold
              uppercase
              tracking-[0.3em]
              border
              border-slate-900
              transition-all
              duration-500
              hover:bg-[#2d61e0]
              hover:border-[#2d61e0]
              hover:shadow-[0_20px_40px_rgba(45,97,224,0.35)]
            "
            >
              Solicitar diagnóstico de entrada a mercado
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
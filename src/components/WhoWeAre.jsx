import React from 'react';

export const WhoWeAre = () => {


  // Configuración de las métricas clave del Grupo WeProm
  const metrics = [
    {
      value: "3",
      label: "hubs",
      icon: (
        <svg className="w-12 h-12 text-[#2d61e0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
        </svg>
      )
    },
    {
      value: "40+",
      label: "colaboradores",
      icon: (
        <svg className="w-12 h-12 text-[#2d61e0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      value: "50",
      label: "asesores asociados",
      icon: (
        <svg className="w-12 h-12 text-[#2d61e0]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    }
  ];


  // Configuración de los enlaces globales de WeProm extendida
  // Se integraron las ubicaciones de la imagen original para mantener fidelidad al diseño
  const regions = [
    {
      name: "WeProm LATAM",
      label: "América Latina",
      location: "GUADALAJARA, MÉXICO",
      url: "https://grupoweprom.com",
      desc: "Estrategia e infraestructura de mercado regional.",
      delay: "0" // Para animaciones de entrada en secuencia si usas el reveal
    },
    {
      name: "WeProm Europe",
      label: "Sede Europea",
      location: "PARÍS, FRANCIA",
      url: "#",
      desc: "Inteligencia transatlántica y desarrollo bilateral.",
      delay: "100"
    },
    {
      name: "WeProm North America",
      label: "Estados Unidos",
      location: "AUSTIN, TEXAS",
      url: "https://weprom.us",
      desc: "Conexión comercial con el mercado norteamericano.",
      delay: "200"
    }
  ];

  return (
    <section className="bg-white border-t border-slate-100 overflow-hidden min-h-screen flex items-center justify-center py-24 px-6 md:px-16 lg:px-24 relative">
      
      {/* Sutil textura geométrica de fondo para mantener el nivel UI/UX Premium */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none select-none z-0" />
      
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* --- ENCABEZADO DE SECCIÓN CENTRADO --- */}
        <div className="mb-12 flex flex-col items-center">
          <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4">
            Quiénes somos
          </p>
          <h2 className="text-slate-900 font-montserrat text-2xl md:text-3xl lg:text-[40px] font-semibold leading-tight tracking-wide max-w-3xl" style={{ textWrap: 'balance' }}>
            Tres generaciones desarrollando negocios alrededor del mundo.
          </h2>
          <div className="w-16 h-[2px] bg-[#2d61e0] mt-8"></div>
        </div>

        {/* --- CUERPO PRINCIPAL --- */}
        <div className="space-y-6 text-slate-900 font-montserrat text-sm md:text-base font-normal leading-relaxed tracking-wide mb-20 max-w-4xl text-justify md:text-center">
          <p>
            WeProm Europe es la sede europea de <strong className="font-semibold text-slate-900">Grupo WeProm</strong>, una firma internacional con más de 35 años de experiencia, tres generaciones y más de 10,000 proyectos ejecutados para empresas globales, gobiernos e instituciones en Europa, América Latina, Norteamérica y Asia.
          </p>
          <p>
            Operamos desde Francia, México y Estados Unidos, en tres de las regiones que más oportunidades generan hoy. Cada cliente accede, a través nuestro, a la infraestructura, la red y la capacidad operativa acumulada por nuestro Grupo a lo largo de más de tres décadas.
          </p>
          <p>
            Conectamos empresas, gobiernos e instituciones mediante inteligencia de negocios, estrategia, marketing y comunicación, creando alianzas sostenibles y resultados tangibles que impulsan el crecimiento económico entre ambos continentes.
          </p>
        </div>

        {/* --- REPLICA DIAGRAMA DE NODOS (ÁRBOL ESTRUCTURAL) --- */}
        <div className="w-full relative flex flex-col items-center mb-24">

          <h1 className="font-montserrat font-semibold text-3xl md:text-4xl text-slate-900 tracking-tight">
              Un grupo integrado. Tres hubs conectados.
          </h1>

          <div className="w-22 h-[2px] bg-[#2d61e0] my-4"></div>
          <h2 className="font-montserrat font-semibold text-2xl md:text-3xl text-slate-900 tracking-tight">
              Grupo WeProm
          </h2>

          <p className='text-black font-montserrat font-normal text-xs md:text-base my-4'>
            Infraestructura operativa internacional con capacidades compartidas y ejecución coordinada entre regiones.
          </p>

          {/* Fila Horizontal de 3 Métricas de Alto Rendimiento */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl mb-6 relative z-20">
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl p-5 md:p-6 flex items-center gap-5 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 hover:border-slate-300/80 group"
              >
                {/* Contenedor del Icono */}
                <div className="w-12 h-12 rounded-xl bg-[#2d61e0]/5 flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                  {metric.icon}
                </div>
                
                {/* Bloque Numérico Editorial */}
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
          <div className="relative z-20 bg-white border border-slate-200 rounded-2xl px-10 py-5 shadow-lg shadow-slate-200/50 flex flex-col items-center mb-8 md:mb-0">
            <h3 className="font-montserrat font-bold text-xl md:text-2xl text-slate-900 tracking-tight">
              Grupo WeProm
            </h3>
            <span className="text-[#2d61e0] font-montserrat text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mt-1.5">
              Un solo grupo integrado
            </span>
          </div>

          {/* Sistema de Líneas Conectoras (Solo visible en Desktop/Tablet) */}
          <div className="hidden md:block absolute top-[400px] w-[66.66%] h-[60px] z-10">
            {/* Línea Vertical Central (Baja del Nodo Raíz) */}
            <div className="absolute top-0 left-1/2 w-[2px] h-[30px] bg-[#2d61e0] -translate-x-1/2"></div>
            
            {/* Línea Horizontal (Espina Dorsal) */}
            <div className="absolute top-[30px] left-0 w-full h-[2px] bg-[#2d61e0]"></div>
            
            {/* Nodos/Puntos de conexión en la línea horizontal */}
            <div className="absolute top-[30px] left-0 w-2.5 h-2.5 rounded-full bg-[#2d61e0] -translate-y-1/2 -translate-x-1/2 shadow-[0_0_8px_#2d61e0]"></div>
            <div className="absolute top-[30px] left-1/2 w-2.5 h-2.5 rounded-full bg-[#2d61e0] -translate-y-1/2 -translate-x-1/2 shadow-[0_0_8px_#2d61e0]"></div>
            <div className="absolute top-[30px] right-0 w-2.5 h-2.5 rounded-full bg-[#2d61e0] -translate-y-1/2 translate-x-1/2 shadow-[0_0_8px_#2d61e0]"></div>

            {/* Líneas Verticales que bajan a las tarjetas */}
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
                {/* Icono Superior */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#2d61e0]/10 flex items-center justify-center text-[#2d61e0] group-hover:bg-[#2d61e0] group-hover:text-white transition-colors duration-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Título Principal */}
                <h4 className="text-slate-900 font-montserrat text-lg font-bold tracking-tight mb-4 group-hover:text-[#2d61e0] transition-colors duration-300">
                  {region.name}
                </h4>

                {/* Bloque interno de información (Replica el efecto interactivo de LATAM Dark) */}
                <div className="flex-grow flex flex-col bg-slate-50 border border-slate-100 rounded-xl p-5 text-left transition-all duration-500 group-hover:bg-slate-900 group-hover:border-slate-800 relative overflow-hidden">
                  
                  {/* Etiqueta de Ubicación */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d61e0] group-hover:bg-[#3b82f6]"></span>
                    <span className="font-montserrat font-bold text-[9px] tracking-[0.25em] text-[#2d61e0] group-hover:text-[#60a5fa] uppercase transition-colors duration-300">
                      {region.location}
                    </span>
                  </div>

                  {/* Descripción de la Región */}
                  <p className="text-slate-600 font-sans text-[13px] leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    <strong className="text-slate-900 font-semibold group-hover:text-white block mb-1">
                      {region.label}
                    </strong>
                    {region.desc}
                  </p>

                  {/* Flecha de acción (Aparece en hover) */}
                  <div className="absolute bottom-4 right-4 opacity-0 transform translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                    <span className="text-white text-lg">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* --- CITA DESTACADA EDITORIAL CENTRADA --- */}
        <blockquote className="border-t border-b border-slate-200/70 py-10 w-full max-w-2xl relative px-4 mt-8">
          <span className="absolute top-2 left-1/2 -translate-x-1/2 font-serif text-7xl text-slate-100 select-none pointer-events-none z-0">
            “
          </span>
          <p className="text-slate-800 font-montserrat text-sm md:text-[15px] font-medium italic leading-relaxed tracking-wide mb-6 relative z-10" style={{ textWrap: 'balance' }}>
            “Conectamos culturas y economías con el propósito de generar un impacto positivo que trascienda fronteras, creando un legado de progreso, colaboración y prosperidad compartida entre ambos continentes.”
          </p>
          <footer className="author relative z-10">
            <cite className="not-italic block font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-[#2d61e0]">
              — José Miguel Ventura Michel
            </cite>
            <span className="block font-montserrat text-[10px] uppercase tracking-[0.15em] text-slate-500 mt-1.5">
              Director General, WeProm Europe
            </span>
          </footer>
        </blockquote>

      </div>
    </section>
  );
};
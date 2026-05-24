import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Mapeo completo de las nuevas secciones solicitadas por el cliente
  const menuItems = [
    { name: 'El momento', id: 'el-momento' },
    { name: 'Servicios', id: 'capabilities' }, // Anclado a tu ID actual
    { name: 'Sectores', id: 'sectores' },
    { name: 'Equipo', id: 'equipo' },
    { name: 'Trayectoria', id: 'trayectoria' },
    { name: 'Insights', id: 'insights' },     // Anclado a tu ID actual
    { name: 'Contacto', id: 'contact' },      // Anclado a tu ID actual
  ];

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false); // Cierra el menú lateral si está abierto

    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(`/#${targetId === 'top' ? '' : targetId}`);
      if (targetId === 'top') window.scrollTo(0, 0);
    }
  };

  const isBlogPage = location.pathname.startsWith('/blog'); 
  const shouldShowWhiteNav = isScrolled || isBlogPage || isOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full px-6 md:px-10 flex justify-between items-center z-[100] transition-all duration-500 ${
      shouldShowWhiteNav ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>

      {/* BRANDING: Lado Izquierdo (Logo) */}
      <div 
        onClick={(e) => handleNavigation(e, 'top')}
        className="flex items-center gap-[5px] z-[110] group cursor-pointer"
      >
        <div className="relative w-[230px] h-[75px] md:w-[280px] md:h-[100px] flex-shrink-0 max-[400px]:w-[190px] max-[400px]:h-[80px] max-[310px]:w-[160px]">
          {/* Logo Original (Blanco) */}
          <img 
            src="/LOGO1BLANCO.png" 
            alt="WeProm Icon" 
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
              shouldShowWhiteNav ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
            }`}
          />
          {/* Logo Scrolled (Azul) */}
          <img 
            src="/LOGO3AZUL.png" 
            alt="WeProm Icon Scrolled" 
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
              shouldShowWhiteNav ? 'opacity-100 scale-[0.92]' : 'opacity-0 scale-110'
            }`}
          />
        </div>
      </div>

      {/* CONTROLES: Lado Derecho (CTA + Toggle) */}
      <div className="flex items-center gap-4 md:gap-6 z-[110]">
        
        {/* CTA DISCRETO (Disponible en Desktop y Tablets medianas) */}
        <a
          href="#contact"
          onClick={(e) => handleNavigation(e, 'contact')}
          className={`hidden sm:inline-block text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] px-5 py-2.5 rounded-xs border transition-all duration-500 ${
            shouldShowWhiteNav
              ? 'border-[#2d61e0] text-[#2d61e0] hover:bg-[#2d61e0] hover:text-white'
              : 'border-white/40 text-white hover:bg-white hover:text-slate-900 hover:border-white'
          }`}
        >
          Solicitar conversación
        </a>

        {/* Botón Hamburger / Toggle unificado */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 p-2 focus:outline-none group"
          aria-label="Abrir menú"
        >
          <span className={`w-6 h-0.5 transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2 bg-[#2d61e0]' : (shouldShowWhiteNav ? 'bg-[#2d61e0]' : 'bg-white')
          }`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 ${
            isOpen ? 'opacity-0' : (shouldShowWhiteNav ? 'bg-[#2d61e0]' : 'bg-white')
          }`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2 bg-[#2d61e0]' : (shouldShowWhiteNav ? 'bg-[#2d61e0]' : 'bg-white')
          }`}></span>
        </button>
      </div>

      {/* MENU LATERAL OVERLAY (Premium Drawer Effect) */}
      <div 
        className={`fixed inset-y-0 right-0 h-screen bg-white shadow-2xl transition-all duration-700 ease-in-out flex flex-col justify-between p-10 md:p-16
        ${isOpen ? 'translate-x-0 opacity-100 w-full md:w-[480px]' : 'translate-x-full opacity-0 w-full md:w-[480px]'} 
        z-[105] overflow-y-auto`}
      >
        {/* Bloque superior de enlaces */}
        <div className="mt-20 flex flex-col gap-8">
          <p className="text-[#2d61e0] font-montserrat text-[9px] font-bold tracking-[0.4em] uppercase opacity-50 border-b border-slate-100 pb-2">
            Navegación Corporativa
          </p>
          <div className="flex flex-col gap-5 text-slate-900 font-montserrat font-bold text-sm md:text-base uppercase tracking-[0.35em]">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={`#${item.id}`} 
                onClick={(e) => handleNavigation(e, item.id)} 
                className="hover:text-[#2d61e0] transition-all transform hover:translate-x-2 duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        
        {/* Bloque inferior: Selectores de idioma e inclusión del CTA en Mobile */}
        <div className="flex flex-col gap-6 border-t border-slate-100 pt-6 mt-12">
          {/* CTA visible dentro del menú desplegable SOLO para pantallas móviles pequeñas */}
          <div className="sm:hidden w-full">
            <a
              href="#contact"
              onClick={(e) => handleNavigation(e, 'contact')}
              className="block text-center text-[10px] font-bold uppercase tracking-[0.2em] bg-[#2d61e0] text-white py-3 px-4 w-full"
            >
              Solicitar conversación
            </a>
          </div>

          <div>
            <p className="text-slate-400 font-bold text-[9px] tracking-[0.3em] uppercase mb-3">Idioma / Language</p>
            <div className="flex gap-5 text-slate-400 font-bold text-[11px] tracking-[0.35em] uppercase">
              <button className="text-[#2d61e0] font-black hover:opacity-100">ES</button>
              <span className="opacity-30">/</span>
              <button className="hover:text-[#2d61e0] transition-colors">FR</button>
              <span className="opacity-30">/</span>
              <button className="hover:text-[#2d61e0] transition-colors">EN</button>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};
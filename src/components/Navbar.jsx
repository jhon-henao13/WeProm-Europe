import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full py-4 px-8 md:px-12 flex justify-between items-center z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>

      {/* Branding - Contenedor del Logo */}
      {/* Branding */}
      <div className="flex items-center gap-[5px] z-[110] group cursor-pointer">
        
        {/* Contenedor relativo para los iconos con tamaño fijo responsivo */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
          {/* Icono Original (Blanco) */}
          <img 
            src="/icon.webp" 
            alt="WeProm Icon" 
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
              isScrolled || isOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
            }`}
          />
          
          {/* Icono de Scroll (Azul / icon2) */}
          <img 
            src="/icon2.jpeg" 
            alt="WeProm Icon Scrolled" 
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
              isScrolled || isOpen ? 'opacity-100 scale-[0.82]' : 'opacity-0 scale-110'
            }`}
          />
        </div>
      
        {/* Textos: Alineación ajustada con flex-col */}
        <div className={`flex flex-col font-montserrat transition-colors duration-500 ${
          isScrolled || isOpen ? 'text-[#2d61e0]' : 'text-white'
        }`}>
          <div className="flex flex-row">
            <span className="font-medium text-lg md:text-xl tracking-[0.3em] leading-none">WE</span> 
            <span className="font-light text-lg md:text-xl tracking-[0.3em] leading-none">PROM</span>
          </div>
          <span className="font-medium text-[14px] md:text-[14px] tracking-[0.5em] mt-1 opacity-70">EUROPE</span>
        </div>
      </div>



      {/* Desktop Menu */}
      <div className={`hidden md:flex items-center gap-7 text-[10px] font-bold uppercase tracking-[0.4em] transition-colors duration-500 ${isScrolled ? 'text-[#2d61e0]' : 'text-white'}`}>
        <a href="#" className="hover:opacity-50 transition-opacity">Insights</a>
        <span className="opacity-70 font-thin">|</span>
        <a href="#" className="hover:opacity-50 transition-opacity">Contact</a>
        <div className="flex gap-4 ml-16 items-center">
          <button className="opacity-90 font-black hover:opacity-100 transition-all">es</button>
          <span className="opacity-40">/</span>
          <button className="opacity-90 font-black hover:opacity-100 transition-all">fr</button>
        </div>
      </div>

      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-[110] flex flex-col gap-1.5 p-2"
      >
        <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2 bg-[#2d61e0]' : (isScrolled ? 'bg-[#2d61e0]' : 'bg-white')}`}></span>
        <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : (isScrolled ? 'bg-[#2d61e0]' : 'bg-white')}`}></span>
        <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2 bg-[#2d61e0]' : (isScrolled ? 'bg-[#2d61e0]' : 'bg-white')}`}></span>
      </button>

      {/* Mobile Overlay Menu */}
      <div className={`fixed inset-0 bg-white transition-all duration-700 ease-in-out z-[105] flex flex-col items-center justify-center gap-12 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col items-center gap-8 text-weprom-dark font-montserrat font-bold text-xs uppercase tracking-[0.6em]">
          <a href="#" onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-all">Insights</a>
          <a href="#" onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-all">Contact</a>
        </div>
        <div className="flex gap-6 text-weprom-dark/40 font-bold text-[10px] tracking-[0.4em] uppercase">
          <button className="hover:text-weprom-dark transition-colors">ES</button>
          <span>/</span>
          <button className="text-weprom-dark">FR</button>
        </div>
      </div>
    </nav>
  );
};
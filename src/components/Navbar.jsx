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
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      {/* Branding */}
      <div className="flex items-center gap-2 z-[110] group cursor-pointer">
        <img 
          src="/icon.png" 
          alt="WeProm Icon" 
          className={`w-12 h-12 object-contain transition-all duration-700 ${isScrolled || isOpen ? 'brightness-0' : ''}`} 
        />
        <div className={`flex flex-col font-montserrat transition-colors duration-500 ${isScrolled || isOpen ? 'text-weprom-dark' : 'text-white'}`}>
          <span className="font-bold text-xl tracking-[0.3em] leading-none">WEPROM</span>
          <span className="font-light text-[14px] tracking-[0.5em] mt-1 opacity-70">EUROPE</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className={`hidden md:flex items-center gap-7 text-[10px] font-bold uppercase tracking-[0.4em] transition-colors duration-500 ${isScrolled ? 'text-weprom-dark' : 'text-white'}`}>
        <a href="#" className="hover:opacity-50 transition-opacity">Insights</a>
        <span className="opacity-20 font-thin">|</span>
        <a href="#" className="hover:opacity-50 transition-opacity">Contact</a>
        <div className="flex gap-4 ml-16 items-center">
          <button className="opacity-50 hover:opacity-100 transition-all">es</button>
          <span className="opacity-20">/</span>
          <button className="font-black">fr</button>
        </div>
      </div>

      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-[110] flex flex-col gap-1.5 p-2"
      >
        <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2 bg-weprom-dark' : (isScrolled ? 'bg-weprom-dark' : 'bg-white')}`}></span>
        <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : (isScrolled ? 'bg-weprom-dark' : 'bg-white')}`}></span>
        <span className={`w-6 h-0.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2 bg-weprom-dark' : (isScrolled ? 'bg-weprom-dark' : 'bg-white')}`}></span>
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
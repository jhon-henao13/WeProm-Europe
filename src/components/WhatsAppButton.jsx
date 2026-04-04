// src/components/WhatsAppButton.jsx
import React from 'react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/525659165635"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Tooltip elegante que aparece al hacer hover */}
      <span className="absolute right-16 bg-slate-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Strategic Support
      </span>
      
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.124 1.379 4.76 1.38s10.395-5.233 10.398-10.397c.002-4.941-4.02-8.961-8.963-8.963-4.941 0-8.963 4.022-8.965 8.964-.001 1.76.512 3.477 1.482 4.965l-.989 3.611 3.708-.973zm11.758-6.505c-.29-.145-1.714-.848-1.98-.942-.266-.094-.459-.141-.652.145-.193.287-.749.942-.918 1.135-.169.192-.338.216-.628.071-.29-.145-1.226-.452-2.336-1.441-.863-.77-1.446-1.721-1.615-2.011-.169-.29-.018-.447.127-.591.131-.13.29-.338.435-.507.145-.169.193-.29.29-.483.097-.193.048-.361-.024-.507-.072-.145-.652-1.571-.894-2.152-.236-.564-.474-.487-.652-.496-.168-.008-.362-.01-.555-.01-.193 0-.507.072-.772.362-.266.289-1.014.991-1.014 2.415 0 1.424 1.038 2.801 1.183 3.002.145.2 2.043 3.12 4.947 4.373.691.298 1.231.476 1.652.61.694.221 1.325.19 1.825.115.556-.083 1.714-.699 1.956-1.374.241-.676.241-1.256.169-1.374-.073-.118-.266-.193-.556-.338z"/></svg>
    </a>
  );
};
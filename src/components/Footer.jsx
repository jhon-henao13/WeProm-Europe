import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-8 md:px-16 border-t border-slate-100">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
        
        {/* LADO IZQUIERDO: Branding & Info */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          <h2 className="text-xl font-bold tracking-[0.2em] uppercase text-blue-600">
            WeProm Europe
          </h2>
          <div className="text-[14px] font-bold text-black font-montserrat leading-relaxed tracking-wide uppercase ">
            <p>International Market Expansion & Business Development</p>
            <p>Between Europe and Latin America</p>
            <p className="mt-2 font-bold text-slate-700">France | México</p>
          </div>
          <p className="text-[11px] text-slate-400 tracking-widest uppercase pt-8">
            © 2026 WeProm Europe. All rights reserved.
          </p>
        </div>

        {/* CENTRO: Redes Sociales */}
        <div className="flex flex-row items-center justify-center gap-6 w-full md:w-1/3 ">
          {/* Facebook */}
          <a href="#" className="p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          {/* Instagram */}
          <a href="#" className="p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>

        {/* LADO DERECHO: Links & Whatsapp */}
        <div className="flex flex-col md:items-end space-y-6 w-full md:w-1/3">
          

          <a href="https://wa.me/525659165635" target="_blank" rel="noreferrer" 
             className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 w-fit shadow-lg shadow-green-200">
            <svg className="w-5 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.124 1.379 4.76 1.38s10.395-5.233 10.398-10.397c.002-4.941-4.02-8.961-8.963-8.963-4.941 0-8.963 4.022-8.965 8.964-.001 1.76.512 3.477 1.482 4.965l-.989 3.611 3.708-.973zm11.758-6.505c-.29-.145-1.714-.848-1.98-.942-.266-.094-.459-.141-.652.145-.193.287-.749.942-.918 1.135-.169.192-.338.216-.628.071-.29-.145-1.226-.452-2.336-1.441-.863-.77-1.446-1.721-1.615-2.011-.169-.29-.018-.447.127-.591.131-.13.29-.338.435-.507.145-.169.193-.29.29-.483.097-.193.048-.361-.024-.507-.072-.145-.652-1.571-.894-2.152-.236-.564-.474-.487-.652-.496-.168-.008-.362-.01-.555-.01-.193 0-.507.072-.772.362-.266.289-1.014.991-1.014 2.415 0 1.424 1.038 2.801 1.183 3.002.145.2 2.043 3.12 4.947 4.373.691.298 1.231.476 1.652.61.694.221 1.325.19 1.825.115.556-.083 1.714-.699 1.956-1.374.241-.676.241-1.256.169-1.374-.073-.118-.266-.193-.556-.338z"/></svg>
            
          </a>

          <div className="flex flex-wrap md:justify-end gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <span className="text-slate-200">|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy & Terms</a>
            <a href="#" className="hover:text-blue-600 transition-colors md:ml-4">Contact</a>
          </div>

        </div>

      </div>
    </footer>
  );
};
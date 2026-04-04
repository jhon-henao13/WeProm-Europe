import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-8 md:px-16 border-t border-slate-100">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
        
        {/* LADO IZQUIERDO: Branding & Info */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          <h2 className="text-2xl font-bold tracking-[0.1em] text-blue-600 mb-1">
            WeProm Europe
          </h2>
          <div className="text-[15px] font-bold text-black font-montserrat leading-relaxed tracking-wide max-w-full">
            <p>International Market Expansion & Business Development</p>
            <p>Between Europe and Latin America</p>
            <p className="mt-2 font-normal text-slate-700">France | México</p>
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
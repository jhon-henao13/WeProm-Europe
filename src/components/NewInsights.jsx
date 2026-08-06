// src/components/NewInsights.jsx
import React, { useEffect, useState } from 'react';
import { ArrowRight, FileText, Download, Calendar, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales';
import { client } from '../lib/sanity';
import { urlFor } from '../lib/imageUrl';

export const NewInsights = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // Obtener los 3 posts más recientes desde Sanity
    client.fetch(`
      *[_type == "post"] | order(publishedAt desc) [0...3] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        excerpt
      }
    `)
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar los artículos:', error);
        setLoading(false);
      });
  }, []);

  const handleDossierDownload = () => {
    const reportMap = {
      ES: '/monthlyReport/july2026ES.pdf',
      FR: '/monthlyReport/july2026FR.pdf',
      EN: '/monthlyReport/july2026EN.pdf',
    };
    const dossierUrl = reportMap[language] || reportMap.ES;
    window.open(dossierUrl, '_blank', 'noopener,noreferrer');
  };

  // Función para compartir en redes sociales
  const shareOnSocial = (platform, title, slug) => {
    const url = `${window.location.origin}/blog/${slug}`;
    const shareText = encodeURIComponent(title);
    let shareUrl = '';

    switch (platform) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  // Formatear fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString(language === 'ES' ? 'es-ES' : language === 'FR' ? 'fr-FR' : 'en-US', options);
  };

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-16 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* CABECERA EDITORIAL PREMIUM */}
        <div className="mb-16 md:mb-24">
          <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4 block">
            {t.insights.kicker}
          </p>
          <h2 className="text-slate-900 font-montserrat text-2xl md:text-4xl lg:text-[35px] font-semibold leading-tight max-w-4xl tracking-wide mb-6">
            {t.insights.title}
          </h2>
          <div className="w-16 h-[2px] bg-[#2d61e0] mb-6" />
          <p className="text-black font-montserrat text-sm md:text-base font-light leading-relaxed tracking-wide max-w-4xl">
            {t.insights.description}
          </p>
        </div>

        {/* GRID DE TRES TARJETAS DE ARTÍCULOS DESTACADOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {loading ? (
            // Estado de carga
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200/60 p-8 md:p-10 min-h-[340px] animate-pulse">
                <div className="w-full h-48 bg-slate-200 rounded-md mb-4"></div>
                <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2"></div>
              </div>
            ))
          ) : articles.length > 0 ? (
            articles.map((item, index) => (
              <div 
                key={item._id}
                className="bg-slate-50 border border-slate-200/60 p-8 md:p-[1.5rem] flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300 group min-h-[340px]"
              >
                <div>
                  {/* Imagen del artículo */}
                  <div className="w-full h-48 overflow-hidden rounded-md mb-4 bg-slate-100">
                    {item.mainImage ? (
                      <img 
                        src={urlFor(item.mainImage).width(800).height(400).url()} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 font-montserrat text-sm">
                        {t.insights.placeholder || 'Imagen institucional'}
                      </div>
                    )}
                  </div>

                  {/* Meta data de la tarjeta */}
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">
                    <span className="text-[#2d61e0]">{item.categories?.[0]?.title || 'Insights'}</span>
                    <span className="flex items-center gap-1 font-normal normal-case">
                      <Calendar className="w-3 h-3 text-slate-300" /> {formatDate(item.publishedAt)}
                    </span>
                  </div>

                  {/* Contenido principal */}
                  <h3 className="text-slate-900 font-montserrat text-base md:text-lg font-semibold tracking-wide leading-snug mb-4 group-hover:text-[#2d61e0] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-black font-montserrat text-xs md:text-sm font-light leading-relaxed tracking-wide mb-4 line-clamp-3">
                    {item.excerpt || t.insights.readMore || 'Lee más sobre este tema...'}
                  </p>
                </div>

                {/* Botones de acción */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <Link 
                    to={`/blog/${item.slug.current}`}
                    className="inline-flex items-center gap-2 text-slate-900 text-[11px] font-bold uppercase tracking-[0.2em] group-hover:text-[#2d61e0] transition-colors duration-300"
                  >
                    {t.insights.readMore || 'Leer artículo'}
                    <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  
                  {/* Botones de compartir */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => shareOnSocial('linkedin', item.title, item.slug.current)}
                      className="p-1.5 text-slate-400 hover:text-[#0A66C2] transition-colors duration-300 rounded-full hover:bg-slate-100"
                      aria-label="Compartir en LinkedIn"
                    >
                      <Linkedin size={14} />
                    </button>
                    <button
                      onClick={() => shareOnSocial('twitter', item.title, item.slug.current)}
                      className="p-1.5 text-slate-400 hover:text-black transition-colors duration-300 rounded-full hover:bg-slate-100"
                      aria-label="Compartir en X"
                    >
                      <Twitter size={14} />
                    </button>
                    <button
                      onClick={() => shareOnSocial('facebook', item.title, item.slug.current)}
                      className="p-1.5 text-slate-400 hover:text-[#1877F2] transition-colors duration-300 rounded-full hover:bg-slate-100"
                      aria-label="Compartir en Facebook"
                    >
                      <Facebook size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Mensaje cuando no hay artículos
            <div className="col-span-3 text-center py-12">
              <p className="text-slate-500 font-montserrat">No hay artículos disponibles.</p>
            </div>
          )}
        </div>

        {/* CONTENEDOR PRINCIPAL CTA BLOG */}
        <div className="text-center mb-18">
          <Link to="/blog" className="inline-block w-full sm:w-auto">
            <button className="group relative w-full sm:w-80 overflow-hidden bg-transparent border border-slate-900 text-slate-900 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:bg-slate-900 hover:text-white shadow-sm">
              <span className="relative z-10">
                {t.insights.cta}
              </span>
            </button>
          </Link>
        </div>

        {/* SECCIÓN ASIMÉTRICA: WEPROM DOSSIER */}
        <div className="bg-slate-900 text-white p-8 md:p-16 relative overflow-hidden border border-slate-800">
          {/* Isotipo de Fondo Translúcido */}
          <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-5 pointer-events-none select-none hidden md:block">
            <img src="/isotipo.png" alt="" className="w-full h-full object-contain object-right translate-x-[15%] translate-y-[15%]" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Texto Descriptivo */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 text-[#2d61e0] font-montserrat font-bold tracking-[0.3em] uppercase text-[11px]">
                <FileText className="w-4 h-4 stroke-[2]" />
                <span>{t.insights.dossier.label}</span>
              </div>
              <h4 className="text-white font-montserrat text-xl md:text-2xl font-medium tracking-wide">
                {t.insights.dossier.label}
              </h4>
              <p className="text-slate-200 font-montserrat text-xs md:text-sm font-light leading-relaxed tracking-wide max-w-2xl">
                {t.insights.dossier.description}
              </p>
            </div>

            {/* Acción Corporativa de Descarga */}
            <div className="lg:col-span-5 flex lg:justify-end w-full">
              <button 
                onClick={handleDossierDownload}
                className="group relative w-full lg:w-72 overflow-hidden bg-[#2d61e0] border border-[#2d61e0] text-white px-8 py-5 text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-500 hover:bg-transparent hover:text-white hover:border-white flex items-center justify-center gap-3 shadow-lg"
              >
                <Download className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>{t.insights.dossier.cta}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../lib/sanity'; // Importamos el cliente
import { urlFor } from '../lib/imageUrl'; // Importamos las imágenes

export const Insights = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Pedimos los últimos 3 posts ordenados por fecha
    client.fetch(`*[_type == "post"] | order(publishedAt desc) [0...3] { 
        id, 
        title, 
        slug, 
        mainImage 
      }`)
      .then((data) => setArticles(data))
      .catch(console.error);
  }, []);

  return (
    <section className="relative bg-white py-22 px-8 md:px-16 overflow-hidden border-b border-slate-50">
      <div className="max-w-full mx-auto">
        
        {/* CABECERA DE SECCIÓN */}
        <div className="mb-20">
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-[2.9rem] font-bold mb-6 text-weprom-dark tracking-[0.1em] uppercase border-l-4 border-blue-600 pl-6">
              Insights
            </h3>
            <h2 className="text-black font-montserrat leading-tight text-[1.2rem] md:text-[1.5rem] font-bold max-w-4xl mt-10 ml-3">
              Strategic perspectives on markets, expansion and international dynamics.
            </h2>
            <p className="text-black font-montserrat text-xl font-normal max-w-full mt-6 ml-3 leading-relaxed">
              WeProm Europe regularly explores topics related to international business, market intelligence, 
              territorial positioning and cross-border strategy.
            </p>
          </div>
        </div>

        {/* GRID DE ARTÍCULOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[10rem] mb-20 ml-0 md:ml-14">
          {articles.map((article, index) => (
            /* Envolvemos en Link para que cada card lleve al post real */
            <Link 
              to={`/blog/${article.slug.current}`}
              key={article.slug.current} 
              className="reveal group cursor-pointer block"
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-slate-100 border border-slate-50">
                {article.mainImage ? (
                  <img 
                    src={urlFor(article.mainImage).width(800).url()} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 font-montserrat italic bg-slate-50">
                    Institutional Image
                  </div>
                )}
                <div className="absolute inset-0 bg-weprom-dark/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <h4 className="text-black font-montserrat font-bold text-lg leading-snug tracking-wide group-hover:text-blue-600 transition-colors duration-500 uppercase">
                {article.title}
              </h4>
              
              <div className="w-8 h-[2px] bg-blue-600 mt-4 group-hover:w-full transition-all duration-700"></div>
            </Link>
          ))}
        </div>

        {/* BOTÓN CTA */}
        <div className="reveal md:ml-14 text-center" style={{ transitionDelay: '0.6s' }}>
          <Link to="/blog" className="inline-block w-full max-w-[25pc]">
            <button className="group relative w-full overflow-hidden bg-transparent border-2 border-blue-500/50 backdrop-blur-[4px] text-blue-600 px-4 py-5 text-[12px] md:text-[14px] font-extrabold uppercase tracking-[0.2em] md:tracking-[0.4em] rounded-full transition-all duration-700 ease-out shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:border-blue-600 hover:text-blue-700 hover:shadow-[0_10px_25px_rgba(59,130,246,0.2),inset_0_0_15px_rgba(59,130,246,0.2)] hover:scale-105 active:scale-95">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></span>
              <span className="relative z-10 transition-transform duration-500 group-hover:tracking-[0.5em]">
                Access Our Insights
              </span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};
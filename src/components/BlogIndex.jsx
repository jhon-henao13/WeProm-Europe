import React, { useEffect, useState } from 'react';
import { client } from '../lib/sanity';
import { Link } from 'react-router-dom';
import { urlFor } from '../lib/imageUrl';

export const BlogIndex = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type == "post"] | order(publishedAt desc) { title, slug, mainImage, publishedAt }`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="pt-40 pb-32 px-8 md:px-16 max-w-full mx-auto bg-white min-h-screen">
      {/* Cabecera idéntica a Insights.jsx */}
      <div className="mb-20">
        <div className="reveal active"> {/* 'active' asegura visibilidad inmediata */}
          <h3 className="text-[1.7rem] md:text-[2rem] font-bold mb-6 text-weprom-dark tracking-[0.1em] uppercase border-l-4 border-blue-600 pl-6">
            Insights & Strategy
          </h3>
          <h2 className="text-black font-montserrat leading-tight text-[1.2rem] md:text-[1.3rem] font-bold max-w-4xl mt-4 ml-0">
            Strategic perspectives on markets, expansion and international dynamics.
          </h2>
        </div>
      </div>
      
      {/* Grid con espaciado profesional */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 md:ml-3">
        {posts.map((post, index) => (
          <Link 
            to={`/blog/${post.slug.current}`} 
            key={post.slug.current} 
            className="group block reveal active"
            style={{ transitionDelay: `${0.1 * index}s` }}
          >
            {/* Contenedor de Imagen con Efecto Insights */}
            <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-slate-100 border border-slate-50 shadow-sm">
              {post.mainImage ? (
                <img 
                  src={urlFor(post.mainImage).width(800).url()} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 font-montserrat italic">
                  Institutional Image
                </div>
              )}
              <div className="absolute inset-0 bg-weprom-dark/5 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Textos */}
            <div className="space-y-4">
              <p className="text-[0.7rem] font-bold text-blue-600 uppercase tracking-[0.3em]">
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
              <h3 className="text-xl font-bold text-black tracking-tight group-hover:text-blue-600 transition-colors duration-500 leading-tight uppercase font-montserrat">
                {post.title}
              </h3>
              {/* Línea decorativa que se expande */}
              <div className="w-8 h-[2px] bg-blue-600 mt-4 group-hover:w-full transition-all duration-700"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
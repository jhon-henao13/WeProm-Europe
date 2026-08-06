import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client } from '../lib/sanity';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../lib/imageUrl';
import { Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';

export const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);


  const shareOnSocial = (platform) => {
    const url = window.location.href;
    const text = post ? `"${post.title}" - WeProm Europe` : 'WeProm Europe';
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => alert('Enlace copiado al portapapeles'));
        return;
      default:
        return;
    }
    if (shareUrl) window.open(shareUrl, '_blank');
  };


  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  if (!post) return <div className="pt-40 text-center font-montserrat tracking-widest text-slate-400">LOADING INSIGHTS...</div>;
  

  return (
    <article className="pt-48 pb-32 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-8 md:px-16">
        {/* Botón Volver estilizado */}
        <Link to="/blog" className="group inline-flex items-center text-blue-600 text-[0.7rem] font-bold uppercase tracking-[0.4em] mb-16 transition-all">
          <span className="transform transition-transform group-hover:-translate-x-2 mr-2">←</span> 
          Back to Insights
        </Link>

        <header className="mb-20">
          <div className="reveal active">
            <p className="text-blue-600 font-bold text-[0.8rem] uppercase tracking-[0.4em] mb-6">
              Perspective • {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-black leading-[1.1] mb-12 uppercase tracking-tight border-l-8 border-blue-600 pl-6 md:pl-10 font-montserrat">
              {post.title}
            </h1>
          </div>
          
          {post.mainImage && (
            <div className="w-full aspect-video md:h-[550px] overflow-hidden border border-slate-100 shadow-2xl reveal active">
              <img 
                src={urlFor(post.mainImage).url()} 
                className="w-full h-full object-cover" 
                alt={post.title} 
              />
            </div>
          )}
        </header>

        {/* Cuerpo del texto con tipografía de la AboutSection */}
        <div className="font-montserrat text-[1.1rem] md:text-[1.2rem] leading-relaxed text-slate-800 space-y-8 max-w-4xl reveal active">
          <PortableText 
            value={post.body} 
            components={{
              block: {
                h2: ({children}) => (
                  <h2 className="text-2xl font-bold text-weprom-dark uppercase tracking-widest border-l-4 border-blue-600 pl-4 mt-16 mb-8 pt-4">
                    {children}
                  </h2>
                ),
                normal: ({children}) => <p className="mb-6 font-light tracking-wide">{children}</p>,
              },
              list: {
                bullet: ({children}) => <ul className="list-disc pl-6 space-y-4 mb-8 text-blue-600"><span className="text-slate-800">{children}</span></ul>,
              }
            }}
          />
        </div>


        {/* Botones de compartir en redes sociales */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-slate-400 text-xs uppercase tracking-widest mb-4">Compartir</p>
          <div className="flex gap-4">
            <button onClick={() => shareOnSocial('facebook')} className="text-slate-500 hover:text-[#1877f2] transition-colors" aria-label="Compartir en Facebook">
              <Facebook size={20} />
            </button>
            <button onClick={() => shareOnSocial('twitter')} className="text-slate-500 hover:text-[#000] transition-colors" aria-label="Compartir en Twitter">
              <Twitter size={20} />
            </button>
            <button onClick={() => shareOnSocial('linkedin')} className="text-slate-500 hover:text-[#0a66c2] transition-colors" aria-label="Compartir en LinkedIn">
              <Linkedin size={20} />
            </button>
            <button onClick={() => shareOnSocial('copy')} className="text-slate-500 hover:text-[#2d61e0] transition-colors" aria-label="Copiar enlace">
              <LinkIcon size={20} />
            </button>
          </div>
        </div>

        
        {/* Footer del post para cerrar con elegancia */}
        <div className="mt-24 pt-12 border-t border-slate-100">
           <p className="text-slate-400 text-xs uppercase tracking-widest italic">
             © 2026 WeProm Europe Strategic Intelligence
           </p>
        </div>
      </div>
    </article>
  );
};
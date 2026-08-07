import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client } from '../lib/sanity';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../lib/imageUrl';
import { Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../locales';

export const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setError(false);
    
    client.fetch(`
      *[_type == "post" && slug.current == $slug][0] {
        title,
        slug,
        mainImage,
        publishedAt,
        body,
        categories[]->{title}
      }
    `, { slug })
      .then((data) => {
        if (data) {
          setPost(data);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar el post:', err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

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
        navigator.clipboard.writeText(url).then(() => {
          // Usar toast o alert más elegante (opcional)
          alert(t.insights?.copyLink || 'Enlace copiado al portapapeles');
        });
        return;
      default:
        return;
    }
    if (shareUrl) window.open(shareUrl, '_blank');
  };

  // Estado de carga
  if (loading) {
    return (
      <div className="pt-48 pb-32 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 rounded w-1/4 mb-8"></div>
            <div className="h-12 bg-slate-200 rounded w-3/4 mb-8"></div>
            <div className="aspect-video bg-slate-200 rounded-lg mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error o post no encontrado
  if (error || !post) {
    return (
      <div className="pt-48 pb-32 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-8 md:px-16 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            {t.insights?.postNotFound || 'Artículo no encontrado'}
          </h1>
          <p className="text-slate-600 mb-8">
            {t.insights?.postNotFoundDesc || 'Lo sentimos, el artículo que buscas no está disponible.'}
          </p>
          <Link to="/blog" className="text-blue-600 hover:underline font-bold">
            ← {t.insights?.backToBlog || 'Volver al blog'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-48 pb-32 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-8 md:px-16">
        <Link to="/blog" className="group inline-flex items-center text-blue-600 text-[0.7rem] font-bold uppercase tracking-[0.4em] mb-16 transition-all">
          <span className="transform transition-transform group-hover:-translate-x-2 mr-2">←</span> 
          {t.insights?.backToBlog || 'Back to Insights'}
        </Link>

        <header className="mb-20">
          <div className="reveal active">
            <p className="text-blue-600 font-bold text-[0.8rem] uppercase tracking-[0.4em] mb-6">
              {t.insights?.perspective || 'Perspective'} • {new Date(post.publishedAt).toLocaleDateString(
                language === 'ES' ? 'es-ES' : language === 'FR' ? 'fr-FR' : 'en-US',
                { month: 'long', day: 'numeric', year: 'numeric' }
              )}
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-black leading-[1.1] mb-12 uppercase tracking-tight border-l-8 border-blue-600 pl-6 md:pl-10 font-montserrat">
              {post.title}
            </h1>
          </div>
          
          {post.mainImage && (
            <div className="w-full aspect-video md:h-[550px] overflow-hidden border border-slate-100 shadow-2xl reveal active">
              <img 
                src={urlFor(post.mainImage).width(1200).quality(80).url()} 
                className="w-full h-full object-cover" 
                alt={post.title}
                loading="eager"
              />
            </div>
          )}
        </header>

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

        {/* Compartir */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-slate-400 text-xs uppercase tracking-widest mb-4">
            {t.insights?.share || 'Compartir'}
          </p>
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

        <div className="mt-24 pt-12 border-t border-slate-100">
          <p className="text-slate-400 text-xs uppercase tracking-widest italic">
            © 2026 WeProm Europe Strategic Intelligence
          </p>
        </div>
      </div>
    </article>
  );
};
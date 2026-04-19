import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client } from '../lib/sanity';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../lib/imageUrl';

export const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  if (!post) return <div className="pt-40 text-center font-montserrat tracking-widest text-slate-400">LOADING INSIGHTS...</div>;

  return (
    <article className="pt-40 pb-32 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-8 md:px-16">
        <Link to="/blog" className="inline-block text-blue-600 text-[0.7rem] font-bold uppercase tracking-[0.4em] mb-12 hover:pl-2 transition-all">
          ← Back to Insights
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-[1.1] mb-8 uppercase tracking-tight border-l-8 border-blue-600 pl-6 md:pl-10">
            {post.title}
          </h1>
          <p className="text-slate-500 font-montserrat text-sm uppercase tracking-[0.2em] mb-12">
            Published on {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          {post.mainImage && (
            <div className="w-full h-[500px] overflow-hidden border border-slate-100 shadow-xl">
              <img src={urlFor(post.mainImage).url()} className="w-full h-full object-cover" alt={post.title} />
            </div>
          )}
        </header>

        <div className="font-montserrat text-[1.15rem] leading-relaxed text-black space-y-8 max-w-4xl">
          <PortableText 
            value={post.body} 
            components={{
              block: {
                h2: ({children}) => <h2 className="text-2xl font-bold text-weprom-dark uppercase tracking-widest border-l-4 border-blue-600 pl-4 mt-12 mb-6">{children}</h2>,
                normal: ({children}) => <p className="mb-6">{children}</p>,
              },
              list: {
                bullet: ({children}) => <ul className="list-disc pl-6 space-y-4 mb-8">{children}</ul>,
              }
            }}
          />
        </div>
      </div>
    </article>
  );
};
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
      <div className="reveal mb-20">
        <h3 className="text-3xl lg:text-[3.2rem] font-bold text-weprom-dark tracking-[0.07em] uppercase border-l-4 border-blue-600 pl-4 lg:pl-6">
          Insights & Strategy
        </h3>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
        {posts.map((post) => (
          <Link to={`/blog/${post.slug.current}`} key={post.slug.current} className="group block reveal">
            <div className="overflow-hidden bg-slate-50 mb-8 h-72 relative border border-slate-100 shadow-sm">
              {post.mainImage ? (
                <img 
                  src={urlFor(post.mainImage).width(800).url()} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 font-montserrat italic">Institutional Image</div>
              )}
            </div>

            <div className="space-y-4">
              <p className="text-[0.75rem] font-bold text-blue-600 uppercase tracking-[0.3em]">
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
              <h3 className="text-xl font-bold text-black tracking-tight group-hover:text-blue-600 transition-colors duration-300 leading-tight uppercase">
                {post.title}
              </h3>
              <div className="w-12 h-[2px] bg-blue-600 transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
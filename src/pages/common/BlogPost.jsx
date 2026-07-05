import { useParams, Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  Bookmark,
  ChevronRight
} from 'lucide-react';
import { blogPosts, categoryLoaders } from '../../utils/blogData';
import Mermaid from '../../components/Mermaid';

export default function BlogPost() {
  const { slug } = useParams();
  const metadata = blogPosts.find(p => p.slug === slug);
  const articleRef = useRef(null);
  
  const [postContent, setPostContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPostContent() {
      if (!metadata) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const loader = categoryLoaders[metadata.category];
        if (loader) {
          const module = await loader();
          const foundPost = module.posts.find(p => p.slug === slug);
          if (foundPost) {
            if (isMounted) {
              setPostContent(foundPost.content);
            }
          } else {
            throw new Error(`Content not found in category file for: ${slug}`);
          }
        } else {
          throw new Error(`Category loader not found for category: ${metadata.category}`);
        }
      } catch (err) {
        console.error('Error loading dynamic post content:', err);
        if (isMounted) {
          setError(err.message || 'Failed to load post content.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPostContent();

    return () => {
      isMounted = false;
    };
  }, [slug, metadata]);

  useEffect(() => {
    if (!isLoading && postContent && articleRef.current) {
      gsap.fromTo(
        articleRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }
    window.scrollTo(0, 0);
  }, [slug, isLoading, postContent]);

  if (!metadata) {
    return (
      <div className="flex flex-col items-center justify-center py-40">
        <h2 className="text-4xl font-black text-slate-900 mb-6">Transmission Lost</h2>
        <p className="text-slate-500 font-medium mb-10">The requested article metadata could not be located in the archives.</p>
        <Link to="/blog" className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95">
          Return to Journal
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto pb-40 px-6 sm:px-0 pt-10">
        {/* Navigation Skeleton */}
        <div className="w-48 h-10 bg-slate-100 rounded-xl animate-pulse mb-16" />
        
        <div className="space-y-12 animate-pulse">
          {/* Header Skeleton */}
          <div className="space-y-6">
            <div className="w-24 h-6 bg-slate-200 rounded-full" />
            <div className="w-3/4 h-12 bg-slate-200 rounded-2xl" />
            <div className="flex gap-8">
              <div className="w-32 h-10 bg-slate-200 rounded-xl" />
              <div className="w-32 h-10 bg-slate-200 rounded-xl" />
              <div className="w-32 h-10 bg-slate-200 rounded-xl" />
            </div>
          </div>
          {/* Cover Skeleton */}
          <div className="w-full aspect-[16/9] bg-slate-200 rounded-[3rem]" />
          {/* Content Skeleton */}
          <div className="space-y-6 pt-10">
            <div className="w-full h-4 bg-slate-200 rounded" />
            <div className="w-5/6 h-4 bg-slate-200 rounded" />
            <div className="w-4/5 h-4 bg-slate-200 rounded" />
            <div className="w-full h-4 bg-slate-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !postContent) {
    return (
      <div className="flex flex-col items-center justify-center py-40">
        <h2 className="text-4xl font-black text-red-600 mb-6">Transmission Interrupted</h2>
        <p className="text-slate-500 font-medium mb-4">An error occurred while fetching the article payload.</p>
        <p className="text-slate-400 text-xs font-mono mb-10 max-w-md text-center">{error || 'Article content could not be resolved.'}</p>
        <Link to="/blog" className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95">
          Return to Journal
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-40 px-6 sm:px-0">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-16">
        <Link 
          to="/blog" 
          className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-accent transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-brand-accent transition-all group-hover:-translate-x-1 shadow-sm">
            <ArrowLeft size={16} />
          </div>
          Back to Journal
        </Link>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-accent hover:border-brand-accent transition-all shadow-sm">
             <Bookmark size={16} />
          </button>
          <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-accent hover:border-brand-accent transition-all shadow-sm">
             <Share2 size={16} />
          </button>
        </div>
      </div>

      <article ref={articleRef} className="space-y-12">
        {/* Header */}
        <header className="space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-brand-accent/5 text-brand-accent rounded-full text-[10px] font-black uppercase tracking-widest border border-brand-accent/10">
            {metadata.category}
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            {metadata.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                <User size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Author</p>
                <p className="text-sm font-bold text-slate-800">{metadata.author}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Published</p>
                <p className="text-sm font-bold text-slate-800">{metadata.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Duration</p>
                <p className="text-sm font-bold text-slate-800">{metadata.readTime}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-brand-accent/5 blur-3xl rounded-[4rem] group-hover:bg-brand-accent/10 transition-colors duration-1000 -z-10"></div>
          <img 
            src={metadata.coverImage} 
            alt={metadata.title} 
            className="w-full rounded-[3rem] border-8 border-white shadow-2xl"
          />
        </div>

        {/* Content Area */}
        <div className="blog-content glass-card-vibrant p-10 sm:p-20 shadow-xl shadow-slate-200">
          <div className="absolute inset-0 pattern-grid opacity-[0.03]"></div>
          <div className="relative z-10 prose prose-lg prose-slate max-w-none">
            {postContent.map((block, idx) => {
              if (block.type === 'paragraph') {
                return <p key={idx} className="whitespace-pre-line text-slate-600 font-medium leading-relaxed mb-6">{block.text}</p>;
              }
              if (block.type === 'heading') {
                const Tag = `h${block.level || 2}`;
                return <Tag key={idx} className="font-black text-slate-900 mt-10 mb-4">{block.text}</Tag>;
              }
              if (block.type === 'code') {
                return (
                  <div key={idx} className="relative group my-8">
                    <div className="absolute top-4 right-6 text-[10px] font-black text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">
                      {block.language}
                    </div>
                    <pre className="bg-slate-950 p-6 rounded-2xl overflow-x-auto text-slate-100 font-mono text-sm leading-relaxed">
                      <code>{block.code}</code>
                    </pre>
                  </div>
                );
              }
              if (block.type === 'image') {
                return (
                  <figure key={idx} className="my-16">
                    <img src={block.url} alt={block.caption} className="w-full rounded-2xl shadow-md" />
                    {block.caption && <figcaption className="text-center text-xs font-bold text-slate-400 mt-4 uppercase tracking-widest">{block.caption}</figcaption>}
                  </figure>
                );
              }
              if (block.type === 'mermaid') {
                return <Mermaid key={idx} chart={block.chart} />;
              }
              if (block.type === 'table') {
                return (
                  <div key={idx} className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      {block.headers && (
                        <thead className="bg-slate-50">
                          <tr>
                            {block.headers.map((h, i) => (
                              <th key={i} className="px-6 py-4 text-left text-xs font-black text-slate-500 uppercase tracking-widest">{h}</th>
                            ))}
                          </tr>
                        </thead>
                      )}
                      {block.rows && (
                        <tbody className="bg-white divide-y divide-slate-200">
                          {block.rows.map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                              {row.map((cell, j) => (
                                <td key={j} className="px-6 py-4 text-sm font-semibold text-slate-600">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      )}
                    </table>
                  </div>
                );
              }
              if (block.type === 'list') {
                const Tag = block.ordered ? 'ol' : 'ul';
                const listClass = block.ordered ? 'list-decimal pl-6 my-6 space-y-3' : 'list-disc pl-6 my-6 space-y-3';
                return (
                  <Tag key={idx} className={`${listClass} text-slate-600 font-medium`}>
                    {block.items.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </Tag>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Post Footer */}
        <footer className="pt-20 border-t border-slate-200 mt-20">
           <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
              <div className="space-y-4">
                <h4 className="text-xl font-black tracking-tight text-slate-900">Stay updated with core changes</h4>
                <p className="text-slate-500 font-medium max-w-sm">Receive detailed technical briefs and firmware release notes directly in your terminal.</p>
              </div>
              <div className="relative w-full max-w-sm">
                <input 
                  type="email" 
                  placeholder="operator@rex-47.io" 
                  className="w-full pl-5 pr-14 py-5 bg-white border border-slate-200 rounded-2xl text-[11px] font-black uppercase tracking-widest outline-none focus:ring-4 focus:ring-brand-accent/5 focus:border-brand-accent transition-all shadow-sm"
                />
                <button className="absolute right-2.5 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-brand-accent transition-all shadow-lg">
                  <ChevronRight size={20} />
                </button>
              </div>
           </div>
        </footer>
      </article>
    </div>
  );
}

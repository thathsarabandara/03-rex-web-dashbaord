import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop({ scrollContainerRef }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = 0;
      if (scrollContainerRef && scrollContainerRef.current) {
        scrollTop = scrollContainerRef.current.scrollTop;
      } else {
        scrollTop = window.scrollY;
      }
      setIsVisible(scrollTop > 300);
    };

    const container = scrollContainerRef && scrollContainerRef.current
      ? scrollContainerRef.current
      : window;

    container.addEventListener('scroll', handleScroll);
    // Trigger check on mount
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef]);

  const scrollToTop = () => {
    if (scrollContainerRef && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/85 backdrop-blur-lg border border-slate-200/60 text-slate-700 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-brand-accent/25 hover:border-brand-accent hover:text-brand-accent transition-all duration-500 transform active:scale-95 focus:outline-none group ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
    </button>
  );
}

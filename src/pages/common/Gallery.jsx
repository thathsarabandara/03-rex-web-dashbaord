import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Play } from 'lucide-react';

export default function Gallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.gallery-item');
          gsap.fromTo(
            elements,
            { opacity: 0, scale: 0.95, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
          );
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = [
    { type: 'image', title: 'Sensor Array Assembly', span: 'col-span-1 md:col-span-2 row-span-2' },
    { type: 'video', title: 'Kinematic Test 01', span: 'col-span-1 row-span-1' },
    { type: 'image', title: 'Compute Node', span: 'col-span-1 row-span-1' },
    { type: 'image', title: 'LIDAR Mapping', span: 'col-span-1 row-span-2' },
    { type: 'image', title: 'Chassis View', span: 'col-span-1 md:col-span-2 row-span-1' },
    { type: 'video', title: 'Object Detection', span: 'col-span-1 md:col-span-3 row-span-2' },
  ];

  return (
    <div className="pb-32 font-sans">
      <section className="pt-20 pb-16 text-center px-6">
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-slate-900 mb-6">
          Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">Archive</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Explore the hardware prototypes, test runs, and system visualizations of the REX-47 project.
        </p>
      </section>

      <section ref={containerRef} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`gallery-item ${item.span} glass-card-vibrant p-2 rounded-[32px] relative overflow-hidden group cursor-pointer`}
            >
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors z-10 rounded-[30px]"></div>
              
              {/* Image/Video Placeholder */}
              <div className="w-full h-full bg-slate-100 rounded-[24px] overflow-hidden relative">
                 <div className="absolute inset-0 pattern-dots opacity-50"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
                 
                 {item.type === 'video' && (
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white z-20 border border-white/40 group-hover:scale-110 transition-transform">
                     <Play size={24} className="ml-1" />
                   </div>
                 )}

                 <div className="absolute bottom-6 left-6 right-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1">
                      {item.type === 'video' ? 'Video Record' : 'Hardware Shot'}
                    </p>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

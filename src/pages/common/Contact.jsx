import { useRef, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('[data-animate]');
          gsap.fromTo(
            elements,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
          );
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-32 font-sans selection:bg-brand-accent/30" ref={containerRef}>
      <section className="pt-20 pb-16 text-center px-6 relative">
         <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[300px] bg-brand-accent/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        <h1 data-animate className="text-5xl sm:text-7xl font-black tracking-tight text-slate-900 mb-6">
          Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">Connection</span>
        </h1>
        <p data-animate className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Interested in the REX-47 platform? Reach out to our engineering team for deployments, partnerships, or technical inquiries.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12 lg:gap-24 items-start">
        
        {/* Contact Information */}
        <div data-animate className="lg:col-span-2 space-y-12 lg:pt-10">
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Direct Channels</h3>
            <div className="space-y-6">
               <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-[16px] flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                     <Mail size={20} />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Email</p>
                     <p className="font-bold text-slate-800">hello@rexsystems.io</p>
                     <p className="font-bold text-slate-800">support@rexsystems.io</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-[16px] flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                     <Phone size={20} />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Encrypted Line</p>
                     <p className="font-bold text-slate-800">+1 (555) 019-2834</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-[16px] flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                     <MapPin size={20} />
                  </div>
                  <div>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">HQ Command</p>
                     <p className="font-bold text-slate-800 max-w-[200px]">1010 Binary Way, Silicon Valley, CA 94025</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="p-8 bg-slate-900 rounded-[32px] relative overflow-hidden text-center sm:text-left">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 blur-[30px] rounded-full pointer-events-none"></div>
             <Sparkles size={24} className="text-brand-accent mb-4 mx-auto sm:mx-0" />
             <h4 className="text-white font-bold mb-2">Enterprise Deployment?</h4>
             <p className="text-sm text-slate-400 font-medium">We offer custom integration and on-premise deployments for industrial partners.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div data-animate className="lg:col-span-3 glass-card-vibrant p-8 sm:p-12 shadow-2xl">
           <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Commander Name</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all"
                      placeholder="John Doe"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Secure Email</label>
                    <input 
                      type="email" 
                      className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all"
                      placeholder="john@example.com"
                    />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Subject Classification</label>
                 <select className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-medium text-slate-800 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Enterprise Deployment</option>
                    <option>Security Report</option>
                 </select>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Message Payload</label>
                 <textarea 
                   rows={5}
                   className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all resize-none"
                   placeholder="Enter your message here..."
                 ></textarea>
              </div>
              
              <button 
                type="button" 
                className="w-full py-5 bg-slate-900 text-white font-bold rounded-[20px] hover:bg-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
              >
                Transmit Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
           </form>
        </div>

      </section>
    </div>
  );
}

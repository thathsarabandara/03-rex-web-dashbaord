import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  BrainCircuit,  
  ArrowRight,
  Eye,
  MessageSquare,
  Zap,
  Activity,
  Layers,
  Cpu,
  Fingerprint,
  ChevronRight,
  ShieldCheck,
  Video,
  Sparkles
} from 'lucide-react';
import gsap from 'gsap';

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const bentoRef = useRef(null);

  useEffect(() => {
    const heroElements = heroRef.current?.querySelectorAll('[data-hero-animate]');
    if (heroElements) {
      gsap.fromTo(
        heroElements,
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      );
    }

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

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (bentoRef.current) observer.observe(bentoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-40 pb-40 overflow-hidden font-sans selection:bg-brand-accent/30 relative">
      {/* Soft Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-24 pb-10 flex flex-col items-center text-center px-6"
      >
        <div data-hero-animate className="inline-flex items-center gap-3 px-5 py-2 rounded-[24px] bg-white border border-slate-100 shadow-md mb-8 hover:scale-105 transition-transform duration-300">
          <Sparkles size={16} className="text-brand-secondary" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">Next-Gen Agentic Intelligence</span>
        </div>

        <h1 data-hero-animate className="text-6xl sm:text-8xl font-black tracking-tight max-w-4xl leading-[1.1] text-slate-900">
          Meet <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-brand-secondary">REX-47</span>
        </h1>
        
        <p data-hero-animate className="mt-8 text-xl sm:text-2xl text-slate-500 max-w-2xl font-medium leading-relaxed">
          A truly autonomous robotic platform designed to think, perceive, and act with unprecedented fluidity and intelligence.
        </p>

        <div data-hero-animate className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link
            to="/login"
            className="px-10 py-4 bg-slate-900 text-white font-bold text-sm rounded-[24px] shadow-xl hover:bg-brand-accent hover:shadow-brand-accent/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
          >
            Launch Command Center
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/features"
            className="px-10 py-4 bg-white border-2 border-slate-100 text-slate-700 font-bold text-sm rounded-[24px] hover:bg-slate-50 hover:border-slate-200 transition-all duration-300 flex items-center justify-center gap-3"
          >
            Explore Capabilities
          </Link>
        </div>

        {/* Overlapped Hero Visual Mockup */}
        <div data-hero-animate className="mt-28 w-full max-w-6xl relative z-10 h-[400px] sm:h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/10 to-transparent blur-3xl -z-10 rounded-[3rem]" />
          
          {/* Main Center Dashboard */}
          <div className="absolute left-1/2 -translate-x-1/2 top-10 w-full max-w-3xl bg-white/90 backdrop-blur-xl border border-white rounded-[32px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] p-6 sm:p-8 hover:z-20 hover:-translate-y-4 transition-all duration-500">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 rounded-[12px] flex items-center justify-center text-white"><Activity size={20} /></div>
                  <div>
                     <h3 className="font-bold text-slate-900">System Telemetry</h3>
                     <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Live Feed</p>
                  </div>
               </div>
               <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-slate-200"></span>
                  <span className="w-3 h-3 rounded-full bg-slate-200"></span>
                  <span className="w-3 h-3 rounded-full bg-brand-accent animate-pulse"></span>
               </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
               {[
                 { label: 'CPU LOAD', val: '24%', color: 'text-brand-accent' },
                 { label: 'LATENCY', val: '0.2ms', color: 'text-brand-secondary' },
                 { label: 'BATTERY', val: '89%', color: 'text-emerald-500' }
               ].map((stat, i) => (
                 <div key={i} className="p-4 bg-slate-50 rounded-[20px] text-center border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-widest">{stat.label}</p>
                    <p className={`text-2xl font-black ${stat.color}`}>{stat.val}</p>
                 </div>
               ))}
            </div>
            
            <div className="h-32 bg-slate-50 rounded-[20px] border border-slate-100 relative overflow-hidden flex items-end px-4 pt-4">
               {/* Mock chart */}
               <div className="w-full h-2/3 flex items-end gap-2 opacity-50">
                  {[40, 70, 45, 90, 65, 80, 50, 100, 75, 60, 85].map((h, i) => (
                     <div key={i} className="flex-1 bg-gradient-to-t from-brand-accent to-brand-secondary rounded-t-md" style={{ height: `${h}%` }}></div>
                  ))}
               </div>
            </div>
          </div>

          {/* Left Overlapped Card (Vision) */}
          <div className="absolute left-4 top-40 w-64 bg-white/80 backdrop-blur-2xl border border-white rounded-[28px] shadow-2xl p-5 hidden lg:block hover:z-20 hover:-translate-y-4 hover:rotate-2 transition-all duration-500 -rotate-2">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-brand-secondary/10 rounded-xl text-brand-secondary"><Eye size={18} /></div>
               <span className="font-bold text-sm text-slate-700">Neural Vision</span>
             </div>
             <div className="aspect-video bg-slate-900 rounded-[16px] relative overflow-hidden border-4 border-slate-100">
                <div className="absolute inset-0 pattern-grid opacity-30"></div>
                <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-[8px] font-bold uppercase rounded flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span> REC
                </div>
                {/* Mock bounding boxes */}
                <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 border border-emerald-400 bg-emerald-400/10 rounded-lg">
                   <span className="absolute -top-5 left-0 text-[8px] bg-emerald-400 text-slate-900 px-1 font-bold">HUMAN 98%</span>
                </div>
             </div>
          </div>

          {/* Right Overlapped Card (Agent Chat) */}
          <div className="absolute right-4 top-20 w-72 bg-white/80 backdrop-blur-2xl border border-white rounded-[28px] shadow-2xl p-6 hidden lg:block hover:z-20 hover:-translate-y-4 hover:-rotate-2 transition-all duration-500 rotate-2">
             <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-brand-accent/10 rounded-xl text-brand-accent"><Bot size={18} /></div>
               <span className="font-bold text-sm text-slate-700">Agentic Runtime</span>
             </div>
             <div className="space-y-4">
               <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-slate-200 flex-shrink-0"></div>
                  <div className="bg-slate-100 p-3 rounded-[16px] rounded-tl-sm text-xs text-slate-600 font-medium">Navigate to the kitchen and find the cup.</div>
               </div>
               <div className="flex gap-3 flex-row-reverse">
                  <div className="w-6 h-6 rounded-full bg-brand-accent flex-shrink-0 flex items-center justify-center text-white"><Sparkles size={10} /></div>
                  <div className="bg-brand-accent/10 p-3 rounded-[16px] rounded-tr-sm text-xs text-slate-800 font-medium">Trajectory mapped. Navigating to coordinates (12, 45).</div>
               </div>
             </div>
          </div>

        </div>
      </section>

      {/* Bento Grid Features */}
      <section ref={bentoRef} className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 data-animate className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">Command the Complex</h2>
          <p data-animate className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            A modular dashboard giving you absolute visibility and control over every sub-system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Bento Item 1 - Large spanning */}
          <div data-animate className="md:col-span-2 glass-card-vibrant p-8 group hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 bg-white rounded-[16px] flex items-center justify-center text-brand-accent shadow-sm mb-6">
                 <BrainCircuit size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Sensor Fusion Engine</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Combines LIDAR, depth cameras, and IMU data into a seamless 3D spatial map, allowing REX-47 to understand its environment with millimeter precision.
              </p>
            </div>
            {/* Visual element */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-slate-900/5 rounded-tl-[100px] -z-0 transition-transform group-hover:scale-110 duration-700"></div>
            <Layers size={200} className="absolute -right-10 -bottom-10 text-slate-900/5 group-hover:text-brand-accent/10 transition-colors duration-700" />
          </div>

          {/* Bento Item 2 */}
          <div data-animate className="glass-card-vibrant p-8 group hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white rounded-[16px] flex items-center justify-center text-emerald-500 shadow-sm mb-6">
                 <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Zero-Trust Protocol</h3>
              <p className="text-sm text-slate-600 font-medium">Military-grade encryption for all teleoperation channels.</p>
            </div>
            <div className="w-full h-24 bg-white/50 rounded-2xl border border-white mt-6 flex items-center justify-center relative overflow-hidden">
               <Fingerprint size={48} className="text-emerald-500/20" />
               <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
            </div>
          </div>

          {/* Bento Item 3 */}
          <div data-animate className="glass-card-vibrant p-8 group hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white rounded-[16px] flex items-center justify-center text-brand-secondary shadow-sm mb-6">
                 <Cpu size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Edge Compute</h3>
              <p className="text-sm text-slate-600 font-medium">Local LLM inference runs directly on the robot hardware.</p>
            </div>
          </div>

          {/* Bento Item 4 - Wide */}
          <div data-animate className="md:col-span-2 glass-card-vibrant p-8 group hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10 flex flex-col h-full justify-between">
               <div>
                 <div className="w-12 h-12 bg-white rounded-[16px] flex items-center justify-center text-rose-500 shadow-sm mb-6">
                    <Video size={24} />
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 mb-3">Low-Latency Video Stream</h3>
               </div>
              <div className="flex items-center gap-4 text-sm font-bold text-slate-500">
                 <Link to="/features" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
                    Explore Teleoperation <ChevronRight size={16} />
                 </Link>
              </div>
            </div>
            {/* Visual element */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-slate-900 border-l border-white/20 overflow-hidden group-hover:w-[55%] transition-all duration-700">
               <div className="absolute inset-0 pattern-grid opacity-20"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                     <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Philosophy Grid */}
      <section ref={featuresRef} className="max-w-7xl mx-auto px-6 relative pt-20">
        <div className="text-center mb-20 space-y-4">
          <h2 data-animate className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">Elegance in Complexity</h2>
          <p data-animate className="text-lg text-slate-500 font-medium max-w-xl mx-auto">
            We stripped away the clunky interfaces of the past to create a seamless, intuitive operator experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Eye,
              title: "Ambient Perception",
              desc: "REX-47 continuously maps its surroundings using advanced spatial computing and neural vision.",
              color: "text-brand-accent",
              bg: "bg-brand-accent/10"
            },
            {
              icon: MessageSquare,
              title: "Natural Interaction",
              desc: "Communicate through voice or text. The on-board LLM understands context, nuance, and intent.",
              color: "text-brand-secondary",
              bg: "bg-brand-secondary/10"
            },
            {
              icon: Zap,
              title: "Fluid Kinematics",
              desc: "Every movement is calculated in real-time for smooth, human-like grace and industrial precision.",
              color: "text-emerald-500",
              bg: "bg-emerald-500/10"
            }
          ].map((item, i) => (
            <div key={i} data-animate className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className={`w-14 h-14 rounded-[20px] flex items-center justify-center mb-6 ${item.bg} ${item.color}`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Minimalistic CTA */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <div data-animate className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[48px] p-16 sm:p-24 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-secondary/30 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-accent/30 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[24px] mx-auto flex items-center justify-center mb-10 border border-white/20">
             <Bot size={40} className="text-white" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tight mb-6 relative z-10">
            Ready to Awaken REX?
          </h2>
          <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
            Secure your access to the operator dashboard and begin orchestrating autonomous workflows today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
             <Link
               to="/login"
               className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 font-bold rounded-[24px] hover:scale-105 active:scale-95 transition-transform duration-300"
             >
               Authenticate Session
               <ArrowRight size={18} />
             </Link>
             <Link
               to="/contact"
               className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold rounded-[24px] hover:bg-white/10 transition-colors duration-300"
             >
               Contact Team
             </Link>
          </div>
        </div>
      </section>
      
      {/* Add custom CSS for scan animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
    </div>
  );
}

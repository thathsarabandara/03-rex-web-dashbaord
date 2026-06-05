import { useRef, useEffect } from 'react';
import { 
  Zap, 
  Cpu, 
  Wifi, 
  ShieldCheck, 
  Activity,
  Layers,
  Box,
  Lock,
  Database,
  Radio
} from 'lucide-react';
import gsap from 'gsap';

export default function Features() {
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

    if (containerRef.current) {
      const sections = containerRef.current.querySelectorAll('section');
      sections.forEach(section => observer.observe(section));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="pb-32 font-sans selection:bg-brand-accent/30">
      
      {/* Page Header */}
      <section className="pt-20 pb-24 text-center px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-brand-accent/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        
        <h1 data-animate className="text-5xl sm:text-7xl font-black tracking-tight text-slate-900 mb-6">
          System <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">Capabilities</span>
        </h1>
        <p data-animate className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Deep dive into the architecture and modules that power the REX-47 autonomous robotic platform.
        </p>
      </section>

      {/* Feature Section 1: AI & Compute */}
      <section className="max-w-7xl mx-auto px-6 mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 glass-card-vibrant p-8 sm:p-12 rounded-[40px] relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
           <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-secondary/20 blur-[60px] rounded-full group-hover:bg-brand-secondary/40 transition-colors duration-700"></div>
           <div className="relative z-10 grid grid-cols-2 gap-4">
              {[
                { label: 'Inference', val: '12 TFLOPS', icon: Cpu },
                { label: 'Vision Latency', val: '14ms', icon: Eye },
                { label: 'Context', val: '128k', icon: Layers },
                { label: 'State Sync', val: '1000Hz', icon: Activity }
              ].map((stat, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-md p-6 rounded-[24px] border border-white">
                  <stat.icon size={20} className="text-brand-secondary mb-4" />
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-xl font-black text-slate-800">{stat.val}</p>
                </div>
              ))}
           </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6" data-animate>
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-bold uppercase tracking-widest">
             <Cpu size={14} /> Cognitive Engine
           </div>
           <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
             Edge Intelligence <br/> Without Compromise
           </h2>
           <p className="text-lg text-slate-500 font-medium leading-relaxed">
             REX-47 processes complex visual and auditory streams locally. By running heavy LLM and computer vision models directly on edge hardware, we eliminate cloud-dependency latency and ensure operational privacy.
           </p>
           <ul className="space-y-4 pt-4">
             {['Local LLM deployment for offline autonomy', 'YOLO-based 3D object detection & tracking', 'Dynamic path planning in unstructured environments'].map((item, i) => (
               <li key={i} className="flex items-start gap-3">
                 <ShieldCheck size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                 <span className="font-medium text-slate-700">{item}</span>
               </li>
             ))}
           </ul>
        </div>
      </section>

      {/* Feature Section 2: Kinematics */}
      <section className="max-w-7xl mx-auto px-6 mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6" data-animate>
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest">
             <Zap size={14} /> Kinematic Control
           </div>
           <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
             Fluid Motion <br/> Dynamics
           </h2>
           <p className="text-lg text-slate-500 font-medium leading-relaxed">
             Advanced inverse kinematics allow for smooth, human-like manipulation. The system calculates millions of possible trajectories per second to find the most efficient and collision-free path.
           </p>
           <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-brand-accent pl-4">
                 <h4 className="font-bold text-slate-900 mb-1">Sub-Millimeter</h4>
                 <p className="text-sm text-slate-500 font-medium">Precision accuracy for delicate tasks.</p>
              </div>
              <div className="border-l-2 border-brand-accent pl-4">
                 <h4 className="font-bold text-slate-900 mb-1">Force Feedback</h4>
                 <p className="text-sm text-slate-500 font-medium">Haptic sensing for fragile handling.</p>
              </div>
           </div>
        </div>
        <div className="glass-card-vibrant p-2 rounded-[40px] relative overflow-hidden group shadow-xl">
           <div className="bg-slate-900 aspect-[4/3] rounded-[32px] w-full relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 pattern-grid opacity-20"></div>
              {/* Mock 3D Arm Visualization */}
              <div className="relative w-full h-full flex items-center justify-center">
                 <div className="w-1/2 h-2 bg-slate-700 rounded-full rotate-45 transform origin-bottom-left absolute bottom-1/4 left-1/4"></div>
                 <div className="w-1/3 h-2 bg-brand-accent rounded-full -rotate-12 transform origin-bottom-left absolute bottom-1/2 left-1/2"></div>
                 <div className="w-8 h-8 bg-white/10 border-2 border-brand-accent rounded-full absolute bottom-1/2 left-1/2 -translate-x-4 -translate-y-4 animate-pulse"></div>
                 
                 <div className="absolute top-6 left-6 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                    <p className="text-[10px] font-mono text-brand-accent uppercase tracking-widest">Joint_States_Active</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Grid of smaller features */}
      <section className="max-w-7xl mx-auto px-6">
        <h3 data-animate className="text-3xl font-black text-slate-900 text-center mb-16 tracking-tight">System Integrations</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Wifi, title: 'Low-Latency Telemetry', desc: 'Real-time WebSocket streaming of all system parameters.' },
            { icon: Database, title: 'Memory Engine', desc: 'Vector database integration for long-term episodic memory.' },
            { icon: Radio, title: 'IoT Gateway', desc: 'Seamlessly interface with smart home and industrial IoT devices.' },
            { icon: Lock, title: 'End-to-End Encryption', desc: 'All control channels are secured using TLS 1.3.' },
            { icon: Box, title: 'Dockerized Microservices', desc: 'Deploy and scale individual subsystems independently.' },
            { icon: Activity, title: 'Predictive Maintenance', desc: 'AI-driven diagnostics predict hardware wear before failure.' }
          ].map((feat, i) => (
            <div key={i} data-animate className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-[16px] flex items-center justify-center mb-6">
                <feat.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{feat.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

// Need to import Eye manually as it was missed in the initial import block
import { Eye } from 'lucide-react';

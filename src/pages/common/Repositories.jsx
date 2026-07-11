import { useRef, useEffect } from 'react';
import { Star, GitFork, GitCommit } from 'lucide-react';
import gsap from 'gsap';
import { BsGithub } from 'react-icons/bs';

export default function Repositories() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.timeline-item');
          gsap.fromTo(
            elements,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
          );
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const repos = [
    { num: '01', name: 'rex-architecture', desc: 'Core system architecture documents, schemas, and API definitions.', lang: 'Markdown', color: 'bg-slate-500' },
    { num: '02', name: 'rex-firmware', desc: 'C++ firmware for ESP32 microcontrollers handling low-level hardware.', lang: 'C++', color: 'bg-rose-500' },
    { num: '03', name: 'rex-web-dashboard', desc: 'React/Vite web application for monitoring and teleoperation.', lang: 'JavaScript', color: 'bg-yellow-400' },
    { num: '04', name: 'rex-mobile-app', desc: 'Flutter mobile application for field operators.', lang: 'Dart', color: 'bg-cyan-500' },
    { num: '05', name: 'rex-api-gateway', desc: 'Unified entry point for routing and load balancing incoming requests.', lang: 'Go', color: 'bg-cyan-600' },
    { num: '06', name: 'rex-auth-service', desc: 'Authentication and authorization microservice (JWT/OAuth2).', lang: 'Python', color: 'bg-blue-500' },
    { num: '07', name: 'rex-robot-service', desc: 'Main control loop and kinematic engine orchestrator.', lang: 'Go', color: 'bg-emerald-500' },
    { num: '08', name: 'rex-telemetry-service', desc: 'High-throughput WebSocket server for live sensor data.', lang: 'Rust', color: 'bg-orange-500' },
    { num: '09', name: 'rex-sensor-fusion', desc: 'Aggregates LIDAR, IMU, and Camera data into a 3D map.', lang: 'C++', color: 'bg-rose-500' },
    { num: '10', name: 'rex-navigation-engine', desc: 'SLAM and path planning for autonomous movement.', lang: 'C++', color: 'bg-rose-500' },
    { num: '11', name: 'rex-vision-ai', desc: 'YOLO real-time object detection, face recognition, and tracking.', lang: 'Python', color: 'bg-blue-500' },
    { num: '12', name: 'rex-event-engine', desc: 'Rule-based anomaly detection and synthesis of raw AI detections into alerts.', lang: 'TypeScript', color: 'bg-blue-600' },
    { num: '13', name: 'rex-notification-engine', desc: 'Push notification integrations and email delivery for incidents.', lang: 'Go', color: 'bg-emerald-500' },
    { num: '14', name: 'rex-voice-assistant', desc: 'Local wake word detection, STT integration, and intent parsing.', lang: 'Python', color: 'bg-blue-500' },
    { num: '15', name: 'rex-agent-runtime', desc: 'Convert perceived events into proactive task plans and autonomous orchestration.', lang: 'TypeScript', color: 'bg-blue-600' },
    { num: '16', name: 'rex-memory-engine', desc: 'Vector DB integration for past events and semantic search.', lang: 'Python', color: 'bg-blue-500' },
    { num: '17', name: 'rex-devops-infras', desc: 'Local Docker Compose stack, CI/CD pipelines, and Kubernetes manifests.', lang: 'Shell', color: 'bg-slate-700' }
  ];

  return (
    <div className="pb-32 font-sans selection:bg-brand-accent/30">
      <section className="pt-20 pb-16 text-center px-6 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-secondary/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full mb-8 shadow-lg shadow-slate-900/20">
           <GitCommit size={18} />
           <span className="text-[11px] font-bold uppercase tracking-widest">Platform Modules</span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-slate-900 mb-6">
          System <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">Architecture</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          The REX-47 ecosystem is built on a 17-module microservice timeline. Explore the sequence of repositories powering the platform.
        </p>
      </section>

      <section ref={containerRef} className="max-w-5xl mx-auto px-6 relative pt-10">
        
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200/50 -translate-x-1/2 rounded-full hidden sm:block"></div>

        <div className="space-y-12">
          {repos.map((repo, i) => {
             const isEven = i % 2 === 0;
             return (
               <div key={i} className={`timeline-item relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                 
                 {/* Center Dot */}
                 <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-brand-accent shadow-lg shadow-brand-accent/30 z-10 hidden sm:flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                 </div>

                 {/* Card Container */}
                 <div className={`w-full sm:w-[calc(100%-4rem)] sm:ml-16 md:w-5/12 md:ml-0 ${isEven ? 'md:pr-10' : 'md:pl-10'}`}>
                    <div className="glass-card-vibrant p-6 sm:p-8 flex flex-col group hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-accent/10 border border-slate-100 hover:border-brand-accent/30 relative overflow-hidden">
                       
                       {/* Background Number */}
                       <div className="absolute -right-4 -bottom-8 text-8xl font-black text-slate-900/5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                         {repo.num}
                       </div>

                       <div className="relative z-10">
                         <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                               <span className="px-2 py-1 bg-brand-secondary/10 text-brand-secondary font-mono text-[10px] font-bold rounded-md tracking-wider">
                                 MOD_{repo.num}
                               </span>
                            </div>
                             <a
                               href={`https://github.com/thathsarabandara/${repo.num === '03' ? '03-rex-web-dashbaord' : `${repo.num}-${repo.name}`}`}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="text-slate-400 hover:text-brand-accent transition-colors"
                             >
                                <BsGithub size={20} />
                             </a>
                         </div>

                         <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-brand-accent transition-colors mb-3">
                            {repo.name}
                         </h3>
                         
                         <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                            {repo.desc}
                         </p>

                         <div className="flex items-center justify-between pt-4 border-t border-slate-100/50">
                            <div className="flex items-center gap-2">
                               <span className={`w-3 h-3 rounded-full ${repo.color}`}></span>
                               <span className="text-xs font-bold text-slate-600">{repo.lang}</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400">
                               <div className="flex items-center gap-1.5 text-xs font-bold">
                                  <Star size={14} /> {Math.floor(Math.random() * 50) + 10}
                               </div>
                               <div className="flex items-center gap-1.5 text-xs font-bold">
                                  <GitFork size={14} /> {Math.floor(Math.random() * 20) + 2}
                               </div>
                            </div>
                         </div>
                       </div>
                    </div>
                 </div>

               </div>
             );
          })}
        </div>
      </section>
    </div>
  );
}

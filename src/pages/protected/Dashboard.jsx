import React from 'react';
import { useSelector } from 'react-redux';
import { 
  Activity,
  Battery,
  BatteryCharging,
  Wifi,
  Cpu,
  Thermometer,
  HardDrive,
  Clock,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Zap,
  Target,
  Navigation,
  Eye,
  Brain,
  MessageSquare,
  ShieldAlert,
  Shield,
  Play,
  RotateCcw,
  StopCircle,
  Box,
  MapPin,
  Smartphone,
  Cloud,
  ArrowUpRight,
  ArrowDownRight,
  Footprints,
  Users,
  Bell,
  Sparkles
} from 'lucide-react';

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="font-sans animate-in fade-in duration-500 pb-10">
      
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Robot Operations Center</h1>
        <p className="text-slate-500 font-medium text-sm">Welcome back, {user?.name || 'Operator'}. System telemetry and intelligence overview.</p>
      </div>

      <div className="space-y-6">
        
        {/* ROW 1: Hero & AI Systems */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* SECTION 1: SYSTEM OVERVIEW HERO */}
          <div className="glass-card-vibrant p-6 lg:col-span-2 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[50px] -z-10 group-hover:bg-brand-accent/10 transition-colors"></div>
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-3xl font-black text-slate-900">REX-47</h2>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-[8px] text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Online
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium">Autonomous Robotic Platform</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-auto">
              <div className="bg-white/60 p-4 rounded-[16px] border border-slate-100 shadow-sm">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1.5"><Target size={12}/> Mode</p>
                 <p className="text-lg font-black text-slate-900">Patrol</p>
              </div>
              <div className="bg-white/60 p-4 rounded-[16px] border border-slate-100 shadow-sm">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1.5"><Battery size={12}/> Battery</p>
                 <p className="text-lg font-black text-slate-900">82%</p>
              </div>
              <div className="bg-white/60 p-4 rounded-[16px] border border-slate-100 shadow-sm">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1.5"><Wifi size={12}/> Signal</p>
                 <p className="text-lg font-black text-emerald-600">Excellent</p>
              </div>
              <div className="bg-white/60 p-4 rounded-[16px] border border-slate-100 shadow-sm">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1.5"><Clock size={12}/> Uptime</p>
                 <p className="text-lg font-black text-slate-900">14h 22m</p>
              </div>
            </div>
          </div>

          {/* SECTION 2: AI SYSTEM STATUS */}
          <div className="glass-card-vibrant p-6">
            <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
              <Brain size={18} className="text-brand-accent" /> Orchestrated AI Systems
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Vision AI', status: 'Online', color: 'emerald' },
                { name: 'Navigation AI', status: 'Online', color: 'emerald' },
                { name: 'Assistant AI', status: 'Online', color: 'emerald' },
                { name: 'Event Engine', status: 'Online', color: 'emerald' },
                { name: 'Memory Engine', status: 'Online', color: 'emerald' },
              ].map((sys, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-white border border-slate-100 rounded-[12px] shadow-sm">
                  <span className="text-sm font-bold text-slate-700">{sys.name}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-100">
                    {sys.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2: Mission & Health */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* SECTION 3: ACTIVE MISSION */}
          <div className="glass-card-vibrant p-6 flex flex-col relative overflow-hidden group">
            <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none"></div>
            <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2 relative z-10">
              <Shield size={18} className="text-indigo-500" /> Active Mission
            </h3>
            
            <div className="flex-1 flex flex-col justify-center relative z-10">
               <div className="mb-4">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Current Directive</p>
                 <p className="text-2xl font-black text-indigo-600 leading-tight">Security Patrol</p>
               </div>
               
               <div className="space-y-4">
                 <div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                       <span className="text-slate-500">Progress</span>
                       <span className="text-indigo-600">65%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-indigo-500 rounded-full w-[65%]"></div>
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-3 rounded-[12px]">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Started</p>
                       <p className="text-sm font-black text-slate-900">18:42</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-[12px]">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Est. Completion</p>
                       <p className="text-sm font-black text-slate-900">6 minutes</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>

          {/* SECTION 4: ROBOT HEALTH */}
          <div className="glass-card-vibrant p-6 lg:col-span-2">
            <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
              <Activity size={18} className="text-emerald-500" /> Hardware Health Core
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white border border-slate-100 rounded-[16px] shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1"><BatteryCharging size={12}/> Battery</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-black text-slate-900">82%</p>
                  <span className="text-[10px] font-bold text-emerald-500">Healthy</span>
                </div>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-[16px] shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1"><Thermometer size={12}/> Temperature</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-black text-slate-900">37°C</p>
                  <span className="text-[10px] font-bold text-slate-500">Normal</span>
                </div>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-[16px] shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1"><Cpu size={12}/> CPU Load</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-black text-slate-900">32%</p>
                  <span className="text-[10px] font-bold text-slate-500">Optimal</span>
                </div>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-[16px] shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1"><Brain size={12}/> Memory</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-black text-slate-900">58%</p>
                  <span className="text-[10px] font-bold text-slate-500">Stable</span>
                </div>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-[16px] shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1"><Wifi size={12}/> Network Ping</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-black text-slate-900">23<span className="text-sm font-bold text-slate-500 ml-0.5">ms</span></p>
                  <span className="text-[10px] font-bold text-emerald-500">Excellent</span>
                </div>
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-[16px] shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1"><HardDrive size={12}/> Storage</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-black text-slate-900">74%</p>
                  <span className="text-[10px] font-bold text-slate-500">Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3: Sensors & Events */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* SECTION 5: SENSOR STATUS */}
          <div className="glass-card-vibrant p-6">
             <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
              <Zap size={18} className="text-amber-500" /> Sensor Array
            </h3>
            <div className="bg-slate-50 rounded-[16px] p-2 border border-slate-100">
               <ul className="space-y-1">
                 {[
                   { name: 'Ultrasonic', status: 'Online' },
                   { name: 'IMU', status: 'Online' },
                   { name: 'IR Array', status: 'Online' },
                   { name: 'Gas Sensor', status: 'Offline', error: true },
                   { name: 'Microphone', status: 'Online' },
                   { name: 'Camera', status: 'Online' },
                   { name: 'OLED Display', status: 'Online' },
                 ].map((sensor, i) => (
                   <li key={i} className={`flex justify-between items-center p-2 rounded-[8px] text-sm font-bold ${sensor.error ? 'bg-rose-50 border border-rose-100' : ''}`}>
                      <span className={sensor.error ? 'text-rose-700' : 'text-slate-700'}>{sensor.name}</span>
                      <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded ${
                        sensor.error ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100/50 text-emerald-600'
                      }`}>
                         {sensor.status}
                      </span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          {/* SECTION 6: RECENT EVENTS */}
          <div className="glass-card-vibrant p-6">
            <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
              <Clock size={18} className="text-blue-500" /> Event Timeline
            </h3>
            <div className="relative pl-3 mt-4">
               {/* Timeline line */}
               <div className="absolute top-2 bottom-2 left-[19px] w-0.5 bg-slate-100"></div>
               
               <div className="space-y-5 relative">
                 {[
                   { time: '18:45', event: 'Patrol completed', type: 'info' },
                   { time: '18:39', event: 'Person detected', type: 'vision' },
                   { time: '18:22', event: 'Low light detected', type: 'sensor' },
                   { time: '18:05', event: 'Charging completed', type: 'power' },
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="relative z-10 w-4 h-4 rounded-full bg-white border-2 border-brand-accent flex-shrink-0 mt-0.5"></div>
                     <div>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-0.5">{item.time}</p>
                       <p className="text-sm font-black text-slate-800">{item.event}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* SECTION 7: AI INSIGHTS */}
          <div className="glass-card-vibrant p-6 bg-gradient-to-br from-brand-accent/5 to-transparent">
            <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-brand-accent" /> Intelligence Insights
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-[16px] border border-brand-accent/20 shadow-sm relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-2 h-full bg-brand-accent"></div>
                 <p className="text-xs font-bold text-slate-900 leading-relaxed mb-2">
                   Battery consumption is <span className="text-rose-500">12% higher</span> than usual today.
                 </p>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded inline-block">
                   Cause: Extended patrol time
                 </p>
              </div>

              <div className="p-4 bg-white rounded-[16px] border border-indigo-500/20 shadow-sm relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-2 h-full bg-indigo-500"></div>
                 <p className="text-xs font-bold text-slate-900 leading-relaxed mb-2">
                   Living room activity <span className="text-indigo-500">increased by 25%</span> compared to yesterday.
                 </p>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded inline-block">
                   Pattern: Social gathering
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 4: Alerts & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* SECTION 8: ALERTS & ANOMALIES */}
          <div className="glass-card-vibrant p-6">
            <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle size={18} className="text-rose-500" /> Active Anomalies
            </h3>
            
            <div className="space-y-3">
              <div className="p-4 bg-rose-50 border border-rose-100 rounded-[16px] shadow-sm">
                 <div className="flex items-start gap-3">
                    <div className="p-2 bg-rose-100 text-rose-600 rounded-[10px] flex-shrink-0">
                       <Eye size={16} />
                    </div>
                    <div>
                       <p className="text-sm font-black text-rose-900 mb-1">Unknown face detected</p>
                       <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest">
                          <span className="bg-rose-100/50 text-rose-700 px-2 py-0.5 rounded">Confidence: 96%</span>
                          <span className="text-rose-500 mt-0.5">18:31</span>
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="p-4 bg-amber-50 border border-amber-100 rounded-[16px] shadow-sm">
                 <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-100 text-amber-600 rounded-[10px] flex-shrink-0">
                       <Thermometer size={16} />
                    </div>
                    <div>
                       <p className="text-sm font-black text-amber-900 mb-1">Motor temp elevated</p>
                       <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest">
                          <span className="bg-amber-100/50 text-amber-700 px-2 py-0.5 rounded">Current: 52°C</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* SECTION 9: QUICK ACTIONS */}
          <div className="glass-card-vibrant p-6 lg:col-span-2">
            <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
              <Zap size={18} className="text-amber-500" /> Tactical Commands
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
               <button className="p-4 bg-slate-900 hover:bg-brand-accent text-white rounded-[16px] text-sm font-bold transition-all shadow-md active:scale-95 flex flex-col items-center justify-center gap-2 h-24">
                 <Shield size={20} /> Start Patrol
               </button>
               <button className="p-4 bg-white border border-slate-200 hover:border-brand-accent/50 hover:bg-slate-50 text-slate-700 rounded-[16px] text-sm font-bold transition-all shadow-sm active:scale-95 flex flex-col items-center justify-center gap-2 h-24">
                 <MapPin size={20} /> Return Home
               </button>
               <button className="p-4 bg-white border border-slate-200 hover:border-brand-accent/50 hover:bg-slate-50 text-slate-700 rounded-[16px] text-sm font-bold transition-all shadow-sm active:scale-95 flex flex-col items-center justify-center gap-2 h-24">
                 <ShieldAlert size={20} /> Enable Security
               </button>
               <button className="p-4 bg-white border border-slate-200 hover:border-brand-accent/50 hover:bg-slate-50 text-slate-700 rounded-[16px] text-sm font-bold transition-all shadow-sm active:scale-95 flex flex-col items-center justify-center gap-2 h-24">
                 <Users size={20} /> Follow User
               </button>
               <button className="p-4 bg-white border border-slate-200 hover:border-brand-accent/50 hover:bg-slate-50 text-slate-700 rounded-[16px] text-sm font-bold transition-all shadow-sm active:scale-95 flex flex-col items-center justify-center gap-2 h-24">
                 <Zap size={20} /> Dock Robot
               </button>
               <button className="p-4 bg-rose-50 hover:bg-rose-500 border border-rose-200 hover:border-rose-600 text-rose-600 hover:text-white rounded-[16px] text-sm font-black transition-all shadow-sm active:scale-95 flex flex-col items-center justify-center gap-2 h-24">
                 <StopCircle size={24} /> Emergency Stop
               </button>
            </div>
          </div>
        </div>

        {/* ROW 5: Agents & Comms & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* SECTION 10: AGENT STATUS */}
          <div className="glass-card-vibrant p-6 relative overflow-hidden group cursor-pointer hover:border-brand-accent/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-center mb-4 relative z-10">
              <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                <Box size={18} className="text-indigo-500" /> Multi-Agent Fleet
              </h3>
              <ArrowUpRight size={16} className="text-slate-400 group-hover:text-brand-accent transition-colors" />
            </div>
            
            <div className="grid grid-cols-2 gap-3 relative z-10">
               {[
                 { name: 'Security', status: 'Running', active: true },
                 { name: 'Navigation', status: 'Running', active: true },
                 { name: 'Assistant', status: 'Running', active: true },
                 { name: 'Energy', status: 'Idle', active: false },
               ].map((agent, i) => (
                 <div key={i} className="p-3 bg-white border border-slate-100 rounded-[12px] shadow-sm">
                    <p className="text-xs font-bold text-slate-900 mb-1">{agent.name} Agent</p>
                    <span className={`text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded flex w-max ${
                      agent.active ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}>
                       {agent.status}
                    </span>
                 </div>
               ))}
            </div>
          </div>

          {/* SECTION 11: COMMUNICATION STATUS */}
          <div className="glass-card-vibrant p-6">
             <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
              <Wifi size={18} className="text-emerald-500" /> Comm Protocols
            </h3>
            
            <div className="flex flex-col h-[calc(100%-2rem)] justify-between">
              <div className="grid grid-cols-2 gap-2 mb-4">
                 {[
                   { name: 'Cloud', icon: Cloud, active: true },
                   { name: 'MQTT', icon: Activity, active: true },
                   { name: 'WebSocket', icon: Zap, active: true },
                   { name: 'BLE', icon: Smartphone, active: true },
                 ].map((proto, i) => (
                   <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded-[8px] border border-slate-100">
                      <proto.icon size={12} className={proto.active ? 'text-emerald-500' : 'text-slate-400'} />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">{proto.name} {proto.active ? 'Conn' : 'Avail'}</span>
                   </div>
                 ))}
              </div>
              
              <div className="bg-slate-900 p-3 rounded-[12px] flex justify-between items-center text-white">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Latency Profile</span>
                 <div className="flex gap-4">
                    <div className="text-right">
                       <span className="text-[9px] text-slate-400 block mb-0.5 uppercase">Cloud</span>
                       <span className="text-xs font-black text-emerald-400">21ms</span>
                    </div>
                    <div className="text-right">
                       <span className="text-[9px] text-slate-400 block mb-0.5 uppercase">Robot</span>
                       <span className="text-xs font-black text-emerald-400">12ms</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* SECTION 12: TODAY'S SUMMARY */}
          <div className="glass-card-vibrant p-6">
            <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2">
              <Activity size={18} className="text-brand-accent" /> Daily Aggregates
            </h3>
            
            <div className="space-y-3">
               {[
                 { label: 'Distance Travelled', value: '1.8 km', icon: Footprints },
                 { label: 'Patrol Missions', value: '7', icon: Shield },
                 { label: 'Objects Detected', value: '52', icon: Target },
                 { label: 'People Recognized', value: '9', icon: Users },
                 { label: 'Alerts Triggered', value: '1', icon: Bell },
               ].map((stat, i) => (
                 <div key={i} className="flex justify-between items-center pb-2 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="flex items-center gap-2 text-slate-600">
                       <stat.icon size={14} className="text-slate-400" />
                       <span className="text-xs font-bold">{stat.label}</span>
                    </div>
                    <span className="text-sm font-black text-slate-900">{stat.value}</span>
                 </div>
               ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

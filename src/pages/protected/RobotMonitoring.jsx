import React, { useState } from 'react';
import { 
  Eye, 
  Check, 
  Download, 
  BarChart2, 
  Activity, 
  Cpu, 
  Microchip, 
  Network, 
  BrainCircuit, 
  TrendingUp, 
  LineChart,
  Target,
  Thermometer,
  Droplets,
  Wind,
  Ruler,
  Zap,
  BatteryCharging,
  AlertTriangle
} from 'lucide-react';

export default function RobotMonitoring() {
  const [selectedMetric, setSelectedMetric] = useState('speed');
  const [timeRange, setTimeRange] = useState('1h');

  const [sensorData] = useState({
    temperature: { value: 28.5, unit: '°C', status: 'normal', icon: Thermometer },
    humidity: { value: 65, unit: '%', status: 'normal', icon: Droplets },
    gasLevel: { value: 45, unit: 'ppm', status: 'normal', icon: Wind },
    ultrasonicDistance: { value: 150, unit: 'cm', status: 'normal', icon: Ruler },
    motorRPM: { value: 450, unit: 'rpm', status: 'normal', icon: Zap },
    batteryVoltage: { value: 12.2, unit: 'V', status: 'normal', icon: BatteryCharging },
  });

  const [aiVisionData] = useState([
    { id: 1, type: 'Face Recognition', confidence: 95, label: 'John Doe' },
    { id: 2, type: 'Object Detection', confidence: 87, label: 'Cat detected' },
    { id: 3, type: 'Gesture Detection', confidence: 92, label: 'Person waving' },
  ]);

  const [eventLogs] = useState([
    { id: 1, time: '10:30:45', type: 'Motion', message: 'Motion detected in living room', severity: 'info' },
    { id: 2, time: '10:25:12', type: 'Alert', message: 'Obstacle detected - autonomy paused', severity: 'warning' },
    { id: 3, time: '10:20:03', type: 'Error', message: 'Left motor speed anomaly detected', severity: 'error' },
    { id: 4, time: '10:15:30', type: 'AI Decision', message: 'Chose patrol route B based on occupancy prediction', severity: 'info' },
  ]);

  return (
    <div className="font-sans animate-in fade-in duration-500 pb-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Telemetry & Diagnostics</h1>
        <p className="text-slate-500 font-medium text-sm">Real-time sensor data, AI perception, and health metrics</p>
      </div>

      <div className="space-y-6">
        {/* Sensor Data Section */}
        <div className="glass-card-vibrant p-8">
          <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
            <Activity size={20} className="text-emerald-500" /> Live Sensor Array
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(sensorData).map(([key, data]) => {
              const Icon = data.icon;
              return (
                <div key={key} className={`p-4 rounded-[16px] bg-white border border-slate-100 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform`}>
                  <div className={`absolute top-0 right-0 w-16 h-16 rounded-full blur-[20px] -z-10 ${
                    data.status === 'normal' ? 'bg-emerald-100' : data.status === 'warning' ? 'bg-amber-100' : 'bg-rose-100'
                  }`}></div>
                  <div className="flex justify-between items-start mb-2">
                    <Icon size={16} className={data.status === 'normal' ? 'text-emerald-500' : data.status === 'warning' ? 'text-amber-500' : 'text-rose-500'} />
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        data.status === 'normal' ? 'bg-emerald-400' : data.status === 'warning' ? 'bg-amber-400' : 'bg-rose-400'
                      }`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${
                        data.status === 'normal' ? 'bg-emerald-500' : data.status === 'warning' ? 'bg-amber-500' : 'bg-rose-500'
                      }`}></span>
                    </span>
                  </div>
                  <p className="text-2xl font-black text-slate-900 leading-none mb-1">
                    {data.value}
                    <span className="text-xs font-bold text-slate-400 ml-1">{data.unit}</span>
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 line-clamp-1">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Vision Feed */}
          <div className="glass-card-vibrant p-8">
            <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
              <Eye size={20} className="text-brand-accent" /> Perception Engine
            </h3>
            <div className="mb-6 bg-slate-900 rounded-[24px] flex flex-col items-center justify-center h-56 border-4 border-slate-100 shadow-inner relative overflow-hidden group">
              <div className="absolute inset-0 pattern-grid opacity-20"></div>
              <div className="relative z-10 text-center p-4 bg-slate-800/80 backdrop-blur-md rounded-[16px] border border-white/10 group-hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-brand-accent/20 rounded-[12px] flex items-center justify-center text-brand-accent mx-auto mb-3">
                  <Eye size={24} className="animate-pulse" />
                </div>
                <p className="text-white font-bold text-sm">Vision Stream Analysis</p>
                <p className="text-slate-400 text-xs mt-1">Processing 30fps with TensorRT</p>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Real-time Inference Results</h4>
              <div className="space-y-3">
                {aiVisionData.map(detection => (
                  <div key={detection.id} className="p-4 bg-white border border-slate-100 rounded-[16px] shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-sm font-black text-slate-900">{detection.type}</p>
                        <p className="text-xs font-bold text-brand-accent mt-0.5">{detection.label}</p>
                      </div>
                      <span className="text-xs font-black bg-brand-accent/10 text-brand-accent px-2 py-1 rounded-md">{detection.confidence}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mt-3">
                      <div 
                        className="h-full bg-brand-accent rounded-full"
                        style={{ width: `${detection.confidence}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Event Logs */}
          <div className="glass-card-vibrant p-8 flex flex-col">
            <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center gap-2">
              <LineChart size={20} className="text-brand-secondary" /> System Event Log
            </h3>
            <p className="text-xs font-bold text-slate-500 mb-6">Diagnose system states and AI decisions.</p>
            <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {eventLogs.map(log => (
                <div key={log.id} className="p-4 bg-white rounded-[16px] border border-slate-100 shadow-sm flex items-start gap-4 transition-all hover:-translate-y-0.5">
                  <div className={`w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0 ${
                    log.severity === 'error' ? 'bg-rose-50 text-rose-500' : 
                    log.severity === 'warning' ? 'bg-amber-50 text-amber-500' : 'bg-blue-50 text-blue-500'
                  }`}>
                    {log.severity === 'error' ? <AlertTriangle size={18} /> : 
                     log.severity === 'warning' ? <AlertTriangle size={18} /> : <Activity size={18} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-sm font-black text-slate-900 truncate">{log.type}</p>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap ml-2">{log.time}</span>
                    </div>
                    <p className="text-xs font-medium text-slate-600 leading-snug">{log.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Telemetry Graphs */}
        <div className="glass-card-vibrant p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <TrendingUp size={20} className="text-indigo-500" /> Telemetry History
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex bg-slate-100 p-1 rounded-[12px]">
                {['speed', 'distance', 'battery'].map(metric => (
                  <button
                    key={metric}
                    onClick={() => setSelectedMetric(metric)}
                    className={`px-4 py-1.5 rounded-[8px] text-xs font-bold transition-all ${
                      selectedMetric === metric ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {metric.charAt(0).toUpperCase() + metric.slice(1)}
                  </button>
                ))}
              </div>
              <div className="flex bg-slate-100 p-1 rounded-[12px]">
                {['1h', '6h', '24h', '7d'].map(range => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1.5 rounded-[8px] text-xs font-bold transition-all ${
                      timeRange === range ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[24px] p-6 border-4 border-slate-100 shadow-inner relative overflow-hidden h-64">
             <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none"></div>
             {/* Mock Chart */}
             <svg viewBox="0 0 500 300" className="w-full h-full relative z-10 preserve-3d">
               <defs>
                 <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#9333ea" stopOpacity="0.4" />
                   <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
                 </linearGradient>
               </defs>
               <polygon points="20,250 60,200 100,150 140,130 180,170 220,190 260,140 300,100 340,110 380,140 380,250 20,250" fill="url(#chartGradient)" />
               <polyline points="20,250 60,200 100,150 140,130 180,170 220,190 260,140 300,100 340,110 380,140" fill="none" stroke="#c084fc" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
               <line x1="20" y1="50" x2="480" y2="50" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
               <line x1="20" y1="150" x2="480" y2="150" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
               <line x1="20" y1="250" x2="480" y2="250" stroke="#334155" strokeWidth="1" />
               <line x1="20" y1="20" x2="20" y2="250" stroke="#334155" strokeWidth="1" />
             </svg>
          </div>
        </div>

        {/* AI Learning & Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="glass-card-vibrant p-8">
            <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
              <BrainCircuit size={20} className="text-brand-accent" /> Edge Learning State
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Reward Optimization</p>
                  <p className="text-xs font-black bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md">Ep 73/100</p>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '73%' }}></div>
                </div>
              </div>
              <div className="p-4 bg-brand-accent/5 rounded-[16px] border border-brand-accent/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-1">Average Return (Q-Value)</p>
                <p className="text-4xl font-black text-slate-900">+2.45<span className="text-sm text-slate-400 ml-1">pts</span></p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center justify-between p-3 bg-white rounded-[12px] border border-slate-100 shadow-sm">
                  <span className="text-sm font-bold text-slate-700 flex items-center gap-2"><Target size={14} className="text-emerald-500"/> Success Rate</span>
                  <span className="text-sm font-black text-slate-900">87%</span>
                </li>
                <li className="flex items-center justify-between p-3 bg-white rounded-[12px] border border-slate-100 shadow-sm">
                  <span className="text-sm font-bold text-slate-700 flex items-center gap-2"><Activity size={14} className="text-emerald-500"/> Avg Convergence Time</span>
                  <span className="text-sm font-black text-slate-900">2.3s</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card-vibrant p-8">
            <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
              <Cpu size={20} className="text-slate-700" /> Compute Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-[16px] border border-slate-100 shadow-sm">
                <div className="w-8 h-8 bg-slate-100 rounded-[8px] flex items-center justify-center text-slate-600 mb-3">
                  <Cpu size={16} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">CPU Load</p>
                <p className="text-2xl font-black text-slate-900 mb-2">65%</p>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-[16px] border border-slate-100 shadow-sm">
                <div className="w-8 h-8 bg-slate-100 rounded-[8px] flex items-center justify-center text-slate-600 mb-3">
                  <Microchip size={16} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">GPU (NPU)</p>
                <p className="text-2xl font-black text-slate-900 mb-2">45%</p>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-accent rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-[16px] border border-slate-100 shadow-sm">
                <div className="w-8 h-8 bg-slate-100 rounded-[8px] flex items-center justify-center text-slate-600 mb-3">
                  <Network size={16} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Memory</p>
                <p className="text-2xl font-black text-slate-900 mb-2">78%</p>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-[16px] border border-slate-100 shadow-sm">
                <div className="w-8 h-8 bg-slate-100 rounded-[8px] flex items-center justify-center text-slate-600 mb-3">
                  <Activity size={16} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Latency</p>
                <p className="text-2xl font-black text-emerald-500 mb-2">42<span className="text-sm text-emerald-600/50">ms</span></p>
                <div className="flex items-center gap-1 mt-1">
                   <div className="w-full h-1 bg-emerald-500 rounded-full"></div>
                   <div className="w-full h-1 bg-emerald-500 rounded-full"></div>
                   <div className="w-full h-1 bg-emerald-500/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Export Options */}
        <div className="glass-card-vibrant p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-black text-slate-900 mb-1">Data Export</h3>
              <p className="text-xs font-medium text-slate-500">Download telemetry logs for offline analysis.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 rounded-[16px] text-sm font-bold transition-all shadow-sm active:scale-95 flex items-center gap-2">
                <Download size={16} /> CSV
              </button>
              <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 rounded-[16px] text-sm font-bold transition-all shadow-sm active:scale-95 flex items-center gap-2">
                <Download size={16} /> JSON
              </button>
              <button className="px-5 py-2.5 bg-slate-900 text-white hover:bg-brand-accent rounded-[16px] text-sm font-bold transition-all shadow-md active:scale-95 flex items-center gap-2">
                <BarChart2 size={16} /> Generate PDF
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  ArrowUp, 
  ArrowLeft, 
  ArrowRight, 
  ArrowDown, 
  Square, 
  RefreshCw, 
  MoveVertical, 
  Search, 
  Camera, 
  StopCircle, 
  Video, 
  Mic, 
  Check, 
  X, 
  Crosshair, 
  Activity, 
  Plus,
  Clock,
  Settings2,
  Gamepad2,
  AlertTriangle
} from 'lucide-react';

export default function RobotControl() {
  const [speed, setSpeed] = useState(50);
  const [sensitivity, setSensitivity] = useState(50);
  const [recordingActive, setRecordingActive] = useState(false);

  const [autonomousModes] = useState([
    { id: 1, name: 'Patrol Route', description: 'Automatic patrolling' },
    { id: 2, name: 'Cleaning Mode', description: 'Systematic cleaning' },
    { id: 3, name: 'Surveillance', description: 'Room monitoring' },
  ]);

  const [commandHistory] = useState([
    { id: 1, cmd: 'Forward 50cm', status: 'executed', time: '2m ago' },
    { id: 2, cmd: 'Turn Left 90°', status: 'executed', time: '3m ago' },
    { id: 3, cmd: 'Take Photo', status: 'executed', time: '5m ago' },
  ]);

  const [schedules] = useState([
    { id: 1, name: 'Morning Patrol', time: '09:00 AM', enabled: true },
    { id: 2, name: 'Evening Sweep', time: '06:00 PM', enabled: true },
  ]);

  const handleManualControl = (direction) => {
    console.log(`Moving: ${direction}`);
    // Add to command history
  };

  const handleEmergencyStop = () => {
    console.log('EMERGENCY STOP ACTIVATED');
    alert('Emergency stop activated! Robot halted.');
  };

  const handleVoiceCommand = () => {
    console.log('Starting voice command...');
    alert('Voice command feature: Listen for speech input');
  };

  return (
    <div className="font-sans animate-in fade-in duration-500 pb-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Teleoperation Interface</h1>
        <p className="text-slate-500 font-medium text-sm">Direct manual and autonomous directive control</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Controls */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Kinematic Drive System */}
          <div className="glass-card-vibrant p-8">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-brand-accent/10 rounded-[12px] flex items-center justify-center text-brand-accent">
                  <Gamepad2 size={20} />
               </div>
               <div>
                  <h3 className="text-lg font-black text-slate-900">Kinematic Drive System</h3>
                  <p className="text-sm font-medium text-slate-500">Real-time low-latency motor control</p>
               </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-10 items-center justify-between mt-8">
              {/* Directional Pad */}
              <div className="relative w-48 h-48 flex-shrink-0">
                <div className="absolute inset-0 bg-slate-50 rounded-full border-4 border-slate-100 shadow-inner flex items-center justify-center">
                   <div className="w-20 h-20 bg-slate-200/50 rounded-full"></div>
                </div>
                
                <button 
                  className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-14 bg-white hover:bg-slate-100 text-slate-700 rounded-[12px] shadow-sm border border-slate-200 flex items-center justify-center transition-all active:scale-95 z-10"
                  onClick={() => handleManualControl('forward')}
                >
                  <ArrowUp size={24} />
                </button>
                <button 
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-14 bg-white hover:bg-slate-100 text-slate-700 rounded-[12px] shadow-sm border border-slate-200 flex items-center justify-center transition-all active:scale-95 z-10"
                  onClick={() => handleManualControl('backward')}
                >
                  <ArrowDown size={24} />
                </button>
                <button 
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-14 h-12 bg-white hover:bg-slate-100 text-slate-700 rounded-[12px] shadow-sm border border-slate-200 flex items-center justify-center transition-all active:scale-95 z-10"
                  onClick={() => handleManualControl('left')}
                >
                  <ArrowLeft size={24} />
                </button>
                <button 
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-14 h-12 bg-white hover:bg-slate-100 text-slate-700 rounded-[12px] shadow-sm border border-slate-200 flex items-center justify-center transition-all active:scale-95 z-10"
                  onClick={() => handleManualControl('right')}
                >
                  <ArrowRight size={24} />
                </button>
                <button 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-full shadow-md border-2 border-rose-200 flex items-center justify-center transition-all active:scale-95 z-20"
                  onClick={() => handleManualControl('stop')}
                >
                  <Square size={20} className="fill-current" />
                </button>
              </div>

              {/* Sliders & E-Stop */}
              <div className="w-full space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                     <label htmlFor="speed" className="text-sm font-bold text-slate-700 flex items-center gap-2"><Settings2 size={16} /> Velocity Limit</label>
                     <span className="text-xs font-black bg-slate-100 px-2 py-1 rounded-md text-slate-600">{speed}%</span>
                  </div>
                  <input
                    type="range"
                    id="speed"
                    min="0"
                    max="100"
                    value={speed}
                    onChange={(e) => setSpeed(e.target.value)}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                     <label htmlFor="sensitivity" className="text-sm font-bold text-slate-700 flex items-center gap-2"><Crosshair size={16} /> Gimbal Sensitivity</label>
                     <span className="text-xs font-black bg-slate-100 px-2 py-1 rounded-md text-slate-600">{sensitivity}%</span>
                  </div>
                  <input
                    type="range"
                    id="sensitivity"
                    min="0"
                    max="100"
                    value={sensitivity}
                    onChange={(e) => setSensitivity(e.target.value)}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                  />
                </div>

                <button 
                  className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-[16px] font-black text-sm transition-all shadow-[0_8px_30px_rgba(244,63,94,0.3)] hover:shadow-[0_8px_30px_rgba(244,63,94,0.5)] active:scale-95 mt-4 group"
                  onClick={handleEmergencyStop}
                >
                  <span className="flex items-center justify-center gap-2 group-hover:scale-105 transition-transform"><AlertTriangle size={20} className="animate-pulse" /> EMERGENCY HALT</span>
                </button>
              </div>
            </div>
          </div>

          {/* Camera Controls */}
          <div className="glass-card-vibrant p-8">
            <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2"><Camera size={18} className="text-brand-accent" /> Optics & Sensors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: RefreshCw, label: 'Pan Gimbal' },
                { icon: MoveVertical, label: 'Tilt Gimbal' },
                { icon: Search, label: 'Digital Zoom' },
                { icon: Camera, label: 'Capture Frame' },
              ].map((btn, i) => (
                <button key={i} className="py-3 bg-white border border-slate-200 hover:border-brand-accent/30 hover:bg-brand-accent/5 text-slate-700 rounded-[16px] text-xs font-bold transition-all shadow-sm flex flex-col items-center justify-center gap-2 active:scale-95">
                  <btn.icon size={18} className="text-slate-400" /> {btn.label}
                </button>
              ))}
              <button 
                className={`col-span-2 md:col-span-4 py-4 rounded-[16px] text-sm font-black transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 ${recordingActive ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-[0_8px_30px_rgba(244,63,94,0.3)]' : 'bg-slate-900 hover:bg-brand-accent text-white'}`}
                onClick={() => setRecordingActive(!recordingActive)}
              >
                {recordingActive ? <><StopCircle size={18} className="animate-pulse" /> Stop Recording</> : <><Video size={18} /> Initiate Stream Recording</>}
              </button>
            </div>
          </div>

          {/* Voice Commands */}
          <div className="glass-card-vibrant p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2"><Mic size={18} className="text-indigo-500" /> NLP Directives</h3>
                <p className="text-sm text-slate-500 font-medium">Issue vocal commands via edge LLM</p>
              </div>
              <button 
                className="w-12 h-12 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center transition-all shadow-sm border border-indigo-200 active:scale-95 relative"
                onClick={handleVoiceCommand}
              >
                 <Mic size={20} />
                 <span className="absolute top-0 right-0 w-3 h-3 bg-indigo-500 border-2 border-white rounded-full animate-pulse"></span>
              </button>
            </div>
            
            <div className="p-4 bg-white rounded-[16px] border border-slate-100 shadow-sm mt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Recognized Syntax:</p>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-md">"Initiate patrol sequence"</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-md">"Halt all movement"</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-md">"Return to dock"</span>
                <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-md">"Scan perimeter"</span>
              </div>
            </div>
          </div> 
        </div>

        {/* Right Column: Autonomous & Logs */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Autonomous Modes */}
          <div className="glass-card-vibrant p-6">
            <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2"><Activity size={16} className="text-emerald-500" /> Autonomous Behaviors</h3>
            <div className="space-y-3">
              {autonomousModes.map(mode => (
                <button key={mode.id} className="w-full p-4 bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 rounded-[16px] text-left transition-all shadow-sm group">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700">{mode.name}</h4>
                    <ArrowRight size={14} className="text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-slate-500 font-medium text-xs mt-1 group-hover:text-emerald-600/70">{mode.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Scheduled Routines */}
          <div className="glass-card-vibrant p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-black text-slate-900 flex items-center gap-2"><Clock size={16} className="text-amber-500" /> Cron Tasks</h3>
              <button className="p-1.5 bg-amber-50 text-amber-600 rounded-md hover:bg-amber-100 transition-colors">
                <Plus size={14} />
              </button>
            </div>
            <div className="space-y-3">
              {schedules.map(schedule => (
                <div key={schedule.id} className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-[12px] shadow-sm">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{schedule.name}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{schedule.time}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={schedule.enabled} readOnly className="sr-only peer" />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-accent"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Command History */}
          <div className="glass-card-vibrant p-6 flex-1">
            <h3 className="text-sm font-black text-slate-900 mb-4 flex items-center gap-2"><Activity size={16} className="text-brand-secondary" /> Execution Log</h3>
            <div className="space-y-3">
              {commandHistory.map(cmd => (
                <div key={cmd.id} className="p-3 bg-white rounded-[12px] border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-start">
                     <p className="text-sm font-bold text-slate-700">{cmd.cmd}</p>
                     <span className={`text-xs ${cmd.status === 'executed' ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {cmd.status === 'executed' ? <Check size={14} /> : <X size={14} />}
                     </span>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">{cmd.time}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  Home, 
  Cpu, 
  Layers, 
  Clock, 
  Lightbulb, 
  Thermometer, 
  Lock, 
  Fan, 
  Bell, 
  Droplets, 
  Plus, 
  Settings2, 
  Trash2, 
  Play,
  Edit3,
  ArrowRight
} from 'lucide-react';

export default function SmartHome() {
  const [devices] = useState([
    { id: 1, name: 'Living Room Lights', type: 'light', status: 'on', value: 80, icon: Lightbulb },
    { id: 2, name: 'AC Unit', type: 'climate', status: 'on', value: 22, icon: Thermometer },
    { id: 3, name: 'Front Door Lock', type: 'lock', status: 'locked', value: null, icon: Lock },
    { id: 4, name: 'Kitchen Fan', type: 'fan', status: 'off', value: 0, icon: Fan },
    { id: 5, name: 'Alarm System', type: 'alarm', status: 'armed', value: null, icon: Bell },
    { id: 6, name: 'Water Sprinkler', type: 'water', status: 'off', value: null, icon: Droplets },
  ]);

  const [automationRules] = useState([
    {
      id: 1,
      name: 'Motion Alert',
      trigger: 'Motion detected',
      action: 'Robot alerts user + Flash lights',
      enabled: true,
    },
    {
      id: 2,
      name: 'Gas Leak Response',
      trigger: 'Gas sensor > 100 ppm',
      action: 'Open windows + Alert admin',
      enabled: true,
    },
    {
      id: 3,
      name: 'Door Opening',
      trigger: 'Front door opened',
      action: 'Start robot patrol + Activate cameras',
      enabled: true,
    },
  ]);

  const [scenes] = useState([
    { id: 1, name: 'Away Mode', devices: 5, description: 'Secure house and activate patrol' },
    { id: 2, name: 'Movie Night', devices: 3, description: 'Dim lights and lower AC' },
    { id: 3, name: 'Sleep Mode', devices: 4, description: 'Lock doors and enable night monitoring' },
  ]);

  const [schedules] = useState([
    { id: 1, name: 'Morning Clean', type: 'daily', time: '08:00 AM', enabled: true },
    { id: 2, name: 'Evening Patrol', type: 'daily', time: '06:00 PM', enabled: true },
    { id: 3, name: 'Night Monitoring', type: 'daily', time: '10:00 PM', enabled: true },
  ]);

  const [activeTab, setActiveTab] = useState('devices');
  const [showAddRule, setShowAddRule] = useState(false);
  const [showAddSchedule, setShowAddSchedule] = useState(false);

  return (
    <div className="font-sans animate-in fade-in duration-500 pb-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Smart Home & IoT Integration</h1>
        <p className="text-slate-500 font-medium text-sm">Orchestrate your robotic agent with the connected home ecosystem</p>
      </div>

      <div className="space-y-8">
        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-slate-200 pb-2 overflow-x-auto custom-scrollbar">
          {[
            { id: 'devices', label: 'IoT Devices', icon: Cpu },
            { id: 'automation', label: 'Automation Rules', icon: Home },
            { id: 'scenes', label: 'Macro Scenes', icon: Layers },
            { id: 'schedules', label: 'Schedules', icon: Clock }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-sm font-bold rounded-[16px] transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'bg-brand-accent/10 text-brand-accent shadow-sm' 
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <tab.icon size={16} /> {tab.label}
            </button>
          ))}
        </div>

        {/* Devices Section */}
        {activeTab === 'devices' && (
          <div className="glass-card-vibrant p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2"><Cpu size={20} className="text-brand-accent"/> Connected IoT Fleet</h3>
              <button className="px-5 py-2.5 bg-slate-900 text-white hover:bg-brand-accent rounded-[16px] text-sm font-bold transition-all shadow-md active:scale-95 flex items-center gap-2">
                <Plus size={16} /> Add Device
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devices.map(device => {
                const Icon = device.icon;
                const isActive = device.status === 'on' || device.status === 'locked' || device.status === 'armed';
                return (
                  <div key={device.id} className="p-5 bg-white border border-slate-100 rounded-[20px] shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                    <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-[24px] opacity-20 group-hover:opacity-40 transition-opacity ${isActive ? 'bg-brand-accent' : 'bg-slate-400'}`}></div>
                    
                    <div className="flex justify-between items-start mb-4 relative z-10">
                      <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center ${isActive ? 'bg-brand-accent/10 text-brand-accent' : 'bg-slate-100 text-slate-400'}`}>
                         <Icon size={24} />
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={isActive} readOnly className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-accent"></div>
                      </label>
                    </div>
                    
                    <div className="relative z-10">
                      <h4 className="text-base font-black text-slate-900 mb-1 line-clamp-1">{device.name}</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">{device.type}</p>
                      
                      {device.value !== null ? (
                        <div className="mb-2">
                          <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={device.value}
                            readOnly
                            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                          />
                          <p className="text-xs font-black text-slate-600 mt-2 text-right">{device.value}%</p>
                        </div>
                      ) : (
                        <div className="h-[34px] flex items-center">
                           <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md ${isActive ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>{device.status}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2 mt-4 relative z-10 pt-4 border-t border-slate-100">
                      <button className="flex-1 py-2 text-slate-500 hover:text-brand-accent hover:bg-brand-accent/5 rounded-[12px] text-xs font-bold transition-all flex items-center justify-center gap-1.5">
                        <Settings2 size={14} /> Setup
                      </button>
                      <button className="py-2 px-3 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-[12px] transition-all">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Automation Rules Section */}
        {activeTab === 'automation' && (
          <div className="glass-card-vibrant p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2"><Home size={20} className="text-indigo-500"/> IFTTT Rules</h3>
              <button 
                className={`px-5 py-2.5 rounded-[16px] text-sm font-bold transition-all flex items-center gap-2 shadow-sm ${showAddRule ? 'bg-rose-50 text-rose-600 border border-rose-200' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'}`}
                onClick={() => setShowAddRule(!showAddRule)}
              >
                {showAddRule ? 'Cancel' : <><Plus size={16} /> Create Rule</>}
              </button>
            </div>

            {showAddRule && (
              <div className="mb-6 p-6 bg-white rounded-[20px] border-2 border-brand-accent/20 shadow-sm animate-in slide-in-from-top-4">
                <h4 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2"><Settings2 size={18} className="text-brand-accent"/> Define New Logic</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5 ml-1">Rule Identifier</label>
                    <input type="text" placeholder="e.g. Midnight Intruder Protocol" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all placeholder:text-slate-400" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5 ml-1">Trigger Condition (IF)</label>
                      <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all appearance-none cursor-pointer">
                        <option>Motion detected</option>
                        <option>Door opened</option>
                        <option>Temperature &gt; 30°C</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5 ml-1">Execution Action (THEN)</label>
                      <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all appearance-none cursor-pointer">
                        <option>Start robot patrol</option>
                        <option>Activate all lights</option>
                        <option>Sound alarm system</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-2 flex justify-end">
                    <button className="px-6 py-3 bg-slate-900 hover:bg-brand-accent text-white rounded-[16px] text-sm font-bold transition-all shadow-md active:scale-95">Save Rule Logic</button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {automationRules.map(rule => (
                <div key={rule.id} className="p-5 bg-white border border-slate-100 rounded-[20px] shadow-sm flex flex-col md:flex-row justify-between md:items-center gap-4 transition-all hover:shadow-md group">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-2 h-2 rounded-full ${rule.enabled ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-slate-300'}`}></div>
                      <h4 className="text-base font-black text-slate-900">{rule.name}</h4>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm font-medium">
                      <p className="text-slate-600 bg-slate-50 px-3 py-1.5 rounded-[10px] border border-slate-100"><strong className="text-slate-400 mr-2 text-[10px] uppercase tracking-widest">IF</strong> {rule.trigger}</p>
                      <ArrowRight size={14} className="hidden sm:block text-slate-300" />
                      <p className="text-brand-accent bg-brand-accent/5 px-3 py-1.5 rounded-[10px] border border-brand-accent/10"><strong className="text-brand-accent/60 mr-2 text-[10px] uppercase tracking-widest">THEN</strong> {rule.action}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-4 md:pt-0 border-t border-slate-100 md:border-t-0 md:pl-4 md:border-l md:border-slate-100">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={rule.enabled} readOnly className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 rounded-[10px] transition-all">
                        <Edit3 size={16} />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-[10px] transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scenes Section */}
        {activeTab === 'scenes' && (
          <div className="glass-card-vibrant p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2"><Layers size={20} className="text-amber-500"/> Macro Environments</h3>
              <button className="px-5 py-2.5 bg-slate-900 text-white hover:bg-brand-accent rounded-[16px] text-sm font-bold transition-all shadow-md active:scale-95 flex items-center gap-2">
                <Plus size={16} /> Create Macro
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scenes.map((scene, index) => {
                const gradients = [
                  'from-indigo-500 to-purple-500',
                  'from-rose-500 to-orange-500',
                  'from-emerald-500 to-teal-500'
                ];
                const gradient = gradients[index % gradients.length];
                return (
                  <div key={scene.id} className="p-1 rounded-[24px] bg-gradient-to-br from-slate-200 to-slate-100 hover:from-brand-accent/40 hover:to-brand-accent/10 transition-all shadow-sm group">
                    <div className="bg-white rounded-[23px] p-6 h-full flex flex-col justify-between group-hover:bg-white/95 transition-all">
                      <div>
                        <div className={`w-12 h-12 rounded-[14px] bg-gradient-to-br ${gradient} text-white flex items-center justify-center mb-4 shadow-md`}>
                          <Layers size={24} />
                        </div>
                        <h4 className="text-xl font-black text-slate-900 mb-2">{scene.name}</h4>
                        <p className="text-sm font-medium text-slate-500 mb-4 line-clamp-2">{scene.description}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-5">
                          <Cpu size={14} className="text-slate-400" />
                          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">{scene.devices} Active Nodes</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 py-3 bg-slate-900 text-white hover:bg-brand-accent rounded-[14px] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95">
                            <Play size={14} className="fill-current" /> Execute
                          </button>
                          <button className="w-12 h-[44px] border-2 border-slate-100 text-slate-400 hover:border-slate-300 hover:text-slate-700 rounded-[14px] flex items-center justify-center transition-all active:scale-95">
                            <Edit3 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Schedules Section */}
        {activeTab === 'schedules' && (
          <div className="glass-card-vibrant p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2"><Clock size={20} className="text-rose-500"/> Temporal Execution</h3>
              <button 
                className={`px-5 py-2.5 rounded-[16px] text-sm font-bold transition-all flex items-center gap-2 shadow-sm ${showAddSchedule ? 'bg-rose-50 text-rose-600 border border-rose-200' : 'bg-slate-900 text-white hover:bg-brand-accent'}`}
                onClick={() => setShowAddSchedule(!showAddSchedule)}
              >
                {showAddSchedule ? 'Cancel' : <><Plus size={16} /> Add Task</>}
              </button>
            </div>

            {showAddSchedule && (
              <div className="mb-6 p-6 bg-white rounded-[20px] border-2 border-brand-accent/20 shadow-sm animate-in slide-in-from-top-4">
                <h4 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2"><Clock size={18} className="text-brand-accent"/> Define Cron Task</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5 ml-1">Task Identifier</label>
                    <input type="text" placeholder="e.g. Daily Perimeter Sweep" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all placeholder:text-slate-400" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5 ml-1">Frequency</label>
                      <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all appearance-none cursor-pointer">
                        <option>Daily</option>
                        <option>Weekly on Weekdays</option>
                        <option>Weekends Only</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5 ml-1">Execution Time</label>
                      <input type="time" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-[16px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all" />
                    </div>
                  </div>
                  <div className="pt-2 flex justify-end">
                    <button className="px-6 py-3 bg-slate-900 hover:bg-brand-accent text-white rounded-[16px] text-sm font-bold transition-all shadow-md active:scale-95">Save Cron Task</button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {schedules.map(schedule => (
                <div key={schedule.id} className="p-5 bg-white border border-slate-100 rounded-[20px] shadow-sm flex justify-between items-center transition-all hover:shadow-md group">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center border ${schedule.enabled ? 'bg-brand-accent/10 text-brand-accent border-brand-accent/20' : 'bg-slate-50 text-slate-400 border-slate-100'}`}>
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-slate-900 mb-0.5">{schedule.name}</h4>
                      <p className="text-xs font-bold text-slate-500 flex items-center gap-2">
                        <span className="uppercase tracking-widest bg-slate-100 px-2 py-0.5 rounded-md text-[10px]">{schedule.type}</span>
                        {schedule.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={schedule.enabled} readOnly className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                    <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-[10px] transition-all opacity-0 group-hover:opacity-100">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

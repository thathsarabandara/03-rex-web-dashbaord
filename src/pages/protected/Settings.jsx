import React, { useState } from 'react';
import { 
  Settings2, 
  Cpu, 
  Users, 
  ShieldCheck, 
  BellRing, 
  FileText, 
  CheckCircle2, 
  Key, 
  Save, 
  HardDrive, 
  Gauge, 
  Zap,
  Clock,
  Terminal,
  Smartphone,
  Mail,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    maxSpeed: 50,
    maxTurnSpeed: 30,
    autonomyThreshold: 85,
    sensorSensitivity: 75,
    backupSchedule: 'daily',
    notificationsEnabled: true,
    emailNotifications: true,
    smsNotifications: false,
  });

  const [users] = useState([
    { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Admin', status: 'active', avatar: 'AU' },
    { id: 2, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'active', avatar: 'JD' },
    { id: 3, name: 'Jane Smith', email: 'jane@example.com', role: 'Guest', status: 'inactive', avatar: 'JS' },
  ]);

  const [apiKeys] = useState([
    { id: 1, name: 'Mobile App Client', key: 'sk_live_1234****************', created: '2024-01-15', lastUsed: '2 days ago' },
    { id: 2, name: 'Third Party Integration', key: 'sk_live_5678****************', created: '2024-01-10', lastUsed: '5 days ago' },
  ]);

  const [auditLogs] = useState([
    { id: 1, action: 'User Login', user: 'admin@example.com', timestamp: '2024-02-08 10:30:15', status: 'success' },
    { id: 2, action: 'Password Changed', user: 'john@example.com', timestamp: '2024-02-08 09:15:22', status: 'success' },
    { id: 3, action: 'Robot Configuration Updated', user: 'admin@example.com', timestamp: '2024-02-07 15:45:01', status: 'success' },
    { id: 4, action: 'Failed Login Attempt', user: 'unknown@example.com', timestamp: '2024-02-07 14:20:00', status: 'error' },
  ]);

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const tabs = [
    { id: 'general', label: 'System', icon: HardDrive },
    { id: 'robot', label: 'Robot Config', icon: Cpu },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'security', label: 'Security', icon: ShieldCheck },
    { id: 'notifications', label: 'Notifications', icon: BellRing },
    { id: 'audit', label: 'Audit Logs', icon: FileText },
  ];

  return (
    <div className="font-sans animate-in fade-in duration-500 pb-10">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">System Configuration</h1>
          <p className="text-slate-500 font-medium text-sm">Manage preferences, security, and access controls</p>
        </div>
        <button className="px-5 py-2.5 bg-brand-accent text-white rounded-[16px] text-sm font-bold shadow-md hover:bg-brand-accent/90 active:scale-95 transition-all flex items-center gap-2">
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="glass-card-vibrant p-4 flex flex-col gap-2">
            {tabs.map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full px-4 py-3 rounded-[16px] text-sm font-bold transition-all flex items-center gap-3 ${
                  activeTab === tab.id 
                    ? 'bg-slate-900 text-white shadow-sm' 
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <tab.icon size={18} className={activeTab === tab.id ? 'text-white' : 'text-slate-400'} /> 
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 animate-in slide-in-from-right-4 duration-500">
          
          {/* General Settings */}
          {activeTab === 'general' && (
            <div className="glass-card-vibrant p-8">
              <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2"><HardDrive size={20} className="text-brand-accent"/> Environment Info</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                 <div className="p-5 bg-white border border-slate-100 rounded-[20px] shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Firmware Version</p>
                    <p className="text-2xl font-black text-slate-900">v2.1.0-beta</p>
                    <p className="text-xs font-bold text-emerald-500 mt-2 flex items-center gap-1"><CheckCircle2 size={14}/> Up to date</p>
                 </div>
                 <div className="p-5 bg-white border border-slate-100 rounded-[20px] shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Last Synchronized</p>
                    <p className="text-2xl font-black text-slate-900">Today</p>
                    <p className="text-xs font-bold text-slate-500 mt-2">14:32:00 UTC</p>
                 </div>
                 <div className="p-5 bg-white border border-slate-100 rounded-[20px] shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Storage Usage</p>
                    <p className="text-2xl font-black text-slate-900">2.4<span className="text-sm text-slate-500 ml-1">GB</span></p>
                    <div className="h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
                       <div className="h-full bg-brand-accent w-[35%] rounded-full"></div>
                    </div>
                 </div>
              </div>

              <h4 className="text-sm font-black text-slate-900 mb-4 border-b border-slate-100 pb-2">Maintenance</h4>
              <div className="space-y-4">
                 <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-[16px]">
                    <div>
                       <p className="text-sm font-black text-slate-900">Automated Backups</p>
                       <p className="text-xs font-medium text-slate-500">Frequency of telemetry and config snapshots.</p>
                    </div>
                    <select 
                       value={settings.backupSchedule}
                       onChange={(e) => handleSettingChange('backupSchedule', e.target.value)}
                       className="px-4 py-2 bg-white border border-slate-200 rounded-[12px] text-sm font-bold text-slate-900 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 cursor-pointer"
                    >
                       <option value="hourly">Hourly</option>
                       <option value="daily">Daily</option>
                       <option value="weekly">Weekly</option>
                    </select>
                 </div>
                 
                 <div className="flex justify-between items-center p-4 bg-slate-50 border border-slate-100 rounded-[16px]">
                    <div>
                       <p className="text-sm font-black text-slate-900">System Logs</p>
                       <p className="text-xs font-medium text-slate-500">Export diagnostic data for debugging.</p>
                    </div>
                    <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 rounded-[12px] text-sm font-bold transition-all flex items-center gap-2">
                       <FileText size={16} /> Export Logs
                    </button>
                 </div>
              </div>
            </div>
          )}

          {/* Robot Settings */}
          {activeTab === 'robot' && (
            <div className="glass-card-vibrant p-8">
              <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2"><Cpu size={20} className="text-indigo-500"/> Kinematic & Sensor Tuning</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1"><Gauge size={14}/> Max Linear Velocity</label>
                      <span className="text-lg font-black text-slate-900">{settings.maxSpeed}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={settings.maxSpeed}
                      onChange={(e) => handleSettingChange('maxSpeed', e.target.value)}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1"><Gauge size={14}/> Max Angular Velocity</label>
                      <span className="text-lg font-black text-slate-900">{settings.maxTurnSpeed}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={settings.maxTurnSpeed}
                      onChange={(e) => handleSettingChange('maxTurnSpeed', e.target.value)}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1"><Zap size={14}/> AI Autonomy Threshold</label>
                      <span className="text-lg font-black text-brand-accent">{settings.autonomyThreshold}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={settings.autonomyThreshold}
                      onChange={(e) => handleSettingChange('autonomyThreshold', e.target.value)}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1"><Terminal size={14}/> LIDAR Sensitivity</label>
                      <span className="text-lg font-black text-slate-900">{settings.sensorSensitivity}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={settings.sensorSensitivity}
                      onChange={(e) => handleSettingChange('sensorSensitivity', e.target.value)}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-700"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-amber-50 rounded-[16px] border border-amber-100 flex gap-3 items-start">
                 <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck size={16} />
                 </div>
                 <div>
                    <h4 className="text-sm font-black text-amber-900">Safety Limit Override</h4>
                    <p className="text-xs font-medium text-amber-800/80 mt-1">Adjusting physical velocity constraints above 80% requires administrator PIN confirmation. Extreme limits may cause hardware strain.</p>
                 </div>
              </div>

            </div>
          )}

          {/* Users Management */}
          {activeTab === 'users' && (
            <div className="glass-card-vibrant p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2"><Users size={20} className="text-emerald-500"/> Access Control</h3>
                <button className="px-4 py-2 bg-slate-900 text-white hover:bg-emerald-500 rounded-[12px] text-sm font-bold transition-all shadow-sm">
                  Invite User
                </button>
              </div>
              <div className="space-y-3">
                {users.map(user => (
                  <div key={user.id} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-[16px] shadow-sm hover:shadow-md transition-all group">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-black text-sm border border-slate-200">
                          {user.avatar}
                       </div>
                       <div>
                         <p className="text-sm font-black text-slate-900">{user.name}</p>
                         <p className="text-xs font-medium text-slate-500">{user.email}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right hidden sm:block">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Role</p>
                        <p className="text-sm font-black text-slate-700">{user.role}</p>
                      </div>
                      <div className="w-24 flex justify-end">
                         <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md ${
                           user.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                         }`}>
                           {user.status}
                         </span>
                      </div>
                      <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-brand-accent hover:bg-brand-accent/10 rounded-[8px] transition-all opacity-0 group-hover:opacity-100">
                         <Settings2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security */}
          {activeTab === 'security' && (
            <div className="glass-card-vibrant p-8">
              <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2"><ShieldCheck size={20} className="text-rose-500"/> Security Protocol</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-5 bg-white border border-slate-100 rounded-[20px] shadow-sm">
                  <div>
                    <h4 className="text-base font-black text-slate-900">Two-Factor Authentication (2FA)</h4>
                    <p className="text-xs font-medium text-slate-500 mt-1">Require an extra security step during login.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-accent"></div>
                  </label>
                </div>

                <div className="bg-slate-900 rounded-[20px] p-1 shadow-md">
                   <div className="bg-white rounded-[19px] p-6">
                      <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                        <div>
                          <h4 className="text-base font-black text-slate-900 flex items-center gap-2"><Key size={18} className="text-amber-500"/> API Authentication Keys</h4>
                          <p className="text-xs font-medium text-slate-500 mt-1">Manage programmatic access tokens.</p>
                        </div>
                        <button className="px-4 py-2 bg-slate-900 text-white rounded-[12px] text-xs font-bold transition-all shadow-sm">
                          Generate New
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        {apiKeys.map(key => (
                          <div key={key.id} className="p-4 bg-slate-50 border border-slate-200 rounded-[16px] hover:border-slate-300 transition-all">
                            <div className="flex justify-between items-start mb-2">
                              <p className="font-black text-slate-900 text-sm">{key.name}</p>
                              <span className="text-[10px] font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded">Live</span>
                            </div>
                            <div className="font-mono text-xs text-brand-accent bg-brand-accent/5 px-3 py-2 rounded-[8px] mb-3 border border-brand-accent/10">
                              {key.key}
                            </div>
                            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
                               <span>Created: {key.created}</span>
                               <span>Last used: {key.lastUsed}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === 'notifications' && (
            <div className="glass-card-vibrant p-8">
              <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2"><BellRing size={20} className="text-amber-500"/> Alerts & Comm.</h3>
              
              <div className="bg-white border border-slate-100 rounded-[24px] p-2 shadow-sm">
                 <div className="space-y-1">
                   <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-[16px] transition-all">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                           <BellRing size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900">Master Alert Toggle</p>
                          <p className="text-xs font-medium text-slate-500">Enable or disable all system notifications.</p>
                        </div>
                     </div>
                     <label className="relative inline-flex items-center cursor-pointer">
                       <input 
                         type="checkbox" 
                         checked={settings.notificationsEnabled}
                         onChange={(e) => handleSettingChange('notificationsEnabled', e.target.checked)}
                         className="sr-only peer" 
                       />
                       <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                     </label>
                   </div>
                   
                   <div className="h-px bg-slate-100 mx-4"></div>

                   <div className={`flex items-center justify-between p-4 rounded-[16px] transition-all ${!settings.notificationsEnabled ? 'opacity-50 pointer-events-none' : 'hover:bg-slate-50'}`}>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                           <Mail size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900">Email Digest</p>
                          <p className="text-xs font-medium text-slate-500">Daily reports and critical error logs.</p>
                        </div>
                     </div>
                     <label className="relative inline-flex items-center cursor-pointer">
                       <input 
                         type="checkbox" 
                         checked={settings.emailNotifications}
                         onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                         className="sr-only peer" 
                       />
                       <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                     </label>
                   </div>

                   <div className="h-px bg-slate-100 mx-4"></div>

                   <div className={`flex items-center justify-between p-4 rounded-[16px] transition-all ${!settings.notificationsEnabled ? 'opacity-50 pointer-events-none' : 'hover:bg-slate-50'}`}>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                           <Smartphone size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900">SMS Urgent Alerts</p>
                          <p className="text-xs font-medium text-slate-500">Immediate texts for security breaches or hardware failure.</p>
                        </div>
                     </div>
                     <label className="relative inline-flex items-center cursor-pointer">
                       <input 
                         type="checkbox" 
                         checked={settings.smsNotifications}
                         onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
                         className="sr-only peer" 
                       />
                       <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                     </label>
                   </div>
                 </div>
              </div>
            </div>
          )}

          {/* Audit Logs */}
          {activeTab === 'audit' && (
            <div className="glass-card-vibrant p-8">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-lg font-black text-slate-900 flex items-center gap-2"><FileText size={20} className="text-slate-700"/> Immutable Audit Trail</h3>
                 <button className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-[8px] text-[10px] font-bold uppercase tracking-widest transition-all">Download CSV</button>
              </div>
              
              <div className="bg-white border border-slate-100 rounded-[20px] shadow-sm overflow-hidden">
                <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                   {auditLogs.map((log, index) => (
                     <div key={log.id} className={`p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2 ${index !== auditLogs.length - 1 ? 'border-b border-slate-50' : ''} hover:bg-slate-50 transition-colors`}>
                       <div className="flex items-start gap-3">
                          <div className={`mt-0.5 flex-shrink-0 ${log.status === 'success' ? 'text-emerald-500' : 'text-rose-500'}`}>
                             {log.status === 'success' ? <CheckCircle2 size={16} /> : <Zap size={16} />}
                          </div>
                          <div>
                            <p className="text-sm font-black text-slate-900">{log.action}</p>
                            <p className="text-[10px] font-bold text-slate-500 mt-0.5">{log.user}</p>
                          </div>
                       </div>
                       <div className="text-right sm:text-left flex sm:flex-col items-end sm:items-end justify-between sm:justify-start">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest hidden sm:inline-block mb-1 ${log.status === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                             {log.status}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100 flex items-center gap-1">
                             <Clock size={10} /> {log.timestamp}
                          </span>
                       </div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

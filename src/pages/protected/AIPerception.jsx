import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Eye, 
  Map, 
  Cpu, 
  TrendingUp, 
  Activity, 
  CheckCircle2, 
  Target, 
  Route, 
  Settings2,
  Focus,
  Zap
} from 'lucide-react';

export default function AIPerception() {
  const [selectedView, setSelectedView] = useState('decision');
  const [confidenceThreshold, setConfidenceThreshold] = useState(70);

  const [decisionHistory] = useState([
    {
      id: 1,
      decision: 'Chose Route B',
      reason: 'Lower predicted occupancy, minimal obstruction',
      confidence: 92,
      timestamp: '10:35:20',
      type: 'navigation'
    },
    {
      id: 2,
      decision: 'Avoided Stairs',
      reason: 'Height sensor reading indicates steep decline',
      confidence: 98,
      timestamp: '10:34:15',
      type: 'safety'
    },
    {
      id: 3,
      decision: 'Initiated Patrol',
      reason: 'Motion detected + Low activity pattern identified',
      confidence: 85,
      timestamp: '10:33:00',
      type: 'action'
    },
  ]);

  const [objectRecognitionHistory] = useState([
    { id: 1, object: 'Cat', count: 3, lastSeen: '5m ago', confidence: 96 },
    { id: 2, object: 'Person (John)', count: 1, lastSeen: '12m ago', confidence: 94 },
    { id: 3, object: 'Chair', count: 5, lastSeen: '2m ago', confidence: 88 },
    { id: 4, object: 'Door Handle', count: 2, lastSeen: '15m ago', confidence: 91 },
  ]);

  const [gestureRecognitionHistory] = useState([
    { id: 1, gesture: 'Waving', confidence: 92, timestamp: '10:30:45' },
    { id: 2, gesture: 'Pointing', confidence: 87, timestamp: '10:25:30' },
    { id: 3, gesture: 'Thumbs Up', confidence: 95, timestamp: '10:20:15' },
  ]);

  const [pathPlanning] = useState({
    pathOptimization: 89,
    averageSpeed: 1.2,
    pathEfficiency: 87,
  });

  const [reinforcementLearning] = useState({
    totalEpisodes: 1250,
    currentEpisode: 1073,
    successRate: 87,
    averageReward: 2.45,
    explorationRate: 0.15,
  });

  return (
    <div className="font-sans animate-in fade-in duration-500 pb-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Cognitive Core</h1>
        <p className="text-slate-500 font-medium text-sm">Real-time inference, spatial reasoning, and behavioral adaptation</p>
      </div>

      <div className="space-y-8">
        {/* View Selector */}
        <div className="flex gap-2 border-b border-slate-200 pb-2 overflow-x-auto custom-scrollbar">
          {[
            { id: 'decision', label: 'Decision Logic', icon: BrainCircuit },
            { id: 'recognition', label: 'Vision Pipeline', icon: Eye },
            { id: 'planning', label: 'Spatial Nav', icon: Map },
            { id: 'learning', label: 'Model Training', icon: Cpu }
          ].map(view => (
            <button 
              key={view.id}
              onClick={() => setSelectedView(view.id)}
              className={`px-5 py-2.5 text-sm font-bold rounded-[16px] transition-all flex items-center gap-2 whitespace-nowrap ${
                selectedView === view.id 
                  ? 'bg-brand-accent/10 text-brand-accent shadow-sm' 
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <view.icon size={16} /> {view.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="animate-in slide-in-from-bottom-4 duration-500">
          
          {/* Decision Visualization */}
          {selectedView === 'decision' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div className="lg:col-span-1 space-y-6">
                <div className="glass-card-vibrant p-6">
                  <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2"><Settings2 size={18} className="text-brand-accent"/> Inference Threshold</h3>
                  <div className="mb-6">
                    <div className="flex justify-between items-end mb-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Confidence Cutoff</label>
                       <span className="text-xl font-black text-slate-900">{confidenceThreshold}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={confidenceThreshold}
                      onChange={(e) => setConfidenceThreshold(e.target.value)}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                    />
                  </div>
                  <div className="p-4 bg-brand-accent/5 rounded-[16px] border border-brand-accent/10">
                     <p className="text-xs font-bold text-slate-600 leading-snug">
                       Higher thresholds restrict autonomous actions to high-certainty events, increasing safety but potentially reducing responsiveness.
                     </p>
                  </div>
                </div>
                
                <div className="glass-card-vibrant p-6">
                   <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2"><Activity size={18} className="text-emerald-500"/> System State</h3>
                   <ul className="space-y-3">
                     <li className="flex justify-between items-center p-3 bg-white border border-slate-100 rounded-[12px]">
                        <span className="text-xs font-bold text-slate-500">Action Rate</span>
                        <span className="text-sm font-black text-slate-900">45/min</span>
                     </li>
                     <li className="flex justify-between items-center p-3 bg-white border border-slate-100 rounded-[12px]">
                        <span className="text-xs font-bold text-slate-500">Inference Delay</span>
                        <span className="text-sm font-black text-emerald-500">12ms</span>
                     </li>
                   </ul>
                </div>
              </div>

              <div className="lg:col-span-2 glass-card-vibrant p-8">
                <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                  <BrainCircuit size={20} className="text-indigo-500" /> Action Audit Log
                </h3>
                <div className="space-y-4">
                  {decisionHistory
                    .filter(d => d.confidence >= confidenceThreshold)
                    .map(decision => (
                      <div key={decision.id} className="p-5 bg-white border border-slate-100 rounded-[20px] shadow-sm flex flex-col sm:flex-row gap-4 group hover:border-brand-accent/30 transition-all">
                        <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 ${
                          decision.type === 'navigation' ? 'bg-blue-50 text-blue-500' :
                          decision.type === 'safety' ? 'bg-rose-50 text-rose-500' : 'bg-emerald-50 text-emerald-500'
                        }`}>
                           {decision.type === 'navigation' ? <Route size={20} /> :
                            decision.type === 'safety' ? <Zap size={20} /> : <Target size={20} />}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="text-base font-black text-slate-900">{decision.decision}</h4>
                            <div className="flex flex-col items-end">
                               <span className="px-2 py-1 bg-slate-900 text-white rounded-md text-[10px] font-black">{decision.confidence}%</span>
                               <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{decision.timestamp}</span>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-slate-600 bg-slate-50 p-3 rounded-[12px] border border-slate-100 mt-2">{decision.reason}</p>
                        </div>
                      </div>
                    ))}
                  {decisionHistory.filter(d => d.confidence >= confidenceThreshold).length === 0 && (
                     <div className="text-center p-8 border-2 border-dashed border-slate-200 rounded-[20px]">
                        <p className="text-sm font-bold text-slate-500">No decisions meet the current confidence threshold.</p>
                     </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Recognition History */}
          {selectedView === 'recognition' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card-vibrant p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2"><Eye size={20} className="text-brand-accent"/> Object Registry</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 px-2 py-1 rounded text-slate-500">YOLOv8 Stream</span>
                </div>
                <div className="space-y-3">
                  {objectRecognitionHistory.map(obj => (
                    <div key={obj.id} className="p-4 bg-white border border-slate-100 rounded-[16px] shadow-sm flex items-center justify-between group hover:-translate-y-0.5 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-accent/10 text-brand-accent rounded-[12px] flex items-center justify-center">
                          <Focus size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900">{obj.object}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">Last seen: {obj.lastSeen}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-black">{obj.confidence}%</span>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">Count: {obj.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card-vibrant p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2"><Target size={20} className="text-amber-500"/> Kinesics Analysis</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 px-2 py-1 rounded text-slate-500">PoseNet Stream</span>
                </div>
                <div className="space-y-3">
                  {gestureRecognitionHistory.map(gesture => (
                    <div key={gesture.id} className="p-4 bg-white border border-slate-100 rounded-[16px] shadow-sm flex items-center justify-between group hover:-translate-y-0.5 transition-all">
                       <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-[12px] flex items-center justify-center">
                          <Activity size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900">{gesture.gesture}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">{gesture.timestamp}</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-xs font-black">{gesture.confidence}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Path Planning */}
          {selectedView === 'planning' && (
            <div className="glass-card-vibrant p-8">
              <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2"><Map size={20} className="text-emerald-500"/> Spatial Navigation Planner</h3>
              
              <div className="bg-slate-900 rounded-[24px] p-2 border-4 border-slate-100 shadow-inner relative overflow-hidden h-72 mb-8 group">
                <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none"></div>
                <div className="relative z-10 w-full h-full border border-white/10 rounded-[18px] bg-slate-800/80 backdrop-blur-sm flex flex-col items-center justify-center overflow-hidden">
                   <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4 relative">
                      <div className="absolute inset-0 border border-emerald-500/50 rounded-full animate-ping"></div>
                      <Map size={32} />
                   </div>
                   <p className="text-white font-black">LIDAR Topography Map</p>
                   <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Real-time point cloud rendering</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-white border border-slate-100 rounded-[20px] shadow-sm relative overflow-hidden">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-[14px] flex items-center justify-center mb-4">
                     <TrendingUp size={24} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Route Optimization</p>
                  <p className="text-3xl font-black text-slate-900">{pathPlanning.pathOptimization}%</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500" style={{width: `${pathPlanning.pathOptimization}%`}}></div>
                </div>
                
                <div className="p-6 bg-white border border-slate-100 rounded-[20px] shadow-sm relative overflow-hidden">
                  <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-[14px] flex items-center justify-center mb-4">
                     <Zap size={24} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Kinematic Velocity</p>
                  <p className="text-3xl font-black text-slate-900">{pathPlanning.averageSpeed}<span className="text-sm text-slate-400 ml-1">m/s</span></p>
                </div>

                <div className="p-6 bg-white border border-slate-100 rounded-[20px] shadow-sm relative overflow-hidden">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-[14px] flex items-center justify-center mb-4">
                     <Activity size={24} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Nav Efficiency</p>
                  <p className="text-3xl font-black text-slate-900">{pathPlanning.pathEfficiency}%</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-500" style={{width: `${pathPlanning.pathEfficiency}%`}}></div>
                </div>
              </div>
            </div>
          )}

          {/* RL Training */}
          {selectedView === 'learning' && (
            <div className="glass-card-vibrant p-8">
              <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2"><Cpu size={20} className="text-brand-secondary"/> Continual Learning Metrics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="space-y-6">
                  <div className="bg-white border border-slate-100 rounded-[20px] p-6 shadow-sm">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Training Epoch</p>
                        <p className="text-2xl font-black text-slate-900">{reinforcementLearning.currentEpisode} <span className="text-sm font-bold text-slate-400">/ {reinforcementLearning.totalEpisodes}</span></p>
                      </div>
                      <div className="w-10 h-10 bg-brand-secondary/10 text-brand-secondary rounded-[12px] flex items-center justify-center">
                        <Cpu size={20} />
                      </div>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-secondary rounded-full relative"
                        style={{ width: `${(reinforcementLearning.currentEpisode / reinforcementLearning.totalEpisodes) * 100}%` }}
                      >
                         <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-r from-transparent to-white/30"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-slate-100 rounded-[20px] p-6 shadow-sm flex items-center gap-6">
                     <div className="w-16 h-16 rounded-full border-4 border-emerald-100 flex items-center justify-center relative">
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                           <circle cx="28" cy="28" r="28" className="fill-none stroke-emerald-500 stroke-[4]" strokeDasharray="175.93" strokeDashoffset={175.93 - (175.93 * reinforcementLearning.successRate) / 100} strokeLinecap="round" />
                        </svg>
                        <span className="text-sm font-black text-slate-900">{reinforcementLearning.successRate}%</span>
                     </div>
                     <div>
                        <h4 className="text-base font-black text-slate-900 mb-1">Task Success Rate</h4>
                        <p className="text-xs font-medium text-slate-500">Based on recent evaluation episodes</p>
                     </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900 rounded-[20px] p-6 flex flex-col justify-between shadow-md relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[30px] group-hover:bg-emerald-500/20 transition-all"></div>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 relative z-10">Mean Reward</p>
                     <p className="text-4xl font-black text-white mt-4 relative z-10">+{reinforcementLearning.averageReward}</p>
                     <div className="mt-4 flex items-center gap-2 text-emerald-400 text-xs font-bold relative z-10">
                        <TrendingUp size={14} /> Climbing trend
                     </div>
                  </div>
                  
                  <div className="bg-white border border-slate-100 rounded-[20px] p-6 flex flex-col justify-between shadow-sm">
                     <div className="flex justify-between items-start">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 w-1/2">Exploration Epsilon</p>
                        <div className="w-8 h-8 bg-amber-50 text-amber-500 rounded-[10px] flex items-center justify-center">
                           <Target size={16} />
                        </div>
                     </div>
                     <p className="text-3xl font-black text-slate-900 mt-4">{reinforcementLearning.explorationRate}</p>
                     <p className="text-[10px] font-bold text-slate-400 mt-2">Exploitation favored</p>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

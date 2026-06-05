import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  Film, 
  BookOpen, 
  MessageCircleQuestion, 
  Search, 
  PlayCircle,
  Cpu,
  Map,
  Home,
  Activity,
  Zap,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function Help() {
  const [activeTab, setActiveTab] = useState('guides');
  const [expandedGuide, setExpandedGuide] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [guides] = useState([
    {
      id: 1,
      title: 'Getting Started with REX-47',
      category: 'Basics',
      icon: Cpu,
      steps: [
        { step: 1, title: 'Power On Your Robot', desc: 'Press the power button on the side of the robot. LED should turn blue.' },
        { step: 2, title: 'Connect to Network', desc: 'Robot will create a WiFi hotspot. Connect your phone/computer to it.' },
        { step: 3, title: 'Access Dashboard', desc: 'Open browser and go to rex-47.local or 192.168.1.100' },
        { step: 4, title: 'Login', desc: 'Use default credentials: admin / password123' },
      ]
    },
    {
      id: 2,
      title: 'Manual Robot Control',
      category: 'Control',
      icon: Map,
      steps: [
        { step: 1, title: 'Open Control Center', desc: 'Navigate to Robot Control page from menu' },
        { step: 2, title: 'Use Arrow Buttons', desc: 'Click directional buttons to move robot' },
        { step: 3, title: 'Adjust Speed', desc: 'Use speed slider to control movement velocity' },
        { step: 4, title: 'Emergency Stop', desc: 'Press red STOP button to halt all movement' },
      ]
    },
    {
      id: 3,
      title: 'Setting Up IoT Devices',
      category: 'Smart Home',
      icon: Home,
      steps: [
        { step: 1, title: 'Add Device', desc: 'Go to Smart Home page and click + Add Device' },
        { step: 2, title: 'Select Device Type', desc: 'Choose from lights, locks, cameras, etc.' },
        { step: 3, title: 'Connect via WiFi', desc: 'Put device in pairing mode and select from list' },
        { step: 4, title: 'Test Device', desc: 'Toggle switch to confirm communication' },
      ]
    },
    {
      id: 4,
      title: 'Reading Telemetry Data',
      category: 'Monitoring',
      icon: Activity,
      steps: [
        { step: 1, title: 'Go to Monitoring Page', desc: 'Click Monitoring from main navigation' },
        { step: 2, title: 'View Sensor Data', desc: 'Check temperature, battery, distance sensors' },
        { step: 3, title: 'Analyze Graphs', desc: 'Select metrics and time range for analysis' },
        { step: 4, title: 'Export Data', desc: 'Download CSV or JSON for further analysis' },
      ]
    },
  ]);

  const [tutorials] = useState([
    { id: 1, title: 'First Run Setup', duration: '5 min' },
    { id: 2, title: 'Basic Movements', duration: '3 min' },
    { id: 3, title: 'Autonomous Patrol', duration: '6 min' },
    { id: 4, title: 'Smart Home Integration', duration: '8 min' },
    { id: 5, title: 'Understanding AI Decisions', duration: '10 min' },
    { id: 6, title: 'Emergency Situations', duration: '4 min' },
  ]);

  const [faqs] = useState([
    { id: 1, question: 'How do I reset my password?', answer: 'Click on "Forgot Password" on the login page and follow the email verification steps.' },
    { id: 2, question: 'Can I control multiple robots?', answer: 'Yes, you can add multiple robots to your account and switch between them using the robot selector.' },
    { id: 3, question: 'What is the battery life?', answer: 'REX-47 has a battery life of 8-10 hours with normal usage and 6 hours in high-performance mode.' },
    { id: 4, question: 'How do I update the robot firmware?', answer: 'Go to Settings > System > Check for Updates and follow the on-screen instructions.' },
    { id: 5, question: 'Is there a mobile app?', answer: 'Yes, REX-47 companion apps are available for iOS and Android on the respective app stores.' },
  ]);

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-sans animate-in fade-in duration-500 pb-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Knowledge Base</h1>
        <p className="text-slate-500 font-medium text-sm">Comprehensive documentation, tutorials, and support resources.</p>
      </div>

      <div className="space-y-8">
        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-slate-200 pb-2 overflow-x-auto custom-scrollbar">
          {[
            { id: 'guides', label: 'Setup Guides', icon: BookOpen },
            { id: 'tutorials', label: 'Video Tutorials', icon: Film },
            { id: 'faq', label: 'FAQ & Support', icon: MessageCircleQuestion }
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

        {/* Content Area */}
        <div className="animate-in slide-in-from-bottom-4 duration-500">
          
          {/* Guides Section */}
          {activeTab === 'guides' && (
            <div className="glass-card-vibrant p-8">
              <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2"><BookOpen size={20} className="text-brand-accent"/> Step-by-Step Guides</h3>
              <div className="space-y-4">
                {guides.map(guide => (
                  <div key={guide.id} className="bg-white border border-slate-100 rounded-[20px] shadow-sm overflow-hidden transition-all hover:border-brand-accent/30 group">
                    <div 
                      className="p-5 cursor-pointer hover:bg-slate-50 transition-colors"
                      onClick={() => setExpandedGuide(expandedGuide === guide.id ? null : guide.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-[14px] flex items-center justify-center group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-colors">
                              <guide.icon size={24} />
                           </div>
                           <div>
                             <p className="text-base font-black text-slate-900">{guide.title}</p>
                             <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">{guide.category}</span>
                           </div>
                        </div>
                        <span className={`w-8 h-8 flex items-center justify-center rounded-full transition-transform duration-300 ${expandedGuide === guide.id ? 'bg-slate-100 rotate-180' : 'bg-transparent text-slate-400'}`}>
                           <ChevronDown size={20} />
                        </span>
                      </div>
                    </div>

                    <div className={`transition-all duration-300 overflow-hidden ${expandedGuide === guide.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6 bg-slate-50 border-t border-slate-100">
                        <div className="space-y-6">
                           {guide.steps.map(step => (
                             <div key={step.step} className="flex gap-4">
                               <div className="flex-shrink-0 relative">
                                 <div className="w-8 h-8 rounded-full bg-brand-accent text-white flex items-center justify-center font-black text-sm z-10 relative shadow-sm">
                                    {step.step}
                                 </div>
                                 {step.step !== guide.steps.length && (
                                    <div className="absolute top-8 bottom-[-24px] left-1/2 w-0.5 bg-slate-200 -translate-x-1/2"></div>
                                 )}
                               </div>
                               <div className="pt-1">
                                 <p className="font-black text-sm text-slate-900 mb-1">{step.title}</p>
                                 <p className="text-xs font-medium text-slate-600 bg-white p-3 rounded-[12px] border border-slate-200 shadow-sm">{step.desc}</p>
                               </div>
                             </div>
                           ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tutorials Section */}
          {activeTab === 'tutorials' && (
            <div className="glass-card-vibrant p-8">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-lg font-black text-slate-900 flex items-center gap-2"><Film size={20} className="text-rose-500"/> Video Library</h3>
                 <button className="text-xs font-bold text-brand-accent hover:text-brand-accent/80 transition-colors flex items-center gap-1">
                    View on YouTube <ExternalLink size={12} />
                 </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials.map(tutorial => (
                  <div key={tutorial.id} className="bg-white rounded-[20px] border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group">
                    <div className="relative bg-slate-900 aspect-video flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 pattern-dots opacity-20"></div>
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform cursor-pointer shadow-lg z-10">
                         <PlayCircle size={28} className="ml-1" />
                      </div>
                      <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-[6px] z-10">
                         {tutorial.duration}
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="text-sm font-black text-slate-900 mb-4 line-clamp-2">{tutorial.title}</h4>
                      <button className="w-full px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 rounded-[12px] text-xs font-bold transition-colors">
                         Watch Tutorial
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {activeTab === 'faq' && (
            <div className="glass-card-vibrant p-8">
              <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2"><HelpCircle size={20} className="text-amber-500"/> Frequently Asked Questions</h3>
              
              <div className="mb-8 relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                   <Search size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 rounded-[16px] text-sm font-bold text-slate-900 transition-all shadow-sm outline-none"
                />
              </div>
              
              <div className="space-y-4">
                {filteredFAQs.length > 0 ? (
                   filteredFAQs.map(faq => (
                     <div key={faq.id} className="bg-white border border-slate-100 rounded-[16px] shadow-sm overflow-hidden hover:border-slate-300 transition-colors">
                       <div 
                         className="p-5 cursor-pointer flex justify-between items-start gap-4"
                         onClick={() => setExpandedGuide(expandedGuide === faq.id ? null : faq.id)}
                       >
                         <p className="text-sm font-black text-slate-900">{faq.question}</p>
                         <span className={`w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 transition-transform duration-300 ${expandedGuide === faq.id ? 'bg-slate-100 rotate-180' : 'bg-transparent text-slate-400'}`}>
                            <ChevronDown size={16} />
                         </span>
                       </div>
                       
                       <div className={`transition-all duration-300 overflow-hidden ${expandedGuide === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                         <div className="p-5 bg-slate-50 border-t border-slate-100 text-sm font-medium text-slate-600 leading-relaxed">
                           {faq.answer}
                         </div>
                       </div>
                     </div>
                   ))
                ) : (
                   <div className="text-center p-10 border-2 border-dashed border-slate-200 rounded-[20px]">
                      <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                         <Search size={24} />
                      </div>
                      <p className="text-base font-black text-slate-900 mb-1">No results found</p>
                      <p className="text-sm font-medium text-slate-500">We couldn't find any FAQs matching your search.</p>
                   </div>
                )}
              </div>
              
              <div className="mt-8 p-6 bg-brand-accent/5 rounded-[20px] border border-brand-accent/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                 <div>
                    <h4 className="text-base font-black text-slate-900">Still need help?</h4>
                    <p className="text-xs font-medium text-slate-600 mt-1">Our support team is available 24/7 to assist you.</p>
                 </div>
                 <button className="px-5 py-2.5 bg-brand-accent text-white rounded-[14px] text-sm font-bold shadow-md hover:bg-brand-accent/90 active:scale-95 transition-all whitespace-nowrap">
                    Contact Support
                 </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

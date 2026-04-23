import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaFilm } from 'react-icons/fa';

export default function Help() {
  const [activeTab, setActiveTab] = useState('guides');
  const [expandedGuide, setExpandedGuide] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [guides] = useState([
    {
      id: 1,
      title: 'Getting Started with REX-47',
      category: 'Basics',
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
    <div className="min-h-screen bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Help Center</h1>
        <p className="text-gray-600">Documentation, tutorials, and FAQs</p>
      </div>

      <div className="space-y-6">
        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-gray-200 overflow-x-auto">
          {['guides', 'tutorials', 'faq'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition whitespace-nowrap ${activeTab === tab ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Guides Section */}
        {activeTab === 'guides' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Guides</h3>
            <div className="space-y-2">
              {guides.map(guide => (
                <div key={guide.id} className="border border-gray-200 rounded">
                  <div 
                    className="p-3 cursor-pointer hover:bg-gray-50 transition"
                    onClick={() => setExpandedGuide(expandedGuide === guide.id ? null : guide.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{guide.title}</p>
                        <span className="text-xs text-indigo-600">{guide.category}</span>
                      </div>
                      <span className="text-lg">{expandedGuide === guide.id ? <FaChevronDown /> : <FaChevronRight />}</span>
                    </div>
                  </div>

                  {expandedGuide === guide.id && (
                    <div className="p-4 bg-gray-50 border-t border-gray-300">
                      {guide.steps.map(step => (
                        <div key={step.step} className="flex gap-4 mb-4 last:mb-0">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 text-white font-bold">{step.step}</div>
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-gray-900">{step.title}</p>
                            <p className="text-xs text-gray-600">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tutorials Section */}
        {activeTab === 'tutorials' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Video Tutorials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {tutorials.map(tutorial => (
                <div key={tutorial.id} className="rounded border border-gray-200 overflow-hidden hover:shadow-md transition">
                  <div className="relative bg-gray-300 aspect-video flex items-center justify-center">
                    <div className="text-3xl flex justify-center w-full"><FaFilm /></div>
                    <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1.5 py-0.5 rounded">{tutorial.duration}</span>
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">{tutorial.title}</h4>
                    <button className="w-full px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-xs font-medium transition">Watch</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded text-sm"
              />
            </div>
            <div className="space-y-2">
              {filteredFAQs.map(faq => (
                <div key={faq.id} className="border border-gray-200 rounded">
                  <div 
                    className="p-3 cursor-pointer hover:bg-gray-50 transition"
                    onClick={() => setExpandedGuide(expandedGuide === faq.id ? null : faq.id)}
                  >
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-medium text-gray-900 pr-3">{faq.question}</p>
                      <span className="text-lg flex-shrink-0">{expandedGuide === faq.id ? <FaChevronDown /> : <FaChevronRight />}</span>
                    </div>
                  </div>
                  {expandedGuide === faq.id && (
                    <div className="p-3 bg-gray-50 border-t border-gray-200 text-sm text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

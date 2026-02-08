import React, { useState } from 'react';

export default function Help() {
  const [activeTab, setActiveTab] = useState('guides');
  const [expandedGuide, setExpandedGuide] = useState(null);

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
    {
      id: 1,
      title: 'First Run Setup',
      duration: '5 min',
      thumbnail: 'https://via.placeholder.com/200x120?text=Setup+Guide',
      videoUrl: '#'
    },
    {
      id: 2,
      title: 'Basic Movements',
      duration: '3 min',
      thumbnail: 'https://via.placeholder.com/200x120?text=Movements',
      videoUrl: '#'
    },
    {
      id: 3,
      title: 'Autonomous Patrol',
      duration: '6 min',
      thumbnail: 'https://via.placeholder.com/200x120?text=Patrol+Mode',
      videoUrl: '#'
    },
    {
      id: 4,
      title: 'Smart Home Integration',
      duration: '8 min',
      thumbnail: 'https://via.placeholder.com/200x120?text=Smart+Home',
      videoUrl: '#'
    },
    {
      id: 5,
      title: 'Understanding AI Decisions',
      duration: '10 min',
      thumbnail: 'https://via.placeholder.com/200x120?text=AI+Guide',
      videoUrl: '#'
    },
    {
      id: 6,
      title: 'Emergency Situations',
      duration: '4 min',
      thumbnail: 'https://via.placeholder.com/200x120?text=Emergency',
      videoUrl: '#'
    },
  ]);

  const [faqs] = useState([
    {
      id: 1,
      question: 'How do I reset the robot to factory settings?',
      answer: 'Hold the reset button on the back for 10 seconds until the LED turns red. The robot will restart with default settings.'
    },
    {
      id: 2,
      question: 'Why is my robot not connecting to WiFi?',
      answer: 'Check if your WiFi is in 2.4GHz mode (REX-47 only supports 2.4GHz). Restart the robot and try again. Make sure the router is within range.'
    },
    {
      id: 3,
      question: 'How often should I charge the battery?',
      answer: 'REX-47 has about 8 hours of runtime on a full charge. Charge when battery drops below 20% to maximize battery lifespan.'
    },
    {
      id: 4,
      question: 'Can I use multiple robots together?',
      answer: 'Yes! You can add multiple robots in the dashboard. Each robot will have its own ID and can be controlled independently or as a group.'
    },
    {
      id: 5,
      question: 'How do I enable autonomous mode?',
      answer: 'Go to Robot Control > Autonomous Modes. Choose a mode (Patrol, Clean, Surveillance) and click Start. The robot will navigate automatically.'
    },
    {
      id: 6,
      question: 'What should I do if the robot stops responding?',
      answer: 'Try disconnecting and reconnecting. If the problem persists, power off the robot, wait 30 seconds, and power it back on.'
    },
    {
      id: 7,
      question: 'How can I view the robot camera from mobile?',
      answer: 'The dashboard is responsive. Open it on your phone, or download the REX-47 mobile app from App Store/Play Store.'
    },
    {
      id: 8,
      question: 'Is my data secure and encrypted?',
      answer: 'Yes, all communication uses HTTPS/SSL encryption. Video streams are encrypted end-to-end. Check Settings > Security for more details.'
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white p-8 mb-8">
        <h1 className="text-4xl font-bold mb-2">Help & Support</h1>
        <p className="text-indigo-100">Learn how to use REX-47 dashboard and get answers to common questions</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-300 mb-6 bg-white overflow-x-auto">
          <button 
            onClick={() => setActiveTab('guides')}
            className={`px-6 py-3 font-semibold border-b-2 transition whitespace-nowrap ${activeTab === 'guides' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            📚 Guides
          </button>
          <button 
            onClick={() => setActiveTab('tutorials')}
            className={`px-6 py-3 font-semibold border-b-2 transition whitespace-nowrap ${activeTab === 'tutorials' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            🎥 Tutorials
          </button>
          <button 
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-3 font-semibold border-b-2 transition whitespace-nowrap ${activeTab === 'faq' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            ❓ FAQ
          </button>
          <button 
            onClick={() => setActiveTab('support')}
            className={`px-6 py-3 font-semibold border-b-2 transition whitespace-nowrap ${activeTab === 'support' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            💬 Support
          </button>
        </div>

        {/* Guides Section */}
        {activeTab === 'guides' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Step-by-Step Guides</h3>
            <p className="text-gray-600 mb-6">Detailed instructions for common tasks</p>

            <div className="space-y-3">
              {guides.map(guide => (
                <div key={guide.id} className="border border-gray-300 rounded-lg">
                  <div 
                    className="p-4 cursor-pointer hover:bg-gray-50 transition"
                    onClick={() => setExpandedGuide(expandedGuide === guide.id ? null : guide.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-gray-900">{guide.title}</h4>
                        <span className="text-xs text-indigo-600">{guide.category}</span>
                      </div>
                      <span className="text-lg">{expandedGuide === guide.id ? '▼' : '▶'}</span>
                    </div>
                  </div>

                  {expandedGuide === guide.id && (
                    <div className="p-4 bg-gray-50 border-t border-gray-300">
                      {guide.steps.map(item => (
                        <div key={item.step} className="flex gap-4 mb-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 text-white font-bold">{item.step}</div>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{item.title}</p>
                            <p className="text-sm text-gray-600">{item.desc}</p>
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
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Video Tutorials</h3>
            <p className="text-gray-600 mb-6">Watch demo videos for each major feature</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map(tutorial => (
                <div key={tutorial.id} className="rounded-lg overflow-hidden border border-gray-300 hover:shadow-lg transition">
                  <div className="relative bg-gray-300 aspect-video flex items-center justify-center">
                    <img src={tutorial.thumbnail} alt={tutorial.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                      <div className="text-white text-4xl">▶</div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">{tutorial.duration}</span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 mb-3">{tutorial.title}</h4>
                    <button className="w-full px-4 py-2 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg text-sm font-semibold transition">Watch Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="space-y-3">
              {filteredFAQs.map(faq => (
                <div key={faq.id} className="border border-gray-300 rounded-lg">
                  <div 
                    className="p-4 cursor-pointer hover:bg-gray-50 transition"
                    onClick={() => setExpandedGuide(expandedGuide === faq.id ? null : faq.id)}
                  >
                    <div className="flex justify-between items-start">
                      <p className="font-bold text-gray-900 pr-4">{faq.question}</p>
                      <span className="text-lg flex-shrink-0">{expandedGuide === faq.id ? '▼' : '▶'}</span>
                    </div>
                  </div>
                  {expandedGuide === faq.id && (
                    <div className="p-4 bg-gray-50 border-t border-gray-300">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Support Section */}
        {activeTab === 'support' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-300 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Email Support</h4>
                <p className="text-gray-700 mb-4">Get help from our support team within 24 hours</p>
                <a href="mailto:support@rex47.ai" className="text-indigo-600 hover:text-purple-700 font-semibold">support@rex47.ai</a>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Live Chat</h4>
                <p className="text-gray-700 mb-4">Chat with our support agents in real-time</p>
                <button className="px-4 py-2 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg font-semibold transition">Start Chat</button>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Knowledge Base</h4>
                <p className="text-gray-700 mb-4">Browse comprehensive documentation</p>
                <a href="#" className="text-indigo-600 hover:text-purple-700 font-semibold">Browse Docs</a>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Community Forum</h4>
                <p className="text-gray-700 mb-4">Get help from the REX-47 community</p>
                <a href="#" className="text-indigo-600 hover:text-purple-700 font-semibold">Visit Forum</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

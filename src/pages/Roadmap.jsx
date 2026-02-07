import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Roadmap() {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (timelineRef.current) {
      gsap.from(timelineRef.current.querySelectorAll('.sprint-item'), {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top center',
        },
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -50 : 50),
        duration: 0.6,
        stagger: 0.1,
      });
    }
  }, []);

  const phases = [
    {
      phase: 'Phase 1',
      title: 'Base Movement (Sprints 1-10)',
      color: 'from-blue-400 to-blue-600',
      sprints: [
        '1-2: Hardware setup, motor calibration',
        '3-4: Basic movement algorithms',
        '5-6: Obstacle detection (ultrasonic)',
        '7-8: Line following & waypoint navigation',
        '9-10: Remote control via web dashboard',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Computer Vision (Sprints 11-20)',
      color: 'from-indigo-400 to-indigo-600',
      sprints: [
        '11-12: Camera integration & calibration',
        '13-14: YOLOv8 object detection setup',
        '15-16: Face recognition implementation',
        '17-18: Real-time video streaming',
        '19-20: Gesture recognition engine',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Agentic IoT (Sprints 21-30)',
      color: 'from-purple-400 to-purple-600',
      sprints: [
        '21-22: MQTT integration & broker setup',
        '23-24: Smart home device pairing',
        '25-26: Multi-agent decision framework',
        '27-28: Automated task execution',
        '29-30: Cloud backend deployment',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Advanced AI & Digital Twin (Sprints 31-40)',
      color: 'from-pink-400 to-pink-600',
      sprints: [
        '31-32: SLAM algorithm integration',
        '33-34: RL agent training (PyTorch)',
        '35-36: Digital twin in Gazebo',
        '37-38: Predictive task automation',
        '39-40: Advanced perception fusion',
      ],
    },
    {
      phase: 'Phase 5',
      title: 'Humanoid & Emotional AI (Sprints 41-50)',
      color: 'from-teal-400 to-teal-600',
      sprints: [
        '41-42: Emotion recognition from faces',
        '43-44: Humanoid movement patterns',
        '45-46: Natural language processing',
        '47-48: Multimodal interaction layer',
        '49-50: Production hardening & deployment',
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="min-h-[40vh] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Development Roadmap</h1>
          <p className="text-xl text-blue-100">50 Sprints of Progressive Innovation</p>
        </div>
      </section>

      {/* Timeline */}
      <section ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Sprint Phases</h2>

          <div ref={timelineRef} className="space-y-8">
            {phases.map((phase, phaseIdx) => (
              <div
                key={phaseIdx}
                className={`sprint-item bg-gradient-to-r ${phase.color} p-8 rounded-xl text-white shadow-lg hover:shadow-xl transition duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-24 h-24 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-3xl font-bold">{phase.phase}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.sprints.map((sprint, sprintIdx) => (
                        <li key={sprintIdx} className="flex gap-3">
                          <span className="text-xl">✓</span>
                          <span className="text-white opacity-95">{sprint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Major Milestones</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                sprint: 'Sprint 10',
                title: 'MVP - Manual Robot Control',
                icon: '🤖',
                desc: 'Fully functional robot with web-based control and basic obstacle avoidance',
              },
              {
                sprint: 'Sprint 20',
                title: 'Vision Enabled',
                icon: '👁️',
                desc: 'Real-time object and face detection with video streaming',
              },
              {
                sprint: 'Sprint 30',
                title: 'Smart Home Integration',
                icon: '🏠',
                desc: 'Complete IoT ecosystem with automated home control',
              },
              {
                sprint: 'Sprint 40',
                title: 'AI-Powered Autonomy',
                icon: '🧠',
                desc: 'RL agents making independent decisions with digital twin simulation',
              },
              {
                sprint: 'Sprint 45',
                title: 'Humanoid Interaction',
                icon: '🤝',
                desc: 'Emotion recognition and natural language conversation',
              },
              {
                sprint: 'Sprint 50',
                title: 'Production Ready',
                icon: '🚀',
                desc: 'Fully deployed system with monitoring, security, and scalability',
              },
            ].map((milestone, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex gap-4 items-start">
                  <span className="text-4xl">{milestone.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                      {milestone.sprint}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</h3>
                    <p className="text-gray-600 mt-2">{milestone.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Development Progress</h2>

          <div className="space-y-6">
            {[
              { label: 'Phase 1 - Base Movement', progress: 100, color: 'from-blue-400 to-blue-600' },
              { label: 'Phase 2 - Computer Vision', progress: 85, color: 'from-indigo-400 to-indigo-600' },
              { label: 'Phase 3 - Agentic IoT', progress: 60, color: 'from-purple-400 to-purple-600' },
              { label: 'Phase 4 - Advanced AI', progress: 40, color: 'from-pink-400 to-pink-600' },
              { label: 'Phase 5 - Humanoid AI', progress: 20, color: 'from-teal-400 to-teal-600' },
            ].map((phase, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{phase.label}</h3>
                  <span className="text-sm font-bold text-gray-600">{phase.progress}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${phase.color} transition-all duration-1000`}
                    style={{ width: `${phase.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Next Steps</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Currently working on Phase 3 - Agentic IoT systems. The focus is on multi-agent coordination, smart home
            integration, and cloud backend optimization for production deployment.
          </p>
          <div className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            View Progress on GitHub →
          </div>
        </div>
      </section>
    </div>
  );
}

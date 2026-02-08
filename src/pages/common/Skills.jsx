import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    try {
      if (skillsRef.current) {
        const cards = skillsRef.current.querySelectorAll('.skill-card');
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              scrollTrigger: {
                trigger: skillsRef.current,
                start: 'top center',
              },
            }
          );
        }

        // Animate skill bars
        const bars = skillsRef.current.querySelectorAll('.skill-bar');
        if (bars.length > 0) {
          gsap.fromTo(
            bars,
            { width: 0 },
            {
              width: '100%',
              duration: 1.5,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: skillsRef.current,
                start: 'top center',
              },
            }
          );
        }
      }
    } catch (error) {
      console.warn('GSAP animation error:', error);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="min-h-[40vh] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Skills & Learning Outcomes</h1>
          <p className="text-xl text-blue-100">Expertise across embedded systems, AI, and full-stack development</p>
        </div>
      </section>

      {/* Skills Grid */}
      <section ref={skillsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {[
            {
              category: 'Embedded Systems & IoT',
              icon: '🔌',
              color: 'from-blue-400 to-cyan-500',
              skills: [
                { name: 'ESP32 Development', level: 95 },
                { name: 'Firmware Programming', level: 90 },
                { name: 'MQTT Protocol', level: 88 },
                { name: 'Sensor Integration', level: 92 },
                { name: 'Real-time Operating Systems', level: 85 },
                { name: 'Hardware Debugging', level: 88 },
              ],
            },
            {
              category: 'Artificial Intelligence & Vision',
              icon: '🧠',
              color: 'from-purple-400 to-indigo-500',
              skills: [
                { name: 'PyTorch & Deep Learning', level: 92 },
                { name: 'YOLOv8 & Object Detection', level: 90 },
                { name: 'Computer Vision (OpenCV)', level: 89 },
                { name: 'Face Recognition', level: 87 },
                { name: 'Reinforcement Learning', level: 85 },
                { name: 'SLAM Algorithms', level: 83 },
              ],
            },
            {
              category: 'Robotics & Simulation',
              icon: '🤖',
              color: 'from-red-400 to-orange-500',
              skills: [
                { name: 'ROS2 Framework', level: 88 },
                { name: 'Gazebo Simulation', level: 86 },
                { name: 'Motion Planning', level: 85 },
                { name: 'Kinematics & Dynamics', level: 82 },
                { name: 'Control Systems', level: 84 },
                { name: 'Path Planning Algorithms', level: 87 },
              ],
            },
            {
              category: 'Full-Stack & Cloud',
              icon: '☁️',
              color: 'from-green-400 to-teal-500',
              skills: [
                { name: 'FastAPI Backend', level: 93 },
                { name: 'React & Frontend', level: 91 },
                { name: 'PostgreSQL & Databases', level: 89 },
                { name: 'Docker & Containerization', level: 90 },
                { name: 'WebSocket Real-time', level: 88 },
                { name: 'Cloud Deployment (AWS/Render)', level: 86 },
              ],
            },
            {
              category: 'DevOps & Security',
              icon: '🔐',
              color: 'from-pink-400 to-rose-500',
              skills: [
                { name: 'CI/CD Pipelines', level: 89 },
                { name: 'Kubernetes Orchestration', level: 84 },
                { name: 'Security Best Practices', level: 88 },
                { name: 'JWT Authentication', level: 90 },
                { name: 'Infrastructure as Code', level: 85 },
                { name: 'Monitoring & Logging', level: 86 },
              ],
            },
            {
              category: 'Data Science & Analytics',
              icon: '📊',
              color: 'from-indigo-400 to-purple-500',
              skills: [
                { name: 'Time Series Analysis', level: 87 },
                { name: 'Data Visualization', level: 88 },
                { name: 'Statistical Modeling', level: 84 },
                { name: 'Feature Engineering', level: 86 },
                { name: 'Model Optimization', level: 85 },
                { name: 'A/B Testing', level: 82 },
              ],
            },
          ].map((skillGroup, groupIdx) => (
            <div key={groupIdx} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{skillGroup.icon}</span>
                <h2 className="text-3xl font-bold text-gray-900">{skillGroup.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillGroup.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-card bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-blue-200 shadow-md">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                      <span className={`text-sm font-bold bg-gradient-to-r ${skillGroup.color} text-white px-3 py-1 rounded-full`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`skill-bar h-full bg-gradient-to-r ${skillGroup.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                achievement: 'Built autonomous robot from scratch',
                details: 'Integrated hardware, firmware, AI, and cloud infrastructure',
              },
              {
                achievement: 'Implemented real-time computer vision system',
                details: 'YOLOv8 for object detection, FaceNet for recognition',
              },
              {
                achievement: 'Developed multi-agent AI system',
                details: 'ROS2-based distributed agents with RL training',
              },
              {
                achievement: 'Created full-stack dashboard',
                details: 'React frontend with WebSocket, 3D visualization, AR/VR',
              },
              {
                achievement: 'Deployed production cloud infrastructure',
                details: 'FastAPI, PostgreSQL, Docker, Kubernetes setup',
              },
              {
                achievement: 'Mastered IoT & smart home integration',
                details: 'MQTT, multi-device coordination, real-time automation',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.achievement}</h3>
                <p className="text-gray-600">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Development Journey</h2>

          <div className="space-y-6">
            {[
              {
                phase: '🚀 Phase 1',
                title: 'Hardware & Embedded Systems',
                learnings: [
                  'ESP32 microcontroller programming and FreeRTOS',
                  'Motor control PWM and sensor calibration',
                  'Arduino ecosystem and embedded debugging',
                  'Real-time systems design patterns',
                ],
              },
              {
                phase: '👁️ Phase 2',
                title: 'Computer Vision & Perception',
                learnings: [
                  'Deep learning with PyTorch and TensorFlow',
                  'YOLOv8 model training and optimization',
                  'SLAM algorithms (ORB-SLAM3) implementation',
                  'Real-time video processing and streaming',
                ],
              },
              {
                phase: '🧠 Phase 3',
                title: 'AI & Decision Making',
                learnings: [
                  'Reinforcement learning algorithms and training',
                  'Multi-agent coordination and communication',
                  'Gazebo simulation environment setup',
                  'Digital twin development and testing',
                ],
              },
              {
                phase: '☁️ Phase 4',
                title: 'Cloud & Full-Stack',
                learnings: [
                  'FastAPI async backend development',
                  'PostgreSQL database design and optimization',
                  'WebSocket real-time communication',
                  'Docker containerization and deployment',
                ],
              },
              {
                phase: '🔐 Phase 5',
                title: 'DevOps & Production',
                learnings: [
                  'Kubernetes orchestration and scaling',
                  'CI/CD pipelines with GitHub Actions',
                  'Security best practices and JWT auth',
                  'System monitoring and error handling',
                ],
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border-l-4 border-blue-600 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-start gap-6">
                  <span className="text-4xl">{phase.phase}</span>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.learnings.map((learning, lIdx) => (
                        <li key={lIdx} className="flex gap-3 text-gray-700">
                          <span className="text-blue-600 font-bold">✓</span>
                          <span>{learning}</span>
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

      {/* Certifications & Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Resources & Documentation</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '📖',
                title: 'Technical Blog',
                desc: 'Deep dive articles on implementation details and lessons learned',
              },
              {
                icon: '📚',
                title: 'Documentation',
                desc: 'Complete API docs, setup guides, and architecture diagrams',
              },
              {
                icon: '💾',
                title: 'Code Repositories',
                desc: 'Open-source code with extensive examples and best practices',
              },
            ].map((resource, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border-2 border-blue-300 text-center shadow-md hover:shadow-lg transition duration-300">
                <div className="text-5xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.desc}</p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

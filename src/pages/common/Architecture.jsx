import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Architecture() {
  const diagramRef = useRef(null);
  const reposRef = useRef(null);

  useEffect(() => {
    try {
      // Diagram animation
      if (diagramRef.current) {
        const layers = diagramRef.current.querySelectorAll('.arch-layer');
        if (layers.length > 0) {
          gsap.fromTo(
            layers,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.2,
              scrollTrigger: {
                trigger: diagramRef.current,
                start: 'top center',
              },
            }
          );
        }
      }

      // Repository cards animation
      if (reposRef.current) {
        const cards = reposRef.current.querySelectorAll('.repo-card');
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              stagger: 0.15,
              scrollTrigger: {
                trigger: reposRef.current,
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
          <h1 className="text-5xl font-bold text-white mb-4">Technical Architecture</h1>
          <p className="text-xl text-blue-100">Distributed, modular, and scalable system design</p>
        </div>
      </section>

      {/* System Architecture Diagram */}
      <section ref={diagramRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">System Architecture</h2>

          <div className="space-y-6">
            {[
              {
                name: 'Presentation Layer',
                color: 'from-green-400 to-teal-500',
                components: [
                  'Web Dashboard (React)',
                  'Mobile App (React Native)',
                  'AR/VR Interface',
                ],
                description: 'Real-time user interfaces and visualizations',
              },
              {
                name: 'Cloud Services Layer',
                color: 'from-blue-400 to-cyan-500',
                components: [
                  'FastAPI Backend',
                  'PostgreSQL Database',
                  'Redis Cache',
                  'Authentication (JWT)',
                ],
                description: 'Centralized management and data persistence',
              },
              {
                name: 'IoT Communication Layer',
                color: 'from-indigo-400 to-blue-500',
                components: ['MQTT Broker', 'WebSocket Server', 'gRPC Services', 'REST APIs'],
                description: 'Real-time data streams and device communication',
              },
              {
                name: 'AI & Processing Layer',
                color: 'from-purple-400 to-indigo-500',
                components: [
                  'PyTorch Models',
                  'ROS2 Framework',
                  'Vision Engine (YOLOv8)',
                  'RL Agents',
                ],
                description: 'Intelligent decision-making and perception',
              },
              {
                name: 'Edge Layer (Robot)',
                color: 'from-orange-400 to-red-500',
                components: [
                  'ESP32 Firmware',
                  'Motor Control',
                  'Sensor Integration',
                  'Edge ML Models',
                ],
                description: 'Real-time robot control and local intelligence',
              },
            ].map((layer, idx) => (
              <div
                key={idx}
                className={`arch-layer bg-gradient-to-r ${layer.color} p-8 rounded-xl text-white shadow-lg`}
              >
                <h3 className="text-2xl font-bold mb-4">{layer.name}</h3>
                <p className="text-white opacity-90 mb-4">{layer.description}</p>
                <div className="flex flex-wrap gap-3">
                  {layer.components.map((comp, compIdx) => (
                    <span
                      key={compIdx}
                      className="px-4 py-2 bg-white bg-opacity-20 rounded-lg text-sm font-semibold backdrop-blur"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Flow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Data Flow & Communication</h2>

          <div className="bg-white border-2 border-blue-300 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="text-3xl">📱</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Dashboard → API</h3>
                  <p className="text-gray-600">
                    User commands sent via REST API (HTTPS) or WebSocket for real-time updates. All requests
                    authenticated with JWT tokens.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-3xl">☁️</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">API → IoT Hub</h3>
                  <p className="text-gray-600">
                    Cloud backend publishes commands to MQTT topics or sends gRPC calls to the AI brain. Real-time
                    WebSocket connections maintain persistent communication.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-3xl">🧠</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Brain Processing</h3>
                  <p className="text-gray-600">
                    ROS2-based distributed agents process vision, make decisions using RL models, and coordinate with
                    other subsystems. All decisions logged for learning.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-3xl">📡</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Robot Execution</h3>
                  <p className="text-gray-600">
                    ESP32 firmware receives commands via MQTT, controls motors, reads sensors, and sends telemetry
                    back. Low-latency edge processing for responsiveness.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-3xl">📊</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Feedback Loop</h3>
                  <p className="text-gray-600">
                    Sensor data and video streams flow back through IoT hub to cloud, which streams updates to dashboard
                    via WebSocket. ML models continuously improve based on data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repository Structure */}
      <section ref={reposRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Repository Structure</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'robot-firmware',
                description: 'ESP32 embedded firmware for hardware control and real-time processing',
                techs: ['C++', 'Arduino', 'FreeRTOS', 'MQTT Client'],
                features: [
                  'Motor PWM control',
                  'Sensor data acquisition',
                  'Local obstacle avoidance',
                  'OTA firmware updates',
                ],
              },
              {
                name: 'robot-ai-brain',
                description: 'Python-based AI inference engine with vision and RL agents',
                techs: ['Python', 'PyTorch', 'ROS2', 'OpenCV'],
                features: [
                  'YOLOv8 vision models',
                  'ORB-SLAM3 localization',
                  'RL agent training',
                  'Sensor fusion',
                ],
              },
              {
                name: 'robot-iot-hub',
                description: 'Central message broker and communication coordinator',
                techs: ['MQTT Broker', 'Message Queue', 'Protocol Bridge'],
                features: [
                  'Multi-protocol support',
                  'Pub/Sub messaging',
                  'Message persistence',
                  'Load balancing',
                ],
              },
              {
                name: 'robot-cloud-services',
                description: 'FastAPI backend with database and business logic',
                techs: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
                features: [
                  'User authentication',
                  'Device management',
                  'Telemetry storage',
                  'Analytics engine',
                ],
              },
              {
                name: 'robot-dashboard',
                description: 'React-based web dashboard for monitoring and control',
                techs: ['React', 'Tailwind CSS', 'Three.js', 'WebSocket'],
                features: [
                  '3D visualization',
                  'Real-time telemetry',
                  'Home automation control',
                  'AR/VR integration',
                ],
              },
              {
                name: 'robot-devops',
                description: 'Infrastructure and deployment configurations',
                techs: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
                features: [
                  'CI/CD pipelines',
                  'Container orchestration',
                  'Monitoring & logging',
                  'Infrastructure as code',
                ],
              },
            ].map((repo, idx) => (
              <div
                key={idx}
                className="repo-card bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-300 shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-2 font-mono">{repo.name}</h3>
                <p className="text-gray-700 mb-4">{repo.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {repo.techs.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 text-xs font-semibold bg-blue-600 text-white rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Key Components:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {repo.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Deployment Strategy</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏠',
                title: 'Edge Deployment',
                items: [
                  'ESP32 firmware flashed via USB/OTA',
                  'Python AI brain runs on local server',
                  'MQTT broker containerized locally',
                ],
              },
              {
                icon: '☁️',
                title: 'Cloud Deployment',
                items: [
                  'FastAPI backend on Render/AWS',
                  'PostgreSQL managed database',
                  'Docker containers with K8s',
                ],
              },
              {
                icon: '🚀',
                title: 'CI/CD Pipeline',
                items: [
                  'GitHub Actions for automated tests',
                  'Docker image building & pushing',
                  'Automated deployment on push',
                ],
              },
            ].map((deploy, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-2 border-blue-300 shadow-md">
                <div className="text-4xl mb-4">{deploy.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{deploy.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {deploy.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll('.feature-item');
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top center',
              },
            }
          );
        }

        // Hover animation setup
        items.forEach((item) => {
          item.addEventListener('mouseenter', () => {
            gsap.to(item, { y: -10, duration: 0.3, overwrite: 'auto' });
          });
          item.addEventListener('mouseleave', () => {
            gsap.to(item, { y: 0, duration: 0.3, overwrite: 'auto' });
          });
        });
      }
    } catch (error) {
      console.warn('GSAP animation error:', error);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const features = [
    {
      category: 'Movement & Control',
      icon: '🚀',
      items: [
        {
          title: 'Web Control Dashboard',
          description: 'Real-time control interface for manual movement, with live camera feed and sensor data',
          tech: ['React', 'WebSocket', 'Tailwind CSS'],
        },
        {
          title: 'Mobile App Control',
          description: 'Native mobile app for on-the-go robot control with gesture recognition',
          tech: ['React Native', 'Expo', 'PyTorch'],
        },
        {
          title: 'Voice Commands',
          description: 'Natural language processing for voice-based robot control and home automation',
          tech: ['Whisper API', 'LangChain', 'FastAPI'],
        },
        {
          title: 'Obstacle Avoidance',
          description: 'Real-time obstacle detection and autonomous path recalculation',
          tech: ['YOLOv8', 'ESP32 Sensors', 'ROS2'],
        },
      ],
    },
    {
      category: 'Computer Vision',
      icon: '👁️',
      items: [
        {
          title: 'Face Recognition',
          description: 'Identify and track household members with emotion detection',
          tech: ['FaceNet', 'PyTorch', 'DeepFace'],
        },
        {
          title: 'Object Detection',
          description: 'Real-time detection of pets, people, objects, and hazards',
          tech: ['YOLOv8', 'OpenCV', 'TensorFlow'],
        },
        {
          title: 'Gesture Following',
          description: 'Understand and respond to human gestures and body language',
          tech: ['MediaPipe', 'OpenPose', 'RL Agents'],
        },
        {
          title: 'SLAM Localization',
          description: 'Simultaneous localization and mapping for autonomous navigation',
          tech: ['ORB-SLAM3', 'Gazebo', 'RViz'],
        },
      ],
    },
    {
      category: 'Smart Home Automation',
      icon: '🏠',
      items: [
        {
          title: 'Lights Control',
          description: 'Automated lighting based on occupancy, time, and activities',
          tech: ['MQTT', 'IoT Relay', 'Home Assistant'],
        },
        {
          title: 'Climate Control',
          description: 'Smart AC and temperature management with learning preferences',
          tech: ['MQTT', 'Smart Thermostat', 'ML Models'],
        },
        {
          title: 'Door Locks',
          description: 'Secure smart lock integration with biometric and code access',
          tech: ['Z-Wave', 'MQTT', 'JWT Auth'],
        },
        {
          title: 'Emergency Alerts',
          description: 'Real-time detection and notification of gas, smoke, and water leaks',
          tech: ['Sensor Networks', 'Twilio API', 'WebSocket'],
        },
      ],
    },
    {
      category: 'Agentic AI',
      icon: '🧠',
      items: [
        {
          title: 'Multi-Agent System',
          description: 'Distributed decision-making with specialized agents for different tasks',
          tech: ['ROS2', 'AgentFramework', 'Python'],
        },
        {
          title: 'Reinforcement Learning',
          description: 'Agents learn optimal behaviors through interaction with environment',
          tech: ['PyTorch', 'Stable-Baselines3', 'Gazebo'],
        },
        {
          title: 'Proactive Automation',
          description: 'Predict and automate routine tasks based on learned patterns',
          tech: ['LSTM', 'Time Series', 'Predictive Models'],
        },
        {
          title: 'Digital Twin',
          description: 'Virtual simulation environment for testing and optimization',
          tech: ['Gazebo', 'PyBullet', 'Blender'],
        },
      ],
    },
    {
      category: 'AR/VR Dashboard',
      icon: '📊',
      items: [
        {
          title: '3D Path Visualization',
          description: 'Visualize robot movement and planned paths in real-time 3D space',
          tech: ['Three.js', 'Babylon.js', 'WebGL'],
        },
        {
          title: 'Live Telemetry',
          description: 'Real-time sensor data, battery status, temperature, and diagnostics',
          tech: ['WebSocket', 'Chart.js', 'React'],
        },
        {
          title: 'AR Navigation',
          description: 'Augmented reality overlays for robot status and home automation',
          tech: ['AR.js', 'WebAR', 'React AR'],
        },
        {
          title: 'VR Experience',
          description: 'Immersive VR interface for remote robot operation and exploration',
          tech: ['Babylon.js VR', 'Three.js VR', 'A-Frame'],
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="min-h-[40vh] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Features & Capabilities</h1>
          <p className="text-xl text-blue-100">Cutting-edge AI and robotics in action</p>
        </div>
      </section>

      {/* Features Grid */}
      <div ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {features.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-5xl">{section.icon}</span>
                <h2 className="text-4xl font-bold text-gray-900">{section.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="feature-item bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-md hover:shadow-xl transition duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Interactive Demos Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Robot Simulator',
                description: 'Try controlling the robot in a simulated home environment',
                icon: '🎮',
              },
              {
                title: 'Vision Demo',
                description: 'Upload an image to test object detection and face recognition',
                icon: '📸',
              },
              {
                title: 'Smart Home Control',
                description: 'Simulate controlling lights, AC, and other smart devices',
                icon: '💡',
              },
            ].map((demo, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border-2 border-blue-300 text-center hover:shadow-lg transition duration-300"
              >
                <div className="text-5xl mb-4">{demo.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{demo.title}</h3>
                <p className="text-gray-600">{demo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Repositories() {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll('.repo-item');
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.15,
              scrollTrigger: {
                trigger: containerRef.current,
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

  const repos = [
    {
      name: 'rex-47-robot-firmware',
      description: 'ESP32 embedded firmware for robot hardware control, motor management, and real-time sensor processing',
      language: 'C++',
      stars: 45,
      tags: ['ESP32', 'Firmware', 'Arduino', 'FreeRTOS'],
      url: 'https://github.com',
    },
    {
      name: 'rex-47-ai-brain',
      description:
        'Python-based AI inference engine with YOLOv8 vision models, SLAM implementation, and RL agents for autonomous decision-making',
      language: 'Python',
      stars: 38,
      tags: ['PyTorch', 'YOLOv8', 'ROS2', 'SLAM'],
      url: 'https://github.com',
    },
    {
      name: 'rex-47-iot-hub',
      description: 'Central MQTT message broker and IoT communication hub for coordinating all robot and smart home devices',
      language: 'Python',
      stars: 28,
      tags: ['MQTT', 'Message Queue', 'IoT', 'Broker'],
      url: 'https://github.com',
    },
    {
      name: 'rex-47-cloud-services',
      description: 'FastAPI backend with PostgreSQL, Redis, and multi-tenant support for dashboard, authentication, and analytics',
      language: 'Python',
      stars: 52,
      tags: ['FastAPI', 'PostgreSQL', 'Redis', 'Backend'],
      url: 'https://github.com',
    },
    {
      name: 'rex-47-web-dashboard',
      description: 'React-based interactive dashboard with real-time telemetry, 3D visualization, and AR/VR interfaces',
      language: 'JavaScript',
      stars: 41,
      tags: ['React', 'Three.js', 'WebSocket', 'Tailwind'],
      url: 'https://github.com',
    },
    {
      name: 'rex-47-devops',
      description: 'Docker, Kubernetes, CI/CD pipelines, and infrastructure-as-code for production deployment',
      language: 'YAML',
      stars: 23,
      tags: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      url: 'https://github.com',
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="min-h-[40vh] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Code & Repositories</h1>
          <p className="text-xl text-blue-100">Open-source projects and implementation details</p>
        </div>
      </section>

      {/* Repositories Grid */}
      <section ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Main Repositories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo, idx) => (
              <div
                key={idx}
                className="repo-item bg-gradient-to-br from-gray-50 to-white border-2 border-blue-300 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition duration-300 font-mono">
                      {repo.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{repo.language}</p>
                  </div>
                  <div className="text-2xl">⭐ {repo.stars}</div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6">{repo.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {repo.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex gap-3 pt-6 border-t border-gray-200">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                    View on GitHub
                  </button>
                  <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
                    Docs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Snippets */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Code Snippets & Examples</h2>

          <div className="space-y-8">
            {[
              {
                title: 'ESP32 Motor Control',
                lang: 'cpp',
                repo: 'rex-47-robot-firmware',
                code: `void controlMotor(int motorPin, int speed) {
  // Set PWM frequency to 5000 Hz for smooth control
  ledcSetup(motorPin, 5000, 8);
  ledcAttachPin(motorPin, motorPin);
  
  // Set motor speed (0-255)
  ledcWrite(motorPin, constrain(speed, 0, 255));
}`,
              },
              {
                title: 'YOLOv8 Object Detection',
                lang: 'python',
                repo: 'rex-47-ai-brain',
                code: `from ultralytics import YOLO

model = YOLO('yolov8n.pt')
results = model.predict(source='frame.jpg', conf=0.5)

for r in results:
    boxes = r.boxes
    for box in boxes:
        x1, y1, x2, y2 = box.xyxy[0]
        conf = box.conf[0]
        cls = box.cls[0]`,
              },
              {
                title: 'FastAPI Real-time Endpoint',
                lang: 'python',
                repo: 'rex-47-cloud-services',
                code: `from fastapi import FastAPI, WebSocket
from typing import Set

app = FastAPI()
active_connections: Set[WebSocket] = set()

@app.websocket("/ws/telemetry/{user_id}")
async def websocket_endpoint(user_id: str, ws: WebSocket):
    await ws.accept()
    active_connections.add(ws)
    try:
        while True:
            data = await ws.receive_json()
            for conn in active_connections:
                await conn.send_json(data)
    finally:
        active_connections.remove(ws)`,
              },
            ].map((snippet, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <div className="bg-gray-800 px-6 py-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white">{snippet.title}</h3>
                    <p className="text-sm text-gray-400">
                      from <span className="text-blue-400">{snippet.repo}</span>
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded text-sm font-mono">
                    {snippet.lang}
                  </span>
                </div>
                <pre className="p-6 text-gray-300 text-sm overflow-x-auto">
                  <code>{snippet.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Guide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Contributing & Collaboration</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔧',
                title: 'Report Issues',
                desc: 'Found a bug? Help us improve by reporting issues on GitHub with detailed reproduction steps',
              },
              {
                icon: '📝',
                title: 'Submit PRs',
                desc: 'Contribute code improvements, optimizations, and new features. All contributions welcome!',
              },
              {
                icon: '💬',
                title: 'Discuss Ideas',
                desc: 'Share your ideas in discussions. We value community feedback and suggestions.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-300 text-center shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border-2 border-blue-300 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Setup</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-blue-600">1. Clone the Repository</strong>
              </p>
              <pre className="bg-gray-900 text-gray-300 p-4 rounded overflow-x-auto text-sm">
                <code>git clone https://github.com/thathsara-bandara/rex-47-robot-firmware.git</code>
              </pre>

              <p className="mt-6">
                <strong className="text-blue-600">2. Install Dependencies</strong>
              </p>
              <pre className="bg-gray-900 text-gray-300 p-4 rounded overflow-x-auto text-sm">
                <code>pip install -r requirements.txt</code>
              </pre>

              <p className="mt-6">
                <strong className="text-blue-600">3. Follow Contributing Guidelines</strong>
              </p>
              <p>See CONTRIBUTING.md in each repository for code standards, testing requirements, and PR process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Project Statistics</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Commits', value: '1,200+', icon: '📝' },
              { label: 'Lines of Code', value: '50K+', icon: '💻' },
              { label: 'Test Coverage', value: '85%', icon: '✅' },
              { label: 'Contributors', value: '1', icon: '👤' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border-2 border-blue-300 text-center shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

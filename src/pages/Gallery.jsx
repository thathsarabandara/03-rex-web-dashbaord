import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      gsap.from(galleryRef.current.querySelectorAll('.gallery-item'), {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top center',
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.1,
      });
    }
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="min-h-[40vh] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Gallery & Demonstrations</h1>
          <p className="text-xl text-blue-100">See REX-47 in action</p>
        </div>
      </section>

      {/* Gallery */}
      <section ref={galleryRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Video Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Videos & Demos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Autonomous Navigation',
                  desc: 'Robot navigating through home obstacles',
                  icon: '🚀',
                },
                {
                  title: 'Face Recognition',
                  desc: 'Real-time face detection and recognition',
                  icon: '👁️',
                },
                {
                  title: 'Smart Home Control',
                  desc: 'Automated home automation sequences',
                  icon: '🏠',
                },
                {
                  title: 'AR Dashboard',
                  desc: 'Augmented reality interface demo',
                  icon: '📱',
                },
              ].map((video, idx) => (
                <div
                  key={idx}
                  className="gallery-item group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-300 to-indigo-500 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-6xl mb-4">{video.icon}</div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-4">
                        <h3 className="font-bold text-lg">{video.title}</h3>
                        <p className="text-sm opacity-90">{video.desc}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition duration-300">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-3xl">▶️</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Dashboard Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Real-time Telemetry',
                  features: [
                    'Live sensor data',
                    'Battery status',
                    'Location tracking',
                    'System diagnostics',
                  ],
                },
                {
                  title: 'Vision Feed',
                  features: [
                    'Live video stream',
                    'Object detection',
                    'Face recognition',
                    'Motion tracking',
                  ],
                },
                {
                  title: 'Home Automation',
                  features: [
                    'Light controls',
                    'Temperature control',
                    'Door locks',
                    'Alerts & notifications',
                  ],
                },
              ].map((screenshot, idx) => (
                <div
                  key={idx}
                  className="gallery-item bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-xl border-2 border-blue-300 shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center text-6xl">
                    📱
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{screenshot.title}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {screenshot.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex gap-2">
                        <span className="text-blue-600">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Simulator */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Interactive Simulators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Gazebo Simulation',
                  desc: 'Full physics-based robot simulation environment for testing and development',
                  icon: '🎮',
                },
                {
                  title: 'Web-based Controller',
                  desc: 'Browser-based robot control interface with real-time feedback',
                  icon: '🕹️',
                },
              ].map((sim, idx) => (
                <div
                  key={idx}
                  className="gallery-item bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-300 text-center shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="text-6xl mb-4">{sim.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{sim.title}</h3>
                  <p className="text-gray-700 mb-6">{sim.desc}</p>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                    Launch Simulator
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Project Assets</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Demo Videos', value: '12+', icon: '🎬' },
              { label: 'Screenshots', value: '48+', icon: '📸' },
              { label: 'Code Samples', value: '200+', icon: '💻' },
              { label: 'Test Cases', value: '500+', icon: '✅' },
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

      {/* Download Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Downloadable Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Firmware',
                desc: 'Latest ESP32 firmware builds',
                icon: '💾',
                size: '2.5 MB',
              },
              {
                title: 'Documentation',
                desc: 'Complete setup and API docs',
                icon: '📚',
                size: '5 MB',
              },
              {
                title: 'Docker Compose',
                desc: 'Ready-to-deploy stack',
                icon: '🐳',
                size: '1.2 MB',
              },
            ].map((resource, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-300 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-3">{resource.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.desc}</p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Download ({resource.size})
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

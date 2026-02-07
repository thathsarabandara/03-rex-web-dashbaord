import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const workflowRef = useRef(null);

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(heroRef.current.querySelector('h1'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          heroRef.current.querySelector('p'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          heroRef.current.querySelectorAll('button'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 },
          '-=0.3'
        );

      // Floating animation for image
      gsap.to(heroRef.current.querySelector('img'), {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Features card animation
    if (featuresRef.current) {
      gsap.fromTo(featuresRef.current.querySelectorAll('.feature-card'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top center',
          },
          duration: 0.6,
          stagger: 0.15,
        }
      );
    }

    // Workflow animation
    if (workflowRef.current) {
      gsap.fromTo(workflowRef.current.querySelector('.flow-line'),
        { width: '0%' },
        {
          width: '100%',
          scrollTrigger: {
            trigger: workflowRef.current,
            start: 'top center',
          },
          duration: 1.5,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(workflowRef.current.querySelectorAll('.flow-step'),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: workflowRef.current,
            start: 'top center',
          },
          duration: 0.5,
          stagger: 0.25,
        }
      );
    }

    return () => {
      // Cleanup animations on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full items-center">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Smart Home <span className="text-blue-600">Agentic Robot</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Meet REX-47: AI-Powered Autonomous Robot Combining Computer Vision, Smart Home Automation,
              and Multi-Agent Intelligence for next-generation home living.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/features"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Features
              </Link>
              <Link
                to="/architecture"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                View Architecture
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full blur-3xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1677442d019cecf4d4a9c0ea7687c15770ecd63c60a688f9e5e9ad8e12d73b0e?w=500&h=500&fit=crop"
                alt="REX-47 Robot"
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features Section */}
      <section ref={featuresRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600">Built with cutting-edge AI and robotics technology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🚀',
                title: 'Autonomous Navigation',
                desc: 'AI-powered pathfinding and obstacle avoidance',
              },
              {
                icon: '👁️',
                title: 'Computer Vision',
                desc: 'Face recognition, object detection & tracking',
              },
              {
                icon: '🏠',
                title: 'Smart Home Control',
                desc: 'Integrated IoT automation and monitoring',
              },
              {
                icon: '🧠',
                title: 'Multi-Agent AI',
                desc: 'Distributed decision-making intelligence',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="feature-card bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-blue-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section ref={workflowRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">System Workflow</h2>
            <p className="text-lg text-gray-600">From edge to cloud, seamless integration</p>
          </div>

          <div className="relative">
            <div className="flow-line absolute top-12 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {[
                { label: 'ESP32 Edge', icon: '📡' },
                { label: 'AI Brain', icon: '🧠' },
                { label: 'IoT Hub', icon: '🔌' },
                { label: 'Cloud Services', icon: '☁️' },
                { label: 'Dashboard', icon: '📊' },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="flow-step w-24 h-24 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center text-4xl shadow-lg hover:shadow-xl transition duration-300">
                    {step.icon}
                  </div>
                  <p className="mt-4 text-center font-semibold text-gray-900">{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Explore?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Dive deeper into our architecture, features, and technical documentation.
          </p>
          <Link
            to="/about"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg"
          >
            Learn More About the Project
          </Link>
        </div>
      </section>
    </div>
  );
}

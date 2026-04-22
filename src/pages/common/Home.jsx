import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { FaPython, FaDocker, FaGitAlt, FaLinux, FaEye, FaBrain } from 'react-icons/fa';
import { SiKubernetes, SiJupyter, SiTensorflow, SiFlask, SiNodedotjs, SiReact, SiPostgresql, SiRaspberrypi, SiArduino, SiMqtt, SiEsphome, SiHomeassistant } from 'react-icons/si';
import { IoRocket } from 'react-icons/io5';
import { MdCloud, MdDashboard, MdOutlineHub, MdSatelliteAlt } from 'react-icons/md';

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
        className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative"
      >
        {/* Floating Tech Icons Background */}
        <div className="absolute inset-0 overflow-hidden">
          <style>{`
            @keyframes float1 { 0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); } 50% { transform: translateY(-40px) translateX(20px) rotate(10deg); } }
            @keyframes float2 { 0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); } 50% { transform: translateY(-50px) translateX(-30px) rotate(-15deg); } }
            @keyframes float3 { 0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); } 50% { transform: translateY(-35px) translateX(25px) rotate(20deg); } }
            @keyframes float4 { 0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); } 50% { transform: translateY(-45px) translateX(-20px) rotate(-10deg); } }
            @keyframes float5 { 0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); } 50% { transform: translateY(-30px) translateX(35px) rotate(25deg); } }
            
            .float-icon { animation: float1 4s ease-in-out infinite; }
            .float-icon:nth-child(2) { animation: float2 5s ease-in-out infinite; }
            .float-icon:nth-child(3) { animation: float3 6s ease-in-out infinite; }
            .float-icon:nth-child(4) { animation: float4 4.5s ease-in-out infinite; }
            .float-icon:nth-child(5) { animation: float5 5.5s ease-in-out infinite; }
          `}</style>

          <div className="float-icon absolute top-20 left-10 text-5xl opacity-20 text-blue-600"><FaPython /></div>
          <div className="float-icon absolute top-40 right-20 text-5xl opacity-15 text-blue-400"><FaDocker /></div>
          <div className="float-icon absolute bottom-32 left-32 text-5xl opacity-20 text-blue-600"><SiKubernetes /></div>
          <div className="float-icon absolute top-1/2 right-45 text-5xl opacity-15 text-blue-500"><SiJupyter /></div>
          <div className="float-icon absolute bottom-20 right-10 text-5xl opacity-20 text-orange-500"><SiTensorflow /></div>
          <div className="float-icon absolute top-1/3 left-42 text-5xl opacity-15 text-blue-600"><SiFlask /></div>
          <div className="float-icon absolute bottom-40 right-1/3 text-5xl opacity-20 text-green-500"><FaLinux /></div>
          <div className="float-icon absolute top-1/4 right-1/3 text-5xl opacity-15 text-gray-700"><FaGitAlt /></div>
          <div className="float-icon absolute top-1/3 right-1/2 text-5xl opacity-20 text-green-600"><SiNodedotjs /></div>
          <div className="float-icon absolute bottom-1/3 left-1/3 text-5xl opacity-15 text-blue-500"><SiReact /></div>
          <div className="float-icon absolute top-3/4 right-1/4 text-5xl opacity-20 text-blue-700"><SiPostgresql /></div>
          <div className="float-icon absolute bottom-1/4 right-1/2 text-5xl opacity-15 text-pink-600"><SiEsphome /></div>
          <div className="float-icon absolute top-1/2 left-1/3 text-5xl opacity-20 text-teal-600"><SiArduino /></div>
          <div className="float-icon absolute bottom-1/3 right-1/4 text-5xl opacity-15 text-red-500"><SiMqtt /></div>
          <div className="float-icon absolute top-1/4 left-1/2 text-5xl opacity-20 text-indigo-600"><FaPython /></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full items-center relative z-10">
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
            <div className="relative w-full max-w-">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full blur-3xl opacity-30"></div>
              <img
                src="./landing.png"
                alt="REX-47 Robot"
                className="relative w-full "
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
                icon: <IoRocket className="text-4xl mb-4 text-blue-600" />,
                title: 'Autonomous Navigation',
                desc: 'AI-powered pathfinding and obstacle avoidance',
              },
              {
                icon: <FaEye className="text-4xl mb-4 text-blue-600" />,
                title: 'Computer Vision',
                desc: 'Face recognition, object detection & tracking',
              },
              {
                icon: <SiHomeassistant className="text-4xl mb-4 text-blue-600" />,
                title: 'Smart Home Control',
                desc: 'Integrated IoT automation and monitoring',
              },
              {
                icon: <SiEsphome className="text-4xl mb-4 text-blue-600" />,
                title: 'Multi-Agent AI',
                desc: 'Distributed decision-making intelligence',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="feature-card bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-blue-200"
              >
                {feature.icon}
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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {[
                { label: 'ESP32 Edge', icon: <MdSatelliteAlt className="text-4xl text-blue-600" /> },
                { label: 'AI Brain', icon: <FaBrain className="text-4xl text-pink-600" /> },
                { label: 'IoT Hub', icon: <MdOutlineHub className="text-4xl text-green-600" /> },
                { label: 'Cloud Services', icon: <MdCloud className="text-4xl text-indigo-600" /> },
                { label: 'Dashboard', icon: <MdDashboard className="text-4xl text-yellow-600" /> },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="flow-step w-24 h-24 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center text-blue-600 shadow-lg hover:shadow-xl hover:scale-110 transition duration-300">
                    {step.icon}
                  </div>
                  <p className="mt-6 text-center font-semibold text-gray-900 text-sm">{step.label}</p>
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

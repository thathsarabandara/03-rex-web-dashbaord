import React, { useEffect, useRef } from 'react';
import { FaCircle } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const techStackRef = useRef(null);

  useEffect(() => {
    if (!gsap) return;

    try {
      // Section animation
      if (sectionRef.current) {
        const cards = sectionRef.current.querySelectorAll('.about-card');
        if (cards.length > 0) {
          gsap.fromTo(cards,
            {
              opacity: 0,
              x: (index) => (index % 2 === 0 ? -50 : 50),
            },
            {
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top center',
              },
              opacity: 1,
              x: 0,
              duration: 0.7,
              stagger: 0.2,
            }
          );
        }
      }

      // Tech stack animation
      if (techStackRef.current) {
        const techItems = techStackRef.current.querySelectorAll('.tech-item');
        if (techItems.length > 0) {
          gsap.fromTo(techItems,
            {
              opacity: 0,
              scale: 0.6,
            },
            {
              scrollTrigger: {
                trigger: techStackRef.current,
                start: 'top center',
              },
              opacity: 1,
              scale: 1,
              duration: 0.5,
              stagger: 0.1,
            }
          );
        }
      }
    } catch (error) {
      console.warn('GSAP animation error in About:', error);
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
          <h1 className="text-5xl font-bold text-white mb-4">About REX-47</h1>
          <p className="text-xl text-blue-100">Advancing the frontier of autonomous home robotics</p>
        </div>
      </section>

      {/* Content */}
      <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Objective */}
          <div className="about-card bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-blue-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Objective</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              REX-47 is an ambitious multi-year project aimed at developing a fully autonomous smart home robot that
              combines edge AI, computer vision, IoT integration, and humanoid robotics. Through 50 sprints of
              systematic development, we're building the foundation for intelligent home automation that learns,
              adapts, and proactively serves household needs.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="about-card bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl border-l-4 border-indigo-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problem We're Solving</h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex gap-3">
                <FaCircle className="text-blue-600 mt-2 text-xs" />
                <span>Home automation remains fragmented across incompatible platforms</span>
              </li>
              <li className="flex gap-3">
                <FaCircle className="text-blue-600 mt-2 text-xs" />
                <span>Current smart home systems lack true autonomous decision-making</span>
              </li>
              <li className="flex gap-3">
                <FaCircle className="text-blue-600 mt-2 text-xs" />
                <span>Security vulnerabilities in IoT devices pose serious risks</span>
              </li>
              <li className="flex gap-3">
                <FaCircle className="text-blue-600 mt-2 text-xs" />
                <span>Limited human-robot interaction and learning capabilities</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="about-card bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-blue-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                <strong className="text-blue-600">Unified Architecture:</strong> A cohesive system integrating edge
                computing (ESP32), AI inference (PyTorch), distributed agents (ROS2), and cloud services (FastAPI).
              </p>
              <p>
                <strong className="text-blue-600">Intelligent Autonomy:</strong> Multi-agent reinforcement learning
                enables the robot to make independent decisions while optimizing household operations.
              </p>
              <p>
                <strong className="text-blue-600">Enhanced Perception:</strong> YOLOv8 vision models combined with SLAM
                algorithms provide real-time understanding of environments and inhabitants.
              </p>
              <p>
                <strong className="text-blue-600">Secure IoT Integration:</strong> End-to-end encryption, JWT
                authentication, and containerized deployment ensure data security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section ref={techStackRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technology Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                category: 'Embedded & Edge',
                techs: ['ESP32', 'FreeRTOS', 'Arduino', 'Sensor Libraries'],
              },
              {
                category: 'AI & Computer Vision',
                techs: ['PyTorch', 'YOLOv8', 'OpenCV', 'TensorFlow Lite'],
              },
              {
                category: 'Robotics & Control',
                techs: ['ROS2', 'SLAM (ORB-SLAM3)', 'Gazebo Simulation', 'RViz'],
              },
              {
                category: 'Backend & Cloud',
                techs: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
              },
              {
                category: 'Frontend & Dashboard',
                techs: ['React', 'Next.js', 'Three.js', 'Tailwind CSS'],
              },
              {
                category: 'IoT & Communication',
                techs: ['MQTT', 'WebSocket', 'gRPC', 'HTTP/REST API'],
              },
            ].map((group, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-blue-200 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="tech-item px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-900 rounded-full text-sm font-semibold border border-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">System Architecture</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-300">
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Edge Layer (ESP32)</h3>
                <p>
                  Firmware handles motor control, sensor integration, real-time obstacle detection, and MQTT
                  communication. Lightweight ML models run locally for responsive autonomous behavior.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Brain Layer (AI Inference)</h3>
                <p>
                  Python-based AI engine running PyTorch models for vision, RL agents for decision-making, and SLAM
                  algorithms for localization. Communicates via ROS2 and REST APIs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Cloud Layer (FastAPI)</h3>
                <p>
                  Centralized backend managing multi-tenant accounts, storing telemetry, handling IoT device
                  orchestration, and serving analytics. Deployed via Docker on cloud infrastructure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Presentation Layer (Dashboard)</h3>
                <p>
                  Interactive React/Next.js dashboard for real-time telemetry, 3D path visualization, AR/VR
                  integration, and home automation controls. WebSocket for live data streaming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

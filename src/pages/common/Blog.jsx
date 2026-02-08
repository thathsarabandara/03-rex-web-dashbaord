import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const articlesRef = useRef(null);

  useEffect(() => {
    try {
      if (articlesRef.current) {
        const cards = articlesRef.current.querySelectorAll('.blog-card');
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              scrollTrigger: {
                trigger: articlesRef.current,
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

  const articles = [
    {
      title: 'ESP32 Firmware Architecture & Motor Control',
      category: 'Embedded Systems',
      date: 'Feb 2024',
      readTime: '8 min',
      excerpt:
        'Deep dive into designing a robust firmware architecture for ESP32, implementing PWM motor control, and real-time sensor processing.',
      tags: ['ESP32', 'Firmware', 'Motor Control'],
    },
    {
      title: 'Real-time Object Detection with YOLOv8',
      category: 'Computer Vision',
      date: 'Jan 2024',
      readTime: '10 min',
      excerpt:
        'Implementing YOLOv8 for real-time object detection on resource-constrained edge devices, with optimization techniques for low latency.',
      tags: ['YOLOv8', 'OpenCV', 'Edge AI'],
    },
    {
      title: 'Building a Multi-Agent Robotics System with ROS2',
      category: 'Robotics',
      date: 'Dec 2023',
      readTime: '12 min',
      excerpt:
        'Architecting a distributed multi-agent system using ROS2, implementing agent communication, and coordination protocols.',
      tags: ['ROS2', 'Multi-Agent', 'Distributed Systems'],
    },
    {
      title: 'FastAPI + WebSocket: Real-time Robot Telemetry Dashboard',
      category: 'Backend',
      date: 'Nov 2023',
      readTime: '9 min',
      excerpt:
        'Building a production-grade backend with FastAPI and WebSocket for real-time data streaming, authentication, and multi-tenant support.',
      tags: ['FastAPI', 'WebSocket', 'Real-time'],
    },
    {
      title: 'Reinforcement Learning for Autonomous Robot Navigation',
      category: 'AI/ML',
      date: 'Oct 2023',
      readTime: '14 min',
      excerpt:
        'Training RL agents in Gazebo simulation for autonomous navigation, reward shaping, and transfer learning to real-world robots.',
      tags: ['RL', 'PyTorch', 'Gazebo'],
    },
    {
      title: 'SLAM Implementation: Localization & Mapping',
      category: 'Robotics',
      date: 'Sep 2023',
      readTime: '11 min',
      excerpt:
        'Implementing ORB-SLAM3 for accurate robot localization and real-time environment mapping using monocular cameras.',
      tags: ['SLAM', 'Localization', 'Mapping'],
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="min-h-[40vh] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Technical Blog</h1>
          <p className="text-xl text-blue-100">Implementation details, challenges, and learnings</p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b-4 border-blue-600">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-l-4 border-blue-600 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="flex gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm font-semibold">
                    Robotics
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Complete Guide to Building an Autonomous Home Robot
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  A comprehensive guide covering the entire journey from hardware selection to deploying a fully
                  autonomous robot. This article covers the systems integration challenges, design decisions, and
                  lessons learned building REX-47.
                </p>
                <div className="flex gap-4 items-center">
                  <span className="text-gray-600">Jan 2024 • 20 min read</span>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                    Read Article →
                  </button>
                </div>
              </div>
              <div className="lg:w-1/3 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg flex items-center justify-center min-h-64">
                <span className="text-6xl">📖</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section ref={articlesRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, idx) => (
              <div
                key={idx}
                className="blog-card bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-blue-200 shadow-md hover:shadow-lg transition duration-300 group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded border border-blue-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition duration-300">
                    Read →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Tutorials & Guides</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '🔧',
                title: 'Getting Started: ESP32 Setup',
                duration: '30 min',
                steps: 5,
              },
              {
                icon: '🧠',
                title: 'Training Your First RL Agent',
                duration: '45 min',
                steps: 7,
              },
              {
                icon: '☁️',
                title: 'Deploying with Docker & K8s',
                duration: '1 hour',
                steps: 8,
              },
              {
                icon: '🎮',
                title: 'Running Gazebo Simulation',
                duration: '40 min',
                steps: 6,
              },
            ].map((tutorial, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border-2 border-blue-300 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-4">{tutorial.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tutorial.title}</h3>
                <div className="space-y-2 mb-6 text-gray-600">
                  <p>
                    <strong>Duration:</strong> {tutorial.duration}
                  </p>
                  <p>
                    <strong>Steps:</strong> {tutorial.steps} detailed sections
                  </p>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Start Tutorial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Challenges & Solutions</h2>

          <div className="space-y-6">
            {[
              {
                challenge: 'Latency in Real-time Robot Control',
                solution:
                  'Implemented edge processing with ESP32 local decision-making and optimized WebSocket communication for sub-100ms latency',
              },
              {
                challenge: 'Accurate Localization in Dynamic Environments',
                solution:
                  'Combined ORB-SLAM3 visual odometry with IMU sensor fusion and loop closure detection for robust SLAM',
              },
              {
                challenge: 'Training RL Agents with Limited Data',
                solution:
                  'Used Gazebo simulation for synthetic data generation and transfer learning techniques to adapt to real-world scenarios',
              },
              {
                challenge: 'Scaling Multi-tenant Dashboard',
                solution:
                  'Implemented WebSocket connection pooling, Redis caching, and PostgreSQL query optimization for 10k+ concurrent users',
              },
              {
                challenge: 'Energy Efficiency on Battery-Powered Robot',
                solution:
                  'Optimized model inference with quantization, reduced sensor polling frequency, and implemented dynamic power management',
              },
              {
                challenge: 'Coordinating Multiple Distributed Agents',
                solution:
                  'Built message broker abstraction with ROS2, implemented consensus protocols, and designed fallback mechanisms',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">❌ {item.challenge}</h3>
                <p className="text-gray-700">
                  <strong className="text-blue-600">✓ Solution:</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">Get notified when new articles and tutorials are published</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Contact() {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.from(formRef.current.querySelectorAll('input, textarea, button'), {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
      });
    }
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="min-h-[40vh] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100">Interested in collaboration or want to learn more? Let's connect!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Let's Connect</h2>

            {[
              {
                icon: '📧',
                title: 'Email',
                value: 'thathsara@example.com',
                desc: 'Fastest way to reach out for collaboration',
                link: 'mailto:thathsara@example.com',
              },
              {
                icon: '💼',
                title: 'LinkedIn',
                value: 'Thathsara Bandara',
                desc: 'Connect with me on LinkedIn',
                link: 'https://linkedin.com/in/thathsara-bandara',
              },
              {
                icon: '🐙',
                title: 'GitHub',
                value: '@thathsara-bandara',
                desc: 'View all my projects and contributions',
                link: 'https://github.com/thathsara-bandara',
              },
              {
                icon: '🔗',
                title: 'Portfolio',
                value: 'thathsara.dev',
                desc: 'Check out my complete portfolio',
                link: 'https://thathsara.dev',
              },
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-300 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              >
                <div className="flex gap-4">
                  <span className="text-4xl">{contact.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-blue-600 font-semibold">{contact.value}</p>
                    <p className="text-gray-600 text-sm">{contact.desc}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Quick Links */}
            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                {['GitHub Profile', 'LinkedIn', 'My Blog', 'Resume'].map((link, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-semibold transition duration-300"
                  >
                    → {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border-2 border-blue-300 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-white border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600 transition duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600 transition duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-white border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600 transition duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    placeholder="Tell me more about your inquiry..."
                    rows="5"
                    className="w-full px-4 py-3 bg-white border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-600 transition duration-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg"
                >
                  Send Message →
                </button>

                <p className="text-xs text-gray-600 text-center">
                  I'll get back to you within 24 hours. Thanks for reaching out!
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Interested in Collaboration?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🚀',
                title: 'Research Partners',
                desc: 'Collaborate on advancing robotics, AI, and IoT technologies',
              },
              {
                icon: '💼',
                title: 'Business Opportunities',
                desc: 'Discuss commercial applications and product development',
              },
              {
                icon: '🎓',
                title: 'Educational',
                desc: 'Workshops, mentoring, and knowledge sharing opportunities',
              },
            ].map((collab, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border-2 border-blue-300 text-center shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-5xl mb-4">{collab.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{collab.title}</h3>
                <p className="text-gray-600">{collab.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700 mb-6">
              Whether you're interested in discussing the project, potential collaboration, or just want to chat about
              robotics and AI, I'd love to hear from you!
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg">
              Schedule a Meeting
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'What is REX-47?',
                a: 'REX-47 is an ambitious autonomous smart home robot project combining robotics, AI, computer vision, and IoT. It represents several years of development through 50 sprints.',
              },
              {
                q: 'Is the code open source?',
                a: 'Yes! All repositories are available on GitHub with MIT License. You can use, modify, and contribute to the project.',
              },
              {
                q: 'Can I use this for commercial purposes?',
                a: 'Yes, under the MIT License. Please check the LICENSE file in each repository for specific terms.',
              },
              {
                q: 'How can I contribute?',
                a: 'You can submit PRs, report issues, or contribute improvements to any repository. See CONTRIBUTING.md for guidelines.',
              },
              {
                q: 'Are there tutorials available?',
                a: 'Yes! Check the Blog section for detailed tutorials and implementation guides on various components.',
              },
              {
                q: 'How do I deploy the system?',
                a: 'Comprehensive deployment instructions are available in the documentation. Docker Compose and Kubernetes configs included.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ {faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Connect?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch and let's explore what we can build together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:thathsara@example.com"
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition duration-300"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

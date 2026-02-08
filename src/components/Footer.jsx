import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GiTBrick } from 'react-icons/gi';
import { useSelector } from 'react-redux';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const quicklinks = [
    { name: 'Home', url: '/' },
    { name: 'Features', url: '/features' },
    { name: 'Architecture', url: '/architecture' },
    { name: 'Contact', url: '/contact' },
  ];

  const resources = [
    { name: 'Documentation', url: '/documentation' },
    { name: 'Blog', url: '/blog' },
    { name: 'GitHub', url: 'https://github.com/thathsarabandara' },
    { name: 'API Docs', url: '/api-docs' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/thathsarabandara' },
    { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/thathsara-bandara-b403582a7' },
    { icon: <FaTwitter />, label: 'Twitter', url: 'https://x.com/Thathsara2002' },
    { icon: <FaEnvelope />, label: 'Email', url: 'mailto:thathsaraarumapperuma.com' },
  ];

  return (
    isAuthenticated ? (
      <footer className="bg-white-900 text-black py-4 px-6 flex justify-between items-center text-sm">
        <p>&copy; {currentYear} REX-47 Project. All rights reserved.</p>
        <p className="mt-2 text-black">Logged in as: {user?.name} ({user?.email})</p>
      </footer>
    ) : (
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">REX-47</h3>
            <p className="text-gray-400 text-sm">
              AI-powered autonomous smart home robot combining computer vision, IoT, and advanced robotics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quicklinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="text-gray-400 hover:text-white transition duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {resources.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="text-gray-400 hover:text-white transition duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg hover:bg-blue-600 transition duration-300"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} REX-47 Project. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              License (MIT)
            </a>
          </div>
        </div>
      </div>
    </footer>
    )
  );
}

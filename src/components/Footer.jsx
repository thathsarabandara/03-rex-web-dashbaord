export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
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
              {['Home', 'Features', 'Architecture', 'Contact'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {['Documentation', 'Blog', 'GitHub', 'API Docs'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              {[
                { icon: '🐙', label: 'GitHub', url: '#' },
                { icon: '💼', label: 'LinkedIn', url: '#' },
                { icon: '🐦', label: 'Twitter', url: '#' },
                { icon: '📧', label: 'Email', url: '#' },
              ].map((social, idx) => (
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
  );
}

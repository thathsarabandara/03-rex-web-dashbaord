import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // Navigation items for public users
  const publicNavItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Product',
      path: '#',
      subItems: [
        { label: 'Features', path: '/features' },
        { label: 'Gallery', path: '/gallery' },
        { label: 'Skills', path: '/skills' },
      ]
    },
    {
      label: 'Docs',
      path: '#',
      subItems: [
        { label: 'Architecture', path: '/architecture' },
        { label: 'Roadmap', path: '/roadmap' },
      ]
    },
    {
      label: 'Resources',
      path: '#',
      subItems: [
        { label: 'About', path: '/about' },
        { label: 'Blog', path: '/blog' },
        { label: 'Code', path: '/repositories' },
      ]
    },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    dispatch(logout());
    setUserDropdownOpen(false);
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    !isAuthenticated ? (
      <header className="absolute lg:top-2 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-50 w-full lg:max-w-7/12 bg-gradient-to-r from-indigo-500 to-purple-700 shadow-lg rounded-lg border border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
                <img src='banner.png' alt='rex-nav-banner' className="h-20 " />
            </Link>
            <div className="hidden lg:flex gap-6">
              {publicNavItems.map((item, idx) => (
                <div key={idx} className="relative group">
                  <Link
                    to={item.path}
                    className={`text-sm font-semibold transition duration-300 flex items-center gap-1 ${
                      isActive(item.path)
                        ? 'text-white font-extrabold'
                        : 'text-white hover:text-gray-200'
                    }`}
                  >
                    {item.label}
                    {item.subItems && item.subItems.length > 0 && (
                      <svg className="w-4 h-4 group-hover:rotate-180 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    )}
                  </Link>
                  
                  {item.subItems && item.subItems.length > 0 && (
                    <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-20 py-2">
                      {item.subItems.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-indigo-50 transition duration-300 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
                <div className="hidden md:flex gap-2">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-semibold text-indigo-600 bg-white rounded-lg hover:bg-indigo-50 transition duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 text-sm font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-indigo-600 transition duration-300"
                  >
                    Register
                  </Link>
                </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-indigo-500 transition duration-300 text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
              {mobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-indigo-500 to-purple-700 shadow-lg border-t border-gray-200 lg:hidden">
                  <div className="flex flex-col items-center gap-4 py-4">
                    {publicNavItems.map((item, idx) => (
                      <div key={idx} className="w-full px-4">
                        {item.subItems && item.subItems.length > 0 ? (
                          <div>
                            <button
                              onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                              className="w-full flex items-center justify-center gap-2 text-sm font-semibold transition duration-300 py-2 text-white hover:text-gray-200"
                            >
                              {item.label}
                              <svg 
                                className={`w-4 h-4 transition duration-300 ${openDropdown === idx ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                            </button>
                            {openDropdown === idx && (
                              <div className="bg-indigo-600 rounded-lg mt-2">
                                {item.subItems.map((subItem, subIdx) => (
                                  <Link
                                    key={subIdx}
                                    to={subItem.path}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setOpenDropdown(null);
                                    }}
                                    className="block px-4 py-2 text-sm text-white hover:bg-indigo-700 transition duration-300 first:rounded-t-lg last:rounded-b-lg text-center"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block text-sm font-semibold transition duration-300 py-2 text-center ${
                              isActive(item.path)
                                ? 'text-white font-extrabold'
                                : 'text-white hover:text-gray-200'
                            }`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                    <div className="flex gap-2 mt-4">
                      <Link
                        to="/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-4 py-2 text-sm font-semibold text-indigo-600 bg-white rounded-lg hover:bg-indigo-50 transition duration-300"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-4 py-2 text-sm font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-indigo-600 transition duration-300"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
      </header>
      ) : (
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2 group">
            <img src="banner.png" alt="rex-nav-banner" className="h-16" />
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">
            {/* Notification Icon */}
            <button className="relative p-2 text-gray-600 hover:text-gray-900 transition duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                {/* Profile Picture */}
                <img
                  src={user?.profilePicture || 'https://via.placeholder.com/40?text=User'}
                  alt={user?.name || 'User'}
                  className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
                />
                {/* Welcome Message and Username */}
                <div className="hidden sm:block text-left">
                  <p className="text-xs text-gray-600">Welcome back</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {user?.name || 'User'}
                  </p>
                </div>
                {/* Dropdown Arrow */}
                <svg
                  className={`w-5 h-5 text-gray-600 transition duration-300 ${
                    userDropdownOpen ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {/* User Dropdown Menu */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-10">
                  {/* User Info Section */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">
                      {user?.name || 'User'}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {user?.email || 'user@example.com'}
                    </p>
                  </div>

                  {/* Menu Items */}
                  <Link
                    to="/profile"
                    onClick={() => setUserDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-indigo-50 transition duration-300"
                  >
                    <span className="mr-2">👤</span> Profile
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setUserDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-indigo-50 transition duration-300"
                  >
                    <span className="mr-2">⚙️</span> Settings
                  </Link>

                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition duration-300 border-t border-gray-200 mt-2"
                  >
                    <span className="mr-2">🚪</span> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
      )
  );
}

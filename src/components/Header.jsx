import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { RiArrowDownSLine } from 'react-icons/ri';
import { IoNotifications } from 'react-icons/io5';

const getInitials = (name) => {
  if (!name) return 'U';
  const names = name.trim().split(' ');
  return names.map(n => n.charAt(0).toUpperCase()).join('').slice(0, 2);
};

const getAvatarColor = (name) => {
  if (!name) return 'bg-indigo-500';
  const colors = [
    'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
    'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

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

  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdown(null);
      setIsNotificationsOpen(false);
      setUserDropdownOpen(false);
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
                      <RiArrowDownSLine className="w-4 h-4 text-gray-400 group-hover:text-gray-200 transition duration-300" />
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

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-600 hover:text-gray-900 transition duration-300" 
              onClick={(e) => {
                e.stopPropagation();
                setIsNotificationsOpen(!isNotificationsOpen);
              }}
            >
              <IoNotifications className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="relative rounded-lg hover:bg-gray-100 transition duration-300" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setUserDropdownOpen(!userDropdownOpen);
                }}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                {user?.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt={user?.name || 'User'}
                    className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
                  />
                ) : (
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold border-2 border-indigo-500 ${getAvatarColor(user?.name)}`}>
                    {getInitials(user?.name)}
                  </div>
                )}

                <div className="hidden sm:block text-left">
                  <p className="text-xs text-gray-600">Welcome back</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {user?.name || 'User'}
                  </p>
                </div>

                <RiArrowDownSLine className={`w-4 h-4 text-gray-400 transition duration-300 ${userDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-10" onClick={(e) => e.stopPropagation()}>
                  <h3 className="text-sm font-semibold text-gray-900 px-4 mb-3">Notifications</h3>
                  <div className="space-y-2 px-4">
                    <p className="text-sm text-gray-700">You have 3 new notifications.</p>
                    <p className="text-xs text-gray-500">Last updated 5 minutes ago</p>
                  </div>
                </div>
              )}

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-10" onClick={(e) => e.stopPropagation()}>
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">
                      {user?.name || 'User'}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {user?.email || 'user@example.com'}
                    </p>
                  </div>

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

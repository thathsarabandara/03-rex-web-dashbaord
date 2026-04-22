import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { FaBrain, FaChartLine, FaCog, FaHome, FaQuestionCircle, FaRobot, FaTachometerAlt, FaUser } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menuItems = [
    { icon: <FaTachometerAlt />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FaUser />, label: 'Profile', path: '/profile' },
    { icon: <FaRobot />, label: 'Robot Control', path: '/robot-control' },
    { icon: <FaChartLine />, label: 'Monitoring', path: '/robot-monitoring' },
    { icon: <FaHome />, label: 'Smart Home', path: '/smart-home' },
    { icon: <FaBrain />, label: 'AI Insights', path: '/ai-perception' },
    { icon: <FaCog />, label: 'Settings', path: '/settings' },
    { icon: <FaQuestionCircle />, label: 'Help', path: '/help' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <aside
      className={`${sidebarOpen ? 'w-64' : 'w-16'
        } bg-white text-gray-800 transition-all duration-300 flex flex-col shadow-sm border-r border-gray-200 h-screen sticky top-0`}
    >
      {/* Logo/Brand */}
      <div className="p-3 flex items-center justify-between border-b border-gray-200">
        {sidebarOpen && <h2 className="text-xl font-bold text-gray-900">REX-47</h2>}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-600"
          title={sidebarOpen ? 'Collapse' : 'Expand'}
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 px-2 py-3 rounded-lg transition ${isActive(item.path)
                ? 'bg-indigo-50 text-indigo-600 font-semibold border-l-4 border-indigo-600'
                : 'text-gray-700 hover:bg-gray-100'
              }`}
            title={!sidebarOpen ? item.label : ''}
          >
            <span className="text-lg">{item.icon}</span>
            {sidebarOpen && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-semibold transition ${!sidebarOpen && 'justify-center'
            }`}
          title={!sidebarOpen ? 'Logout' : ''}
        >
          <CiLogout className="text-lg" />
          {sidebarOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}

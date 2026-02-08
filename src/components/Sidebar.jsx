import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menuItems = [
    { icon: '📊', label: 'Dashboard', path: '/dashboard' },
    { icon: '👤', label: 'Profile', path: '/profile' },
    { icon: '🤖', label: 'Robot Control', path: '/robot-control' },
    { icon: '📈', label: 'Monitoring', path: '/robot-monitoring' },
    { icon: '🏠', label: 'Smart Home', path: '/smart-home' },
    { icon: '🧠', label: 'AI Insights', path: '/ai-perception' },
    { icon: '⚙️', label: 'Settings', path: '/settings' },
    { icon: '❓', label: 'Help', path: '/help' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gradient-to-b from-indigo-600 to-purple-700 text-white transition-all duration-300 flex flex-col shadow-lg`}
      >
        {/* Logo/Brand */}
        <div className="p-6 border-b border-indigo-500 flex items-center justify-between">
          {sidebarOpen && <h2 className="text-xl font-bold text-white">REX-47</h2>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-indigo-500 rounded-lg transition"
            title={sidebarOpen ? 'Collapse' : 'Expand'}
          >
            {sidebarOpen ? '◄' : '►'}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition ${
                isActive(item.path)
                  ? 'bg-white text-indigo-600 font-semibold shadow-md'
                  : 'text-indigo-100 hover:bg-indigo-500'
              }`}
              title={!sidebarOpen ? item.label : ''}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-indigo-500">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition ${
              !sidebarOpen && 'justify-center'
            }`}
            title={!sidebarOpen ? 'Logout' : ''}
          >
            <span className="text-xl">🚪</span>
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-gray-50 overflow-auto">
        {/* Placeholder for page content */}
        <div className="p-8">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">Page content will be displayed here</p>
          </div>
        </div>
      </main>
    </div>
  );
}

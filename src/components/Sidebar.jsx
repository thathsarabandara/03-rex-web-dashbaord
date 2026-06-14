import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { 
  LayoutDashboard, 
  UserCircle, 
  Gamepad2, 
  Activity, 
  Home, 
  BrainCircuit, 
  Settings, 
  HelpCircle,
  LogOut,
  Cpu,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <UserCircle size={20} />, label: 'Profile', path: '/profile' },
    { icon: <Gamepad2 size={20} />, label: 'Robot Control', path: '/robot-control' },
    { icon: <Activity size={20} />, label: 'Monitoring', path: '/robot-monitoring' },
    { icon: <Home size={20} />, label: 'Smart Home', path: '/smart-home' },
    { icon: <BrainCircuit size={20} />, label: 'AI Insights', path: '/ai-perception' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
    { icon: <HelpCircle size={20} />, label: 'Help', path: '/help' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <aside
      className={`glass-sidebar ${
        sidebarOpen ? 'w-72' : 'w-24'
      } transition-all duration-500 flex flex-col h-screen sticky top-0 relative z-30 font-sans`}
    >
      {/* Logo/Brand */}
      <div className={`p-6 flex items-center ${sidebarOpen ? 'justify-between' : 'justify-center flex-col gap-4'} border-b border-slate-100/50`}>
        {sidebarOpen ? (
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-transparent text-white rounded-[12px] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 overflow-hidden">
              <img src="/icon/logo.png" alt="REX-47 Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter leading-none text-slate-900">REX-47</span>
            </div>
          </Link>
        ) : (
          <Link to="/" className="w-10 h-10 bg-transparent text-white rounded-[12px] flex items-center justify-center shadow-lg hover:scale-110 hover:rotate-6 transition-all duration-500 overflow-hidden">
            <img src="/icon/logo.png" alt="REX-47 Logo" className="w-full h-full object-cover" />
          </Link>
        )}
        
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-slate-100 rounded-[12px] transition text-slate-400 hover:text-slate-900 flex items-center justify-center active:scale-95"
          title={sidebarOpen ? 'Collapse' : 'Expand'}
        >
          {sidebarOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center ${sidebarOpen ? 'px-4' : 'justify-center'} py-3.5 rounded-[16px] transition-all duration-300 group ${
                active
                  ? 'bg-brand-accent/10 text-brand-accent shadow-sm'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
              title={!sidebarOpen ? item.label : ''}
            >
              <span className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
                {item.icon}
              </span>
              {sidebarOpen && (
                <span className={`ml-4 text-sm ${active ? 'font-black' : 'font-bold'}`}>
                  {item.label}
                </span>
              )}
              {active && sidebarOpen && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(147,51,234,0.6)]"></span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-6 border-t border-slate-100/50">
        <button
          onClick={handleLogout}
          className={`w-full flex items-center ${sidebarOpen ? 'px-4' : 'justify-center'} py-3.5 rounded-[16px] group bg-rose-50 text-rose-600 font-bold hover:bg-rose-100 hover:shadow-md transition-all duration-300 active:scale-95`}
          title={!sidebarOpen ? 'Logout' : ''}
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">
            <LogOut size={20} />
          </span>
          {sidebarOpen && <span className="ml-4 text-sm font-black">Logout Session</span>}
        </button>
      </div>
    </aside>
  );
}

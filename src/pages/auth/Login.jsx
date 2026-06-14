import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, clearError } from '../../store/authSlice';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [attemptsRemaining, setAttemptsRemaining] = useState(5);

  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (error) {
      dispatch(clearError());
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.email || !formData.password) {
      return;
    }

    // Check rate limiting
    if (attemptsRemaining <= 0) {
      return;
    }

    try {
      // Dispatch login action
      const result = await dispatch(loginUser({
        email: formData.email,
        password: formData.password,
      })).unwrap();

      // Store remember me preference
      if (formData.rememberMe) {
        localStorage.setItem('rememberEmail', formData.email);
      } else {
        localStorage.removeItem('rememberEmail');
      }

      // Navigate to dashboard on success
      navigate('/dashboard');
    } catch {
      // Error handled by Redux, will be in state.auth.error
      setAttemptsRemaining(prev => prev - 1);
    }
  };

  // Load remembered email on component mount
  React.useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberEmail');
    if (rememberedEmail) {
      setFormData(prev => ({
        ...prev,
        email: rememberedEmail,
        rememberMe: true
      }));
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-7rem)] relative font-sans bg-slate-50 selection:bg-brand-accent/30 p-4 sm:p-8">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute inset-0 pattern-dots opacity-30 -z-20"></div>

      <div className="w-full max-w-6xl glass-card-vibrant rounded-[40px] flex flex-col lg:flex-row overflow-hidden shadow-2xl relative z-10 min-h-[700px]">
        
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 p-10 sm:p-16 flex flex-col justify-center">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-10">
              <div className="w-12 h-12 bg-transparent border border-slate-100 shadow-sm rounded-[16px] flex items-center justify-center mb-6 overflow-hidden">
                <img src="/icon/logo.png" alt="REX-47 Logo" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Command Access</h1>
              <p className="text-slate-500 font-medium text-sm">Authenticate to the REX-47 operator dashboard</p>
            </div>

            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-[20px]">
                <p className="text-red-600 text-sm font-bold">{error}</p>
                {attemptsRemaining > 0 && attemptsRemaining <= 2 && (
                  <p className="text-red-500/80 text-xs mt-2 font-medium">
                    {attemptsRemaining} attempt(s) remaining before system lockout.
                  </p>
                )}
              </div>
            )}

            {attemptsRemaining <= 0 && (
              <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-[20px]">
                <p className="text-red-600 text-sm font-bold">
                  Maximum failed attempts reached. Terminal access locked.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Operator Identity</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="operator@rex.sys"
                  required
                  disabled={loading || attemptsRemaining <= 0}
                  className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-2">
                  <label htmlFor="password" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500">Security Clearance</label>
                  <a href="/forgot-password" className="text-[10px] font-bold text-brand-accent hover:text-brand-secondary transition-colors uppercase tracking-widest">
                    Reset Clearance?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  required
                  disabled={loading || attemptsRemaining <= 0}
                  className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="flex items-center pl-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-4 h-4 text-brand-accent bg-white border-slate-300 rounded cursor-pointer focus:ring-brand-accent focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <label htmlFor="rememberMe" className="ml-3 text-sm font-bold text-slate-600 cursor-pointer">
                  Preserve Session
                </label>
              </div>

              <button
                type="submit"
                disabled={loading || attemptsRemaining <= 0}
                className="w-full py-5 bg-slate-900 text-white font-bold rounded-[20px] hover:bg-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-slate-900 mt-4"
              >
                {loading ? 'Authenticating...' : 'Establish Connection'}
              </button>
            </form>

            <div className="mt-8 pt-8">
              <p className="text-slate-500 text-sm font-medium">
                New operator?{' '}
                <a href="/register" className="text-brand-accent hover:text-brand-secondary font-bold transition-colors">
                  Request Access
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Graphic */}
        <div className="hidden lg:flex w-1/2 bg-slate-900 relative items-center justify-center p-12 overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          {/* Mock Dashboard Area Visual */}
          <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
             <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 bg-brand-accent/20 rounded-[10px] flex items-center justify-center text-brand-accent">
                      <span className="w-3 h-3 border-2 border-brand-accent rounded-full"></span>
                   </div>
                   <div>
                      <h3 className="font-bold text-white text-sm">System Telemetry</h3>
                      <p className="text-[8px] uppercase font-bold text-slate-400 tracking-widest">Secure Channel</p>
                   </div>
                </div>
                <div className="flex gap-1.5">
                   <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                   <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                   <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse"></span>
                </div>
             </div>
             
             <div className="space-y-4">
                <div className="h-16 bg-white/5 rounded-[16px] border border-white/10 flex items-center px-4 gap-4">
                   <div className="w-10 h-10 bg-brand-secondary/20 rounded-full flex items-center justify-center text-brand-secondary text-xs font-bold">1</div>
                   <div>
                      <div className="h-2 w-32 bg-white/20 rounded-full mb-2"></div>
                      <div className="h-2 w-16 bg-white/10 rounded-full"></div>
                   </div>
                </div>
                <div className="h-16 bg-white/5 rounded-[16px] border border-white/10 flex items-center px-4 gap-4">
                   <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 text-xs font-bold">2</div>
                   <div>
                      <div className="h-2 w-24 bg-white/20 rounded-full mb-2"></div>
                      <div className="h-2 w-20 bg-white/10 rounded-full"></div>
                   </div>
                </div>
             </div>

             {/* Overlapping small card */}
             <div className="absolute -bottom-10 -right-10 w-48 bg-white/90 backdrop-blur-md rounded-[24px] p-4 shadow-2xl border border-white">
                <div className="flex items-center gap-2 mb-2">
                   <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Connection</span>
                </div>
                <p className="text-sm font-black text-slate-900">Encrypted (TLS 1.3)</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

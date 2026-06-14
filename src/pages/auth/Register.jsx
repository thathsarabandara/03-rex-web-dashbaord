import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerInitiate, registerVerify, resendOTP, clearError } from '../../store/authSlice';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, tempToken, registrationEmail, isAuthenticated } = useSelector((state) => state.auth);

  const [step, setStep] = useState('form'); // form, otp
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [otpCode, setOtpCode] = useState('');
  const [resendCooldown, setResendCooldown] = useState(0);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  // Handle OTP resend cooldown
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => {
        setResendCooldown(resendCooldown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    return strength;
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newFormData = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    };
    
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
    
    setFormData(newFormData);
    if (error) {
      dispatch(clearError());
    }
  };

  const getPasswordStrengthLabel = () => {
    const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    return labels[passwordStrength] || 'Very Weak';
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      return;
    }

    if (passwordStrength < 2) {
      return;
    }

    if (!formData.agreeToTerms) {
      return;
    }

    try {
      // Initiate registration
      await dispatch(registerInitiate({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      })).unwrap();
      
      setStep('otp');
      setResendCooldown(60);
    } catch (err) {
      // Error handled by Redux
      console.error('Registration error:', err);
    }
  };

  const handleOtpChange = (e) => {
    setOtpCode(e.target.value.replace(/[^0-9]/g, '').slice(0, 6));
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (otpCode.length !== 6) {
      return;
    }

    try {
      await dispatch(registerVerify({
        email: registrationEmail,
        otp: otpCode,
        tempToken: tempToken,
      })).unwrap();

      // Redirect to dashboard on success
      navigate('/dashboard');
    } catch (err) {
      console.error('OTP verification error:', err);
    }
  };

  const handleResendOtp = async () => {
    try {
      await dispatch(resendOTP({
        email: registrationEmail,
        tempToken: tempToken,
      })).unwrap();
      setResendCooldown(60);
      setOtpCode('');
    } catch (err) {
      console.error('Resend OTP error:', err);
    }
  };

  if (step === 'otp') {
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
              <div className="text-center mb-10">
                <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Verify Clearance</h1>
                <p className="text-slate-500 font-medium text-sm">Enter the 6-digit code sent to {registrationEmail}</p>
              </div>

              {error && (
                <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-[20px]">
                  <p className="text-red-600 text-sm font-bold">{error}</p>
                </div>
              )}

              <form onSubmit={handleOtpSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="otpCode" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2 text-center">Verification Code</label>
                  <input
                    type="text"
                    id="otpCode"
                    value={otpCode}
                    onChange={handleOtpChange}
                    placeholder="000000"
                    maxLength="6"
                    disabled={loading}
                    className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-mono text-center text-3xl tracking-[0.5em] font-black text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || otpCode.length !== 6}
                  className="w-full py-5 bg-slate-900 text-white font-bold rounded-[20px] hover:bg-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-slate-900 mt-4"
                >
                  {loading ? 'Verifying...' : 'Verify Access'}
                </button>
              </form>

              <div className="mt-8 text-center border-t border-slate-100/50 pt-8">
                <p className="text-slate-500 text-sm font-medium mb-3">Code not received?</p>
                <button
                  onClick={handleResendOtp}
                  disabled={resendCooldown > 0 || loading}
                  className="text-brand-accent hover:text-brand-secondary disabled:text-slate-400 font-bold text-sm transition-colors uppercase tracking-widest disabled:cursor-not-allowed"
                >
                  {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend Code'}
                </button>
              </div>

              <button
                onClick={() => {
                  setStep('form');
                  setOtpCode('');
                }}
                className="w-full mt-6 text-slate-400 hover:text-slate-600 font-bold text-xs uppercase tracking-widest transition-colors text-center block"
              >
                Abort & Return
              </button>
            </div>
          </div>

          {/* Right Side: Visual Graphic */}
          <div className="hidden lg:flex w-1/2 bg-slate-900 relative items-center justify-center p-12 overflow-hidden">
            <div className="absolute inset-0 pattern-grid opacity-20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/20 blur-[120px] rounded-full pointer-events-none"></div>
            
            {/* Shield/Security Mockup */}
            <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-700">
               <div className="w-24 h-24 bg-brand-accent/20 rounded-full flex items-center justify-center mb-6 border border-brand-accent/30 relative">
                  <div className="absolute inset-0 border-2 border-brand-accent rounded-full animate-ping opacity-20"></div>
                  <svg className="w-10 h-10 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Secure Communication</h3>
               <p className="text-slate-400 text-sm">All authorization requests are end-to-end encrypted and transmitted via secure protocols.</p>
               
               <div className="mt-8 w-full bg-white/10 rounded-[16px] p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                     </div>
                     <span className="text-sm font-bold text-white">Identity Verification</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Active</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

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
              <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Request Access</h1>
              <p className="text-slate-500 font-medium text-sm">Register for REX-47 operator clearance</p>
            </div>

            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-[20px]">
                <p className="text-red-600 text-sm font-bold">{error}</p>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    placeholder="John"
                    required
                    disabled={loading}
                    className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    placeholder="Doe"
                    required
                    disabled={loading}
                    className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="operator@rex.sys"
                  required
                  disabled={loading}
                  className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Security Clearance (Password)</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleFormChange}
                  placeholder="Create a strong password"
                  required
                  disabled={loading}
                  className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <div className="mt-3 px-2">
                  <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden mb-2">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        passwordStrength === 0 ? 'w-1/5 bg-red-500' :
                        passwordStrength === 1 ? 'w-2/5 bg-orange-500' :
                        passwordStrength === 2 ? 'w-3/5 bg-yellow-500' :
                        passwordStrength === 3 ? 'w-4/5 bg-brand-secondary' :
                        'w-full bg-brand-accent'
                      }`}
                    ></div>
                  </div>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${
                    passwordStrength === 0 ? 'text-red-500' :
                    passwordStrength === 1 ? 'text-orange-500' :
                    passwordStrength === 2 ? 'text-yellow-600' :
                    passwordStrength === 3 ? 'text-brand-secondary' :
                    'text-brand-accent'
                  }`}>
                    Strength: {getPasswordStrengthLabel()}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Confirm Clearance</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleFormChange}
                  placeholder="Re-enter your password"
                  required
                  disabled={loading}
                  className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="flex items-center gap-3 pt-2 pl-2">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleFormChange}
                  disabled={loading}
                  className="w-4 h-4 text-brand-accent bg-white border-slate-300 rounded cursor-pointer focus:ring-brand-accent focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                />
                <label htmlFor="agreeToTerms" className="text-xs font-bold text-slate-600 cursor-pointer select-none">
                  I agree to the <a href="#terms" className="text-brand-accent hover:text-brand-secondary transition-colors">Terms of Service</a> and <a href="#privacy" className="text-brand-accent hover:text-brand-secondary transition-colors">Privacy Policy</a>
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-slate-900 text-white font-bold rounded-[20px] hover:bg-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-slate-900 mt-6" 
                disabled={loading}
              >
                {loading ? 'Initializing Protocol...' : 'Initialize Clearance'}
              </button>

              <div className="mt-8 pt-8 border-t border-slate-100/50">
                <p className="text-slate-500 text-sm font-medium">
                  Existing operator? <a href="/login" className="text-brand-accent hover:text-brand-secondary font-bold transition-colors ml-1">Authenticate here</a>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Visual Graphic */}
        <div className="hidden lg:flex w-1/2 bg-slate-900 relative items-center justify-center p-12 overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          {/* Platform Capabilities Mockup */}
          <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700">
             <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-[16px] flex items-center justify-center shadow-lg">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white tracking-tight">REX-47 Platform</h3>
                   <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Agentic Architecture</p>
                </div>
             </div>
             
             <div className="space-y-4">
                {[
                  { name: 'Core Processing', status: 'Online', color: 'emerald' },
                  { name: 'Neural Networks', status: 'Active', color: 'brand-accent' },
                  { name: 'Motor Controllers', status: 'Synced', color: 'brand-secondary' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-[16px] border border-white/10 p-4 flex items-center justify-between">
                     <span className="text-sm font-bold text-white">{item.name}</span>
                     <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full bg-${item.color === 'emerald' ? 'emerald-500' : item.color}`} />
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{item.status}</span>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword, clearError } from '../../store/authSlice';

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      dispatch(clearError());
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    try {
      // Dispatch forgot password action with Redux
      await dispatch(forgotPassword({ email })).unwrap();
      setResetSent(true);
    } catch (err) {
      // Error handled by Redux
      console.error('Forgot password error:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-7rem)] relative overflow-hidden font-sans bg-slate-50 selection:bg-brand-accent/30 p-5">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute inset-0 pattern-dots opacity-30 -z-20"></div>

      <div className="glass-card-vibrant w-full max-w-md p-10 sm:p-12 relative shadow-2xl z-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Reset Clearance</h1>
          <p className="text-slate-500 font-medium text-sm">Enter your operator identity to receive a reset link</p>
        </div>

        {!resetSent ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">Operator Identity</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="operator@rex.sys"
                required
                disabled={loading}
                className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary ml-2 pt-1">Link valid for 60 minutes</p>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-[20px]">
                <p className="text-red-600 text-sm font-bold">{error}</p>
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-5 bg-slate-900 text-white font-bold rounded-[20px] hover:bg-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-slate-900 mt-6"
            >
              {loading ? 'Transmitting...' : 'Transmit Reset Link'}
            </button>

            <div className="mt-8 text-center border-t border-slate-100/50 pt-8">
              <p className="text-slate-500 text-sm font-medium">
                Clearance remembered?{' '}
                <a href="/login" className="text-brand-accent hover:text-brand-secondary font-bold transition-colors ml-1">Authenticate here</a>
              </p>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex p-4 bg-brand-secondary/10 border border-brand-secondary/20 rounded-[24px]">
                <svg className="w-8 h-8 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Transmission Sent</h2>
            <p className="text-slate-500 font-medium mb-2">We've dispatched a secure link to:</p>
            <p className="font-bold text-slate-900 bg-slate-100 py-3 px-4 rounded-[16px] mb-6 border border-slate-200">{email}</p>
            <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed">
              The transmission will expire in 1 hour. Please check your secure inbox to continue the procedure.
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8 border-t border-slate-100/50 pt-6">
              Didn't receive it? Check quarantine or{' '}
              <button className="text-brand-accent hover:text-brand-secondary transition-colors" onClick={() => setResetSent(false)}>
                try again
              </button>
            </p>
            <button 
              className="w-full py-5 bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 font-bold rounded-[20px] shadow-sm"
              onClick={() => window.location.href = '/login'}
            >
              Abort & Return to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

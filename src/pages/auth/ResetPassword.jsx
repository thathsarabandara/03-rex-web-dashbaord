import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { resetPassword, validateResetToken, clearError } from '../../store/authSlice';

export default function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { loading, error } = useSelector((state) => state.auth);

  const token = searchParams.get('token');

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [isValidatingToken, setIsValidatingToken] = useState(true);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [tokenError, setTokenError] = useState('');

  // Validate token on mount
  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setTokenError('No reset token provided. Invalid or expired reset link.');
        setIsValidatingToken(false);
        return;
      }

      try {
        await dispatch(validateResetToken({ token })).unwrap();
        setIsTokenValid(true);
        setTokenError('');
      } catch (err) {
        setTokenError(err || 'Invalid or expired reset token. Please request a new password reset.');
        setIsTokenValid(false);
      } finally {
        setIsValidatingToken(false);
      }
    };

    validateToken();
  }, [token, dispatch]);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    return strength;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return;
    }

    if (passwordStrength < 2) {
      return;
    }

    if (!token) {
      return;
    }

    try {
      // Dispatch reset password action with Redux
      await dispatch(resetPassword({
        resetToken: token,
        newPassword: formData.password,
      })).unwrap();
      
      setResetSuccess(true);
      
      // Redirect to login after success
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      // Error handled by Redux
      console.error('Reset password error:', err);
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
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Initialize Clearance</h1>
          <p className="text-slate-500 font-medium text-sm">Enter a new security key for your operator account</p>
        </div>

        {/* Token Validation Loading State */}
        {isValidatingToken && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mb-4"></div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Verifying Authorization Link...</p>
          </div>
        )}

        {/* Token Invalid Error State */}
        {!isValidatingToken && !isTokenValid && (
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex p-4 bg-red-50 border border-red-100 rounded-[24px]">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Invalid Link</h2>
            <p className="text-slate-500 font-medium mb-6">{tokenError}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8 border-t border-slate-100/50 pt-6">
              Please request a new clearance reset.
            </p>
            <button 
              className="w-full py-5 bg-slate-900 text-white font-bold rounded-[20px] hover:bg-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-xl"
              onClick={() => navigate('/forgot-password')}
            >
              Request New Link
            </button>
          </div>
        )}

        {/* Password Reset Form - Only show if token is valid */}
        {!isValidatingToken && isTokenValid && !resetSuccess && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="password" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">New Security Clearance</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a new password"
                required
                disabled={loading}
                className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <div className="flex flex-col gap-2 mt-3 px-2">
                <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
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
                onChange={handleChange}
                placeholder="Re-enter your new password"
                required
                disabled={loading}
                className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-[20px] font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-accent/10 focus:border-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-[20px]">
                <p className="text-red-600 text-sm font-bold">{error}</p>
              </div>
            )}

            <ul className="list-none p-0 mx-2 mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400 space-y-2">
              <li className={passwordStrength >= 1 ? 'text-brand-secondary' : ''}>○ At least 8 characters</li>
              <li className={passwordStrength >= 2 ? 'text-brand-secondary' : ''}>○ Mix of uppercase and lowercase</li>
              <li className={passwordStrength >= 3 ? 'text-brand-secondary' : ''}>○ At least one number</li>
              <li className={passwordStrength >= 4 ? 'text-brand-accent' : ''}>○ At least one special character</li>
            </ul>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-5 bg-slate-900 text-white font-bold rounded-[20px] hover:bg-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-slate-900 mt-8"
            >
              {loading ? 'Initializing...' : 'Initialize Clearance'}
            </button>
          </form>
        )}

        {/* Password Reset Success State */}
        {!isValidatingToken && isTokenValid && resetSuccess && (
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex p-4 bg-emerald-50 border border-emerald-100 rounded-[24px]">
                <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Clearance Updated</h2>
            <p className="text-slate-500 font-medium mb-6">Your security key has been successfully changed.</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8 border-t border-slate-100/50 pt-6">
              You may now authenticate with your new clearance.
            </p>
            <button 
              className="w-full py-5 bg-slate-900 text-white font-bold rounded-[20px] hover:bg-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-xl"
              onClick={() => window.location.href = '/login'}
            >
              Proceed to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

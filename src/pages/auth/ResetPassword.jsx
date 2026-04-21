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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-5">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Password</h1>
          <p className="text-gray-600 text-sm">Enter a new password for your account</p>
        </div>

        {/* Token Validation Loading State */}
        {isValidatingToken && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
            <p className="text-gray-600 text-sm">Verifying reset link...</p>
          </div>
        )}

        {/* Token Invalid Error State */}
        {!isValidatingToken && !isTokenValid && (
          <div className="text-center">
            <div className="mb-4">
              <div className="inline-block p-3 bg-red-100 rounded-full">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold text-red-600 mb-3">Invalid Reset Link</h2>
            <p className="text-gray-700 mb-2">{tokenError}</p>
            <p className="text-gray-600 mb-6">Please request a new password reset.</p>
            <button 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold text-sm transition"
              onClick={() => navigate('/forgot-password')}
            >
              Request New Reset Link
            </button>
          </div>
        )}

        {/* Password Reset Form - Only show if token is valid */}
        {!isValidatingToken && isTokenValid && !resetSuccess && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="block font-semibold text-gray-900 text-sm">New Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a new password"
                required
                disabled={loading}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <div className="flex flex-col gap-2 mt-2">
                <div className="h-1.5 bg-gray-300 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all ${
                      passwordStrength === 0 ? 'w-1/5 bg-red-500' :
                      passwordStrength === 1 ? 'w-2/5 bg-orange-500' :
                      passwordStrength === 2 ? 'w-3/5 bg-yellow-500' :
                      passwordStrength === 3 ? 'w-4/5 bg-lime-500' :
                      'w-full bg-green-500'
                    }`}
                  ></div>
                </div>
                <p className={`text-xs font-semibold ${
                  passwordStrength === 0 ? 'text-red-500' :
                  passwordStrength === 1 ? 'text-orange-500' :
                  passwordStrength === 2 ? 'text-yellow-600' :
                  passwordStrength === 3 ? 'text-lime-600' :
                  'text-green-500'
                }`}>
                  Strength: {getPasswordStrengthLabel()}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword" className="block font-semibold text-gray-900 text-sm">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your new password"
                required
                disabled={loading}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            {error && (
              <div className="px-3 py-2 bg-red-100 text-red-700 border border-red-300 rounded-lg text-sm">
                {error}
              </div>
            )}

            <ul className="list-none p-0 m-0 mt-2 text-xs text-gray-600 space-y-1">
              <li className={passwordStrength >= 1 ? 'text-green-600 line-through' : ''}>○ At least 8 characters</li>
              <li className={passwordStrength >= 2 ? 'text-green-600 line-through' : ''}>○ Mix of uppercase and lowercase</li>
              <li className={passwordStrength >= 3 ? 'text-green-600 line-through' : ''}>○ At least one number</li>
              <li className={passwordStrength >= 4 ? 'text-green-600 line-through' : ''}>○ At least one special character</li>
            </ul>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold text-sm transition mt-4"
            >
              {loading ? 'Resetting Password...' : 'Reset Password'}
            </button>
          </form>
        )}

        {/* Password Reset Success State */}
        {!isValidatingToken && isTokenValid && resetSuccess && (
          <div className="text-center">
            <div className="mb-4">
              <div className="inline-block p-3 bg-green-100 rounded-full">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-4">Password Reset Successful</h2>
            <p className="text-gray-700 mb-2">Your password has been changed successfully.</p>
            <p className="text-gray-600 mb-6">You can now sign in with your new password.</p>
            <button 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold text-sm transition"
              onClick={() => window.location.href = '/login'}
            >
              Go to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

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
    username: '',
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
    const newFormData = {
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
        username: formData.username,
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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-5">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Email</h1>
            <p className="text-gray-600 text-sm">Enter the 6-digit code sent to {registrationEmail}</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleOtpSubmit} className="space-y-5">
            <div>
              <label htmlFor="otpCode" className="block font-semibold text-gray-900 text-sm mb-2">Verification Code</label>
              <input
                type="text"
                id="otpCode"
                value={otpCode}
                onChange={handleOtpChange}
                placeholder="000000"
                maxLength="6"
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-mono text-center text-2xl tracking-widest font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            <button
              type="submit"
              disabled={loading || otpCode.length !== 6}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              {loading ? 'Verifying...' : 'Verify Email'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm mb-2">Didn't receive the code?</p>
            <button
              onClick={handleResendOtp}
              disabled={resendCooldown > 0 || loading}
              className="text-indigo-600 hover:text-indigo-700 disabled:text-gray-400 disabled:cursor-not-allowed font-semibold text-sm"
            >
              {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend Code'}
            </button>
          </div>

          <button
            onClick={() => {
              setStep('form');
              setOtpCode('');
            }}
            className="w-full mt-4 text-gray-600 hover:text-gray-700 font-medium text-sm"
          >
            Back to Registration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-10 pt-25">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600 text-sm">Join REX-47 Smart Home Robot Network</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-semibold text-gray-900 text-sm mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleFormChange}
              placeholder="Choose a username"
              required
              disabled={loading}
              className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-gray-900 text-sm mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="Enter your email"
              required
              disabled={loading}
              className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold text-gray-900 text-sm mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
              placeholder="Create a strong password"
              required
              disabled={loading}
              className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <div className="mt-2">
              <div className="h-1.5 bg-gray-300 rounded-full overflow-hidden mb-1">
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

          <div>
            <label htmlFor="confirmPassword" className="block font-semibold text-gray-900 text-sm mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleFormChange}
              placeholder="Re-enter your password"
              required
              disabled={loading}
              className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 mt-4">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleFormChange}
              disabled={loading}
              className="w-4 h-4 cursor-pointer disabled:cursor-not-allowed"
            />
            I agree to the <a href="#terms" className="text-indigo-500 font-semibold hover:text-purple-700">Terms of Service</a> and <a href="#privacy" className="text-indigo-500 font-semibold hover:text-purple-700">Privacy Policy</a>
          </label>

          <button type="submit" className="w-full bg-indigo-500 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold text-sm transition mt-4" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          <p className="text-center text-gray-700 text-sm mt-3">
            Already have an account? <a href="/login" className="text-indigo-500 font-semibold hover:text-purple-700 ml-1 transition">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
                    passwordStrength === 0 ? 'w-1/4 bg-red-500' :
                    passwordStrength === 1 ? 'w-2/4 bg-orange-500' :
                    passwordStrength === 2 ? 'w-3/4 bg-yellow-500' :
                    'w-full bg-green-500'
                  }`}
                ></div>
              </div>
              <p className={`text-xs font-semibold ${
                passwordStrength === 0 ? 'text-red-500' :
                passwordStrength === 1 ? 'text-orange-500' :
                passwordStrength === 2 ? 'text-yellow-600' :
                'text-green-500'
              }`}>
                Strength: {getPasswordStrengthLabel()}
              </p>
            </div>
            <ul className="mt-2 text-xs text-gray-600 space-y-1">
              <li className={passwordStrength >= 1 ? 'text-green-600 line-through' : ''}>○ At least 8 characters</li>
              <li className={passwordStrength >= 2 ? 'text-green-600 line-through' : ''}>○ Mix of uppercase and lowercase</li>
              <li className={passwordStrength >= 3 ? 'text-green-600 line-through' : ''}>○ At least one number</li>
              <li className={passwordStrength >= 4 ? 'text-green-600 line-through' : ''}>○ At least one special character</li>
            </ul>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block font-semibold text-gray-900 text-sm mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              required
              className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition"
            />
          </div>

          <div>
            <label htmlFor="role" className="block font-semibold text-gray-900 text-sm mb-2">Account Type</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition"
            >
              <option value="user">Regular User</option>
              <option value="family">Family Member</option>
              <option value="guest">Guest Access</option>
            </select>
          </div>

          {error && <div className="px-3 py-2 bg-red-100 text-red-700 border border-red-300 rounded-lg text-sm">{error}</div>}

          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 mt-4">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="w-4 h-4 cursor-pointer"
            />
            I agree to the <a href="#terms" className="text-indigo-500 font-semibold hover:text-purple-700">Terms of Service</a> and <a href="#privacy" className="text-indigo-500 font-semibold hover:text-purple-700">Privacy Policy</a>
          </label>

          <button type="submit" className="w-full bg-indigo-500 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold text-sm transition disabled:opacity-60 mt-4" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          <p className="text-center text-gray-700 text-sm mt-3">
            Already have an account? <a href="/login" className="text-indigo-500 font-semibold hover:text-purple-700 ml-1 transition">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

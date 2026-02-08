import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/authSlice';

export default function Register() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    agreeToTerms: false,
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [emailVerificationSent, setEmailVerificationSent] = useState(false);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    return strength;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newFormData = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    };
    
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
    
    setFormData(newFormData);
  };

  const getPasswordStrengthLabel = () => {
    const labels = ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
    return labels[passwordStrength] || 'Very Weak';
  };

  const handleSubmit = async (e) => {
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
      // Dispatch register action with Redux
      await dispatch(registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })).unwrap();
      
      // Send verification email
      setEmailVerificationSent(true);
    } catch (err) {
      // Error handled by Redux
      console.error('Registration error:', err);
    }
  };

  if (emailVerificationSent) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-5">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Verify Your Email</h2>
            <p className="text-gray-700 mb-2">We've sent a verification link to <strong>{formData.email}</strong></p>
            <p className="text-gray-600 mb-2">Please check your email and click the link to complete registration.</p>
            <p className="text-xs text-gray-500 mb-6">Link expires in 24 hours</p>
            <button className="w-full bg-indigo-500 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold text-sm transition" onClick={() => window.location.href = '/login'}>
              Back to Login
            </button>
          </div>
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-900 text-sm mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-gray-900 text-sm mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold text-gray-900 text-sm mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              required
              className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition"
            />
            <div className="mt-2">
              <div className="h-1.5 bg-gray-300 rounded-full overflow-hidden mb-1">
                <div 
                  className={`h-full transition-all ${
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

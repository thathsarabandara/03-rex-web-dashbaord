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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-5">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">REX-47 Dashboard</h1>
          <p className="text-gray-600 text-sm">Smart Home Robot Control System</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm font-medium">{error}</p>
            {attemptsRemaining > 0 && attemptsRemaining <= 2 && (
              <p className="text-red-600 text-xs mt-2">
                {attemptsRemaining} attempt(s) remaining before account lock
              </p>
            )}
          </div>
        )}

        {attemptsRemaining <= 0 && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm font-medium">
              Too many login attempts. Please try again later or reset your password.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block font-semibold text-gray-900 text-sm mb-2">Email or Username</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={loading || attemptsRemaining <= 0}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="block font-semibold text-gray-900 text-sm">Password</label>
              <a href="/forgot-password" className="text-indigo-600 hover:text-indigo-700 text-xs font-medium">
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              disabled={loading || attemptsRemaining <= 0}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              disabled={loading}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded cursor-pointer disabled:cursor-not-allowed"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700 cursor-pointer">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            disabled={loading || attemptsRemaining <= 0}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <a href="/register" className="text-indigo-600 hover:text-indigo-700 font-semibold">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-5">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
          <p className="text-gray-600 text-sm">Enter your email address to receive a password reset link</p>
        </div>

        {!resetSent ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="block font-semibold text-gray-900 text-sm">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your registered email"
                required
                disabled={loading}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <small className="text-xs text-gray-600">We'll send you a link to reset your password (valid for 1 hour)</small>
            </div>

            {error && (
              <div className="px-3 py-2 bg-red-100 text-red-700 border border-red-300 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold text-sm transition"
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>

            <p className="text-center text-gray-700 text-sm mt-3">
              Remember your password? <a href="/login" className="text-indigo-600 hover:text-indigo-700 font-semibold ml-1 transition">Sign in</a>
            </p>
          </form>
        ) : (
          <div className="text-center">
            <div className="mb-4">
              <div className="inline-block p-3 bg-green-100 rounded-full">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-4">Check Your Email</h2>
            <p className="text-gray-700 mb-2">We've sent a password reset link to:</p>
            <p className="font-semibold text-indigo-600 mb-4">{email}</p>
            <p className="text-gray-600 mb-6">The link will expire in 1 hour. Please check your email to continue.</p>
            <p className="text-xs text-gray-500 mb-6">
              <strong>Didn't receive the email?</strong> Check your spam folder or{' '}
              <button className="text-indigo-600 hover:text-indigo-700 font-semibold" onClick={() => setResetSent(false)}>
                try another email
              </button>
            </p>
            <button 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold text-sm transition"
              onClick={() => window.location.href = '/login'}
            >
              Back to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

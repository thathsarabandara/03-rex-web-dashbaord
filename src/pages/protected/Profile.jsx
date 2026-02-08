import React, { useState } from 'react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    avatar: null,
    role: 'Admin',
  });
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [mfaEnabled, setMfaEnabled] = useState(false);
  const [activityLogs] = useState([
    { id: 1, action: 'Login', device: 'Chrome - Windows', time: '2024-02-08 10:30:00', status: 'success' },
    { id: 2, action: 'Login', device: 'Safari - macOS', time: '2024-02-07 15:45:00', status: 'success' },
    { id: 3, action: 'Failed Login', device: 'Unknown Device', time: '2024-02-06 22:15:00', status: 'failed' },
    { id: 4, action: 'Password Changed', device: 'Chrome - Windows', time: '2024-02-05 09:00:00', status: 'success' },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      console.log('Updating profile:', profileData);
      setMessage('Profile updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    
    if (passwordData.new !== passwordData.confirm) {
      setMessage('Passwords do not match');
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      console.log('Changing password');
      setMessage('Password changed successfully!');
      setPasswordData({ current: '', new: '', confirm: '' });
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleMFA = async () => {
    setLoading(true);
    
    try {
      // Simulate API call
      setMfaEnabled(!mfaEnabled);
      setMessage(`MFA ${!mfaEnabled ? 'enabled' : 'disabled'} successfully!`);
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white p-8 mb-8">
        <h1 className="text-4xl font-bold mb-2">Account Settings</h1>
        <p className="text-indigo-100">Manage your account profile, security, and preferences</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-8">
        {message && <div className="mb-6 px-4 py-3 bg-green-100 text-green-700 border border-green-300 rounded-lg">{message}</div>}

        <div className="flex border-b border-gray-300 mb-6">
          <button 
            className={`px-6 py-3 font-semibold border-b-2 transition ${activeTab === 'profile' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button 
            className={`px-6 py-3 font-semibold border-b-2 transition ${activeTab === 'security' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
            onClick={() => setActiveTab('security')}
          >
            Security
          </button>
          <button 
            className={`px-6 py-3 font-semibold border-b-2 transition ${activeTab === 'activity' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
            onClick={() => setActiveTab('activity')}
          >
            Activity Log
          </button>
        </div>

        {activeTab === 'profile' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleUpdateProfile} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-semibold text-gray-900 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profileData.name}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold text-gray-900 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-semibold text-gray-900 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label htmlFor="avatar" className="block font-semibold text-gray-900 mb-2">Profile Avatar</label>
                <input type="file" id="avatar" accept="image/*" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>

              <div>
                <label htmlFor="role" className="block font-semibold text-gray-900 mb-2">Account Role</label>
                <input
                  type="text"
                  id="role"
                  value={profileData.role}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                />
                <small className="text-xs text-gray-600 mt-1 block">Contact administrator to change role</small>
              </div>

              <button type="submit" className="w-full bg-indigo-500 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-60" disabled={loading}>
                {loading ? 'Updating...' : 'Save Changes'}
              </button>
            </form>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Change Password</h3>
              <form onSubmit={handleChangePassword} className="space-y-4">
                <div>
                  <label htmlFor="current" className="block font-semibold text-gray-900 mb-2">Current Password</label>
                  <input
                    type="password"
                    id="current"
                    name="current"
                    value={passwordData.current}
                    onChange={handlePasswordChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label htmlFor="new" className="block font-semibold text-gray-900 mb-2">New Password</label>
                  <input
                    type="password"
                    id="new"
                    name="new"
                    value={passwordData.new}
                    onChange={handlePasswordChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label htmlFor="confirm" className="block font-semibold text-gray-900 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    id="confirm"
                    name="confirm"
                    value={passwordData.confirm}
                    onChange={handlePasswordChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-3 focus:ring-indigo-100"
                  />
                </div>

                <button type="submit" className="w-full bg-indigo-500 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-60" disabled={loading}>
                  {loading ? 'Updating...' : 'Change Password'}
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Two-Factor Authentication</h3>
                  <p className="text-gray-600 text-sm">Add an extra layer of security to your account</p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={mfaEnabled}
                    onChange={handleToggleMFA}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <span className="ml-3 text-sm font-semibold text-gray-900">{mfaEnabled ? 'Enabled' : 'Disabled'}</span>
                </label>
              </div>

              {mfaEnabled && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-semibold">✓ Two-factor authentication is enabled</p>
                  <p className="text-green-600 text-sm mt-1">Your account is now protected with SMS-based OTP verification</p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">API Keys</h3>
              <p className="text-gray-600 mb-6">Manage API keys for third-party integrations</p>
              <button className="px-6 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-lg font-semibold transition">Generate New API Key</button>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Login History</h3>
            <p className="text-gray-600 text-sm mb-6">Recent login activity on your account</p>

            <div className="space-y-2 mb-6">
              {activityLogs.map(log => (
                <div key={log.id} className={`p-4 border rounded-lg ${log.status === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900">{log.action}</p>
                      <p className="text-sm text-gray-600">{log.device}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{log.time}</p>
                      <p className={`text-sm font-semibold ${log.status === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                        {log.status === 'success' ? '✓ Success' : '✗ Failed'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="px-6 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-lg font-semibold transition">Download Activity Report</button>
          </div>
        )}
      </div>
    </div>
  );
}

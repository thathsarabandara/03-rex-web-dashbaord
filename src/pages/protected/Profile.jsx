import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

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
    <div className="min-h-screen bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
        <p className="text-gray-600">Manage your profile, security, and preferences</p>
      </div>

      <div className="space-y-6">
        {message && <div className="px-4 py-3 bg-green-100 text-green-700 border border-green-300 rounded">{message}</div>}

        <div className="flex gap-2 border-b border-gray-200">
          <button 
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${activeTab === 'profile' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${activeTab === 'security' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
            onClick={() => setActiveTab('security')}
          >
            Security
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${activeTab === 'activity' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
            onClick={() => setActiveTab('activity')}
          >
            Activity
          </button>
        </div>

        {activeTab === 'profile' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profileData.name}
                  onChange={handleProfileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleProfileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-900 mb-1">Role</label>
                <input
                  type="text"
                  id="role"
                  value={profileData.role}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-600"
                />
              </div>

              <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded font-medium transition" disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </form>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Change Password</h3>
              <form onSubmit={handleChangePassword} className="space-y-3">
                <input
                  type="password"
                  name="current"
                  placeholder="Current password"
                  value={passwordData.current}
                  onChange={handlePasswordChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-sm"
                />
                <input
                  type="password"
                  name="new"
                  placeholder="New password"
                  value={passwordData.new}
                  onChange={handlePasswordChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-sm"
                />
                <input
                  type="password"
                  name="confirm"
                  placeholder="Confirm password"
                  value={passwordData.confirm}
                  onChange={handlePasswordChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-sm"
                />
                <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded font-medium transition text-sm" disabled={loading}>
                  {loading ? 'Updating...' : 'Change Password'}
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">2FA</h3>
                  <p className="text-sm text-gray-600">Two-factor authentication</p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={mfaEnabled}
                    onChange={handleToggleMFA}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-900">{mfaEnabled ? 'On' : 'Off'}</span>
                </label>
              </div>
              {mfaEnabled && (
                <p className="text-xs text-green-700 mt-3 flex items-center"><FaCheck className="mr-1" /> 2FA is enabled on your account</p>
              )}
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-3">API Keys</h3>
              <button className="px-3 py-1.5 border border-indigo-500 text-indigo-600 hover:bg-indigo-50 rounded text-sm font-medium transition">+ Generate Key</button>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-1">Login History</h3>
            <p className="text-sm text-gray-600 mb-4">Recent activity on your account</p>

            <div className="space-y-2">
              {activityLogs.map(log => (
                <div key={log.id} className={`p-3 border rounded text-sm ${log.status === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{log.action}</p>
                      <p className="text-xs text-gray-600">{log.device}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600">{log.time}</p>
                      <p className={`text-xs font-medium ${log.status === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                        {log.status === 'success' ? <FaCheck /> : <FaTimes />}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    maxSpeed: 50,
    maxTurnSpeed: 30,
    autonomyThreshold: 85,
    sensorSensitivity: 75,
    backupSchedule: 'daily',
    notificationsEnabled: true,
    emailNotifications: true,
    smsNotifications: false,
  });

  const [users] = useState([
    { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'active' },
    { id: 3, name: 'Jane Smith', email: 'jane@example.com', role: 'Guest', status: 'inactive' },
  ]);

  const [apiKeys] = useState([
    { id: 1, name: 'Mobile App', key: 'sk_live_***', created: '2024-01-15', lastUsed: '2 days ago' },
    { id: 2, name: 'Third Party', key: 'sk_live_***', created: '2024-01-10', lastUsed: '5 days ago' },
  ]);

  const [auditLogs] = useState([
    { id: 1, action: 'User Login', user: 'admin@example.com', timestamp: '2024-02-08 10:30', status: 'success' },
    { id: 2, action: 'Password Changed', user: 'john@example.com', timestamp: '2024-02-08 09:15', status: 'success' },
    { id: 3, action: 'Robot Configuration Updated', user: 'admin@example.com', timestamp: '2024-02-07 15:45', status: 'success' },
  ]);

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">System configuration, security, and user management</p>
      </div>

      <div className="space-y-6">
        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-gray-200 overflow-x-auto">
          {['general', 'robot', 'users', 'security', 'notifications', 'audit'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition whitespace-nowrap ${activeTab === tab ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* General Settings */}
        {activeTab === 'general' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-4">System Info</h3>
            <div className="space-y-2">
              <div className="flex justify-between p-2 border border-gray-200 rounded text-sm">
                <p className="text-gray-600">Version</p>
                <p className="font-medium text-gray-900">v2.1.0</p>
              </div>
              <div className="flex justify-between p-2 border border-gray-200 rounded text-sm">
                <p className="text-gray-600">Last Updated</p>
                <p className="font-medium text-gray-900">2024-02-01</p>
              </div>
              <div className="flex justify-between p-2 border border-gray-200 rounded text-sm">
                <p className="text-gray-600">Database Size</p>
                <p className="font-medium text-gray-900">2.4 GB</p>
              </div>
            </div>
          </div>
        )}

        {/* Robot Settings */}
        {activeTab === 'robot' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Robot Configuration</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="maxSpeed" className="block text-sm font-medium text-gray-900 mb-2">Max Speed: {settings.maxSpeed}%</label>
                <input
                  type="range"
                  id="maxSpeed"
                  min="0"
                  max="100"
                  value={settings.maxSpeed}
                  onChange={(e) => handleSettingChange('maxSpeed', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="turnSpeed" className="block text-sm font-medium text-gray-900 mb-2">Max Turn Speed: {settings.maxTurnSpeed}%</label>
                <input
                  type="range"
                  id="turnSpeed"
                  min="0"
                  max="100"
                  value={settings.maxTurnSpeed}
                  onChange={(e) => handleSettingChange('maxTurnSpeed', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="autonomyThreshold" className="block text-sm font-medium text-gray-900 mb-2">Autonomy Threshold: {settings.autonomyThreshold}%</label>
                <input
                  type="range"
                  id="autonomyThreshold"
                  min="0"
                  max="100"
                  value={settings.autonomyThreshold}
                  onChange={(e) => handleSettingChange('autonomyThreshold', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="sensorSensitivity" className="block text-sm font-medium text-gray-900 mb-2">Sensor Sensitivity: {settings.sensorSensitivity}%</label>
                <input
                  type="range"
                  id="sensorSensitivity"
                  min="0"
                  max="100"
                  value={settings.sensorSensitivity}
                  onChange={(e) => handleSettingChange('sensorSensitivity', e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}

        {/* Users Management */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-4">User Management</h3>
            <div className="space-y-2">
              {users.map(user => (
                <div key={user.id} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-gray-900">{user.role}</p>
                    <p className={`text-xs ${user.status === 'active' ? 'text-green-600' : 'text-red-600'}`}>{user.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Security */}
        {activeTab === 'security' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Security Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div>
                  <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                  <p className="text-xs text-gray-500">Enable additional security</p>
                </div>
                <input type="checkbox" className="w-4 h-4" />
              </div>
              <div className="border border-gray-200 rounded p-3">
                <h4 className="text-sm font-medium text-gray-900 mb-3">API Keys</h4>
                <div className="space-y-2">
                  {apiKeys.map(key => (
                    <div key={key.id} className="p-2 bg-gray-50 rounded text-xs">
                      <div className="flex justify-between">
                        <p className="font-medium text-gray-900">{key.name}</p>
                        <p className="text-gray-500">{key.key}</p>
                      </div>
                      <p className="text-gray-500">Created: {key.created} • Last used: {key.lastUsed}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notifications */}
        {activeTab === 'notifications' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Notification Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div>
                  <p className="text-sm font-medium text-gray-900">Notifications Enabled</p>
                  <p className="text-xs text-gray-500">Receive system alerts</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={settings.notificationsEnabled}
                  onChange={(e) => handleSettingChange('notificationsEnabled', e.target.checked)}
                  className="w-4 h-4"
                />
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div>
                  <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                  <p className="text-xs text-gray-500">Receive updates via email</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={settings.emailNotifications}
                  onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                  className="w-4 h-4"
                />
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div>
                  <p className="text-sm font-medium text-gray-900">SMS Notifications</p>
                  <p className="text-xs text-gray-500">Receive urgent alerts via SMS</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={settings.smsNotifications}
                  onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>
        )}

        {/* Audit Logs */}
        {activeTab === 'audit' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Audit Logs</h3>
            <div className="space-y-2">
              {auditLogs.map(log => (
                <div key={log.id} className="p-3 border border-gray-200 rounded">
                  <div className="flex justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">{log.action}</p>
                    <span className={`text-xs ${log.status === 'success' ? 'text-green-600' : 'text-red-600'}`}>{log.status}</span>
                  </div>
                  <p className="text-xs text-gray-500">{log.user} • {log.timestamp}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

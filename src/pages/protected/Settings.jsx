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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white p-8 mb-8">
        <h1 className="text-4xl font-bold mb-2">Settings & Admin Control</h1>
        <p className="text-indigo-100">System configuration, security, and user management</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-300 mb-6 bg-white overflow-x-auto">
          <button 
            onClick={() => setActiveTab('general')}
            className={`px-6 py-3 font-semibold border-b-2 transition whitespace-nowrap ${activeTab === 'general' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            General
          </button>
          <button 
            onClick={() => setActiveTab('robot')}
            className={`px-6 py-3 font-semibold border-b-2 transition whitespace-nowrap ${activeTab === 'robot' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            Robot
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`px-6 py-3 font-semibold border-b-2 transition whitespace-nowrap ${activeTab === 'users' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            Users
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`px-6 py-3 font-semibold border-b-2 transition whitespace-nowrap ${activeTab === 'security' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            Security
          </button>
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`px-6 py-3 font-semibold border-b-2 transition whitespace-nowrap ${activeTab === 'notifications' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            Notifications
          </button>
          <button 
            onClick={() => setActiveTab('audit')}
            className={`px-6 py-3 font-semibold border-b-2 transition whitespace-nowrap ${activeTab === 'audit' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            Audit
          </button>
        </div>

        {/* General Settings */}
        {activeTab === 'general' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">General Settings</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-4">System Information</h4>
              <div className="space-y-3">
                <div className="flex justify-between p-3 border border-gray-300 rounded-lg">
                  <p className="text-gray-600">System Version</p>
                  <p className="font-semibold text-gray-900">v2.1.0</p>
                </div>
                <div className="flex justify-between p-3 border border-gray-300 rounded-lg">
                  <p className="text-gray-600">Last Updated</p>
                  <p className="font-semibold text-gray-900">2024-02-01</p>
                </div>
                <p className="label">Database Size</p>
                <p className="value">2.4 GB</p>
              </div>
            </div>

            <div className="settings-group">
              <h4>Backup & Storage</h4>
              <div className="form-group">
                <label htmlFor="backup">Backup Schedule</label>
                <select 
                  id="backup"
                  value={settings.backupSchedule}
                  onChange={(e) => handleSettingChange('backupSchedule', e.target.value)}
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <button className="btn btn-secondary">Backup Now</button>
              <button className="btn btn-secondary">Download Backup</button>
            </div>

            <div className="settings-group">
              <h4>Dashboard Configuration</h4>
              <div className="form-group">
                <label htmlFor="theme">Theme</label>
                <select id="theme">
                  <option>Light Mode</option>
                  <option>Dark Mode</option>
                  <option>Auto</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="language">Language</label>
                <select id="language">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Robot Settings */}
        {activeTab === 'robot' && (
          <div className="tab-content robot-settings">
            <h3>Robot Configuration</h3>
            
            <div className="settings-group">
              <h4>Movement Parameters</h4>
              <div className="form-group">
                <label htmlFor="maxSpeed">Max Speed: {settings.maxSpeed}%</label>
                <input
                  type="range"
                  id="maxSpeed"
                  min="0"
                  max="100"
                  value={settings.maxSpeed}
                  onChange={(e) => handleSettingChange('maxSpeed', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="turnSpeed">Max Turn Speed: {settings.maxTurnSpeed}%</label>
                <input
                  type="range"
                  id="turnSpeed"
                  min="0"
                  max="100"
                  value={settings.maxTurnSpeed}
                  onChange={(e) => handleSettingChange('maxTurnSpeed', e.target.value)}
                />
              </div>
            </div>

            <div className="settings-group">
              <h4>Autonomy Settings</h4>
              <div className="form-group">
                <label htmlFor="autonomy">Autonomy Threshold: {settings.autonomyThreshold}%</label>
                <input
                  type="range"
                  id="autonomy"
                  min="0"
                  max="100"
                  value={settings.autonomyThreshold}
                  onChange={(e) => handleSettingChange('autonomyThreshold', e.target.value)}
                />
              </div>
            </div>

            <div className="settings-group">
              <h4>Sensor Configuration</h4>
              <div className="form-group">
                <label htmlFor="sensitivity">Sensor Sensitivity: {settings.sensorSensitivity}%</label>
                <input
                  type="range"
                  id="sensitivity"
                  min="0"
                  max="100"
                  value={settings.sensorSensitivity}
                  onChange={(e) => handleSettingChange('sensorSensitivity', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" defaultChecked /> Obstacle Detection
                </label>
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" defaultChecked /> Collision Avoidance
                </label>
              </div>
            </div>

            <button className="btn btn-primary">Save Robot Settings</button>
          </div>
        )}

        {/* User Management */}
        {activeTab === 'users' && (
          <div className="tab-content user-management">
            <div className="section-header">
              <h3>User Management</h3>
              <button className="btn btn-secondary">+ Add User</button>
            </div>

            <div className="users-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td><span className={`role-badge role-${user.role.toLowerCase()}`}>{user.role}</span></td>
                      <td><span className={`status-badge status-${user.status}`}>{user.status}</span></td>
                      <td className="actions">
                        <button className="btn btn-small">Edit</button>
                        <button className="btn btn-small btn-danger">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Security Settings */}
        {activeTab === 'security' && (
          <div className="tab-content security-settings">
            <h3>Security Settings</h3>

            <div className="settings-group">
              <h4>Multi-Factor Authentication</h4>
              <p>Enforce MFA for all users</p>
              <label>
                <input type="checkbox" /> Require MFA for all accounts
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Enable SMS OTP
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Enable Email OTP
              </label>
            </div>

            <div className="settings-group">
              <h4>API Keys Management</h4>
              <button className="btn btn-secondary">+ Generate New API Key</button>
              <div className="api-keys-list">
                {apiKeys.map(key => (
                  <div key={key.id} className="api-key-item">
                    <div>
                      <p className="key-name">{key.name}</p>
                      <p className="key-details">Created: {key.created} • Last used: {key.lastUsed}</p>
                      <p className="key-value">{key.key}</p>
                    </div>
                    <button className="btn btn-small btn-danger">Revoke</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="settings-group">
              <h4>Rate Limiting</h4>
              <p>Prevent brute-force attacks</p>
              <div className="form-group">
                <label>Max login attempts before lockout</label>
                <input type="number" defaultValue="5" min="3" max="20" />
              </div>
              <div className="form-group">
                <label>Lockout duration (minutes)</label>
                <input type="number" defaultValue="15" min="5" max="120" />
              </div>
            </div>

            <button className="btn btn-primary">Save Security Settings</button>
          </div>
        )}

        {/* Notification Settings */}
        {activeTab === 'notifications' && (
          <div className="tab-content notification-settings">
            <h3>Notification Preferences</h3>

            <div className="settings-group">
              <h4>Notification Channels</h4>
              <div className="form-group">
                <label>
                  <input 
                    type="checkbox" 
                    checked={settings.notificationsEnabled}
                    onChange={(e) => handleSettingChange('notificationsEnabled', e.target.checked)}
                  /> 
                  Push Notifications
                </label>
              </div>
              <div className="form-group">
                <label>
                  <input 
                    type="checkbox" 
                    checked={settings.emailNotifications}
                    onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                  /> 
                  Email Notifications
                </label>
              </div>
              <div className="form-group">
                <label>
                  <input 
                    type="checkbox" 
                    checked={settings.smsNotifications}
                    onChange={(e) => handleSettingChange('smsNotifications', e.target.checked)}
                  /> 
                  SMS Notifications
                </label>
              </div>
            </div>

            <div className="settings-group">
              <h4>Alert Types</h4>
              <label><input type="checkbox" defaultChecked /> Motion Detection</label>
              <label><input type="checkbox" defaultChecked /> Low Battery</label>
              <label><input type="checkbox" defaultChecked /> Connection Lost</label>
              <label><input type="checkbox" defaultChecked /> System Errors</label>
              <label><input type="checkbox" /> Status Updates</label>
            </div>

            <button className="btn btn-primary">Save Preferences</button>
          </div>
        )}

        {/* Audit Logs */}
        {activeTab === 'audit' && (
          <div className="tab-content audit-logs">
            <h3>Audit Logs</h3>
            <p className="logs-description">System-wide activity and security events</p>

            <div className="audit-table">
              <table>
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>User</th>
                    <th>Timestamp</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {auditLogs.map(log => (
                    <tr key={log.id}>
                      <td>{log.action}</td>
                      <td>{log.user}</td>
                      <td>{log.timestamp}</td>
                      <td><span className={`status-badge status-${log.status}`}>{log.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="btn btn-secondary">Export Logs</button>
          </div>
        )}
      </div>
    </div>
  );
}

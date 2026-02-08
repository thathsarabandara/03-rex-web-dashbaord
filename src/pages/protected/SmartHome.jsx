import React, { useState } from 'react';

export default function SmartHome() {
  const [devices] = useState([
    { id: 1, name: 'Living Room Lights', type: 'light', status: 'on', value: 80 },
    { id: 2, name: 'AC Unit', type: 'climate', status: 'on', value: 22 },
    { id: 3, name: 'Front Door Lock', type: 'lock', status: 'locked', value: null },
    { id: 4, name: 'Kitchen Fan', type: 'fan', status: 'off', value: 0 },
    { id: 5, name: 'Alarm System', type: 'alarm', status: 'armed', value: null },
    { id: 6, name: 'Water Sprinkler', type: 'water', status: 'off', value: null },
  ]);

  const [automationRules] = useState([
    {
      id: 1,
      name: 'Motion Alert',
      trigger: 'Motion detected',
      action: 'Robot alerts user + Flash lights',
      enabled: true,
    },
    {
      id: 2,
      name: 'Gas Leak Response',
      trigger: 'Gas sensor > 100 ppm',
      action: 'Open windows + Alert admin',
      enabled: true,
    },
    {
      id: 3,
      name: 'Door Opening',
      trigger: 'Front door opened',
      action: 'Start robot patrol + Activate cameras',
      enabled: true,
    },
  ]);

  const [scenes] = useState([
    { id: 1, name: 'Away Mode', devices: 5, description: 'Secure house and activate patrol' },
    { id: 2, name: 'Movie Night', devices: 3, description: 'Dim lights and lower AC' },
    { id: 3, name: 'Sleep Mode', devices: 4, description: 'Lock doors and enable night monitoring' },
  ]);

  const [schedules] = useState([
    { id: 1, name: 'Morning Clean', type: 'daily', time: '08:00 AM', enabled: true },
    { id: 2, name: 'Evening Patrol', type: 'daily', time: '06:00 PM', enabled: true },
    { id: 3, name: 'Night Monitoring', type: 'daily', time: '10:00 PM', enabled: true },
  ]);

  const [activeTab, setActiveTab] = useState('devices');
  const [showAddRule, setShowAddRule] = useState(false);
  const [showAddSchedule, setShowAddSchedule] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white p-8 mb-8">
        <h1 className="text-4xl font-bold mb-2">Smart Home & IoT Integration</h1>
        <p className="text-indigo-100">Integrate robot with home automation ecosystem</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-300 mb-6 bg-white rounded-t-lg">
          <button 
            onClick={() => setActiveTab('devices')}
            className={`px-6 py-3 font-semibold border-b-2 transition ${activeTab === 'devices' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            Connected Devices
          </button>
          <button 
            onClick={() => setActiveTab('automation')}
            className={`px-6 py-3 font-semibold border-b-2 transition ${activeTab === 'automation' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            Automation Rules
          </button>
          <button 
            onClick={() => setActiveTab('scenes')}
            className={`px-6 py-3 font-semibold border-b-2 transition ${activeTab === 'scenes' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            Scenes
          </button>
          <button 
            onClick={() => setActiveTab('schedules')}
            className={`px-6 py-3 font-semibold border-b-2 transition ${activeTab === 'schedules' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            Schedules
          </button>
        </div>

        {/* Devices Section */}
        {activeTab === 'devices' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Connected IoT Devices</h3>
              <button className="px-6 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-lg font-semibold transition">+ Add Device</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devices.map(device => (
                <div key={device.id} className="p-6 border border-gray-300 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-gray-900">{device.name}</h4>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${device.status === 'online' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {device.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 font-semibold mb-4">{device.type.toUpperCase()}</p>
                  
                  {device.value !== null && (
                    <div className="mb-4">
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={device.value}
                        className="w-full"
                      />
                      <p className="text-sm font-semibold text-gray-900 mt-2">{device.value}%</p>
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-lg text-sm font-semibold transition">Configure</button>
                    <button className="flex-1 px-3 py-2 border border-red-500 text-red-500 hover:bg-red-50 rounded-lg text-sm font-semibold transition">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Automation Rules Section */}
        {activeTab === 'automation' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Automation Rules</h3>
              <button 
                className="px-6 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-lg font-semibold transition"
                onClick={() => setShowAddRule(!showAddRule)}
              >
                + Add Rule
              </button>
            </div>

            {showAddRule && (
              <div className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-300">
                <h4 className="font-bold text-gray-900 mb-4">Create New Automation Rule</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold text-gray-900 mb-2">Rule Name</label>
                    <input type="text" placeholder="Enter rule name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">When (Trigger)</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
                        <option>Select trigger event</option>
                        <option>Motion detected</option>
                        <option>Door opened</option>
                        <option>Gas sensor alert</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">Then (Action)</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
                        <option>Select action</option>
                        <option>Start robot patrol</option>
                        <option>Activate alarm</option>
                        <option>Turn on lights</option>
                      </select>
                    </div>
                  </div>
                  <button className="w-full px-6 py-2 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg font-semibold transition">Save Rule</button>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {automationRules.map(rule => (
                <div key={rule.id} className="p-4 border border-gray-300 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">{rule.name}</h4>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" checked={rule.enabled} readOnly className="w-4 h-4" />
                      <span className="ml-2 text-sm font-semibold">{rule.enabled ? 'Enabled' : 'Disabled'}</span>
                    </label>
                  </div>
                  <p className="text-sm text-gray-700 mb-1"><strong>When:</strong> {rule.trigger}</p>
                  <p className="text-sm text-gray-700 mb-3"><strong>Then:</strong> {rule.action}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-lg text-sm font-semibold transition">Edit</button>
                    <button className="flex-1 px-3 py-2 border border-red-500 text-red-500 hover:bg-red-50 rounded-lg text-sm font-semibold transition">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scenes Section */}
        {activeTab === 'scenes' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Predefined Scenes</h3>
              <button className="px-6 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-lg font-semibold transition">+ Create Scene</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scenes.map(scene => (
                <div key={scene.id} className="p-6 border border-gray-300 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">{scene.name}</h4>
                  <p className="text-gray-700 text-sm mb-2">{scene.description}</p>
                  <p className="text-xs text-gray-600 mb-4">Controls {scene.devices} devices</p>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-semibold transition">Activate</button>
                    <button className="flex-1 px-4 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-lg text-sm font-semibold transition">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Schedules Section */}
        {activeTab === 'schedules' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Robot & Device Schedules</h3>
              <button 
                className="px-6 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-lg font-semibold transition"
                onClick={() => setShowAddSchedule(!showAddSchedule)}
              >
                + Add Schedule
              </button>
            </div>

            {showAddSchedule && (
              <div className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-300">
                <h4 className="font-bold text-gray-900 mb-4">Create New Schedule</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">Schedule Name</label>
                      <input type="text" placeholder="Enter schedule name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">Frequency</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">Time</label>
                      <input type="time" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-900 mb-2">Action</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
                        <option>Start patrol</option>
                        <option>Clean mode</option>
                        <option>Monitoring</option>
                      </select>
                    </div>
                  </div>
                  <button className="w-full px-6 py-2 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg font-semibold transition">Save Schedule</button>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {schedules.map(schedule => (
                <div key={schedule.id} className="p-4 border border-gray-300 rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900">{schedule.name}</h4>
                      <p className="text-sm text-gray-600">{schedule.type.toUpperCase()} at {schedule.time}</p>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" checked={schedule.enabled} readOnly className="w-4 h-4" />
                    </label>
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

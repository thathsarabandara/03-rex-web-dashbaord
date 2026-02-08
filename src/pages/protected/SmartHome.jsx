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
    <div className="min-h-screen bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Smart Home & IoT</h1>
        <p className="text-gray-600">Integrate robot with home automation ecosystem</p>
      </div>

      <div className="space-y-6">
        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('devices')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${activeTab === 'devices' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            Devices
          </button>
          <button 
            onClick={() => setActiveTab('automation')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${activeTab === 'automation' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            Rules
          </button>
          <button 
            onClick={() => setActiveTab('scenes')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${activeTab === 'scenes' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            Scenes
          </button>
          <button 
            onClick={() => setActiveTab('schedules')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${activeTab === 'schedules' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-600 hover:text-gray-900'}`}
          >
            Schedules
          </button>
        </div>

        {/* Devices Section */}
        {activeTab === 'devices' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold text-gray-900">Connected IoT Devices</h3>
              <button className="px-3 py-1.5 border border-indigo-500 text-indigo-600 hover:bg-indigo-50 rounded text-sm font-medium transition">+ Add</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {devices.map(device => (
                <div key={device.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-medium text-gray-900">{device.name}</h4>
                    <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${device.status === 'on' || device.status === 'locked' || device.status === 'armed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {device.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium mb-3">{device.type.toUpperCase()}</p>
                  
                  {device.value !== null && (
                    <div className="mb-3">
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={device.value}
                        className="w-full"
                      />
                      <p className="text-xs font-medium text-gray-900 mt-1">{device.value}%</p>
                    </div>
                  )}
                  
                  <div className="flex gap-1 text-xs">
                    <button className="flex-1 px-2 py-1.5 border border-indigo-300 text-indigo-600 hover:bg-indigo-50 rounded font-medium transition">Setup</button>
                    <button className="flex-1 px-2 py-1.5 border border-red-300 text-red-600 hover:bg-red-50 rounded font-medium transition">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Automation Rules Section */}
        {activeTab === 'automation' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold text-gray-900">Automation Rules</h3>
              <button 
                className="px-3 py-1.5 border border-indigo-500 text-indigo-600 hover:bg-indigo-50 rounded text-sm font-medium transition"
                onClick={() => setShowAddRule(!showAddRule)}
              >
                + Add
              </button>
            </div>

            {showAddRule && (
              <div className="mb-4 p-4 bg-gray-50 rounded border border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Create Rule</h4>
                <div className="space-y-3">
                  <input type="text" placeholder="Rule name" className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-indigo-500" />
                  <div className="grid grid-cols-2 gap-2">
                    <select className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-indigo-500">
                      <option>Motion detected</option>
                      <option>Door opened</option>
                    </select>
                    <select className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-indigo-500">
                      <option>Start patrol</option>
                      <option>Activate lights</option>
                    </select>
                  </div>
                  <button className="w-full px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-sm font-medium transition">Save</button>
                </div>
              </div>
            )}

            <div className="space-y-2">
              {automationRules.map(rule => (
                <div key={rule.id} className="p-3 border border-gray-200 rounded">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-medium text-gray-900">{rule.name}</h4>
                    <input type="checkbox" checked={rule.enabled} readOnly className="w-3 h-3" />
                  </div>
                  <p className="text-xs text-gray-700 mb-1"><strong>When:</strong> {rule.trigger}</p>
                  <p className="text-xs text-gray-700 mb-2"><strong>Then:</strong> {rule.action}</p>
                  <div className="flex gap-1 text-xs">
                    <button className="flex-1 px-2 py-1.5 border border-indigo-300 text-indigo-600 hover:bg-indigo-50 rounded font-medium transition">Edit</button>
                    <button className="flex-1 px-2 py-1.5 border border-red-300 text-red-600 hover:bg-red-50 rounded font-medium transition">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scenes Section */}
        {activeTab === 'scenes' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold text-gray-900">Scenes</h3>
              <button className="px-3 py-1.5 border border-indigo-500 text-indigo-600 hover:bg-indigo-50 rounded text-sm font-medium transition">+ Create</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {scenes.map(scene => (
                <div key={scene.id} className="p-4 border border-gray-200 rounded">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">{scene.name}</h4>
                  <p className="text-xs text-gray-600 mb-2">{scene.description}</p>
                  <p className="text-xs text-gray-500 mb-3">{scene.devices} devices</p>
                  <div className="flex gap-1 text-xs">
                    <button className="flex-1 px-2 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded font-medium transition">Run</button>
                    <button className="flex-1 px-2 py-1.5 border border-indigo-300 text-indigo-600 hover:bg-indigo-50 rounded font-medium transition">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Schedules Section */}
        {activeTab === 'schedules' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold text-gray-900">Schedules</h3>
              <button 
                className="px-3 py-1.5 border border-indigo-500 text-indigo-600 hover:bg-indigo-50 rounded text-sm font-medium transition"
                onClick={() => setShowAddSchedule(!showAddSchedule)}
              >
                + Add
              </button>
            </div>

            {showAddSchedule && (
              <div className="mb-4 p-4 bg-gray-50 rounded border border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-3">New Schedule</h4>
                <div className="space-y-2">
                  <input type="text" placeholder="Schedule name" className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-indigo-500" />
                  <div className="grid grid-cols-2 gap-2">
                    <select className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-indigo-500">
                      <option>Daily</option>
                      <option>Weekly</option>
                    </select>
                    <input type="time" className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-indigo-500" />
                  </div>
                  <button className="w-full px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-sm font-medium transition">Save</button>
                </div>
              </div>
            )}

            <div className="space-y-2">
              {schedules.map(schedule => (
                <div key={schedule.id} className="p-3 border border-gray-200 rounded flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{schedule.name}</h4>
                    <p className="text-xs text-gray-600">{schedule.time}</p>
                  </div>
                  <input type="checkbox" checked={schedule.enabled} readOnly className="w-3 h-3" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

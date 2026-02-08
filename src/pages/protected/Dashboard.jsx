import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const [selectedRobot, setSelectedRobot] = useState(1);
  const [robotStatus] = useState({
    1: {
      name: 'REX-47',
      battery: 85,
      connectivity: 'online',
      currentTask: 'Patrolling Living Room',
      alerts: ['Gas Sensor: Normal', 'Smoke Detector: Clear'],
      cameraActive: true,
    },
    2: {
      name: 'REX-48',
      battery: 45,
      connectivity: 'offline',
      currentTask: 'Idle',
      alerts: ['Low Battery Warning'],
      cameraActive: false,
    },
  });

  const [notifications] = useState([
    { id: 1, type: 'motion', message: 'Motion detected in kitchen', time: '5m ago' },
    { id: 2, type: 'alert', message: 'Front door opened', time: '12m ago' },
    { id: 3, type: 'info', message: 'Charging complete', time: '1h ago' },
  ]);

  const currentRobot = robotStatus[selectedRobot];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white p-8 mb-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-indigo-100">Welcome {user?.name || 'User'}! Real-time monitoring and control of your robots</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Robot Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {Object.entries(robotStatus).map(([id, robot]) => (
            <button
              key={id}
              onClick={() => setSelectedRobot(parseInt(id))}
              className={`p-6 rounded-lg border-2 transition ${selectedRobot == id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 bg-white hover:border-indigo-300'}`}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-2">{robot.name}</h4>
              <p className={`font-semibold ${robot.connectivity === 'online' ? 'text-green-600' : 'text-red-600'}`}>
                {robot.connectivity === 'online' ? '● Online' : '● Offline'}
              </p>
            </button>
          ))}
        </div>

        {/* Status Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Battery Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Battery Level</h3>
            <div className="mb-4">
              <div className="h-4 bg-gray-300 rounded-full overflow-hidden mb-2">
                <div 
                  className={`h-full transition-all ${currentRobot.battery < 30 ? 'bg-red-500' : 'bg-green-500'}`}
                  style={{ width: `${currentRobot.battery}%` }}
                ></div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{currentRobot.battery}%</p>
            </div>
            <p className={currentRobot.battery < 30 ? 'text-red-600 font-semibold' : 'text-green-600 font-semibold'}>
              {currentRobot.battery < 30 ? 'Low battery - charge soon' : 'Good condition'}
            </p>
          </div>

          {/* Connectivity Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Connectivity</h3>
            <div className={`text-2xl font-bold mb-2 ${currentRobot.connectivity === 'online' ? 'text-green-600' : 'text-red-600'}`}>
              {currentRobot.connectivity === 'online' ? '🟢 Online' : '🔴 Offline'}
            </div>
            <p className="text-gray-600 mb-2">ESP32 Microcontroller</p>
            {currentRobot.connectivity === 'online' && <p className="text-green-600 font-semibold">Signal: Strong</p>}
          </div>

          {/* Current Task Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Current Task</h3>
            <p className="text-lg font-semibold text-indigo-600 mb-4">{currentRobot.currentTask}</p>
            <button className="px-4 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-lg font-semibold transition text-sm">View Details</button>
          </div>

          {/* Alerts Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sensors & Alerts</h3>
            <ul className="space-y-2">
              {currentRobot.alerts.map((alert, idx) => (
                <li key={idx} className="text-sm text-gray-700">✓ {alert}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Live Camera Feed */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Live Camera Feed</h3>
          <div className="mb-4">
            <img 
              src="https://via.placeholder.com/600x400?text=Live+Camera+Feed" 
              alt="Live camera feed"
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg font-semibold text-sm transition">📷 Capture</button>
            <button className="px-4 py-2 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg font-semibold text-sm transition">🎥 Record</button>
            <button className="px-4 py-2 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg font-semibold text-sm transition">↔️ Toggle View</button>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button className="px-4 py-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-lg font-semibold transition">⬆️ Forward</button>
            <button className="px-4 py-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-lg font-semibold transition">⬇️ Backward</button>
            <button className="px-4 py-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-lg font-semibold transition">⬅️ Left</button>
            <button className="px-4 py-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-lg font-semibold transition">➡️ Right</button>
            <button className="px-4 py-3 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg font-semibold transition">⏹️ Stop</button>
            <button className="px-4 py-3 bg-green-100 text-green-700 hover:bg-green-200 rounded-lg font-semibold transition">🚀 Start Patrol</button>
            <button className="px-4 py-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-lg font-semibold transition">🧹 Clean Mode</button>
            <button className="px-4 py-3 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-lg font-semibold transition">📡 Navigation</button>
          </div>
        </div>

        {/* Map / SLAM Visualization */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Environment Map (SLAM)</h3>
          <div>
            <img 
              src="https://via.placeholder.com/800x400?text=SLAM+Map+Visualization" 
              alt="Robot map"
              className="w-full rounded-lg mb-2"
            />
            <p className="text-gray-600 text-sm text-center">Real-time SLAM mapping and localization</p>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Notifications</h3>
          <div className="space-y-3">
            {notifications.map(notif => (
              <div key={notif.id} className={`p-4 rounded-lg border-l-4 ${notif.type === 'motion' ? 'bg-blue-50 border-blue-500' : notif.type === 'alert' ? 'bg-red-50 border-red-500' : 'bg-green-50 border-green-500'}`}>
                <p className="font-semibold text-gray-900">{notif.message}</p>
                <p className="text-xs text-gray-600">{notif.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

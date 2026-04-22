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
    <div className="min-h-screen bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome {user?.name || 'User'}! Real-time monitoring and control</p>
      </div>

      <div className="space-y-6">
        {/* Robot Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {Object.entries(robotStatus).map(([id, robot]) => (
            <button
              key={id}
              onClick={() => setSelectedRobot(parseInt(id))}
              className={`p-4 rounded-lg border transition ${selectedRobot == id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-1">{robot.name}</h4>
              <p className={`text-sm font-medium ${robot.connectivity === 'online' ? 'text-green-600' : 'text-red-600'}`}>
                {robot.connectivity === 'online' ? '● Online' : '● Offline'}
              </p>
            </button>
          ))}
        </div>

        {/* Status Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Battery Widget */}
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">Battery Level</h3>
            <div className="mb-3">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div
                  className={`h-full transition-all ${currentRobot.battery < 30 ? 'bg-red-500' : 'bg-green-500'}`}
                  style={{ width: `${currentRobot.battery}%` }}
                ></div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{currentRobot.battery}%</p>
            </div>
            <p className={`text-xs font-medium ${currentRobot.battery < 30 ? 'text-red-600' : 'text-green-600'}`}>
              {currentRobot.battery < 30 ? 'Low - Charge soon' : 'Good'}
            </p>
          </div>

          {/* Connectivity Widget */}
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">Connectivity</h3>
            <div className={`text-2xl font-bold mb-2 ${currentRobot.connectivity === 'online' ? 'text-green-600' : 'text-red-600'}`}>
              {currentRobot.connectivity === 'online' ? '🟢' : '🔴'}
            </div>
            <p className="text-xs text-gray-600">ESP32</p>
            {currentRobot.connectivity === 'online' && <p className="text-xs text-green-600 font-medium mt-1">Signal: Strong</p>}
          </div>

          {/* Current Task Widget */}
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">Task</h3>
            <p className="text-sm font-medium text-indigo-600 truncate">{currentRobot.currentTask}</p>
            <button className="mt-3 px-3 py-1 border border-indigo-300 text-indigo-600 hover:bg-indigo-50 rounded text-xs font-medium transition">Details</button>
          </div>

          {/* Alerts Widget */}
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">Status</h3>
            <ul className="space-y-1">
              {currentRobot.alerts.map((alert, idx) => (
                <li key={idx} className="text-xs text-gray-700">✓ {alert}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Live Camera Feed */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Live Camera Feed</h3>
          <div className="mb-4 bg-gray-100 rounded-lg flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-4xl mb-2">📷</div>
              <p className="text-gray-500 text-sm">Camera feed placeholder</p>
              <p className="text-gray-400 text-xs mt-1">Real-time camera stream would display here</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-sm font-medium transition">📷 Capture</button>
            <button className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-sm font-medium transition">🎥 Record</button>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <button className="px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded text-sm font-medium transition">⬆️ Forward</button>
            <button className="px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded text-sm font-medium transition">⬇️ Backward</button>
            <button className="px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded text-sm font-medium transition">⬅️ Left</button>
            <button className="px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded text-sm font-medium transition">➡️ Right</button>
            <button className="px-3 py-2 bg-red-100 text-red-700 hover:bg-red-200 rounded text-sm font-medium transition">⏹️ Stop</button>
            <button className="px-3 py-2 bg-green-100 text-green-700 hover:bg-green-200 rounded text-sm font-medium transition">🚀 Patrol</button>
            <button className="px-3 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded text-sm font-medium transition">🧹 Clean</button>
            <button className="px-3 py-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded text-sm font-medium transition">📡 Navigate</button>
          </div>
        </div>

        {/* Map / SLAM Visualization */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Environment Map (SLAM)</h3>
          <div className="bg-gray-100 rounded-lg flex items-center justify-center h-72">
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="text-gray-500 text-sm">SLAM Map placeholder</p>
              <p className="text-gray-400 text-xs mt-1">Real-time mapping visualization would appear here</p>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-3">Recent Notifications</h3>
          <div className="space-y-2">
            {notifications.map(notif => (
              <div key={notif.id} className={`p-3 rounded border-l-2 ${notif.type === 'motion' ? 'bg-blue-50 border-blue-400' : notif.type === 'alert' ? 'bg-red-50 border-red-400' : 'bg-green-50 border-green-400'}`}>
                <p className="text-sm font-medium text-gray-900">{notif.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

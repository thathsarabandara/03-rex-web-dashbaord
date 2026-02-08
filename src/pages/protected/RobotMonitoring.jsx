import React, { useState } from 'react';

export default function RobotMonitoring() {
  const [selectedMetric, setSelectedMetric] = useState('speed');
  const [timeRange, setTimeRange] = useState('1h');

  const [sensorData] = useState({
    temperature: { value: 28.5, unit: '°C', status: 'normal' },
    humidity: { value: 65, unit: '%', status: 'normal' },
    gasLevel: { value: 45, unit: 'ppm', status: 'normal' },
    ultrasonicDistance: { value: 150, unit: 'cm', status: 'normal' },
    motorRPM: { value: 450, unit: 'rpm', status: 'normal' },
    batteryVoltage: { value: 12.2, unit: 'V', status: 'normal' },
  });

  const [aiVisionData] = useState([
    { id: 1, type: 'Face Recognition', confidence: 95, label: 'John Doe' },
    { id: 2, type: 'Object Detection', confidence: 87, label: 'Cat detected' },
    { id: 3, type: 'Gesture Detection', confidence: 92, label: 'Person waving' },
  ]);

  const [eventLogs] = useState([
    { id: 1, time: '10:30:45', type: 'Motion', message: 'Motion detected in living room', severity: 'info' },
    { id: 2, time: '10:25:12', type: 'Alert', message: 'Obstacle detected - autonomy paused', severity: 'warning' },
    { id: 3, time: '10:20:03', type: 'Error', message: 'Left motor speed anomaly detected', severity: 'error' },
    { id: 4, time: '10:15:30', type: 'AI Decision', message: 'Chose patrol route B based on occupancy prediction', severity: 'info' },
  ]);

  const [_telemetryGraph] = useState({
    speed: [0, 5, 10, 12, 8, 6, 10, 15, 12, 10],
    distance: [0, 50, 100, 150, 140, 130, 180, 200, 190, 175],
    battery: [100, 98, 96, 94, 92, 90, 88, 86, 84, 82],
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white p-8 mb-8">
        <h1 className="text-4xl font-bold mb-2">Robot Monitoring & Telemetry</h1>
        <p className="text-indigo-100">Real-time sensor data, AI perception, and health metrics</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Sensor Data Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Sensor Data</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(sensorData).map(([key, data]) => (
              <div key={key} className={`p-4 rounded-lg border-l-4 ${data.status === 'normal' ? 'bg-green-50 border-green-500' : data.status === 'warning' ? 'bg-yellow-50 border-yellow-500' : 'bg-red-50 border-red-500'}`}>
                <p className="text-xs text-gray-600 font-semibold">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                <p className="text-2xl font-bold text-gray-900">{data.value}</p>
                <p className="text-xs text-gray-600">{data.unit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Vision Feed */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Vision & Object Detection</h3>
          <div className="mb-6">
            <img 
              src="https://via.placeholder.com/600x400?text=AI+Vision+Feed" 
              alt="AI vision bounding boxes"
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Detection Results</h4>
            <div className="space-y-3">
              {aiVisionData.map(detection => (
                <div key={detection.id} className="p-4 border border-gray-300 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-semibold text-indigo-600">{detection.type}</p>
                      <p className="text-sm text-gray-600">{detection.label}</p>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{detection.confidence}%</span>
                  </div>
                  <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-500"
                      style={{ width: `${detection.confidence}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Telemetry Graphs */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Telemetry Graphs</h3>
          
          <div className="mb-6 space-y-3">
            <div className="flex gap-2">
              {['speed', 'distance', 'battery'].map(metric => (
                <button
                  key={metric}
                  onClick={() => setSelectedMetric(metric)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${selectedMetric === metric ? 'bg-indigo-500 text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  {metric.charAt(0).toUpperCase() + metric.slice(1)}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {['1h', '6h', '24h', '7d'].map(range => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${timeRange === range ? 'bg-indigo-500 text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <svg viewBox="0 0 500 300" className="w-full h-64">
              <polyline points="20,250 60,200 100,150 140,130 180,170 220,190 260,140 300,100 340,110 380,140" fill="none" stroke="#4f46e5" strokeWidth="2" />
              <line x1="20" y1="50" x2="480" y2="50" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="20" y1="150" x2="480" y2="150" stroke="#e5e7eb" strokeWidth="1" />
              <line x1="20" y1="250" x2="480" y2="250" stroke="#e5e7eb" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* Event Logs */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Event Logs</h3>
          <p className="text-gray-600 text-sm mb-6">System events, alerts, and AI decision tracking</p>
          <div className="space-y-2">
            {eventLogs.map(log => (
              <div key={log.id} className={`p-4 rounded-lg border-l-4 ${log.severity === 'critical' ? 'bg-red-50 border-red-500' : log.severity === 'warning' ? 'bg-yellow-50 border-yellow-500' : 'bg-blue-50 border-blue-500'}`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{log.type}</p>
                    <p className="text-sm text-gray-700 mt-1">{log.message}</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-xs text-gray-600 mb-1">{log.time}</p>
                    <span className={`text-xs font-semibold ${log.severity === 'critical' ? 'text-red-700' : log.severity === 'warning' ? 'text-yellow-700' : 'text-blue-700'}`}>
                      {log.severity.charAt(0).toUpperCase() + log.severity.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="font-semibold text-gray-900 mb-3">CPU Usage</p>
              <div className="h-2 bg-gray-300 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-indigo-500" style={{ width: '65%' }}></div>
              </div>
              <p className="text-lg font-bold text-gray-900">65%</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-3">GPU Usage (AI)</p>
              <div className="h-2 bg-gray-300 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-indigo-500" style={{ width: '45%' }}></div>
              </div>
              <p className="text-lg font-bold text-gray-900">45%</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-3">Memory</p>
              <div className="h-2 bg-gray-300 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-indigo-500" style={{ width: '78%' }}></div>
              </div>
              <p className="text-lg font-bold text-gray-900">78%</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-3">Network Latency</p>
              <p className="text-lg font-bold text-gray-900">42ms</p>
            </div>
          </div>
        </div>

        {/* AI Learning Status */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">AI Learning & Training Status</h3>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-gray-900 mb-3">Reward Progress</p>
              <div className="h-3 bg-gray-300 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-green-500" style={{ width: '73%' }}></div>
              </div>
              <p className="text-sm text-gray-600">Episode 73 / 100</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Average Reward</p>
              <p className="text-3xl font-bold text-indigo-600">+2.45</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-3">Recent Training Metrics</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Success Rate: 87%</li>
                <li>✓ Avg Time to Goal: 2.3s</li>
                <li>✓ Collision Count: 3</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Export & Analysis</h3>
          <div className="flex gap-3">
            <button className="px-6 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-lg font-semibold transition">📥 Download CSV</button>
            <button className="px-6 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-lg font-semibold transition">📥 Download JSON</button>
            <button className="px-6 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-lg font-semibold transition">📊 Generate Report</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function RobotControl() {
  const [_manualMode, _setManualMode] = useState(true);
  const [_joystickPosition, _setJoystickPosition] = useState({ x: 0, y: 0 });
  const [speed, setSpeed] = useState(50);
  const [sensitivity, setSensitivity] = useState(50);
  const [recordingActive, setRecordingActive] = useState(false);

  const [autonomousModes] = useState([
    { id: 1, name: 'Patrol Route', description: 'Automatic patrolling' },
    { id: 2, name: 'Cleaning Mode', description: 'Systematic cleaning' },
    { id: 3, name: 'Surveillance', description: 'Room monitoring' },
  ]);

  const [commandHistory] = useState([
    { id: 1, cmd: 'Forward 50cm', status: 'executed', time: '2m ago' },
    { id: 2, cmd: 'Turn Left 90°', status: 'executed', time: '3m ago' },
    { id: 3, cmd: 'Take Photo', status: 'executed', time: '5m ago' },
  ]);

  const [schedules] = useState([
    { id: 1, name: 'Morning Patrol', time: '09:00 AM', enabled: true },
    { id: 2, name: 'Evening Sweep', time: '06:00 PM', enabled: true },
  ]);

  const handleManualControl = (direction) => {
    console.log(`Moving: ${direction}`);
    // Add to command history
  };

  const handleEmergencyStop = () => {
    console.log('EMERGENCY STOP ACTIVATED');
    alert('Emergency stop activated! Robot halted.');
  };

  const handleVoiceCommand = () => {
    console.log('Starting voice command...');
    alert('Voice command feature: Listen for speech input');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white p-8 mb-8">
        <h1 className="text-4xl font-bold mb-2">Robot Control Center</h1>
        <p className="text-indigo-100">Direct manual and autonomous robot control</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* Manual Controls */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Manual Controls</h3>
          
          <div className="grid grid-cols-3 gap-4 w-full max-w-xs mx-auto mb-8">
            <div></div>
            <button 
              className="p-6 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg text-2xl font-bold transition"
              onClick={() => handleManualControl('forward')}
              title="Move Forward"
            >
              ⬆️
            </button>
            <div></div>
            
            <button 
              className="p-6 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg text-2xl font-bold transition"
              onClick={() => handleManualControl('left')}
              title="Turn Left"
            >
              ⬅️
            </button>
            <button 
              className="p-6 bg-red-500 hover:bg-red-700 text-white rounded-lg text-2xl font-bold transition"
              onClick={() => handleManualControl('stop')}
              title="Stop"
            >
              ⏹️
            </button>
            <button 
              className="p-6 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg text-2xl font-bold transition"
              onClick={() => handleManualControl('right')}
              title="Turn Right"
            >
              ➡️
            </button>
            
            <div></div>
            <button 
              className="p-6 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg text-2xl font-bold transition"
              onClick={() => handleManualControl('backward')}
              title="Move Backward"
            >
              ⬇️
            </button>
            <div></div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="speed" className="block font-semibold text-gray-900 mb-2">Speed: {speed}%</label>
              <input
                type="range"
                id="speed"
                min="0"
                max="100"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="sensitivity" className="block font-semibold text-gray-900 mb-2">Sensitivity: {sensitivity}%</label>
              <input
                type="range"
                id="sensitivity"
                min="0"
                max="100"
                value={sensitivity}
                onChange={(e) => setSensitivity(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <button 
            className="w-full px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg transition"
            onClick={handleEmergencyStop}
          >
            🚨 EMERGENCY STOP
          </button>
        </div>

        {/* Autonomous Modes */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Autonomous Modes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {autonomousModes.map(mode => (
              <button key={mode.id} className="p-6 border-2 border-indigo-300 hover:border-indigo-500 rounded-lg text-left transition">
                <h4 className="font-bold text-gray-900 mb-2">{mode.name}</h4>
                <p className="text-gray-600 text-sm">{mode.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Scheduled Tasks */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Scheduled Routines</h3>
          <div className="space-y-3 mb-6">
            {schedules.map(schedule => (
              <div key={schedule.id} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">{schedule.name}</p>
                  <p className="text-sm text-gray-600">{schedule.time}</p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" checked={schedule.enabled} readOnly className="w-4 h-4" />
                  <span className="ml-2 text-sm font-semibold">{schedule.enabled ? 'Enabled' : 'Disabled'}</span>
                </label>
              </div>
            ))}
          </div>
          <button className="px-6 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded-lg font-semibold transition">+ Add Schedule</button>
        </div>

        {/* Camera Controls */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Camera Interaction</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <button className="px-4 py-2 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg font-semibold transition text-sm">🔄 Pan</button>
            <button className="px-4 py-2 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg font-semibold transition text-sm">↕️ Tilt</button>
            <button className="px-4 py-2 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg font-semibold transition text-sm">🔍 Zoom</button>
            <button className="px-4 py-2 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg font-semibold transition text-sm">📷 Snapshot</button>
            <button 
              className={`px-4 py-2 rounded-lg font-semibold transition text-sm col-span-2 md:col-span-1 ${recordingActive ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}
              onClick={() => setRecordingActive(!recordingActive)}
            >
              {recordingActive ? '⏹️ Stop Recording' : '🎥 Start Recording'}
            </button>
          </div>
        </div>

        {/* Voice Commands */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Voice Commands</h3>
          <p className="text-gray-600 mb-6">Control robot using voice</p>
          <button className="w-full px-6 py-3 bg-indigo-500 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition mb-6" onClick={handleVoiceCommand}>
            🎤 Start Voice Command
          </button>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-900 mb-3">Common Commands:</p>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• "Move forward"</li>
              <li>• "Turn left"</li>
              <li>• "Take a photo"</li>
              <li>• "Stop"</li>
            </ul>
          </div>
        </div>

        {/* Command History */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Command History</h3>
          <div className="space-y-2">
            {commandHistory.map(cmd => (
              <div key={cmd.id} className={`p-4 rounded-lg border-l-4 ${cmd.status === 'success' ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                <p className="font-semibold text-gray-900">{cmd.command}</p>
                <div className="flex justify-between mt-2">
                  <p className="text-xs text-gray-600">{cmd.time}</p>
                  <span className={`text-xs font-semibold ${cmd.status === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                    {cmd.status === 'success' ? '✓ Success' : '✗ Failed'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

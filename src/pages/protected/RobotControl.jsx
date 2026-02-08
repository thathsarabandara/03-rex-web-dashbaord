import React, { useState } from 'react';

export default function RobotControl() {
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
    <div className="min-h-screen bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Robot Control Center</h1>
        <p className="text-gray-600">Direct manual and autonomous control</p>
      </div>

      <div className="space-y-6">
        {/* Manual Controls */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-5">Manual Controls</h3>
          
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 gap-2 w-32 mb-6">
              <div></div>
              <button 
                className="p-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-xl font-bold transition"
                onClick={() => handleManualControl('forward')}
                title="Move Forward"
              >
                ⬆️
              </button>
              <div></div>
              
              <button 
                className="p-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-xl font-bold transition"
                onClick={() => handleManualControl('left')}
                title="Turn Left"
              >
                ⬅️
              </button>
              <button 
                className="p-4 bg-red-500 hover:bg-red-600 text-white rounded text-xl font-bold transition"
                onClick={() => handleManualControl('stop')}
                title="Stop"
              >
                ⏹️
              </button>
              <button 
                className="p-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-xl font-bold transition"
                onClick={() => handleManualControl('right')}
                title="Turn Right"
              >
                ➡️
              </button>
              
              <div></div>
              <button 
                className="p-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-xl font-bold transition"
                onClick={() => handleManualControl('backward')}
                title="Move Backward"
              >
                ⬇️
              </button>
              <div></div>
            </div>

            <div className="w-full space-y-3">
              <div>
                <label htmlFor="speed" className="block text-sm font-medium text-gray-900 mb-2">Speed: {speed}%</label>
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
                <label htmlFor="sensitivity" className="block text-sm font-medium text-gray-900 mb-2">Sensitivity: {sensitivity}%</label>
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

              <button 
                className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded font-bold text-base transition mt-4"
                onClick={handleEmergencyStop}
              >
                🚨 EMERGENCY STOP
              </button>
            </div>
          </div>
        </div>

        {/* Autonomous Modes */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Autonomous Modes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {autonomousModes.map(mode => (
              <button key={mode.id} className="p-4 border border-gray-300 hover:border-indigo-400 rounded text-left transition">
                <h4 className="font-semibold text-gray-900 text-sm">{mode.name}</h4>
                <p className="text-gray-600 text-xs mt-1">{mode.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Scheduled Routines */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-3">Scheduled Routines</h3>
          <div className="space-y-2 mb-4">
            {schedules.map(schedule => (
              <div key={schedule.id} className="flex items-center justify-between p-3 border border-gray-200 rounded">
                <div>
                  <p className="text-sm font-medium text-gray-900">{schedule.name}</p>
                  <p className="text-xs text-gray-500">{schedule.time}</p>
                </div>
                <input type="checkbox" checked={schedule.enabled} readOnly className="w-4 h-4" />
              </div>
            ))}
          </div>
          <button className="px-3 py-2 border border-indigo-500 text-indigo-600 hover:bg-indigo-50 rounded text-sm font-medium transition">+ Add Schedule</button>
        </div>

        {/* Camera Controls */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Camera Interaction</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <button className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-sm font-medium transition">🔄 Pan</button>
            <button className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-sm font-medium transition">↕️ Tilt</button>
            <button className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-sm font-medium transition">🔍 Zoom</button>
            <button className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded text-sm font-medium transition">📷 Snapshot</button>
            <button 
              className={`px-3 py-2 rounded text-sm font-medium transition col-span-2 md:col-span-1 ${recordingActive ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}
              onClick={() => setRecordingActive(!recordingActive)}
            >
              {recordingActive ? '⏹️ Stop' : '🎥 Record'}
            </button>
          </div>
        </div>

        {/* Voice Commands */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-2">Voice Commands</h3>
          <p className="text-sm text-gray-600 mb-4">Control robot using voice</p>
          <button className="w-full px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded font-medium text-sm transition mb-4" onClick={handleVoiceCommand}>
            🎤 Start Voice Command
          </button>
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <p className="text-xs font-medium text-gray-900 mb-2">Common Commands:</p>
            <ul className="text-gray-700 text-xs space-y-1">
              <li>• "Move forward" • "Turn left"</li>
              <li>• "Take a photo" • "Stop"</li>
            </ul>
          </div>
        </div> 

        {/* Command History */}
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-3">Command History</h3>
          <div className="space-y-2">
            {commandHistory.map(cmd => (
              <div key={cmd.id} className={`p-3 rounded border-l-2 ${cmd.status === 'executed' ? 'bg-green-50 border-green-400' : 'bg-red-50 border-red-400'}`}>
                <p className="text-sm font-medium text-gray-900">{cmd.cmd}</p>
                <div className="flex justify-between mt-1">
                  <p className="text-xs text-gray-500">{cmd.time}</p>
                  <span className={`text-xs font-medium ${cmd.status === 'executed' ? 'text-green-700' : 'text-red-700'}`}>
                    {cmd.status === 'executed' ? '✓' : '✗'}
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

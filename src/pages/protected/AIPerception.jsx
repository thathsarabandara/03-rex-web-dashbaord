import React, { useState } from 'react';

export default function AIPerception() {
  const [selectedView, setSelectedView] = useState('decision');
  const [confidenceThreshold, setConfidenceThreshold] = useState(70);

  const [decisionHistory] = useState([
    {
      id: 1,
      decision: 'Chose Route B',
      reason: 'Lower predicted occupancy, minimal obstruction',
      confidence: 92,
      timestamp: '10:35:20',
    },
    {
      id: 2,
      decision: 'Avoided Stairs',
      reason: 'Height sensor reading indicates steep decline',
      confidence: 98,
      timestamp: '10:34:15',
    },
    {
      id: 3,
      decision: 'Initiated Patrol',
      reason: 'Motion detected + Low activity pattern identified',
      confidence: 85,
      timestamp: '10:33:00',
    },
  ]);

  const [objectRecognitionHistory] = useState([
    { id: 1, object: 'Cat', count: 3, lastSeen: '5m ago', confidence: 96 },
    { id: 2, object: 'Person (John)', count: 1, lastSeen: '12m ago', confidence: 94 },
    { id: 3, object: 'Chair', count: 5, lastSeen: '2m ago', confidence: 88 },
    { id: 4, object: 'Door Handle', count: 2, lastSeen: '15m ago', confidence: 91 },
  ]);

  const [_gestureRecognition] = useState([
    { id: 1, gesture: 'Waving', person: 'Person 1', confidence: 92, time: '10:30:45' },
    { id: 2, gesture: 'Pointing', person: 'Person 2', confidence: 87, time: '10:25:30' },
    { id: 3, gesture: 'Thumbs Up', person: 'Person 1', confidence: 95, time: '10:20:15' },
  ]);

  const [gestureRecognitionHistory] = useState([
    { id: 1, gesture: 'Waving', confidence: 92, timestamp: '10:30:45' },
    { id: 2, gesture: 'Pointing', confidence: 87, timestamp: '10:25:30' },
    { id: 3, gesture: 'Thumbs Up', confidence: 95, timestamp: '10:20:15' },
  ]);

  const [_pathPlanningData] = useState({
    currentLocation: { x: 5.2, y: 3.8 },
    targetLocation: { x: 12.5, y: 8.3 },
    distanceToTarget: 9.4,
    estimatedTime: '45 seconds',
    obstacles: 3,
    pathEfficiency: 87,
  });

  const [pathPlanning] = useState({
    pathOptimization: 89,
    averageSpeed: 1.2,
    pathEfficiency: 87,
  });

  const [reinforcementLearning] = useState({
    totalEpisodes: 1250,
    currentEpisode: 1073,
    successRate: 87,
    averageReward: 2.45,
    explorationRate: 0.15,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-700 text-white p-8 mb-8">
        <h1 className="text-4xl font-bold mb-2">AI / Perception Insights</h1>
        <p className="text-indigo-100">Robot's AI reasoning, learning progress, and perception analysis</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        {/* View Selector */}
        <div className="flex gap-2 mb-8">
          <button 
            onClick={() => setSelectedView('decision')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${selectedView === 'decision' ? 'bg-indigo-500 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
          >
            Decision Visualization
          </button>
          <button 
            onClick={() => setSelectedView('recognition')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${selectedView === 'recognition' ? 'bg-indigo-500 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
          >
            Recognition History
          </button>
          <button 
            onClick={() => setSelectedView('planning')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${selectedView === 'planning' ? 'bg-indigo-500 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
          >
            Path Planning
          </button>
          <button 
            onClick={() => setSelectedView('learning')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${selectedView === 'learning' ? 'bg-indigo-500 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
          >
            RL Training
          </button>
        </div>

        {/* Decision Visualization */}
        {selectedView === 'decision' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Decision History</h3>
            <p className="text-gray-600 mb-6">Track robot's decision-making process and reasoning</p>

            <div className="mb-6">
              <label htmlFor="confidence" className="block font-semibold text-gray-900 mb-2">Show only decisions with confidence {'>'} {confidenceThreshold}%</label>
              <input
                type="range"
                id="confidence"
                min="0"
                max="100"
                value={confidenceThreshold}
                onChange={(e) => setConfidenceThreshold(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-3">
              {decisionHistory
                .filter(d => d.confidence >= confidenceThreshold)
                .map(decision => (
                  <div key={decision.id} className="p-4 border border-gray-300 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-900">{decision.decision}</h4>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded font-semibold text-sm">{decision.confidence}%</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Why:</strong> {decision.reason}</p>
                    <p className="text-xs text-gray-600 mb-2">{decision.timestamp}</p>
                    <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-500"
                        style={{ width: `${decision.confidence}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Recognition History */}
        {selectedView === 'recognition' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Object Recognition</h3>
                <p className="text-gray-600 text-sm mb-4">Detected objects and entities</p>
                <div className="space-y-2">
                  {objectRecognitionHistory.slice(0, 5).map(obj => (
                    <div key={obj.id} className="p-3 border border-gray-300 rounded-lg">
                      <p className="font-semibold text-gray-900">{obj.type}</p>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Confidence: {obj.confidence}%</span>
                        <span>{obj.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gesture Recognition</h3>
                <p className="text-gray-600 text-sm mb-4">Detected gestures and poses</p>
                <div className="space-y-2">
                  {gestureRecognitionHistory.slice(0, 5).map(gesture => (
                    <div key={gesture.id} className="p-3 border border-gray-300 rounded-lg">
                      <p className="font-semibold text-gray-900">{gesture.gesture}</p>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Confidence: {gesture.confidence}%</span>
                        <span>{gesture.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Path Planning */}
        {selectedView === 'planning' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Path Planning & Navigation</h3>
            <div className="bg-gray-100 rounded-lg p-8 mb-6" style={{ minHeight: '400px' }}>
              <p className="text-center text-gray-600">Path planning visualization map</p>
              <svg viewBox="0 0 600 400" className="w-full h-96 mt-4">
                <rect x="50" y="50" width="500" height="300" fill="none" stroke="#999" strokeWidth="2" />
                <circle cx="100" cy="100" r="50" fill="#e5e7eb" opacity="0.5" />
                <circle cx="500" cy="300" r="50" fill="#e5e7eb" opacity="0.5" />
                <path d="M 100 100 Q 300 150 500 300" stroke="#667eea" strokeWidth="3" fill="none" strokeDasharray="5,5" />
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Path Optimization</p>
                <p className="text-2xl font-bold text-indigo-600">{pathPlanning.pathOptimization}%</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Average Speed</p>
                <p className="text-2xl font-bold text-indigo-600">{pathPlanning.averageSpeed} m/s</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Path Efficiency</p>
                <p className="text-2xl font-bold text-indigo-600">{pathPlanning.pathEfficiency}%</p>
              </div>
            </div>
          </div>
        )}

        {/* RL Training */}
        {selectedView === 'learning' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Reinforcement Learning Training</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold text-gray-900 mb-3">Training Progress</p>
                <div className="h-2 bg-gray-300 rounded-full overflow-hidden mb-2">
                  <div 
                    className="h-full bg-green-500"
                    style={{ width: `${(reinforcementLearning.currentEpisode / reinforcementLearning.totalEpisodes) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">Episode {reinforcementLearning.currentEpisode} / {reinforcementLearning.totalEpisodes}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3">Key Metrics</p>
                <div className="space-y-2 text-sm">
                  <p>Success Rate: <strong>{reinforcementLearning.successRate}%</strong></p>
                  <p>Average Reward: <strong>{reinforcementLearning.averageReward}</strong></p>
                  <p>Exploration Rate: <strong>{reinforcementLearning.explorationRate}</strong></p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

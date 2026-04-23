import React, { useState } from 'react';
import { FaMap } from 'react-icons/fa';

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
    <div className="min-h-screen bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI & Perception</h1>
        <p className="text-gray-600">Robot's AI reasoning, learning, and perception analysis</p>
      </div>

      <div className="space-y-6">
        {/* View Selector */}
        <div className="flex gap-2 flex-wrap">
          <button 
            onClick={() => setSelectedView('decision')}
            className={`px-4 py-1.5 rounded text-sm font-medium transition ${selectedView === 'decision' ? 'bg-indigo-500 text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
          >
            Decisions
          </button>
          <button 
            onClick={() => setSelectedView('recognition')}
            className={`px-4 py-1.5 rounded text-sm font-medium transition ${selectedView === 'recognition' ? 'bg-indigo-500 text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
          >
            Recognition
          </button>
          <button 
            onClick={() => setSelectedView('planning')}
            className={`px-4 py-1.5 rounded text-sm font-medium transition ${selectedView === 'planning' ? 'bg-indigo-500 text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
          >
            Path Planning
          </button>
          <button 
            onClick={() => setSelectedView('learning')}
            className={`px-4 py-1.5 rounded text-sm font-medium transition ${selectedView === 'learning' ? 'bg-indigo-500 text-white' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
          >
            Learning
          </button>
        </div>

        {/* Decision Visualization */}
        {selectedView === 'decision' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-3">AI Decision History</h3>

            <div className="mb-4">
              <label htmlFor="confidence" className="block text-sm font-medium text-gray-900 mb-2">Confidence: {confidenceThreshold}%</label>
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

            <div className="space-y-2">
              {decisionHistory
                .filter(d => d.confidence >= confidenceThreshold)
                .map(decision => (
                  <div key={decision.id} className="p-3 border border-gray-200 rounded">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-sm font-medium text-gray-900">{decision.decision}</h4>
                      <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs font-semibold">{decision.confidence}%</span>
                    </div>
                    <p className="text-xs text-gray-700 mb-2">{decision.reason}</p>
                    <p className="text-xs text-gray-500">{decision.timestamp}</p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Recognition History */}
        {selectedView === 'recognition' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Objects Detected</h3>
              <div className="space-y-2">
                {objectRecognitionHistory.map(obj => (
                  <div key={obj.id} className="p-2 border border-gray-200 rounded text-sm">
                    <p className="font-medium text-gray-900">{obj.object}</p>
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>{obj.count}x</span>
                      <span>{obj.confidence}%</span>
                      <span>{obj.lastSeen}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Gestures Detected</h3>
              <div className="space-y-2">
                {gestureRecognitionHistory.map(gesture => (
                  <div key={gesture.id} className="p-2 border border-gray-200 rounded text-sm">
                    <p className="font-medium text-gray-900">{gesture.gesture}</p>
                    <div className="flex justify-between text-xs text-gray-600 mt-1">
                      <span>{gesture.confidence}%</span>
                      <span>{gesture.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Path Planning */}
        {selectedView === 'planning' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Path Planning</h3>
            <div className="bg-gray-100 rounded flex items-center justify-center h-64 mb-4">
              <div className="text-center">
                <div className="text-3xl mb-2 flex justify-center w-full"><FaMap /></div>
                <p className="text-gray-500 text-sm">Navigation map placeholder</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-xs text-gray-600 mb-1">Optimization</p>
                <p className="text-lg font-bold text-indigo-600">{pathPlanning.pathOptimization}%</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-xs text-gray-600 mb-1">Avg Speed</p>
                <p className="text-lg font-bold text-indigo-600">{pathPlanning.averageSpeed} m/s</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-xs text-gray-600 mb-1">Efficiency</p>
                <p className="text-lg font-bold text-indigo-600">{pathPlanning.pathEfficiency}%</p>
              </div>
            </div>
          </div>
        )}

        {/* RL Training */}
        {selectedView === 'learning' && (
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Reinforcement Learning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Training Progress</p>
                <div className="h-2 bg-gray-300 rounded-full overflow-hidden mb-2">
                  <div 
                    className="h-full bg-green-500"
                    style={{ width: `${(reinforcementLearning.currentEpisode / reinforcementLearning.totalEpisodes) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600">Episode {reinforcementLearning.currentEpisode} / {reinforcementLearning.totalEpisodes}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-3">Metrics</p>
                <div className="space-y-1 text-xs">
                  <p>Success: <strong>{reinforcementLearning.successRate}%</strong></p>
                  <p>Reward: <strong>{reinforcementLearning.averageReward}</strong></p>
                  <p>Explore: <strong>{reinforcementLearning.explorationRate}</strong></p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

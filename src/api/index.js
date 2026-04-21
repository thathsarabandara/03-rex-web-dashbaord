/**
 * Central API Service Export
 * All API services use the centralized axiosInstance
 */

import axiosInstance from './axiosInstance';
import authAPI from './authAPI';
import robotAPI from './robotAPI';
import smartHomeAPI from './smartHomeAPI';
import monitoringAPI from './monitoringAPI';

/**
 * Example usage:
 * import { authAPI, robotAPI, smartHomeAPI, monitoringAPI } from '@/api'
 * 
 * // Authentication
 * await authAPI.login(email, password)
 * 
 * // Robot Control
 * await robotAPI.control(robotId, 'move', { direction: 'forward', speed: 50 })
 * 
 * // Smart Home
 * await smartHomeAPI.getDevices()
 * await smartHomeAPI.triggerScene(sceneId)
 * 
 * // Monitoring
 * await monitoringAPI.getTelemetry({ limit: 100 })
 */

export { axiosInstance, authAPI, robotAPI, smartHomeAPI, monitoringAPI };

// Default export for convenience
export default {
  axios: axiosInstance,
  auth: authAPI,
  robot: robotAPI,
  smartHome: smartHomeAPI,
  monitoring: monitoringAPI,
};

import axiosInstance from './axiosInstance';
import { config } from '../config';

/**
 * Monitoring & Telemetry API Service
 * All monitoring-related API calls using centralized axiosInstance
 */

export const monitoringAPI = {
  // Sensors
  getSensors: () =>
    axiosInstance.get(config.endpoints.monitoring.sensors),

  getSensorData: (sensorId) =>
    axiosInstance.get(`${config.endpoints.monitoring.sensors}/${sensorId}`),

  getSensorHistory: (sensorId, options = {}) =>
    axiosInstance.get(`${config.endpoints.monitoring.sensors}/${sensorId}/history`, {
      params: options,
    }),

  // Telemetry
  getTelemetry: (options = {}) =>
    axiosInstance.get(config.endpoints.monitoring.telemetry, {
      params: options,
    }),

  getRobotTelemetry: (robotId) =>
    axiosInstance.get(`${config.endpoints.monitoring.telemetry}?robot_id=${robotId}`),

  getTelemetryStream: (robotId) =>
    axiosInstance.get(`${config.endpoints.monitoring.telemetry}/${robotId}/stream`),

  // Logs
  getLogs: (options = {}) =>
    axiosInstance.get(config.endpoints.monitoring.logs, {
      params: options,
    }),

  getRobotLogs: (robotId, options = {}) =>
    axiosInstance.get(`${config.endpoints.monitoring.logs}?robot_id=${robotId}`, {
      params: options,
    }),

  getLogDetails: (logId) =>
    axiosInstance.get(`${config.endpoints.monitoring.logs}/${logId}`),

  exportLogs: (options = {}) =>
    axiosInstance.get(`${config.endpoints.monitoring.logs}/export`, {
      params: options,
      responseType: 'blob',
    }),

  // System Health
  getSystemHealth: () =>
    axiosInstance.get('/monitoring/health'),

  getDeviceHealth: (deviceId) =>
    axiosInstance.get(`/monitoring/health/${deviceId}`),

  // Analytics
  getMetrics: (startDate, endDate, options = {}) =>
    axiosInstance.get('/monitoring/metrics', {
      params: {
        start_date: startDate,
        end_date: endDate,
        ...options,
      },
    }),

  getUsageStats: (robotId) =>
    axiosInstance.get(`/monitoring/usage/${robotId}`),
};

export default monitoringAPI;

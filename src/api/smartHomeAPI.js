import axiosInstance from './axiosInstance';
import { config } from '../config';

/**
 * Smart Home API Service
 * All smart home-related API calls using centralized axiosInstance
 */

export const smartHomeAPI = {
  // Devices
  getDevices: () =>
    axiosInstance.get(config.endpoints.smartHome.devices),

  createDevice: (deviceData) =>
    axiosInstance.post(config.endpoints.smartHome.devices, deviceData),

  updateDevice: (deviceId, deviceData) =>
    axiosInstance.put(`${config.endpoints.smartHome.devices}/${deviceId}`, deviceData),

  deleteDevice: (deviceId) =>
    axiosInstance.delete(`${config.endpoints.smartHome.devices}/${deviceId}`),

  controlDevice: (deviceId, action, params = {}) =>
    axiosInstance.post(`${config.endpoints.smartHome.devices}/${deviceId}/control`, {
      action,
      ...params,
    }),

  // Automations
  getAutomations: () =>
    axiosInstance.get(config.endpoints.smartHome.automations),

  createAutomation: (automationData) =>
    axiosInstance.post(config.endpoints.smartHome.automations, automationData),

  updateAutomation: (automationId, automationData) =>
    axiosInstance.put(
      `${config.endpoints.smartHome.automations}/${automationId}`,
      automationData
    ),

  deleteAutomation: (automationId) =>
    axiosInstance.delete(`${config.endpoints.smartHome.automations}/${automationId}`),

  toggleAutomation: (automationId, enabled) =>
    axiosInstance.patch(`${config.endpoints.smartHome.automations}/${automationId}`, {
      enabled,
    }),

  // Scenes
  getScenes: () =>
    axiosInstance.get(config.endpoints.smartHome.scenes),

  createScene: (sceneData) =>
    axiosInstance.post(config.endpoints.smartHome.scenes, sceneData),

  updateScene: (sceneId, sceneData) =>
    axiosInstance.put(`${config.endpoints.smartHome.scenes}/${sceneId}`, sceneData),

  deleteScene: (sceneId) =>
    axiosInstance.delete(`${config.endpoints.smartHome.scenes}/${sceneId}`),

  triggerScene: (sceneId) =>
    axiosInstance.post(`${config.endpoints.smartHome.scenes}/${sceneId}/trigger`, {}),
};

export default smartHomeAPI;

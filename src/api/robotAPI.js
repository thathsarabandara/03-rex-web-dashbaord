import axiosInstance from './axiosInstance';
import { config } from '../config';

/**
 * Robot Control API Service
 * All robot-related API calls using centralized axiosInstance
 */

export const robotAPI = {
  // Get all robots
  list: () =>
    axiosInstance.get(config.endpoints.robot.list),

  // Get robot details
  getDetail: (robotId) =>
    axiosInstance.get(config.endpoints.robot.detail.replace(':id', robotId)),

  // Get robot status
  getStatus: (robotId) =>
    axiosInstance.get(config.endpoints.robot.status.replace(':id', robotId)),

  // Control robot
  control: (robotId, command, params = {}) =>
    axiosInstance.post(
      config.endpoints.robot.control.replace(':id', robotId),
      {
        command,
        ...params,
      }
    ),

  // Move robot
  move: (robotId, direction, speed) =>
    axiosInstance.post(`${config.endpoints.robot.control.replace(':id', robotId)}`, {
      command: 'move',
      direction,
      speed,
    }),

  // Stop robot
  stop: (robotId) =>
    axiosInstance.post(`${config.endpoints.robot.control.replace(':id', robotId)}`, {
      command: 'stop',
    }),

  // Rotate robot
  rotate: (robotId, angle) =>
    axiosInstance.post(`${config.endpoints.robot.control.replace(':id', robotId)}`, {
      command: 'rotate',
      angle,
    }),
};

export default robotAPI;

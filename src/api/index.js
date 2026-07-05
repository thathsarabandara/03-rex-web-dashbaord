/**
 * Central API Service Export
 * All API services use the centralized axiosInstance
 */

import axiosInstance from './axiosInstance';
import authAPI from './authAPI';
import profileAPI from './profileAPI';
import robotAPI from './robotAPI';
import smartHomeAPI from './smartHomeAPI';
import monitoringAPI from './monitoringAPI';

export { axiosInstance, authAPI, profileAPI, robotAPI, smartHomeAPI, monitoringAPI };

export default {
  axios: axiosInstance,
  auth: authAPI,
  profile: profileAPI,
  robot: robotAPI,
  smartHome: smartHomeAPI,
  monitoring: monitoringAPI,
};

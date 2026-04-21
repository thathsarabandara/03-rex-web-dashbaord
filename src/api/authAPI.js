import axiosInstance from './axiosInstance';
import { config } from '../config';

/**
 * Authentication API Service
 * All auth-related API calls using centralized axiosInstance
 */

export const authAPI = {
  // Login
  login: (email, password) =>
    axiosInstance.post(config.endpoints.auth.login, { email, password }),

  // Registration
  registerInitiate: (username, email, password) =>
    axiosInstance.post(`${config.endpoints.auth.register}/initiate`, {
      username,
      email,
      password,
    }),

  registerVerify: (email, otp, tempToken) =>
    axiosInstance.post(`${config.endpoints.auth.register}/verify`, {
      email,
      otp,
      temp_token: tempToken,
    }),

  resendOTP: (email, tempToken) =>
    axiosInstance.post(`${config.endpoints.auth.register}/resend-otp`, {
      email,
      temp_token: tempToken,
    }),

  // Password Management
  forgotPassword: (email) =>
    axiosInstance.post(config.endpoints.auth.forgotPassword, { email }),

  validateResetToken: (token) =>
    axiosInstance.get(`${config.endpoints.auth.validateResetToken}?token=${token}`),

  resetPassword: (resetToken, newPassword) =>
    axiosInstance.post(config.endpoints.auth.resetPassword, {
      reset_token: resetToken,
      new_password: newPassword,
    }),

  // Token Management
  refreshToken: () => axiosInstance.post('/auth/token/refresh'),

  validateToken: () => axiosInstance.get('/auth/token/validate'),
};

export default authAPI;

import axiosInstance from './axiosInstance';

export const profileAPI = {
  getProfile: () => axiosInstance.get('/auth/profile'),
  updateProfile: (data) => axiosInstance.put('/auth/profile', data),
  uploadProfilePicture: (imageData) => axiosInstance.post('/auth/profile/picture', { image_data: imageData }),
  deleteProfilePicture: () => axiosInstance.delete('/auth/profile/picture'),
  changePassword: (currentPassword, newPassword) => axiosInstance.post('/auth/password/change', { current_password: currentPassword, new_password: newPassword }),
  getSessions: () => axiosInstance.get('/auth/sessions'),
  revokeSession: (sessionId) => axiosInstance.delete(`/auth/sessions/${sessionId}`),
  revokeOtherSessions: () => axiosInstance.delete('/auth/sessions'),
  getHistory: () => axiosInstance.get('/auth/history'),
};

export default profileAPI;

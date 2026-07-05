import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { profileAPI } from '../api';

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await profileAPI.getProfile();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch profile');
    }
  }
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (profileData, { rejectWithValue }) => {
    try {
      const response = await profileAPI.updateProfile(profileData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update profile');
    }
  }
);

export const uploadProfilePicture = createAsyncThunk(
  'profile/uploadProfilePicture',
  async (imageData, { rejectWithValue }) => {
    try {
      const response = await profileAPI.uploadProfilePicture(imageData);
      return { message: response.data.message, imageData };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to upload picture');
    }
  }
);

export const deleteProfilePicture = createAsyncThunk(
  'profile/deleteProfilePicture',
  async (_, { rejectWithValue }) => {
    try {
      const response = await profileAPI.deleteProfilePicture();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete picture');
    }
  }
);

export const changePassword = createAsyncThunk(
  'profile/changePassword',
  async ({ currentPassword, newPassword }, { rejectWithValue }) => {
    try {
      const response = await profileAPI.changePassword(currentPassword, newPassword);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to change password');
    }
  }
);

export const fetchSessions = createAsyncThunk(
  'profile/fetchSessions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await profileAPI.getSessions();
      return response.data.sessions;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch sessions');
    }
  }
);

export const revokeSession = createAsyncThunk(
  'profile/revokeSession',
  async (sessionId, { rejectWithValue }) => {
    try {
      await profileAPI.revokeSession(sessionId);
      return sessionId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to revoke session');
    }
  }
);

export const revokeOtherSessions = createAsyncThunk(
  'profile/revokeOtherSessions',
  async (_, { rejectWithValue }) => {
    try {
      await profileAPI.revokeOtherSessions();
      return true;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to revoke other sessions');
    }
  }
);

export const fetchHistory = createAsyncThunk(
  'profile/fetchHistory',
  async (_, { rejectWithValue }) => {
    try {
      const response = await profileAPI.getHistory();
      return response.data.history;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch history');
    }
  }
);

const initialState = {
  data: null,
  sessions: [],
  history: [],
  loading: false,
  error: null,
  successMessage: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    clearProfileMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Profile
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update Profile
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Upload Picture
      .addCase(uploadProfilePicture.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadProfilePicture.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
        if (state.data) {
          state.data.profile_picture_data = action.payload.imageData;
        }
      })
      .addCase(uploadProfilePicture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete Picture
      .addCase(deleteProfilePicture.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProfilePicture.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
        if (state.data) {
          state.data.profile_picture_data = null;
        }
      })
      .addCase(deleteProfilePicture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Change Password
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Sessions
      .addCase(fetchSessions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSessions.fulfilled, (state, action) => {
        state.loading = false;
        state.sessions = action.payload;
      })
      .addCase(fetchSessions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Revoke Session
      .addCase(revokeSession.fulfilled, (state, action) => {
        state.sessions = state.sessions.filter(s => s.id !== action.payload);
      })
      // Revoke Other Sessions
      .addCase(revokeOtherSessions.fulfilled, (state) => {
        state.sessions = state.sessions.filter(s => s.is_current);
      })
      // Fetch History
      .addCase(fetchHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.history = action.payload;
      })
      .addCase(fetchHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProfileMessages } = profileSlice.actions;
export default profileSlice.reducer;

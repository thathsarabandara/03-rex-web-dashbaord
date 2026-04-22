import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '../api';

// Async thunks for authentication
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await authAPI.login(email, password);

      const { access_token, tenant_id, expires_in } = response.data;
      
      // Store token in Redux and localStorage
      if (access_token) {
        localStorage.setItem('authToken', access_token);
        localStorage.setItem('tenantId', tenant_id);
      }

      return {
        token: access_token,
        tenantId: tenant_id,
        expiresIn: expires_in,
        user: { email }
      };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const registerInitiate = createAsyncThunk(
  'auth/registerInitiate',
  async ({ firstName, lastName, username, email, password }, { rejectWithValue }) => {
    try {
      const response = await authAPI.registerInitiate(firstName, lastName, username, email, password);

      return {
        tempToken: response.data.temp_token,
        email: email,
        message: response.data.message
      };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Registration initiation failed');
    }
  }
);

export const registerVerify = createAsyncThunk(
  'auth/registerVerify',
  async ({ email, otp, tempToken }, { rejectWithValue }) => {
    try {
      const response = await authAPI.registerVerify(email, otp, tempToken);

      const { access_token, tenant_id, expires_in } = response.data;
      
      if (access_token) {
        localStorage.setItem('authToken', access_token);
        localStorage.setItem('tenantId', tenant_id);
      }

      return {
        token: access_token,
        tenantId: tenant_id,
        expiresIn: expires_in,
        user: { email }
      };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Email verification failed');
    }
  }
);

export const resendOTP = createAsyncThunk(
  'auth/resendOTP',
  async ({ email, tempToken }, { rejectWithValue }) => {
    try {
      const response = await authAPI.resendOTP(email, tempToken);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to resend OTP');
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await authAPI.forgotPassword(email);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to send reset email');
    }
  }
);

export const validateResetToken = createAsyncThunk(
  'auth/validateResetToken',
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await authAPI.validateResetToken(token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Invalid or expired token');
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ resetToken, newPassword }, { rejectWithValue }) => {
    try {
      const response = await authAPI.resetPassword(resetToken, newPassword);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to reset password');
    }
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAPI.refreshToken();
      
      const { access_token, expires_in } = response.data;
      
      if (access_token) {
        localStorage.setItem('authToken', access_token);
      }

      return {
        token: access_token,
        expiresIn: expires_in
      };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Token refresh failed');
    }
  }
);

export const validateToken = createAsyncThunk(
  'auth/validateToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAPI.validateToken();
      return response.data;
    } catch (error) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('tenantId');
      return rejectWithValue('Token validation failed');
    }
  }
);

const initialState = {
  user: null,
  token: localStorage.getItem('authToken') || null,
  tenantId: localStorage.getItem('tenantId') || null,
  isAuthenticated: !!localStorage.getItem('authToken'),
  loading: false,
  error: null,
  tempToken: null,
  registrationEmail: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.tenantId = null;
      state.isAuthenticated = false;
      state.error = null;
      state.tempToken = null;
      state.registrationEmail = null;
      localStorage.removeItem('authToken');
      localStorage.removeItem('tenantId');
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.tenantId = action.payload.tenantId;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Register Initiate
    builder
      .addCase(registerInitiate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerInitiate.fulfilled, (state, action) => {
        state.loading = false;
        state.tempToken = action.payload.tempToken;
        state.registrationEmail = action.payload.email;
      })
      .addCase(registerInitiate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Register Verify
    builder
      .addCase(registerVerify.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerVerify.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.tenantId = action.payload.tenantId;
        state.user = action.payload.user;
        state.tempToken = null;
        state.registrationEmail = null;
      })
      .addCase(registerVerify.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Resend OTP
    builder
      .addCase(resendOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resendOTP.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resendOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Forgot Password
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Validate Reset Token
    builder
      .addCase(validateResetToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(validateResetToken.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(validateResetToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Reset Password
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Refresh Token
    builder
      .addCase(refreshToken.pending, (state) => {
        // Don't show loading for refresh
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
      })
      .addCase(refreshToken.rejected, (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
        localStorage.removeItem('authToken');
        localStorage.removeItem('tenantId');
      });

    // Validate Token
    builder
      .addCase(validateToken.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(validateToken.rejected, (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;

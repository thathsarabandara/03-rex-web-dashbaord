import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunks for authentication
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Fake login - remove this when backend is ready
      const fakeUsers = [
        { email: 'admin@rex47.com', password: 'Admin@123', name: 'Admin User' },
        { email: 'user@rex47.com', password: 'User@123', name: 'Test User' },
      ];

      const user = fakeUsers.find(u => u.email === email && u.password === password);
      
      if (!user) {
        return rejectWithValue('Invalid email or password');
      }

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

      const token = `fake_token_${Date.now()}`;
      localStorage.setItem('authToken', token);

      return {
        token,
        user: { email: user.email, name: user.name },
      };

      // Real API call (uncomment when backend is ready)
      // const response = await axios.post('/api/auth/login', { email, password });
      // localStorage.setItem('authToken', response.data.token);
      // return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/register', { name, email, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/forgot-password', { email });
      return response.data;
    } catch (_error) {
      return rejectWithValue(_error.response?.data?.message || 'Failed to send reset email');
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/reset-password', { token, password });
      return response.data;
    } catch {
      return rejectWithValue('Failed to reset password');
    }
  }
);

export const validateToken = createAsyncThunk(
  'auth/validateToken',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        return rejectWithValue('No token found');
      }

      // Fake validation - remove this when backend is ready
      if (token.startsWith('fake_token_')) {
        return {
          user: { email: 'admin@rex47.com', name: 'Admin User' },
        };
      }

      // Real API call (uncomment when backend is ready)
      // const response = await axios.post('/api/auth/validate', { token });
      // return response.data;
      
      return rejectWithValue('Invalid token');
    } catch {
      localStorage.removeItem('authToken');
      return rejectWithValue('Token validation failed');
    }
  }
);

const initialState = {
  user: null,
  token: localStorage.getItem('authToken') || null,
  isAuthenticated: !!localStorage.getItem('authToken'),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('authToken');
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
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Register
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
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
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
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
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
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

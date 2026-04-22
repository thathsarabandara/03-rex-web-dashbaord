/**
 * Application Configuration
 * Uses environment variables defined in .env files
 */

export const config = {
  // API Configuration
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  
  // App Configuration
  appName: import.meta.env.VITE_APP_NAME || 'REX-47 Dashboard',
  
  // Feature Flags
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  
  // API Endpoints
  endpoints: {
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      logout: '/auth/logout',
      forgotPassword: '/auth/forgot-password',
      resetPassword: '/auth/reset-password',
      validateResetToken: '/auth/validate-reset-token',
    },
    robot: {
      list: '/robot',
      detail: '/robot/:id',
      status: '/robot/:id/status',
      control: '/robot/:id/control',
    },
    smartHome: {
      devices: '/smart-home/devices',
      automations: '/smart-home/automations',
      scenes: '/smart-home/scenes',
    },
    monitoring: {
      sensors: '/monitoring/sensors',
      telemetry: '/monitoring/telemetry',
      logs: '/monitoring/logs',
    },
  },
};

export default config;

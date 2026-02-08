# 🤖 REX-47 Web Dashboard

A modern, responsive web dashboard for controlling and monitoring the REX-47 Smart Home Assistant Robot. Built with React, Redux, and Tailwind CSS.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## ✨ Features

### Core Features
- **🎮 Robot Control** - Manual and autonomous robot control with real-time feedback
- **📊 Dashboard** - Comprehensive monitoring of robot status, battery, connectivity, and sensors
- **🏠 Smart Home Integration** - Control IoT devices, automation rules, scenes, and scheduling
- **📈 Telemetry Monitoring** - Real-time sensor data visualization and analytics
- **🤖 AI Perception** - AI-powered vision, decision history, and path planning visualization
- **👤 User Authentication** - Secure login, registration, password reset, and profile management
- **⚙️ Settings** - Comprehensive system configuration and user management
- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

### Advanced Features
- **Real-time Updates** - Live sensor data and robot status
- **Voice Commands** - Control robot using natural language
- **Automated Routines** - Schedule and automate robot tasks
- **Security** - JWT authentication, secure API calls
- **Analytics** - User activity tracking and audit logs
- **Accessibility** - WCAG compliant interface

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with hooks
- **React Router v6** - Client-side routing with nested routes
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client with interceptors
- **React Icons** - Icon library

### Development Tools
- **ESLint** - Code quality and linting
- **npm** - Package manager
- **Vercel** - Deployment platform

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thathsara-bandara/rex-47-web-dashboard.git
   cd rex-47-web-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   VITE_APP_NAME=REX-47 Dashboard
   VITE_ENABLE_ANALYTICS=false
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## ⚙️ Configuration

### Environment Variables

All configuration is managed through environment variables. See [.env.example](.env.example) for available options.

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api

# App Configuration
VITE_APP_NAME=REX-47 Dashboard

# Feature Flags
VITE_ENABLE_ANALYTICS=false
```

### Configuration File

The centralized configuration can be found in `src/config/index.js`. This file imports environment variables and exports them for use throughout the application.

```javascript
import { config } from './config';

const apiUrl = config.apiBaseUrl;  // Access API URL
const appName = config.appName;    // Access app name
```

## 📁 Project Structure

```
rex-47-web-dashboard/
├── public/                    # Static files
├── src/
│   ├── api/                  # API configuration and instances
│   │   └── axiosInstance.js  # Axios interceptor setup
│   ├── assets/               # Images, fonts, etc.
│   ├── components/           # Reusable React components
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Sidebar.jsx       # Navigation sidebar
│   │   └── Footer.jsx        # Footer component
│   ├── config/               # Configuration management
│   │   └── index.js          # Environment and config variables
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Page components
│   │   ├── auth/             # Authentication pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   └── ResetPassword.jsx
│   │   ├── common/           # Public pages
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Gallery.jsx
│   │   │   └── ...
│   │   └── protected/        # Protected/authenticated pages
│   │       ├── Dashboard.jsx
│   │       ├── RobotControl.jsx
│   │       ├── RobotMonitoring.jsx
│   │       ├── SmartHome.jsx
│   │       ├── AIPerception.jsx
│   │       ├── Profile.jsx
│   │       ├── Settings.jsx
│   │       └── Help.jsx
│   ├── store/                # Redux store setup
│   │   ├── store.js          # Store configuration
│   │   └── authSlice.js      # Auth state management
│   ├── styles/               # Global styles
│   ├── App.jsx               # Root component
│   ├── App.css               # App styles
│   ├── main.jsx              # Entry point
│   └── index.css             # Global CSS
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules
├── vercel.json               # Vercel configuration
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
├── DEPLOYMENT.md             # Deployment guide
└── README.md                 # This file
```

## 📜 Available Scripts

### Development
```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Code Quality
```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix
```

### Deployment
```bash
# Deploy to Vercel using CLI
vercel

# Deploy to production
vercel --prod
```

## 🌐 Deployment

### Use below url for live version of the site
 ```bash
 https
 ```

## 🔐 Authentication Flow

1. **Registration** - User creates account at `/register`
2. **Login** - User authenticates at `/login`
3. **JWT Token** - Stored in localStorage and sent with API requests
4. **Protected Routes** - Require authentication via Redux state
5. **Token Refresh** - Handled by axios interceptors
6. **Logout** - Clears token and redirects to login

## 🛣️ Routing Structure

### Public Routes
- `/` - Home
- `/login` - User login
- `/register` - User registration
- `/forgot-password` - Password recovery
- `/reset-password?token=...` - Password reset with token validation
- `/about` - About page
- `/features` - Features showcase
- `/gallery` - Gallery
- `/contact` - Contact page

### Protected Routes (Requires Authentication)
- `/dashboard` - Main dashboard
- `/robot-control` - Manual robot control
- `/monitoring` - Sensor monitoring
- `/smart-home` - IoT device management
- `/ai-perception` - AI insights
- `/profile` - User profile
- `/settings` - System settings
- `/help` - Help center


## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vercel Documentation](https://vercel.com/docs)


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Thathsara Bandara**
- GitHub: [@thathsarabandara](https://github.com/thathsara-bandara)
- Portfolio: [Thathsara Bandara](https://thathsarabandara.vercel.app)

## 🙏 Acknowledgments

- React community for excellent documentation
- Tailwind CSS for utility-first styling
- Vercel for seamless deployment
- All contributors and testers

## 📞 Support

For support, email thathsaraarumapperuma@gmail.com or open an issue on GitHub.

---

<div align="center">
  Made with ❤️ by Thathsara Bandara
  
  ⭐ If you find this project helpful, please consider giving it a star!
</div>

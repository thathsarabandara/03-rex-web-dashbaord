# 🖥️ REX-47 Web Dashboard

> **Repository `03`** · The primary React + Vite control interface for the REX-47 platform — an advanced "Robot Operations Center" featuring real-time telemetry, live camera streams, 3D digital twins, and AI perception overlays.

[![Platform](https://img.shields.io/badge/Platform-Web-blue)]()
[![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript)]()
[![Framework](https://img.shields.io/badge/Framework-React%20%2B%20Vite-61DAFB?logo=react)]()
[![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?logo=tailwindcss)]()
[![State](https://img.shields.io/badge/State%20Management-Redux-764ABC?logo=redux)]()
[![Status](https://img.shields.io/badge/Status-Active%20Development-green)]()

---

## 📋 Table of Contents

- [Overview](#-what-is-this-repository)
- [Architecture](#-architecture)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [API Integration](#-api-integration)
- [Design Aesthetics](#-design-aesthetics)
- [Deployment](#-deployment)
- [Related Repositories](#-related-repositories)

---

## 🧭 What Is This Repository?

This is the **primary web control interface** for the REX-47 autonomous platform. Acting as a central "Robot Operations Center," this React/Vite web application provides operators with a comprehensive, high-fidelity, data-dense view of the system's operational status.

**Key Highlights:**
- ✅ **Premium Glassmorphic Design:** A highly immersive dark-mode UI with smooth micro-animations.
- ✅ **12-Section Telemetry Grid:** A robust layout visualizing system health, sensors, and state.
- ✅ **Real-Time WebSockets:** Live streaming of robot state, joint data, and AI perception.
- ✅ **Redux State Management:** Deterministic UI updates based on a single source of truth.
- ✅ **Component-Driven Architecture:** Highly modular UI components and reusable widgets.

---

## 🏗️ Architecture

### Directory Structure

```
03-rex-web-dashbaord/
├── src/
│   ├── api/                  ← Axios configurations and interceptors
│   ├── assets/               ← Static images and branding assets
│   ├── components/           ← Reusable UI elements (Buttons, GlassCards)
│   ├── config/               ← Environment variable wrappers
│   ├── hooks/                ← Custom React hooks
│   ├── pages/
│   │   ├── auth/             ← Login, Register, Forgot Password
│   │   ├── common/           ← Landing, Contact, Blog, Features
│   │   └── protected/        ← Dashboard, Robot Monitoring, AI Perception
│   ├── store/                ← Redux store slices (Auth, RobotState)
│   ├── styles/               ← Global CSS and Tailwind directives
│   ├── App.jsx               ← React Router configuration
│   └── main.jsx              ← React DOM entry point
├── tailwind.config.js        ← Tailwind theme settings
├── vite.config.js            ← Vite builder configuration
└── .env.example              ← Environment variables template
```

---

## 🎨 Features

### 🌍 **Public Pages**

| Page | Description |
|------|-------------|
| **Home** | High-fidelity landing page with animated hero sections showcasing REX-47 capabilities. |
| **Features** | Grid breakdown of the robot's hardware and software capabilities. |
| **Blog** | Detail-oriented blog reading modes with rich imagery, documenting system updates. |
| **Gallery** | Masonry-style gallery of the hardware build process and operations. |

### 🔐 **Authentication Flows**

| Component | Security & Validation |
|-----------|-----------------------|
| **Login/Register** | Secure JWT-based authentication forms with robust client-side validation. |
| **Password Reset** | Integrated OTP and token-based password recovery flows. |

### 🎛️ **Robot Operations Center (Dashboard)**

| Module | Description |
|--------|-------------|
| **Telemetry Grid** | 12-section layout displaying CPU, Memory, battery, and connectivity metrics. |
| **Sensor Fusion** | Real-time visualizers for LiDAR, IMU, and joint encodings. |
| **AI Perception** | Overlay showing computer vision bounding boxes and detected entities. |
| **Manual Control** | Secure fallback joystick controls for teleoperation over WebSocket. |
| **Task Queue** | Interface for scheduling autonomous patrol or manipulation routines. |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- **Docker** (Optional, for containerized execution)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/thathsarabandara/03-rex-web-dashbaord.git
cd 03-rex-web-dashbaord

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
```

### Environment Configuration

In your `.env` file, ensure the following endpoints point to the REX-47 API Gateway:

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_WS_URL=ws://localhost:5000
VITE_APP_NAME=REX-47 Dashboard
```

### Running the Application

```bash
# Development server (hot module reload)
npm run dev

# Open browser: http://localhost:5173
```

---

## 🔌 API Integration

The dashboard communicates heavily with the backend through centralized Axios instances and WebSockets:
- **Axios Interceptors:** Automatically attaches JWT Bearer tokens to all requests and handles 401 Unauthorized errors by refreshing the session or redirecting to login.
- **WebSocket Streaming:** Uses Redux Thunks to subscribe to robot telemetry streams, dispatching actions to update the UI at 60 FPS without React re-render lag.

---

## 🎬 Design Aesthetics

The interface is built to evoke a "wow" factor:
- **Glassmorphism:** Heavy use of `backdrop-blur` and translucent RGBA backgrounds over organic gradient meshes.
- **Dynamic Micro-animations:** Buttons and cards feature hover states, scaling, and subtle color shifts powered by Tailwind's `transition` utilities.
- **Typography:** Uses modern fonts (Inter/Outfit) for exceptional readability in high-density data views.

---

## 📦 Deployment

### Build for Production

```bash
npm run build
```

This generates a highly optimized `dist/` bundle ready for deployment on Vercel, Netlify, or standard NGINX servers.

### Dockerized Execution

This service is part of the `docker-compose` ecosystem:

```bash
docker compose up --build rex-web-dashboard
```

---

## 🔗 Related Repositories

- [01-rex-architecture](../01-rex-architecture) — REX-47 System Architecture
- [04-rex-mobile-app](../04-rex-mobile-app) — REX-47 Mobile App
- [05-rex-api-gateway](../05-rex-api-gateway) — REX-47 API Gateway
- [06-rex-auth-service](../06-rex-auth-service) — REX-47 Auth Service

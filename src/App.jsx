import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateToken } from './store/authSlice';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/common/Home';
import About from './pages/common/About';
import Features from './pages/common/Features';
import Architecture from './pages/common/Architecture';
import Roadmap from './pages/common/Roadmap';
import Gallery from './pages/common/Gallery';
import Skills from './pages/common/Skills';
import Blog from './pages/common/Blog';
import Repositories from './pages/common/Repositories';
import Contact from './pages/common/Contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/protected/Dashboard';
import Profile from './pages/protected/Profile';
import RobotControl from './pages/protected/RobotControl';
import RobotMonitoring from './pages/protected/RobotMonitoring';
import SmartHome from './pages/protected/SmartHome';
import AIPerception from './pages/protected/AIPerception';
import Settings from './pages/protected/Settings';
import Help from './pages/protected/Help';

// Protected Route Component
function ProtectedRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

// Dashboard Layout with Sidebar
function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    // Validate token on app load
    dispatch(validateToken());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Home />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/about" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <About />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/features" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Features />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/architecture" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Architecture />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/roadmap" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Roadmap />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/gallery" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Gallery />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/skills" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Skills />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/blog" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Blog />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/repositories" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Repositories />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/contact" element={
          <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
              <Contact />
            </main>
            <Footer />
          </div>
        } />

        {/* Protected Routes with Dashboard Sidebar */}
        <Route path="/dashboard" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          </ProtectedRoute>
        } />
        <Route path="/robot-control" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout>
              <RobotControl />
            </DashboardLayout>
          </ProtectedRoute>
        } />
        <Route path="/robot-monitoring" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout>
              <RobotMonitoring />
            </DashboardLayout>
          </ProtectedRoute>
        } />
        <Route path="/smart-home" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout>
              <SmartHome />
            </DashboardLayout>
          </ProtectedRoute>
        } />
        <Route path="/ai-perception" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout>
              <AIPerception />
            </DashboardLayout>
          </ProtectedRoute>
        } />
        <Route path="/settings" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout>
              <Settings />
            </DashboardLayout>
          </ProtectedRoute>
        } />
        <Route path="/help" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardLayout>
              <Help />
            </DashboardLayout>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;

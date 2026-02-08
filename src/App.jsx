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

function ProtectedRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

// Dashboard Layout with Sidebar
function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 transition-all duration-300">
        <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
          <Header />
        </div>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
        <footer className="bg-white border-t border-gray-200 shadow-sm flex-shrink-0">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200">
        <Footer />
      </footer>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(validateToken());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
        <Route path="/register" element={<PublicLayout><Register /></PublicLayout>} />
        <Route path="/forgot-password" element={<PublicLayout><ForgotPassword /></PublicLayout>} />
        <Route path="/reset-password" element={<PublicLayout><ResetPassword /></PublicLayout>} />
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/features" element={<PublicLayout><Features /></PublicLayout>} />
        <Route path="/architecture" element={<PublicLayout><Architecture /></PublicLayout>} />
        <Route path="/roadmap" element={<PublicLayout><Roadmap /></PublicLayout>} />
        <Route path="/gallery" element={<PublicLayout><Gallery /></PublicLayout>} />
        <Route path="/skills" element={<PublicLayout><Skills /></PublicLayout>} />
        <Route path="/blog" element={<PublicLayout><Blog /></PublicLayout>} />
        <Route path="/repositories" element={<PublicLayout><Repositories /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
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

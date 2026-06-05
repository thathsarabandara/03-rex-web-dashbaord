import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateToken } from './store/authSlice';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/common/Home';
import Features from './pages/common/Features';
import Gallery from './pages/common/Gallery';
import Blog from './pages/common/Blog';
import BlogPost from './pages/common/BlogPost';
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
    <div className="flex min-h-screen bg-slate-50 relative z-0 overflow-hidden font-sans selection:bg-brand-accent/30">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-accent/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute inset-0 pattern-dots opacity-50 pointer-events-none z-0"></div>

      <div className="flex-shrink-0 z-20 sticky top-0 h-screen">
        <Sidebar />
      </div>
      
      <div className="flex flex-col flex-1 transition-all duration-300 h-screen overflow-hidden relative z-10">
        <main className="flex-1 overflow-y-auto p-6 sm:p-10 scroll-smooth">
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative z-0">
      <div className="fixed inset-0 pattern-dots opacity-50 pointer-events-none z-0"></div>
      <Header />
      <main className="flex-1 pt-28 relative z-10">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200 relative z-10">
        <Footer />
      </footer>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    // Only validate token if one exists
    if (localStorage.getItem('authToken')) {
      dispatch(validateToken());
    }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
        <Route path="/register" element={<PublicLayout><Register /></PublicLayout>} />
        <Route path="/forgot-password" element={<PublicLayout><ForgotPassword /></PublicLayout>} />
        <Route path="/reset-password" element={<PublicLayout><ResetPassword /></PublicLayout>} />
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/features" element={<PublicLayout><Features /></PublicLayout>} />
        <Route path="/gallery" element={<PublicLayout><Gallery /></PublicLayout>} />
        <Route path="/blog" element={<PublicLayout><Blog /></PublicLayout>} />
        <Route path="/blog/:slug" element={<PublicLayout><BlogPost /></PublicLayout>} />
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

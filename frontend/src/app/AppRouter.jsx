import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from '../components/routing/ProtectedRoute.jsx';
import Sidebar from '../components/layout/Sidebar.jsx';
import Navbar from '../components/layout/Navbar.jsx';
import { Login, CompleteProfile } from '../features/auth';
import { DashboardHome } from '../features/dashboard';
import { UsersManager } from '../features/users';
import { ResourcesManager } from '../features/cubicles';
import { LoansManager } from '../features/loans';
import { Reports } from '../features/reports';
import { useAuthContext } from '../features/auth/context/AuthContext.jsx';
import Landing from '../features/public/pages/Landing.jsx';
import Profile from '../features/auth/pages/Profile.jsx';
import Footer from '../components/layout/Footer.jsx';

function AppLayout() {
  const { user, needsProfileCompletion, isLoading, role = 'student' } = useAuthContext();
  const location = useLocation();

  const restrictedForStudents = new Set(['/dashboard', '/users', '/loans', '/reports']);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        Cargando...
      </div>
    );
  }

  if (user && needsProfileCompletion && location.pathname !== '/complete-profile') {
    return <Navigate to="/complete-profile" replace />;
  }

  if (user && !needsProfileCompletion && location.pathname === '/complete-profile') {
    return <Navigate to="/dashboard" replace />;
  }

  if (user && location.pathname === '/') {
    return <Navigate to="/dashboard" replace />;
  }

  if (user && role === 'student' && restrictedForStudents.has(location.pathname)) {
    return <Navigate to="/resources" replace />;
  }

  return (
    <div className={user ? 'app-shell' : 'app-shell app-shell--public'}>
      {user && !needsProfileCompletion && <Sidebar />}
      {user && !needsProfileCompletion && <Navbar />}
      <main className={user && !needsProfileCompletion ? 'main-content' : undefined}>
        <div className={user && !needsProfileCompletion ? 'page-content-wrapper' : undefined}>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="dashboard" element={<DashboardHome />} />
              <Route path="profile" element={<Profile />} />
              <Route path="users" element={<UsersManager />} />
              <Route path="resources" element={<ResourcesManager />} />
              <Route path="loans" element={<LoansManager />} />
              <Route path="reports" element={<Reports />} />
              <Route path="complete-profile" element={<CompleteProfile />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        {user && !needsProfileCompletion && <Footer />}
      </main>
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

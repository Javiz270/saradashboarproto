import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../components/routing/ProtectedRoute.jsx';
import Sidebar from '../components/layout/Sidebar.jsx';
import Navbar from '../components/layout/Navbar.jsx';
import { Login } from '../features/auth';
import { DashboardHome } from '../features/dashboard';
import { UsersManager } from '../features/users';
import { ResourcesManager } from '../features/cubicles';
import { LoansManager } from '../features/loans';
import { Reports } from '../features/reports';
import { useAuth } from '../features/auth/hooks/useAuth.js';

function AppLayout() {
  const { user } = useAuth();

  return (
    <div className={user ? 'app-shell' : 'app-shell app-shell--public'}>
      {user && <Sidebar />}
      {user && <Navbar />}
      <main className={user ? 'main-content' : undefined}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route index element={<DashboardHome />} />
            <Route path="users" element={<UsersManager />} />
            <Route path="resources" element={<ResourcesManager />} />
            <Route path="loans" element={<LoansManager />} />
            <Route path="reports" element={<Reports />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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

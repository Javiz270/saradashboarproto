import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../features/auth/hooks/useAuth.js';

const STAFF_PATHS = ['/users', '/loans', '/reports'];

export default function ProtectedRoute() {
  const { user, isLoading, role = 'student' } = useAuth();

  if (isLoading) {
    return (
      <div className="app-loading">
        <p>Cargando...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const pathname = window.location.pathname;
  if (role === 'student' && STAFF_PATHS.includes(pathname)) {
    return <Navigate to="/resources" replace />;
  }

  return <Outlet />;
}

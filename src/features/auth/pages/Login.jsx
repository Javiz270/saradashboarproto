import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GoogleLoginButton from '../components/GoogleLoginButton.jsx';
import { useAuth } from '../hooks/useAuth.js';

export default function Login() {
  const { t } = useTranslation();
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="app-loading"><p>{t('common.loading')}</p></div>;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <h1>S.A.R.A.</h1>
          <p className="login-subtitle">{t('login.subtitle')}</p>
        </div>
        <p className="login-description">{t('login.description')}</p>
        <GoogleLoginButton />
      </div>
    </div>
  );
}

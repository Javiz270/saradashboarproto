import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GoogleLoginButton from '../components/GoogleLoginButton.jsx';
import { useAuthContext } from '../context/AuthContext.jsx';
import { FadeIn } from '../../../components/ui/animations/FadeIn.jsx';
import './Auth.css'; // Reuse styles from CompleteProfile

export default function Login() {
  const { t } = useTranslation();
  const { user, isLoading, loginWithEmail, signupWithEmail } = useAuthContext();
  
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [localError, setLocalError] = useState('');
  const [loadingForm, setLoadingForm] = useState(false);

  if (isLoading && !loadingForm) {
    return <div className="app-loading"><p>{t('common.loading')}</p></div>;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingForm(true);
    setLocalError('');
    try {
      if (isRegistering) {
        await signupWithEmail(email, password, firstName);
        // Alert that email confirmation might be needed depending on Supabase config
        alert('Registro exitoso. Revisa tu correo o inicia sesión.');
        setIsRegistering(false);
      } else {
        await loginWithEmail(email, password);
      }
    } catch (err) {
      setLocalError(err.message || 'Error en la autenticación.');
    } finally {
      setLoadingForm(false);
    }
  };

  return (
    <div className="login-page">
      <FadeIn direction="up" duration={0.6}>
        <div className="login-card auth-card" style={{ maxWidth: '400px', width: '100%' }}>
          <div className="login-brand">
            <h1>S.A.R.A.</h1>
            <p className="login-subtitle">{t('login.subtitle')}</p>
          </div>
          <p className="login-description">{t('login.description')}</p>
          
          {localError && <div className="auth-error" style={{marginBottom: '1rem', color: 'red'}}>{localError}</div>}

          <form onSubmit={handleSubmit} className="auth-form" style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem'}}>
            {isRegistering && (
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Nombre(s)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              </div>
            )}
            <div className="form-group">
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <button type="submit" disabled={loadingForm} style={{ padding: '0.75rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              {loadingForm ? 'Cargando...' : isRegistering ? 'Crear cuenta' : 'Ingresar con Correo'}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <button type="button" onClick={() => setIsRegistering(!isRegistering)} style={{ background: 'none', border: 'none', color: '#0070f3', cursor: 'pointer', textDecoration: 'underline' }}>
              {isRegistering ? '¿Ya tienes cuenta? Ingresa aquí' : '¿No tienes cuenta? Regístrate'}
            </button>
          </div>

          <hr style={{ margin: '1.5rem 0', border: 'none', borderTop: '1px solid #eee' }} />
          
          <GoogleLoginButton />
        </div>
      </FadeIn>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from '../../../components/ui/animations/FadeIn.jsx';

export default function Landing() {
  return (
    <div className="landing-page">
      <FadeIn direction="down" delay={0.1}>
        <header className="landing-nav">
          <div className="landing-brand">S.A.R.A.</div>
          <div className="landing-nav__actions">
            <Link className="btn-secondary" to="/login">Login</Link>
            <Link className="btn-primary" to="/login">Registrarse</Link>
          </div>
        </header>
      </FadeIn>

      <main className="landing-hero">
        <StaggerContainer delay={0.2} staggerDelay={0.15} className="landing-hero__content">
          <StaggerItem>
            <p className="landing-kicker">Sistema de Acceso y Registro Automatizado</p>
          </StaggerItem>
          <StaggerItem>
            <h1>Bienvenido a S.A.R.A.</h1>
          </StaggerItem>
          <StaggerItem>
            <p>
              Plataforma para gestionar cubículos, préstamos, usuarios y reportes del Learning Commons.
              Inicia sesión para continuar o crea tu cuenta institucional.
            </p>
          </StaggerItem>
          <StaggerItem className="landing-hero__actions">
            <Link className="btn-primary" to="/login">Entrar</Link>
            <Link className="btn-secondary" to="/login">Crear cuenta</Link>
          </StaggerItem>
        </StaggerContainer>
      </main>

      <FadeIn direction="up" delay={0.4}>
        <footer className="landing-footer">
          <span>© 2026 S.A.R.A.</span>
          <span>Learning Commons</span>
        </footer>
      </FadeIn>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-logo">S.A.R.A.</span>
          <span className="footer-divider">|</span>
          <span className="footer-text">Sistema de Acceso y Registro Automatizado</span>
        </div>
        <div className="footer-right">
          <span>&copy; {new Date().getFullYear()} Learning Commons. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}

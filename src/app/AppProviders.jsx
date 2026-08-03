import { AuthProvider } from '../features/auth';
import { ThemeProvider } from '../theme/ThemeContext.jsx';

export default function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}

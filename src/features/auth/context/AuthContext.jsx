import { createContext, useContext, useMemo } from 'react';
import { useGoogleAuth } from '../../../apis/googleAuth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { data, loading, error, login, logout } = useGoogleAuth();

  const value = useMemo(
    () => ({
      user: data.user,
      session: data.session,
      isLoading: loading,
      error,
      loginWithGoogle: login,
      logout,
    }),
    [data.user, data.session, loading, error, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext debe usarse dentro de AuthProvider');
  }
  return context;
}

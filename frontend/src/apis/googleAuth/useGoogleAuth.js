import { useCallback, useEffect, useState } from 'react';
import {
  getSession,
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
  signOut,
  mapSupabaseUser,
} from './googleAuth.service.js';
import { supabaseClient } from './googleAuth.client.js';

/**
 * Hook de bajo nivel para operaciones de autenticación con Google/Supabase.
 * Consumido por AuthContext en /features/auth.
 */
export function useGoogleAuth() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function initSession() {
      try {
        const currentSession = await getSession();
        if (!mounted) return;
        setSession(currentSession);
        setUser(mapSupabaseUser(currentSession?.user ?? null));
      } catch (err) {
        if (mounted) setError(err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    initSession();

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setUser(mapSupabaseUser(newSession?.user ?? null));
      setLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const login = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithGoogle();
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  }, []);

  const loginWithEmail = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { signInWithEmail } = await import('./googleAuth.service.js');
      const data = await signInWithEmail(email, password);
      if (data?.session) {
        setSession(data.session);
        setUser(mapSupabaseUser(data.session.user));
      }
      return data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const signupWithEmail = useCallback(async (email, password, firstName) => {
    setLoading(true);
    setError(null);
    try {
      const { signUpWithEmail } = await import('./googleAuth.service.js');
      const data = await signUpWithEmail(email, password, firstName);
      if (data?.session) {
        setSession(data.session);
        setUser(mapSupabaseUser(data.session.user));
      }
      return data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut();
      setSession(null);
      setUser(null);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data: { session, user },
    loading,
    error,
    login,
    loginWithEmail,
    signupWithEmail,
    logout,
  };
}

import { supabaseClient, GOOGLE_OAUTH_PROVIDER } from './googleAuth.client.js';

/**
 * Inicia sesión con Google OAuth vía Supabase.
 * Redirige al flujo OAuth de Google.
 */
export async function signInWithGoogle() {
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: GOOGLE_OAUTH_PROVIDER,
    options: {
      redirectTo: `${window.location.origin}/`,
    },
  });

  if (error) throw error;
  return data;
}

/**
 * Inicia sesión con Email y Contraseña.
 */
export async function signInWithEmail(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

/**
 * Registra un nuevo usuario con Email y Contraseña.
 */
export async function signUpWithEmail(email, password, firstName) {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        given_name: firstName,
      },
    },
  });
  if (error) throw error;
  return data;
}

/**
 * Cierra la sesión activa del usuario.
 */
export async function signOut() {
  const { error } = await supabaseClient.auth.signOut();
  if (error) throw error;
}

/**
 * Obtiene la sesión actual del usuario autenticado.
 * @returns {Promise<import('@supabase/supabase-js').Session|null>}
 */
export async function getSession() {
  const { data, error } = await supabaseClient.auth.getSession();
  if (error) throw error;
  return data.session;
}

/**
 * Normaliza el usuario de Supabase a un objeto plano para la app.
 * @param {import('@supabase/supabase-js').User|null} user
 */
export function mapSupabaseUser(user) {
  if (!user) return null;

  return {
    id: user.id,
    email: user.email,
    name:
      user.user_metadata?.full_name ??
      user.user_metadata?.name ??
      user.email?.split('@')[0] ??
      'Usuario',
    avatarUrl: user.user_metadata?.avatar_url ?? null,
  };
}

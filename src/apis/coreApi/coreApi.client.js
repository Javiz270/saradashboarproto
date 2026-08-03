import axios from 'axios';

const BASE_URL = import.meta.env.VITE_CORE_API_URL ?? 'http://localhost:8000/api';

/**
 * Instancia axios para la API REST propia (FastAPI).
 *
 * Interceptor de Bearer token (comentado — conectar con AuthContext):
 *
 * ```js
 * import { supabaseClient } from '../googleAuth/googleAuth.client.js';
 *
 * coreApiClient.interceptors.request.use(async (config) => {
 *   const { data: { session } } = await supabaseClient.auth.getSession();
 *   if (session?.access_token) {
 *     config.headers.Authorization = `Bearer ${session.access_token}`;
 *   }
 *   return config;
 * });
 * ```
 *
 * Alternativa usando AuthContext directamente en un wrapper:
 * ```js
 * // En un hook o provider, pasar getAccessToken desde AuthContext
 * coreApiClient.interceptors.request.use(async (config) => {
 *   const token = await getAccessToken();
 *   if (token) config.headers.Authorization = `Bearer ${token}`;
 *   return config;
 * });
 * ```
 */
export const coreApiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 15000,
});

coreApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.detail ??
      error.response?.data?.message ??
      error.message;
    return Promise.reject(new Error(message));
  },
);

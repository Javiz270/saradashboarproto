/** URL base del servicio UI Avatars (sin autenticación ni API key). */
export const UI_AVATARS_BASE_URL = 'https://ui-avatars.com/api/';

/**
 * Construye la URL completa para un avatar.
 * @param {Record<string, string>} params
 */
export function buildAvatarUrl(params) {
  const searchParams = new URLSearchParams(params);
  return `${UI_AVATARS_BASE_URL}?${searchParams.toString()}`;
}

import { useMemo } from 'react';
import { getAvatarUrl } from './uiAvatars.service.js';

/**
 * Memoiza la URL de avatar para usar directamente en src de <img>.
 * No realiza fetch — la API se consume vía atributo src.
 * @param {string} nombreCompleto
 * @param {{ background?: string, color?: string }} [opciones]
 */
export function useUiAvatar(nombreCompleto, opciones = {}) {
  const data = useMemo(
    () => getAvatarUrl(nombreCompleto, opciones),
    [nombreCompleto, opciones.background, opciones.color],
  );

  return { data, loading: false, error: null };
}

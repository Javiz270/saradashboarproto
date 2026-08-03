import { buildAvatarUrl } from './uiAvatars.client.js';

const DEFAULT_OPTIONS = {
  background: '1a5276',
  color: 'ffffff',
  size: '128',
  bold: 'true',
};

/**
 * Genera la URL de avatar para un nombre completo.
 * @param {string} nombreCompleto
 * @param {{ background?: string, color?: string, size?: string }} [opciones]
 * @returns {string}
 */
export function getAvatarUrl(nombreCompleto, opciones = {}) {
  const name = nombreCompleto?.trim() || 'Usuario';
  const merged = { ...DEFAULT_OPTIONS, ...opciones, name };

  return buildAvatarUrl(
    Object.fromEntries(
      Object.entries(merged).map(([key, value]) => [key, String(value)]),
    ),
  );
}

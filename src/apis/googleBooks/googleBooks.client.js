const BASE_URL = 'https://www.googleapis.com/books/v1';
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY ?? '';

/**
 * Cliente fetch para Google Books API.
 * @param {string} path - Ruta relativa (ej. /volumes?q=...)
 * @param {RequestInit} [options]
 */
export async function googleBooksFetch(path, options = {}) {
  const separator = path.includes('?') ? '&' : '?';
  const url = `${BASE_URL}${path}${API_KEY ? `${separator}key=${API_KEY}` : ''}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Google Books API error ${response.status}: ${message}`);
  }

  return response.json();
}

import { googleBooksFetch } from './googleBooks.client.js';

/**
 * Busca libros por título, autor o palabra clave.
 * @param {string} query
 * @returns {Promise<Array<{ id: string, title: string, authors: string[], thumbnail: string|null, isbn: string|null }>>}
 */
export async function searchBooks(query) {
  if (!query?.trim()) return [];

  const data = await googleBooksFetch(`/volumes?q=${encodeURIComponent(query.trim())}`);

  return (data.items ?? []).map((item) => {
    const info = item.volumeInfo ?? {};
    const isbn =
      info.industryIdentifiers?.find((id) => id.type === 'ISBN_13')?.identifier ??
      info.industryIdentifiers?.find((id) => id.type === 'ISBN_10')?.identifier ??
      null;

    return {
      id: item.id,
      title: info.title ?? 'Sin título',
      authors: info.authors ?? [],
      thumbnail: info.imageLinks?.thumbnail ?? null,
      isbn,
    };
  });
}

/**
 * Obtiene un libro por ISBN.
 * @param {string} isbn
 */
export async function getBookByISBN(isbn) {
  if (!isbn?.trim()) return null;

  const data = await googleBooksFetch(`/volumes?q=isbn:${encodeURIComponent(isbn.trim())}`);
  const item = data.items?.[0];
  if (!item) return null;

  const info = item.volumeInfo ?? {};
  return {
    id: item.id,
    title: info.title ?? 'Sin título',
    authors: info.authors ?? [],
    thumbnail: info.imageLinks?.thumbnail ?? null,
    isbn,
    description: info.description ?? null,
    publishedDate: info.publishedDate ?? null,
  };
}

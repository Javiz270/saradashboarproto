import { useCallback, useState } from 'react';
import { searchBooks, getBookByISBN } from './googleBooks.service.js';

/**
 * Hook para consumir Google Books API desde componentes de /features.
 */
export function useGoogleBooks() {
  const [data, setData] = useState([]);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (query) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchBooks(query);
      setData(results);
      return results;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchByISBN = useCallback(async (isbn) => {
    setLoading(true);
    setError(null);
    try {
      const result = await getBookByISBN(isbn);
      setBook(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    book,
    loading,
    error,
    search,
    fetchByISBN,
  };
}

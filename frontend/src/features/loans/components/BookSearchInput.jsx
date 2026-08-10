import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGoogleBooks } from '../../../apis/googleBooks';

export default function BookSearchInput({ onSelect }) {
  const { t } = useTranslation();
  const { search, loading } = useGoogleBooks();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();
    if (!query.trim()) return;
    const books = await search(query);
    setResults(books);
  }

  return (
    <div className="book-search">
      <form onSubmit={handleSearch} className="book-search__form">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('loans.searchPlaceholder')}
        />
        <button type="submit" disabled={loading}>
          {loading ? t('common.loading') : t('loans.search')}
        </button>
      </form>
      {results.length > 0 && (
        <ul className="book-search__results">
          {results.map((book) => (
            <li key={book.id}>
              <button type="button" onClick={() => onSelect?.(book)}>
                {book.title} — {book.authors.join(', ') || t('loans.unknownAuthor')}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

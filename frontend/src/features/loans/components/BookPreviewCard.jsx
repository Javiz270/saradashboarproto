import { useTranslation } from 'react-i18next';

export default function BookPreviewCard({ book, canReserve = false, onReserve }) {
  const { t } = useTranslation();

  if (!book) return null;

  return (
    <article className="book-preview-card">
      {book.thumbnail && (
        <img src={book.thumbnail} alt={book.title} className="book-preview-card__cover" />
      )}
      <div className="book-preview-card__info">
        <h3>{book.title}</h3>
        <p>{book.authors?.join(', ') || t('loans.unknownAuthor')}</p>
        {book.isbn && <p className="book-preview-card__isbn">ISBN: {book.isbn}</p>}
        {canReserve && (
          <button
            type="button"
            className="btn-primary"
            style={{ marginTop: '1rem' }}
            onClick={() => onReserve?.(book)}
          >
            Reservar libro
          </button>
        )}
      </div>
    </article>
  );
}

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BookSearchInput from '../components/BookSearchInput.jsx';
import BookPreviewCard from '../components/BookPreviewCard.jsx';
import LoanTable from '../components/LoanTable.jsx';
import { useLoans } from '../hooks/useLoans.js';

export default function LoansManager() {
  const { t } = useTranslation();
  const { data: loans, loading } = useLoans();
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="page">
      <header className="page-header">
        <h1>{t('loans.title')}</h1>
        <p>{t('loans.description')}</p>
      </header>

      <section className="loans-section">
        <h2>{t('loans.newLoan')}</h2>
        <BookSearchInput onSelect={setSelectedBook} />
        <BookPreviewCard book={selectedBook} />
      </section>

      <section className="loans-section">
        <h2>{t('loans.activeLoans')}</h2>
        <LoanTable loans={loans} loading={loading} />
      </section>
    </div>
  );
}

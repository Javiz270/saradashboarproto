import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BookSearchInput from '../components/BookSearchInput.jsx';
import BookPreviewCard from '../components/BookPreviewCard.jsx';
import LoanTable from '../components/LoanTable.jsx';
import { useLoans } from '../hooks/useLoans.js';
import { useAuthContext } from '../../auth/context/AuthContext.jsx';
import { loansService } from '../../../apis/coreApi';

export default function LoansManager() {
  const { t } = useTranslation();
  const { profile } = useAuthContext();
  const { data: loans, loading, refetch } = useLoans();
  const [selectedBook, setSelectedBook] = useState(null);
  const [returningLoanId, setReturningLoanId] = useState(null);
  const canManageLoans = profile?.role === 'staff' || profile?.role === 'admin';

  const handleReserveBook = async (book) => {
    try {
      await loansService.reserveBook({
        title: book.title,
        authors: book.authors ?? [],
        isbn: book.isbn ?? null,
        cover_url: book.thumbnail ?? null,
        user_id: profile?.id,
      });
      setSelectedBook(null);
      await refetch();
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleReturnLoan = async (loanId) => {
    try {
      setReturningLoanId(loanId);
      await loansService.returnLoan(loanId);
      await refetch();
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setReturningLoanId(null);
    }
  };

  return (
    <div className="page">
      <header className="page-header">
        <h1>{t('loans.title')}</h1>
        <p>{t('loans.description')}</p>
      </header>

      <section className="loans-section">
        <h2>{t('loans.newLoan')}</h2>
        <BookSearchInput onSelect={setSelectedBook} />
        <BookPreviewCard book={selectedBook} canReserve={canManageLoans} onReserve={handleReserveBook} />
      </section>

      <section className="loans-section">
        <h2>{t('loans.activeLoans')}</h2>
        <LoanTable loans={loans} loading={loading} onReturnLoan={handleReturnLoan} returningLoanId={returningLoanId} />
      </section>
    </div>
  );
}

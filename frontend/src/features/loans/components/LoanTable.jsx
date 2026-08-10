import { useTranslation } from 'react-i18next';
import DataTable from '../../../components/ui/DataTable.jsx';

export default function LoanTable({ loans = [], loading = false, onReturnLoan, returningLoanId }) {
  const { t } = useTranslation();

  const columns = [
    { key: 'bookTitle', label: t('loans.table.book') },
    { key: 'userName', label: t('loans.table.user') },
    { key: 'loanDate', label: t('loans.table.loanDate') },
    { key: 'dueDate', label: t('loans.table.dueDate') },
    { key: 'status', label: t('loans.table.status') },
    {
      key: 'actions',
      label: t('loans.table.actions'),
      render: (_value, row) => (
        row.status === 'active' ? (
          <button
            type="button"
            onClick={() => onReturnLoan?.(row.id)}
            disabled={returningLoanId === row.id}
            style={{ padding: '0.45rem 0.8rem', border: 'none', borderRadius: '8px', background: '#c0392b', color: '#fff', cursor: 'pointer' }}
          >
            {returningLoanId === row.id ? t('common.loading') : t('loans.table.return')}
          </button>
        ) : (
          <span>{t('loans.table.returned')}</span>
        )
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={loans}
      loading={loading}
      emptyMessage={t('loans.table.empty')}
    />
  );
}

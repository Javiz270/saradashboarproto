import { useTranslation } from 'react-i18next';
import DataTable from '../../../components/ui/DataTable.jsx';

export default function LoanTable({ loans = [], loading = false }) {
  const { t } = useTranslation();

  const columns = [
    { key: 'bookTitle', label: t('loans.table.book') },
    { key: 'userName', label: t('loans.table.user') },
    { key: 'loanDate', label: t('loans.table.loanDate') },
    { key: 'dueDate', label: t('loans.table.dueDate') },
    { key: 'status', label: t('loans.table.status') },
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

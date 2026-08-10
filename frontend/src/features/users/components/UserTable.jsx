import { useTranslation } from 'react-i18next';
import DataTable from '../../../components/ui/DataTable.jsx';
import UserCard from '../../../components/ui/UserCard.jsx';

export default function UserTable({ users = [], loading = false }) {
  const { t } = useTranslation();

  const columns = [
    { key: 'avatar', label: '', render: (_, row) => <UserCard name={row.name} compact /> },
    { key: 'name', label: t('users.table.name') },
    { key: 'email', label: t('users.table.email') },
    { key: 'role', label: t('users.table.role') },
    { key: 'status', label: t('users.table.status') },
  ];

  return (
    <DataTable
      columns={columns}
      data={users}
      loading={loading}
      emptyMessage={t('users.table.empty')}
    />
  );
}

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PrimaryButton from '../../../components/ui/buttons/PrimaryButton.jsx';
import UserTable from '../components/UserTable.jsx';
import UserFormModal from '../components/UserFormModal.jsx';
import { useUsers } from '../hooks/useUsers.js';

export default function UsersManager() {
  const { t } = useTranslation();
  const { data: users, loading } = useUsers();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="page">
      <header className="page-header page-header--actions">
        <div>
          <h1>{t('users.title')}</h1>
          <p>{t('users.description')}</p>
        </div>
        <PrimaryButton type="button" onClick={() => setModalOpen(true)}>
          {t('users.addUser')}
        </PrimaryButton>
      </header>

      <UserTable users={users} loading={loading} />

      <UserFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={() => setModalOpen(false)}
      />
    </div>
  );
}

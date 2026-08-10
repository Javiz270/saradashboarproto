import { useTranslation } from 'react-i18next';
import PrimaryButton from '../../../components/ui/buttons/PrimaryButton.jsx';

export default function UserFormModal({ isOpen, onClose, onSave }) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    onSave?.({
      name: formData.get('name'),
      email: formData.get('email'),
      role: formData.get('role'),
    });
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <h2>{t('users.form.title')}</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-field">
            {t('users.form.name')}
            <input name="name" type="text" required />
          </label>
          <label className="form-field">
            {t('users.form.email')}
            <input name="email" type="email" required />
          </label>
          <label className="form-field">
            {t('users.form.role')}
            <select name="role" defaultValue="student">
              <option value="student">{t('users.roles.student')}</option>
              <option value="staff">{t('users.roles.staff')}</option>
              <option value="admin">{t('users.roles.admin')}</option>
            </select>
          </label>
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              {t('common.cancel')}
            </button>
            <PrimaryButton type="submit">{t('common.save')}</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}

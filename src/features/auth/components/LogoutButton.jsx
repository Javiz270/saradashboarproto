import { useTranslation } from 'react-i18next';
import IconButton from '../../../components/ui/buttons/IconButton.jsx';
import { useAuth } from '../hooks/useAuth.js';

export default function LogoutButton() {
  const { t } = useTranslation();
  const { logout, isLoading } = useAuth();

  return (
    <IconButton
      type="button"
      onClick={logout}
      disabled={isLoading}
      title={t('navbar.logout')}
      aria-label={t('navbar.logout')}
    >
      ⎋
    </IconButton>
  );
}

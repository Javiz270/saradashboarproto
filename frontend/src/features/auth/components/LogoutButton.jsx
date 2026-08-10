import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import IconButton from '../../../components/ui/buttons/IconButton.jsx';
import { useAuth } from '../hooks/useAuth.js';

export default function LogoutButton() {
  const { t } = useTranslation();
  const { logout, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/', { replace: true });
  };

  return (
    <IconButton
      type="button"
      onClick={handleLogout}
      disabled={isLoading}
      title={t('navbar.logout')}
      aria-label={t('navbar.logout')}
    >
      ⎋
    </IconButton>
  );
}

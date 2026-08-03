import { useTranslation } from 'react-i18next';
import PrimaryButton from '../../../components/ui/buttons/PrimaryButton.jsx';
import { useAuth } from '../hooks/useAuth.js';

export default function GoogleLoginButton() {
  const { t } = useTranslation();
  const { loginWithGoogle, isLoading } = useAuth();

  return (
    <PrimaryButton
      type="button"
      onClick={loginWithGoogle}
      disabled={isLoading}
      className="google-login-btn"
    >
      {isLoading ? t('common.loading') : t('login.googleButton')}
    </PrimaryButton>
  );
}

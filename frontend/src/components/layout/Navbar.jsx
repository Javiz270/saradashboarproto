import { useTranslation } from 'react-i18next';
import { useAuth } from '../../features/auth/hooks/useAuth.js';
import { useUiAvatar } from '../../apis/uiAvatars';
import LanguageSwitcher from '../ui/LanguageSwitcher.jsx';
import ThemeToggle from '../ui/ThemeToggle.jsx';
import LogoutButton from '../../features/auth/components/LogoutButton.jsx';

export default function Navbar() {
  const { t } = useTranslation();
  const { user, role } = useAuth();
  const { data: avatarUrl } = useUiAvatar(user?.name ?? 'Usuario');

  if (!user) return null;

  return (
    <header className="navbar">
      <div className="navbar__title">
        <h2>{t('navbar.title')}</h2>
      </div>
      <div className="navbar__actions">
        <LanguageSwitcher />
        <ThemeToggle />
        <div className="navbar__user">
          <img
            src={user.avatarUrl ?? avatarUrl}
            alt={user.name}
            className="user-avatar user-avatar--sm"
            width={36}
            height={36}
          />
          <span className="navbar__user-name">{user.name}</span>
          <span className="navbar__user-role">{role}</span>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}

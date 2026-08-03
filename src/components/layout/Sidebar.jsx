import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../features/auth/hooks/useAuth.js';

const NAV_ITEMS = [
  { to: '/', labelKey: 'sidebar.dashboard', end: true },
  { to: '/users', labelKey: 'sidebar.users' },
  { to: '/resources', labelKey: 'sidebar.resources' },
  { to: '/loans', labelKey: 'sidebar.loans' },
  { to: '/reports', labelKey: 'sidebar.reports' },
];

export default function Sidebar() {
  const { t } = useTranslation();
  const { user } = useAuth();

  if (!user) return null;

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__logo">S.A.R.A.</span>
        <span className="sidebar__tagline">{t('sidebar.tagline')}</span>
      </div>
      <nav className="sidebar__nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link'
            }
          >
            {t(item.labelKey)}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

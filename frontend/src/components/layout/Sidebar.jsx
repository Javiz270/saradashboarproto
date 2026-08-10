import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../features/auth/hooks/useAuth.js';

const NAV_ITEMS = [
  { to: '/dashboard', labelKey: 'sidebar.dashboard', end: true, roles: ['student', 'staff', 'admin'] },
  { to: '/resources', labelKey: 'sidebar.resources', roles: ['student', 'staff', 'admin'] },
  { to: '/profile', labelKey: 'sidebar.profile', roles: ['student', 'staff', 'admin'] },
  { to: '/users', labelKey: 'sidebar.users', roles: ['staff', 'admin'] },
  { to: '/loans', labelKey: 'sidebar.loans', roles: ['staff', 'admin'] },
  { to: '/reports', labelKey: 'sidebar.reports', roles: ['staff', 'admin'] },
];

export default function Sidebar() {
  const { t } = useTranslation();
  const { user, role = 'student' } = useAuth();

  if (!user) return null;

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__logo">S.A.R.A.</span>
        <span className="sidebar__tagline">{t('sidebar.tagline')}</span>
      </div>
      <nav className="sidebar__nav">
        {NAV_ITEMS.filter((item) => item.roles.includes(role)).map((item) => (
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

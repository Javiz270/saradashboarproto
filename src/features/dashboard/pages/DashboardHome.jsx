import { useTranslation } from 'react-i18next';
import { useAuth } from '../../auth/hooks/useAuth.js';
import MetricCard from '../components/MetricCard.jsx';
import OccupancyPanel from '../components/OccupancyPanel.jsx';

/** Métricas estáticas — placeholder hasta conectar coreApi.reportsService */
const PLACEHOLDER_METRICS = {
  cubiclesOccupied: 18,
  cubiclesTotal: 24,
  activeLoans: 47,
  usersToday: 132,
};

export default function DashboardHome() {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <div className="page dashboard-page">
      <header className="page-header">
        <h1>{t('dashboard.greeting', { name: user?.name ?? t('dashboard.defaultUser') })}</h1>
        <p>{t('dashboard.welcome')}</p>
      </header>

      <div className="dashboard-grid">
        <MetricCard
          title={t('dashboard.metrics.cubicles')}
          value={`${PLACEHOLDER_METRICS.cubiclesOccupied}/${PLACEHOLDER_METRICS.cubiclesTotal}`}
          subtitle={t('dashboard.metrics.cubiclesSubtitle')}
          icon="🪑"
        />
        <MetricCard
          title={t('dashboard.metrics.loans')}
          value={PLACEHOLDER_METRICS.activeLoans}
          subtitle={t('dashboard.metrics.loansSubtitle')}
          icon="📚"
        />
        <MetricCard
          title={t('dashboard.metrics.usersToday')}
          value={PLACEHOLDER_METRICS.usersToday}
          subtitle={t('dashboard.metrics.usersTodaySubtitle')}
          icon="👥"
        />
      </div>

      <OccupancyPanel
        occupied={PLACEHOLDER_METRICS.cubiclesOccupied}
        total={PLACEHOLDER_METRICS.cubiclesTotal}
      />
    </div>
  );
}

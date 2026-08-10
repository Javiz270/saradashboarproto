import { useTranslation } from 'react-i18next';
import { useAuth } from '../../auth/hooks/useAuth.js';
import MetricCard from '../components/MetricCard.jsx';
import OccupancyPanel from '../components/OccupancyPanel.jsx';
import { useDashboardMetrics } from '../hooks/useDashboardMetrics.js';
import { FadeIn, StaggerContainer, StaggerItem } from '../../../components/ui/animations/FadeIn.jsx';

export default function DashboardHome() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { data: metrics, loading } = useDashboardMetrics();

  const cubiclesValue = loading
    ? t('common.loading')
    : `${metrics.cubiclesOccupied}/${metrics.cubiclesTotal}`;
  const loansValue = loading ? t('common.loading') : metrics.activeLoans;
  const usersValue = loading ? t('common.loading') : metrics.usersToday;

  return (
    <div className="page dashboard-page">
      <FadeIn direction="down" delay={0.1}>
        <header className="page-header">
          <h1>{t('dashboard.greeting', { name: user?.name ?? t('dashboard.defaultUser') })}</h1>
          <p>{t('dashboard.welcome')}</p>
        </header>
      </FadeIn>

      <StaggerContainer delay={0.2} staggerDelay={0.1} className="dashboard-grid">
        <StaggerItem>
          <MetricCard
            title={t('dashboard.metrics.cubicles')}
            value={cubiclesValue}
            subtitle={t('dashboard.metrics.cubiclesSubtitle')}
            icon="🪑"
          />
        </StaggerItem>
        <StaggerItem>
          <MetricCard
            title={t('dashboard.metrics.loans')}
            value={loansValue}
            subtitle={t('dashboard.metrics.loansSubtitle')}
            icon="📚"
          />
        </StaggerItem>
        <StaggerItem>
          <MetricCard
            title={t('dashboard.metrics.usersToday')}
            value={usersValue}
            subtitle={t('dashboard.metrics.usersTodaySubtitle')}
            icon="👥"
          />
        </StaggerItem>
      </StaggerContainer>

      <FadeIn direction="up" delay={0.5}>
        <OccupancyPanel
          occupied={metrics.cubiclesOccupied}
          total={metrics.cubiclesTotal}
        />
      </FadeIn>
    </div>
  );
}

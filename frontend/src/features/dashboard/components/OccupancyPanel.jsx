import { useTranslation } from 'react-i18next';

export default function OccupancyPanel({ occupied = 0, total = 0 }) {
  const { t } = useTranslation();
  const percentage = total > 0 ? Math.round((occupied / total) * 100) : 0;

  return (
    <section className="occupancy-panel">
      <h3>{t('dashboard.occupancyTitle')}</h3>
      <div className="occupancy-panel__bar">
        <div
          className="occupancy-panel__fill"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <p className="occupancy-panel__label">
        {t('dashboard.occupancyLabel', { occupied, total, percentage })}
      </p>
    </section>
  );
}

import { useTranslation } from 'react-i18next';
import CubicleStatusBadge from './CubicleStatusBadge.jsx';

export default function CubicleGrid({ cubicles = [], loading = false }) {
  const { t } = useTranslation();

  if (loading) {
    return <p className="loading-text">{t('common.loading')}</p>;
  }

  if (!cubicles.length) {
    return <p className="empty-text">{t('cubicles.empty')}</p>;
  }

  return (
    <div className="cubicle-grid">
      {cubicles.map((cubicle) => (
        <article key={cubicle.id ?? cubicle.code} className="cubicle-card">
          <h3>{cubicle.code ?? cubicle.name}</h3>
          <CubicleStatusBadge status={cubicle.status} />
          {cubicle.user && <p className="cubicle-card__user">{cubicle.user}</p>}
        </article>
      ))}
    </div>
  );
}

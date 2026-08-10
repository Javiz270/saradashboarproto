import { useTranslation } from 'react-i18next';
import CubicleGrid from '../components/CubicleGrid.jsx';
import { useRealTimeCubicles } from '../hooks/useRealTimeCubicles.js';

export default function ResourcesManager() {
  const { t } = useTranslation();
  const { data: cubicles, loading } = useRealTimeCubicles();

  return (
    <div className="page">
      <header className="page-header">
        <h1>{t('cubicles.title')}</h1>
        <p>{t('cubicles.description')}</p>
      </header>
      <CubicleGrid cubicles={cubicles} loading={loading} />
    </div>
  );
}

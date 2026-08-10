import { useTranslation } from 'react-i18next';

export default function ReportFilters({ filters, onChange, onApply }) {
  const { t } = useTranslation();

  function handleChange(field, value) {
    onChange?.({ ...filters, [field]: value });
  }

  return (
    <form
      className="report-filters"
      onSubmit={(e) => {
        e.preventDefault();
        onApply?.();
      }}
    >
      <label className="form-field">
        {t('reports.filters.from')}
        <input
          type="date"
          value={filters.from ?? ''}
          onChange={(e) => handleChange('from', e.target.value)}
        />
      </label>
      <label className="form-field">
        {t('reports.filters.to')}
        <input
          type="date"
          value={filters.to ?? ''}
          onChange={(e) => handleChange('to', e.target.value)}
        />
      </label>
      <label className="form-field">
        {t('reports.filters.type')}
        <select
          value={filters.type ?? 'all'}
          onChange={(e) => handleChange('type', e.target.value)}
        >
          <option value="all">{t('reports.filters.all')}</option>
          <option value="access">{t('reports.filters.access')}</option>
          <option value="loans">{t('reports.filters.loans')}</option>
          <option value="cubicles">{t('reports.filters.cubicles')}</option>
        </select>
      </label>
      <button type="submit" className="btn-secondary">
        {t('reports.filters.apply')}
      </button>
    </form>
  );
}

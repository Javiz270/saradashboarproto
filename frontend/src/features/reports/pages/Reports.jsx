import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReportFilters from '../components/ReportFilters.jsx';
import ExportButton from '../components/ExportButton.jsx';
import { useReports } from '../hooks/useReports.js';

export default function Reports() {
  const { t } = useTranslation();
  const { data, loading, fetchReports, exportReport } = useReports();
  const [filters, setFilters] = useState({ type: 'all' });

  async function handleApply() {
    await fetchReports(filters);
  }

  async function handleExport() {
    const blob = await exportReport(filters, 'csv');
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sara-report.csv';
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="page">
      <header className="page-header page-header--actions">
        <div>
          <h1>{t('reports.title')}</h1>
          <p>{t('reports.description')}</p>
        </div>
        <ExportButton onExport={handleExport} loading={loading} />
      </header>

      <ReportFilters filters={filters} onChange={setFilters} onApply={handleApply} />

      {data && (
        <pre className="report-preview">{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

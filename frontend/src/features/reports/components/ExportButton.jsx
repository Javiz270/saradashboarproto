import { useTranslation } from 'react-i18next';
import PrimaryButton from '../../../components/ui/buttons/PrimaryButton.jsx';

export default function ExportButton({ onExport, loading = false }) {
  const { t } = useTranslation();

  return (
    <PrimaryButton type="button" onClick={onExport} disabled={loading}>
      {loading ? t('common.loading') : t('common.export')}
    </PrimaryButton>
  );
}

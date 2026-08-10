import { useTranslation } from 'react-i18next';

const STATUS_CLASS = {
  available: 'badge--success',
  occupied: 'badge--danger',
  reserved: 'badge--warning',
  maintenance: 'badge--neutral',
};

export default function CubicleStatusBadge({ status = 'available' }) {
  const { t } = useTranslation();
  const className = STATUS_CLASS[status] ?? 'badge--neutral';

  return (
    <span className={`badge ${className}`}>
      {t(`cubicles.status.${status}`, { defaultValue: status })}
    </span>
  );
}

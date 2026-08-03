export default function MetricCard({ title, value, subtitle, icon }) {
  return (
    <article className="metric-card">
      <div className="metric-card__header">
        {icon && <span className="metric-card__icon" aria-hidden="true">{icon}</span>}
        <h3 className="metric-card__title">{title}</h3>
      </div>
      <p className="metric-card__value">{value}</p>
      {subtitle && <p className="metric-card__subtitle">{subtitle}</p>}
    </article>
  );
}

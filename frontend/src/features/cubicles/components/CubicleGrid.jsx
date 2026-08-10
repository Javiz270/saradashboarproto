import { useTranslation } from 'react-i18next';
import CubicleStatusBadge from './CubicleStatusBadge.jsx';
import { cubiclesService } from '../../../apis/coreApi';
import { useAuthContext } from '../../auth/context/AuthContext';

export default function CubicleGrid({ cubicles = [], loading = false, refetch }) {
  const { t } = useTranslation();
  const { profile } = useAuthContext();
  const isStaff = profile?.role === 'staff' || profile?.role === 'admin';

  if (loading) {
    return <p className="loading-text">{t('common.loading')}</p>;
  }

  if (!cubicles.length) {
    return <p className="empty-text">{t('cubicles.empty')}</p>;
  }

  const handleReserve = async (id) => {
    try {
      await cubiclesService.reserveCubicle({ cubicle_id: id, user_id: profile?.id });
      if (refetch) refetch();
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  const handleRelease = async (id) => {
    try {
      await cubiclesService.releaseCubicle(id);
      if (refetch) refetch();
    } catch (e) {
      alert('Error: ' + e.message);
    }
  };

  return (
    <div className="cubicle-grid">
      {cubicles.map((cubicle) => {
        const displayStatus = cubicle.status ?? (cubicle.is_maintenance ? "maintenance" : "available");
        
        return (
          <article key={cubicle.id ?? cubicle.code} className="cubicle-card">
            <h3>{cubicle.code ?? cubicle.name}</h3>
            <p>Capacidad: {cubicle.capacity ?? 1}</p>
            <CubicleStatusBadge status={displayStatus} />
            
            {isStaff && displayStatus === 'available' && (
              <button 
                onClick={() => handleReserve(cubicle.id)}
                style={{marginTop: '1rem', padding: '0.5rem', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px'}}
              >
                Reservar
              </button>
            )}
            {isStaff && displayStatus === 'occupied' && (
              <button 
                onClick={() => handleRelease(cubicle.id)}
                style={{marginTop: '1rem', padding: '0.5rem', background: '#c0392b', color: '#fff', border: 'none', borderRadius: '4px'}}
              >
                Liberar
              </button>
            )}
          </article>
        );
      })}
    </div>
  );
}

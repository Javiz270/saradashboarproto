import { useTranslation } from 'react-i18next';
import { useAuthContext } from '../context/AuthContext.jsx';

export default function Profile() {
  const { t } = useTranslation();
  const { profile } = useAuthContext();

  if (!profile) {
    return <p className="empty-text">{t('common.loading')}</p>;
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>Mi perfil</h1>
        <p>Datos registrados en Supabase.</p>
      </header>

      <section className="profile-card">
        <p><strong>Nombre:</strong> {profile.first_name} {profile.last_name_paternal} {profile.last_name_maternal}</p>
        <p><strong>Matrícula:</strong> {profile.student_id || 'Pendiente'}</p>
        <p><strong>Carrera:</strong> {profile.career || 'Pendiente'}</p>
        <p><strong>Grado:</strong> {profile.grade || 'Pendiente'}</p>
        <p><strong>Grupo:</strong> {profile.group || 'Pendiente'}</p>
        <p><strong>Rol:</strong> {profile.role}</p>
        <p><strong>Correo:</strong> {profile.email}</p>
      </section>
    </div>
  );
}

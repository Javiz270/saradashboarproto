import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import './Auth.css';

export function CompleteProfile() {
  const { profile, updateProfile } = useAuthContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    first_name: profile?.first_name || '',
    last_name_paternal: profile?.last_name_paternal || '',
    last_name_maternal: profile?.last_name_maternal || '',
    student_id: profile?.student_id || '',
    career: profile?.career || '',
    grade: profile?.grade || '',
    group: profile?.group || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validar matrícula
    if (!/^[0-9]{4}$/.test(formData.student_id)) {
      setError('La matrícula debe contener exactamente 4 números.');
      setLoading(false);
      return;
    }

    try {
      await updateProfile(formData);
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(err.message || 'Error al actualizar el perfil.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: '600px' }}>
        <h1 className="auth-title">Completar Perfil</h1>
        <p className="auth-subtitle">Necesitamos algunos datos académicos para continuar.</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label>Nombre(s)</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Apellido Paterno</label>
              <input
                type="text"
                name="last_name_paternal"
                value={formData.last_name_paternal}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Apellido Materno</label>
              <input
                type="text"
                name="last_name_maternal"
                value={formData.last_name_maternal}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Matrícula (4 dígitos)</label>
              <input
                type="text"
                name="student_id"
                value={formData.student_id}
                onChange={handleChange}
                pattern="^[0-9]{4}$"
                title="Exactamente 4 números"
                required
              />
            </div>
            <div className="form-group">
              <label>Carrera</label>
              <select name="career" value={formData.career} onChange={handleChange} required>
                <option value="">Selecciona tu carrera...</option>
                <option value="Desarrollo de Software Multiplataforma">Desarrollo de Software Multiplataforma</option>
                <option value="Entornos Virtuales y Negocios Digitales">Entornos Virtuales y Negocios Digitales</option>
                <option value="Infraestructura de Redes Digitales">Infraestructura de Redes Digitales</option>
                <option value="Mantenimiento Industrial">Mantenimiento Industrial</option>
                <option value="Procesos Industriales">Procesos Industriales</option>
                <option value="Otra">Otra</option>
              </select>
            </div>
            <div className="form-group">
              <label>Grado (Cuatrimestre)</label>
              <input
                type="text"
                name="grade"
                placeholder="Ej. 10"
                value={formData.grade}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Grupo</label>
              <input
                type="text"
                name="group"
                placeholder="Ej. A"
                value={formData.group}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <button type="submit" className="auth-btn auth-btn-primary" disabled={loading} style={{ marginTop: '1.5rem' }}>
            {loading ? 'Guardando...' : 'Guardar y Continuar'}
          </button>
        </form>
      </div>
    </div>
  );
}

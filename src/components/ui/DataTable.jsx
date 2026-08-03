export default function DataTable({ columns, data = [], loading = false, emptyMessage = 'Sin datos' }) {
  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  if (!data.length) {
    return <p className="empty-text">{emptyMessage}</p>;
  }

  return (
    <div className="data-table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={row.id ?? rowIndex}>
              {columns.map((col) => (
                <td key={col.key}>
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { useCallback, useState } from 'react';
import { reportsService } from '../../../apis/coreApi';

export function useReports() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReports = useCallback(async (filters = {}) => {
    setLoading(true);
    setError(null);
    try {
      const reports = await reportsService.getReports(filters);
      setData(reports);
      return reports;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const exportReport = useCallback(async (filters = {}, format = 'csv') => {
    setLoading(true);
    setError(null);
    try {
      return await reportsService.exportReport(filters, format);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchReports, exportReport };
}

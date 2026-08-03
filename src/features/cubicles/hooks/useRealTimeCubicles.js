import { useCallback, useEffect, useState } from 'react';
import { cubiclesService } from '../../../apis/coreApi';

export function useRealTimeCubicles(pollIntervalMs = 30000) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCubicles = useCallback(async () => {
    try {
      const cubicles = await cubiclesService.getCubicles();
      setData(cubicles);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCubicles();
    const interval = setInterval(fetchCubicles, pollIntervalMs);
    return () => clearInterval(interval);
  }, [fetchCubicles, pollIntervalMs]);

  return { data, loading, error, refetch: fetchCubicles };
}

import { useCallback, useEffect, useState } from 'react';
import { reportsService } from '../../../apis/coreApi';

const FALLBACK_METRICS = {
  cubiclesOccupied: 0,
  cubiclesTotal: 0,
  activeLoans: 0,
  usersToday: 0,
  occupancyRate: 0,
};

export function useDashboardMetrics() {
  const [data, setData] = useState(FALLBACK_METRICS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMetrics = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const metrics = await reportsService.getDashboardMetrics();
      setData({
        cubiclesOccupied: metrics.cubiclesOccupied ?? 0,
        cubiclesTotal: metrics.cubiclesTotal ?? 0,
        activeLoans: metrics.activeLoans ?? 0,
        usersToday: metrics.usersToday ?? 0,
        occupancyRate: metrics.occupancyRate ?? 0,
      });
    } catch (err) {
      setError(err);
      setData(FALLBACK_METRICS);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMetrics();
  }, [fetchMetrics]);

  return { data, loading, error, refetch: fetchMetrics };
}

import { useCallback, useEffect, useState } from 'react';
import { loansService } from '../../../apis/coreApi';

export function useLoans() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLoans = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const loans = await loansService.getLoans();
      setData(loans);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLoans();
  }, [fetchLoans]);

  return { data, loading, error, refetch: fetchLoans };
}

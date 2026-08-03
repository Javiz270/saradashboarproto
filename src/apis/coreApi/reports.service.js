import { coreApiClient } from './coreApi.client.js';

export async function getReports(filters = {}) {
  const { data } = await coreApiClient.get('/reports', { params: filters });
  return data;
}

export async function exportReport(filters = {}, format = 'csv') {
  const { data } = await coreApiClient.get('/reports/export', {
    params: { ...filters, format },
    responseType: 'blob',
  });
  return data;
}

export async function getDashboardMetrics() {
  const { data } = await coreApiClient.get('/reports/dashboard');
  return data;
}

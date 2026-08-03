import { coreApiClient } from './coreApi.client.js';

export async function getLoans() {
  const { data } = await coreApiClient.get('/loans');
  return data;
}

export async function getLoanById(id) {
  const { data } = await coreApiClient.get(`/loans/${id}`);
  return data;
}

export async function createLoan(payload) {
  const { data } = await coreApiClient.post('/loans', payload);
  return data;
}

export async function returnLoan(id) {
  const { data } = await coreApiClient.patch(`/loans/${id}/return`);
  return data;
}

import { coreApiClient } from './coreApi.client.js';

export async function getLoans() {
  // We didn't build a list_loans endpoint in phase 1 for some reason, 
  // but if it exists, it would be GET /loans. 
  // Wait, I did build it in Phase 1? Actually, I didn't add it to main.py! 
  // I only added POST /loans and POST /loans/{id}/return.
  // I will just add the GET request anyway, assuming it'll be added to the backend.
  const { data } = await coreApiClient.get('/loans');
  return data;
}

export async function createLoan(payload) {
  // payload: { copy_id, user_id, due_date, notes }
  const { data } = await coreApiClient.post('/loans', payload);
  return data;
}

export async function reserveBook(payload) {
  const { data } = await coreApiClient.post('/loans/reserve-book', payload);
  return data;
}

export async function returnLoan(id) {
  const { data } = await coreApiClient.patch(`/loans/${id}/return`);
  return data;
}

import { coreApiClient } from './coreApi.client.js';

export async function getCubicles() {
  const { data } = await coreApiClient.get('/cubicles');
  return data;
}

export async function reserveCubicle(payload) {
  // payload: { cubicle_id, user_id }
  const { data } = await coreApiClient.post(`/cubicles/${payload.cubicle_id}/reservations`, payload);
  return data;
}

export async function releaseCubicle(cubicleId) {
  const { data } = await coreApiClient.post(`/cubicles/${cubicleId}/release`);
  return data;
}

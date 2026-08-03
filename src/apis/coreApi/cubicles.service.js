import { coreApiClient } from './coreApi.client.js';

export async function getCubicles() {
  const { data } = await coreApiClient.get('/cubicles');
  return data;
}

export async function getCubicleById(id) {
  const { data } = await coreApiClient.get(`/cubicles/${id}`);
  return data;
}

export async function updateCubicleStatus(id, status) {
  const { data } = await coreApiClient.patch(`/cubicles/${id}/status`, { status });
  return data;
}

export async function getCubicleOccupancy() {
  const { data } = await coreApiClient.get('/cubicles/occupancy');
  return data;
}

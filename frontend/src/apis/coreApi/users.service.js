import { coreApiClient } from './coreApi.client.js';

export async function getUsers() {
  const { data } = await coreApiClient.get('/users');
  return data;
}

export async function getUserById(id) {
  const { data } = await coreApiClient.get(`/users/${id}`);
  return data;
}

export async function createUser(payload) {
  const { data } = await coreApiClient.post('/users', payload);
  return data;
}

export async function updateUser(id, payload) {
  const { data } = await coreApiClient.put(`/users/${id}`, payload);
  return data;
}

export async function deleteUser(id) {
  const { data } = await coreApiClient.delete(`/users/${id}`);
  return data;
}

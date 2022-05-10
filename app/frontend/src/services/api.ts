import axios from 'axios';
import CreateBody from '../interfaces/createBody';
import EditBody from '../interfaces/editBody';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const postUser = async (endpoint: string, body: CreateBody) => {
  await api.post(endpoint, body);
};

export const getUsers = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const updateUser = async (endpoint: string, body: EditBody) => {
  await api.put(endpoint, body);
};

export const deleteUser = async (endpoint: string) => {
  await api.delete(endpoint);
};

export default api;

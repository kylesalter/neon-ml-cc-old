import { create } from 'apisauce';

export const config = {
  baseURL: '/api',
};

export const api = create(config);

export default api;

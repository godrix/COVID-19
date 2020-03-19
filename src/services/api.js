import axios from 'axios';

const api = axios.create({
  baseURL: 'https://covid19.mathdro.id/api',
});

export default api;
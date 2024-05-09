import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const Axios = axios.create({
  baseURL: 'https://backend-hofa.onrender.com/api',
  headers: { 'Content-Type': 'application/json' },
});
Axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('auth-token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

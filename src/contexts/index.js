import Axios from 'axios';

// const url = 'https://ordersystem.onrender.com/auth/'
const url = 'http://localhost:3100/';
import axios from 'axios';
axios.defaults.baseURL
Axios.defaults.baseURL = url;
Axios.defaults.headers.common['Content-Type'] = 'application/json';
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

export default Axios;

// export default axios;

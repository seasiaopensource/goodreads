import axios from 'axios';
import { UNAUTH_USER } from '../stores/books/constant';
// import { APP_URL } from './constants';

export default {
  setupInterceptors: (store) => {
    // Add a response interceptor
    axios.interceptors.response.use(response => response.data, (error) => {
      if (error.response.status === 401) {
        localStorage.clear();
        store.dispatch({ type: UNAUTH_USER });
      }
      return Promise.reject(error.response.data);
    });
  },
};

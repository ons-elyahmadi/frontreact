import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.100:5000', // replace with your machine's IP
});

api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error fetching token from AsyncStorage:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
 

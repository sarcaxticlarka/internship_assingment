import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Debugging: log failed responses so registration/login 404/500 are easier to diagnose
api.interceptors.response.use(
    (response) => response,
    (error) => {
        try {
            const config = error?.config || {};
            const url = config.url || '(unknown url)';
            const method = (config.method || 'unknown').toUpperCase();
            const status = error?.response?.status;
            console.error(`[api] ${method} ${url} ->`, status, error?.response?.data || error.message);
        } catch (e) {
            // ignore logging errors
        }
        return Promise.reject(error);
    }
);
export default api;

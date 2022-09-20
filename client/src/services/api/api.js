import axios from 'axios';

const api = axios.create();

api.interceptors.request.use((config) => {
    config.headers.common['Content-Type'] = 'application/json';
    return config;
});

api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
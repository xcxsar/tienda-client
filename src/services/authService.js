import api from './axiosInstance.js';

export const login = async (email, password) => {
    const response = await api.post('api/auth/login', { email, password });
    return response.data;
};

export const register = async (name, email, password) => {
    const response = await api.post('api/auth/register', { name, email, password });
    return response.data;
};

export const logout = async () => {
    await api.post('api/auth/logout');
};

export const profile = async () => {
    const response = await api.get('api/auth/profile');
    return response.data;
};

export const verifyToken = async () => {
    const response = await api.get('api/auth/verify'); // o la ruta que definiste en Express
    return response.data;
};
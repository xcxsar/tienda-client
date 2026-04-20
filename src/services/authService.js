import axiosInstance from './axiosInstance';

export const login = async (email, password) => {
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
};

export const register = async (name, email, password) => {
    const response = await axiosInstance.post('/auth/register', { name, email, password });
    return response.data;
};

export const logout = async () => {
    await axiosInstance.post('/auth/logout');
};

export const profile = async () => {
    const response = await axiosInstance.get('/auth/profile');
    return response.data;
};
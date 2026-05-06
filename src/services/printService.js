import api from './axiosInstance.js';

export const printDocument = async () => {
    const response = await api.post(`api/print`);
    return response.data;
};
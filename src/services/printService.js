import api from './axiosInstance.js';

export const printDocument = async (documentId) => {
    const response = await api.post(`api/print/${documentId}`);
    return response.data;
};
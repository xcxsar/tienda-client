import api from './axiosInstance.js';

export const createSale = async (saleData) => {
    const response = await api.post('api/sales', saleData);
    return response.data;
}
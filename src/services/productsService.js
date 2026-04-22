import api from './axiosInstance.js';

export const getProducts = async () => {
    const response = await api.get('api/products');
    return response.data;
}

export const getProductById = async (id) => {
    const response = await api.get(`api/products/${id}`);
    return response.data;
}

export const createProduct = async (productData) => {
    const response = await api.post('api/products', productData);
    return response.data;
}

export const updateProduct = async (id, productData) => {
    const response = await api.put(`api/products/${id}`, productData);
    return response.data;
}

export const deleteProduct = async (id) => {
    await api.delete(`api/products/${id}`);
}

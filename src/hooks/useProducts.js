import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../services/productsService.js';

export const useProducts = () => {
    const queryClient = useQueryClient();

    const productsQuery = useQuery({
        queryKey: ['products'],
        queryFn: api.getProducts,
        retry: 3,
        refetchOnWindowFocus: false,
    });

    const createProductMutation = useMutation({
        mutationFn: (productData) => api.createProduct(productData),
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
        },
    });

    const updateProductMutation = useMutation({
        mutationFn: ({ id, productData }) => api.updateProduct(id, productData),
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
        },
    });

    const deleteProductMutation = useMutation({
        mutationFn: (id) => api.deleteProduct(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
        },
    });

    return {
        // Datos y estado
        products: productsQuery.data,
        isLoading: productsQuery.isLoading,
        isError: productsQuery.isError,

        // Acciones
        createProduct: createProductMutation.mutate,
        updateProduct: updateProductMutation.mutate,
        deleteProduct: deleteProductMutation.mutate,

        // Estado de mutaciones
        isCreating: createProductMutation.isPending,
        isUpdating: updateProductMutation.isPending,
        isDeleting: deleteProductMutation.isPending,
    };
}
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../services/salesService.js';

export const useSales = () => {
    const queryClient = useQueryClient();

    const createSaleMutation = useMutation({
        mutationFn: (saleData) => api.createSale(saleData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        },
    });

    return {
        createSale: createSaleMutation.mutate,
        createSaleAsync: createSaleMutation.mutateAsync,

        isCreating: createSaleMutation.isPending,
        isSuccess: createSaleMutation.isSuccess,
        isError: createSaleMutation.isError,
        error: createSaleMutation.error
    };
}
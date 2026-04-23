import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../services/categoriesService.js';

export const useCategories = () => {
    const queryClient = useQueryClient();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['categories'],
        queryFn: api.getCategories
    });

    // useMutation returns an object, not an array. 
    // Use 'mutate' or rename it as shown below:
    const { mutate: createCategory } = useMutation({
        mutationFn: api.createCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        }
    });

    const { mutate: updateCategory } = useMutation({
        mutationFn: api.updateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        }
    });

    const { mutate: deleteCategory } = useMutation({
        mutationFn: api.deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        }
    });

    return { 
        categories: data || [], 
        isLoading, 
        isError,
        createCategory, // This is now the 'mutate' function
        updateCategory,
        deleteCategory
    };
}
import { useQuery } from '@tanstack/react-query';

export const useCategories = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3000/api/categories');
            if (!response.ok) throw new Error('Error fetching categories');
            return response.json();
        },
    });

    return { 
        categories: data || [], 
        isLoading, 
        isError 
    };
};
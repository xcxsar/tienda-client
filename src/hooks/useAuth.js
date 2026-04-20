import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import * as api from '../services/authService.js';

export const useAuth = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const userQuery = useQuery({
        queryKey: ['authUser'],
        queryFn: api.verifyToken,
        retry: false,
        refetchOnWindowFocus: false,
    });

    const loginMutation = useMutation({
        mutationFn: ({ email, password }) => api.login(email, password),
        onSuccess: (data) => {
            queryClient.setQueryData(['authUser'], data);
        },
    });

    const registerMutation = useMutation({
        mutationFn: ({ name, email, password }) => api.register(name, email, password),
        onSuccess: (data) => {
            queryClient.setQueryData(['authUser'], data);
        },
    });

    const logoutMutation = useMutation({
        mutationFn: api.logout,
        onSuccess: () => {
            // Clear all cached data to prevent data leaking between users
            queryClient.clear();
            // Force navigate to login if needed, or let the UI handle it
            navigate('/login');
        },
    });

    return {
        // Datos y estado
        user: userQuery.data,
        isLoading: userQuery.isLoading,
        isError: userQuery.isError,

        // Acciones
        login: loginMutation.mutate,
        register: registerMutation.mutate,
        logout: logoutMutation.mutate,

        // Estado
        isLoggingIn: loginMutation.isPending,
        isRegistering: registerMutation.isPending,
        isLoggingOut: logoutMutation.isPending,
    };
}

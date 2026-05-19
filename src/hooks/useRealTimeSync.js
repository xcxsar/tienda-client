import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { io } from 'socket.io-client';

// Reemplaza con la URL de tu backend. Es buena práctica exportar el socket 
// desde un archivo de configuración separado para no crear múltiples conexiones.
export const socket = io(import.meta.env.VITE_API_URL);

export const useRealTimeSync = () => {
    const queryClient = useQueryClient();

    useEffect(() => {
        // Escuchamos el evento que emite el backend
        const handleNewSale = () => {
            console.log("Se detectó una venta en otro equipo. Actualizando datos...");
            
            // Invalida las queries para que React Query haga un re-fetch automático
            queryClient.invalidateQueries({ queryKey: ['products'] });
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        };

        // Suscribirse al evento
        socket.on('sale_created', handleNewSale);

        // Limpiar el listener cuando el componente se desmonte
        return () => {
            socket.off('sale_created', handleNewSale);
        };
    }, [queryClient]);
};
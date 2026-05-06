import { useMutation } from '@tanstack/react-query';
import * as api from '../services/printService.js';

export const usePrint = () => {
    const printMutation = useMutation({
        mutationFn: () => api.printDocument(),
    });
    
    return {
        print: printMutation.mutate,
        printAsync: printMutation.mutateAsync,

        isPrinting: printMutation.isPending,
        isSuccess: printMutation.isSuccess,
        isError: printMutation.isError,
        error: printMutation.error
    };
}
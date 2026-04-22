import { useContext } from 'react';
import { CartContext } from '../context/cartContext.jsx';

export const useCart = () => {
    const context = useContext(CartContext);
    
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    const { order, setOrder } = context;

    const addToCart = (product) => {
        setOrder((prevOrder) => {
            const itemIndex = prevOrder.findIndex(item => item.id === product.id);
            
            if (itemIndex > -1) {
                const newOrder = [...prevOrder];
                newOrder[itemIndex] = { 
                    ...newOrder[itemIndex], 
                    quantity: newOrder[itemIndex].quantity + 1 
                };
                return newOrder;
            }
            
            return [...prevOrder, { ...product, quantity: 1 }];
        });
    };

    const calculateTotal = () => {
        return order.reduce((acc, item) => acc + (Number(item.price) * item.quantity), 0);
    };

    const clearCart = () => setOrder([]);

    return {
        order,
        addToCart,
        calculateTotal,
        clearCart
    };
};
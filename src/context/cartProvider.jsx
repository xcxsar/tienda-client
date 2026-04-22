import { useState, useMemo } from 'react';
import { CartContext } from './cartContext.jsx';

export const CartProvider = ({ children }) => {
    const [order, setOrder] = useState([]);

    const value = useMemo(() => ({
        order,
        setOrder
    }), [order]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
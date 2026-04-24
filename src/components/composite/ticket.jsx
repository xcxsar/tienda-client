import { useState } from 'react';
import { useCart } from "../../hooks/useCart";
import { useSales } from "../../hooks/useSales";
import { usePrint } from "../../hooks/usePrint";

import Header from '../atomic/header.jsx';
import PriceTag from '../atomic/priceTag.jsx';
import Button from '../atomic/button.jsx';
import MiniProductCard from './miniProductCard.jsx';

function Ticket() {
    const [showPrintModal, setShowPrintModal] = useState(false);
    const [currentSaleId, setCurrentSaleId] = useState(null);

    const { order, calculateTotal, clearCart } = useCart();
    const { createSale, isCreating } = useSales();
    const { print } = usePrint();

    const subtotal = calculateTotal();
    const tax = subtotal * 0.16;
    const total = subtotal + tax;

    const handleCheckout = () => {
        if (order.length === 0) return;

        const payload = order.map(item => ({
            productId: item.id,
            quantity: item.quantity,
            salesPrice: item.price
        }));

        createSale(payload, {
            onSuccess: (response) => {
                clearCart();
                // Extract the sale ID from your API response (adjust path if needed)
                const id = response?.data?.id || response?.id;
                setCurrentSaleId(id);
                setShowPrintModal(true);
            },
            onError: (err) => {
                const errorMessage = err.response?.data?.message || "Error al procesar la venta";
                alert(errorMessage);
            }
        });
    };

    return (
        <>
        <div className="flex flex-col h-full w-70 p-2">
            <div className='p-2'>
                <Header text='Pedido #' />
            </div>

            <div className='flex-1 flex flex-col p-2 overflow-y-auto gap-3'>
                {order.length > 0 ? (
                    order.map((product, index) => (
                        <MiniProductCard 
                            key={`${product.id}-${index}`}
                            urlImg={product.urlImg}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center h-full opacity-30">
                        <i className="fa-solid fa-receipt mb-2 text-xl"></i>
                        <p className="text-sm italic">Sin productos</p>
                    </div>
                )}
            </div>

            <div className='flex-none flex flex-col gap-2 p-2 mt-auto'>
                <PriceTag text='Subtotal' value={subtotal} />
                <PriceTag text='IVA (16%)' value={tax} />

                <div className='border-t border-dashed border-gray-300 my-1' />

                <PriceTag text='Total' value={total} />

                <Button 
                    className='w-full bg-[#00BE64] text-white py-2 rounded-md font-medium active:scale-95 transition-transform cursor-pointer'
                    text={isCreating ? 'Procesando...' : 'Cobrar'} 
                    disabled={order.length === 0 || isCreating} 
                    onClick={handleCheckout}
                />
            </div>
        </div>

        {showPrintModal && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg p-6 w-80 flex flex-col gap-4 shadow-xl">
                    <p className="text-center text-lg font-semibold text-gray-800">¿Desea imprimir su recibo?</p>
                    <div className="flex justify-center gap-4 mt-2">
                        <button 
                            className="bg-[#00BE64] text-white px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                            onClick={() => {
                                if (currentSaleId) print(currentSaleId);
                                setShowPrintModal(false);
                            }}
                        >
                            Sí
                        </button>
                        <button 
                            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
                            onClick={() => setShowPrintModal(false)}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}

export default Ticket;
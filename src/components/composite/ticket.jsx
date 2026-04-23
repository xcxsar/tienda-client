import { useCart } from "../../hooks/useCart";
import { useSales } from "../../hooks/useSales";

import Header from '../atomic/header.jsx';
import PriceTag from '../atomic/priceTag.jsx';
import Button from '../atomic/button.jsx';
import MiniProductCard from './miniProductCard.jsx';

function Ticket() {
    const { order, calculateTotal, clearCart } = useCart();
    const { createSale, isCreating } = useSales();

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
            onSuccess: () => {
                alert("¡Venta exitosa!");
                clearCart();
            },
            onError: (err) => {
                const errorMessage = err.response?.data?.message || "Error al procesar la venta";
                alert(errorMessage);
            }
        });
    };

    return (
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
    );
}

export default Ticket;
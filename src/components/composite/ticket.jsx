import { useCart } from "../../hooks/useCart";

import Header from '../atomic/header.jsx';
import PriceTag from '../atomic/priceTag.jsx';
import Button from '../atomic/button.jsx';
import MiniProductCard from './miniProductCard.jsx';

function Ticket() {
    const { order, calculateTotal } = useCart();

    const subtotal = calculateTotal();
    const tax = subtotal * 0.16;
    const total = subtotal + tax;

    return (
        <div className="flex flex-col h-full w-70">
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
                        <p className="text-sm italic">Vacío</p>
                    </div>
                )}
            </div>

            <div className='flex-none flex flex-col gap-2 p-2 mt-auto'>
                <PriceTag text='Subtotal' value={subtotal} />
                <PriceTag text='IVA' value={tax} />

                <div className='border-t border-dashed border-gray-300 my-1' />

                <PriceTag text='Total' value={total} />

                <Button 
                    text='Checkout' 
                    disabled={order.length === 0} 
                    onClick={() => console.log('Checking out...', order)}
                />
            </div>
        </div>
    );
}

export default Ticket;
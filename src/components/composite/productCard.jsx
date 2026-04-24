import { useCart } from "../../hooks/useCart";

function ProductCard({ product, currentQuantity }) {
    const { urlImg, name, price, units } = product;
    const { addToCart } = useCart();

    const isOutOfStock = currentQuantity >= units;

    return (
        <div className='h-64 flex flex-col bg-white w-full rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow border border-gray-100'>
            
            <div className='w-full aspect-square flex items-center justify-center overflow-hidden mb-3'>
                <img 
                    src={import.meta.env.VITE_API_URL + '/assets/images/' + urlImg} 
                    alt={name} 
                    className='object-contain w-full h-full'
                />
            </div>
        
            <div className='flex flex-col gap-1 mb-3'>
                <p className='text-sm font-bold text-gray-800 truncate'>{name}</p>
                <p className='text-[10px] text-gray-400'>Disponibles: {units - currentQuantity}</p>
                <p className='text-xs font-semibold text-[#00BE64]'>
                    ${Number(price).toFixed(2)}
                </p>
            </div>

            <button 
                onClick={() => addToCart(product)}
                disabled={isOutOfStock}
                className={`w-full text-xs py-2 rounded-md font-medium transition-all active:scale-95 cursor-pointer ${
                    isOutOfStock 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
            >
                {isOutOfStock ? 'Sin stock' : 'Agregar'}
            </button>
        </div>
    );
}

export default ProductCard;
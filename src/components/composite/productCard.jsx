import { useCart } from "../../hooks/useCart";

function ProductCard({ product }) {
    const { urlImg, name, price } = product;
    const { addToCart } = useCart();

    return (
        <div className='h-64 flex flex-col bg-white w-full rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow border border-gray-100'>
            
            <div className='w-full aspect-square flex items-center justify-center overflow-hidden mb-3'>
                <img 
                    src={urlImg} 
                    alt={name} 
                    className='object-contain w-full h-full'
                />
            </div>
        
            <div className='flex flex-col gap-1 mb-3'>
                <p className='text-sm font-bold text-gray-800 truncate'>{name}</p>
                <p className='text-xs font-semibold text-[#00BE64]'>
                    ${Number(price).toFixed(2)}
                </p>
            </div>

            <button 
                onClick={() => addToCart(product)}
                className='w-full bg-black text-white text-xs py-2 rounded-md font-medium active:scale-95 transition-transform cursor-pointer'
            >
                Agregar
            </button>
        </div>
    );
}

export default ProductCard;
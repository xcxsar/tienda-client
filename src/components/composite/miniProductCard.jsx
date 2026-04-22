function MiniProductCard({ urlImg, name, price, quantity }) {
    return (
        <div className='flex flex-row items-center bg-white w-full gap-3 py-2 border-b border-gray-50'>
            <img 
                src={urlImg} 
                alt={name} 
                className='object-cover rounded w-10 h-10 border border-gray-100' 
            />

            <div className='flex-1 min-w-0'>
                <p className='text-sm font-bold truncate text-gray-800'>{name}</p>
                <p className='text-xs text-gray-500'>Cant: {quantity}</p>
            </div>

            <div className='text-sm text-gray-700 font-semibold'>
                ${(Number(price) * quantity).toFixed(2)}
            </div>
        </div>
    );
}

export default MiniProductCard;
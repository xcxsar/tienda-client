import { useState } from 'react';
import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";

import Header from '../components/atomic/header.jsx';
import ProductCard from '../components/composite/productCard.jsx';
import Ticket from '../components/composite/ticket.jsx';

function Sales() {
    const { products, isLoading: loadingProducts, isError: errorProducts } = useProducts();
    const { categories, isLoading: loadingCats, isError: errorCats } = useCategories();
    
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProducts = products?.filter(product => 
        selectedCategory === 'all' || product.category?.name === selectedCategory
    ) || [];

    if (loadingProducts || loadingCats) {
        return <div className="h-screen flex items-center justify-center">Cargando datos...</div>;
    }

    if (errorProducts || errorCats) {
        return <div className="h-screen flex items-center justify-center">Error al cargar la información.</div>;
    }

    return (
        <div className='flex flex-row w-full h-full bg-[#F8F8F8]'>
            <div className='grow flex flex-col p-2 gap-2 px-10 lg:px-20'>
                
                <div className='flex place-content-start px-4'>
                    <Header text={'Punto de Venta'} />
                </div>

                <div className='h-8 mx-4 flex items-center gap-4'>
                    <p className='text-sm font-semibold'>Filtrar por:</p>
                    <select 
                        className='text-sm bg-transparent border-b border-gray-300 focus:outline-none cursor-pointer'
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value='all'>Todas las categorías</option>
                        {categories?.map(cat => (
                            <option key={cat.id} value={cat.name}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4'>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            <aside className='flex flex-col bg-white shadow-sm'>
                <Ticket />
            </aside>
        </div>
    );
}

export default Sales;
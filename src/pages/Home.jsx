import { useEffect, useState } from 'react'
import { useFilters } from '../hooks/useFilters'
import { getAllProducts } from '../api/getAllProducts'
import { ProductCard } from '../components/ProductCard'
import { Header } from '../components/Header'
import { FiltersAside } from '../components/FiltersAside'

const Home = () => {
    const { filterProducts } = useFilters()
    const [products, setProducts] = useState([])
    const filteredProducts = filterProducts(products)

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const fetchAllProducts = async () => {
        const res = await getAllProducts()
        setProducts(res)
    }

    return (
        <div className='w-full min-h-screen'>
            <Header />
            <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                    <FiltersAside />
                </div>
                <div className='grid col-span-9 grid-cols-3 xl:grid-cols-4 gap-4 px-10 py-10'>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home

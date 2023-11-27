import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'

export default function HomeScreen() {
    const { data: products, isLoading, error } = useGetProductsQuery()

    if (isLoading) {
        return <Spinner />
    }

    if (error) {
        toast.error(error?.data?.message || error?.error)
    }

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                {products?.map((product, i) => (
                    <Product key={i} product={product} />
                ))}
            </div>
        </>
    )
}

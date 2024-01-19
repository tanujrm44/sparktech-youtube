import React from 'react'
import { useCreateProductMutation, useGetProductsQuery } from '../../slices/productsApiSlice'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'

export default function ProductListScreen() {
    const { data: products, isLoading, error, refetch } = useGetProductsQuery()
    const [createProduct, { isLoading: loadingCreate }] = useCreateProductMutation()

    if (isLoading) {
        return <Spinner />
    }

    if (error) {
        toast.error(error?.data?.message || error?.error)
    }

    const createProductHandler = async () => {
        if (window.confirm("Are you sure you want to create a new product?")) {
            try {
                await createProduct()
                refetch()
                toast.success("Product Created")
            } catch (error) {
                toast.error(error?.data?.message || error?.error)
            }
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold mb-4">Products</h2>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
                    onClick={createProductHandler}
                >
                    Create Product
                </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            ID
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Price
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Brand
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {products?.map(product => (
                        <tr key={product._id}>
                            <td className='px-6 py-4 whitespace-nowrap'>{product._id}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{product.name}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>${product.price}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{product.brand}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                                <button className='text-blue-500 hover:text-blue-500 mr-2'>Edit</button>
                                <button className='text-red-500 hover:text-red-500'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


import React from 'react'
import { useCreateProductMutation, useDeleteProductMutation, useGetProductsQuery } from '../../slices/productsApiSlice'
import { useNavigate, useParams } from "react-router-dom"
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'
import Paginate from '../../components/Paginate'
import { useSelector } from 'react-redux'

export default function ProductListScreen() {
    const { pageNumber } = useParams()
    const navigate = useNavigate()
    const { data, isLoading, error, refetch } = useGetProductsQuery({ pageNumber })
    const [createProduct, { isLoading: loadingCreate }] = useCreateProductMutation()
    const [deleteProduct, { isLoading: loadingDelete }] = useDeleteProductMutation()
    const { userInfo } = useSelector(state => state.user)

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
                toast.success("Product Created")
                refetch()
            } catch (error) {
                toast.error(error?.data?.message || error?.error)
            }
        }
    }

    const editProductHandler = (id) => {
        navigate(`/admin/product/${id}/edit`)
    }

    const deleteProductHandler = async id => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                const res = await deleteProduct(id)
                refetch()
                toast.success(res.message)
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
                {loadingCreate && <Spinner />}
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
                    {data?.products?.map(product => (
                        <tr key={product._id}>
                            <td className='px-6 py-4 whitespace-nowrap'>{product._id}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{product.name}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>${product.price}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>{product.brand}</td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                                <button className='text-blue-500 hover:text-blue-700 mr-2'
                                    onClick={() => editProductHandler(product._id)}
                                >Edit</button>
                                <button className='text-red-500 hover:text-red-700'
                                    onClick={() => deleteProductHandler(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    {loadingDelete && <Spinner />}
                </tbody>
            </table>
            <div className='flex justify-center mt-12'>
                <Paginate pages={data.pages} page={data.pageNumber} isAdmin={userInfo.isAdmin} />
            </div>
        </div>
    )
}


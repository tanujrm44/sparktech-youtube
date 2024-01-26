import React, { useState } from 'react'
import { useGetProductDetailsQuery, useUpdateProductMutation, useUploadFileHandlerMutation } from '../../slices/productsApiSlice'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner'

export default function ProductEditScreen() {
    const { id: productId } = useParams()
    const { data: product, isLoading: loadingProduct, error } = useGetProductDetailsQuery(productId)
    const [updateProduct, { isLoading: loadingupdate }, refetch] = useUpdateProductMutation()
    const [uploadProductImage, { isLoading: uploadLoading }] = useUploadFileHandlerMutation()

    console.log(product)

    const navigate = useNavigate()
    const [productData, setProductData] = useState({
        name: product?.name,
        price: product?.price,
        image: product?.image,
        brand: product?.brand,
        category: product?.category,
        countInStock: product?.countInStock,
        description: product?.description
    })

    const { name, price, image, brand, category, countInStock, description } = productData

    const handleInputChange = e => {
        const { name, value } = e.target
        setProductData({
            ...productData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await updateProduct({
                productId, name, price, image, brand, category, countInStock, description
            }).unwrap()
            toast.success("Product Updated")
            navigate("/admin/products")
            refetch()
        } catch (error) {
            toast.error(error?.data?.message || error?.error)
        }
    }

    const uploadFileHandler = async e => {
        const formData = new FormData()
        formData.append('image', e.target.files[0])
        try {
            const res = await uploadProductImage(formData).unwrap()
            toast.success(res.message)
            setProductData({
                ...productData,
                image: res.image
            })
        } catch (error) {
            toast.error(error?.data?.message || error?.error)
        }
    }

    return (
        <div className='w-1/3 mx-auto'>
            <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block font-medium">
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block font-medium">
                        Image:
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept='image/*'
                        onChange={uploadFileHandler}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="brand" className="block font-medium">
                        Brand:
                    </label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={brand}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block font-medium">
                        Category:
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={category}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="countInStock" className="block font-medium">
                        Count In Stock:
                    </label>
                    <input
                        type="number"
                        id="countInStock"
                        name="countInStock"
                        value={countInStock}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block font-medium">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        onClick={handleSubmit}
                    >
                        Update Product
                    </button>
                    {uploadLoading && <Spinner />}
                </div>
            </form>
        </div>
    )
}

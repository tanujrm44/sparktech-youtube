import React from 'react'

export default function ProductEditScreen() {
    return (
        <div className='w-1/3 mx-auto'>
            <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
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
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Update Product
                    </button>
                </div>
            </form>
            )
        </div>
    )
}

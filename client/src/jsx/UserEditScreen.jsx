import React from 'react'

export default function UserEditScreen() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold my-4">Edit User</h2>
            <form className="w-full max-w-sm">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 p-2 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="isAdmin" className="block text-gray-700 font-bold">
                        Is Admin
                    </label>
                    <input
                        type="checkbox"
                        id="isAdmin"
                        className="mr-2"
                    />
                </div>
                <button
                    type="button"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Update
                </button>
            </form>
        </div>
    )
}

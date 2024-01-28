import React from 'react'
import { useGetUsersQuery } from '../../slices/userApiSlice'

export default function UserListScreen() {
    const { data: users, isLoading, error, refetch } = useGetUsersQuery()
    return (
        <div className="mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Users</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">ID</th>
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">Name</th>
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">Email</th>
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">isAdmin</th>
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map(user => (
                            <tr key={user._id} className='text-center'>
                                <td className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">{user._id}</td>
                                <td className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">{user.name}</td>
                                <td className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">{user.email}</td>
                                <td className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">{user.isAdmin ? "Yes" : "No"}</td>
                                {!user.isAdmin && <td className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">
                                    <button className='text-blue-500 hover:text-blue-700 mr-2'
                                    >Edit</button>
                                    <button className='text-red-500 hover:text-red-700'
                                    >Delete</button>
                                </td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

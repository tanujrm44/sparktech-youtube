import React from 'react'
import { useDeleteUserMutation, useGetUsersQuery } from '../../slices/userApiSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../../components/Spinner'

export default function UserListScreen() {
    const { data: users, isLoading, error, refetch } = useGetUsersQuery()
    const [deleteUser] = useDeleteUserMutation()
    const navigate = useNavigate()

    const onDelete = async id => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                const res = await deleteUser(id)
                toast.success(res.message)
                refetch()
            } catch (error) {
                toast.error(error?.data?.message || error?.error)
            }
        }
    }

    if (isLoading) {
        <Spinner />
    }

    if (error) {
        toast.error(error.message)
    }

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
                                        onClick={() => navigate(`/admin/users/${user._id}/edit`)}
                                    >Edit</button>
                                    <button className='text-red-500 hover:text-red-700'
                                        onClick={() => onDelete(user._id)}
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

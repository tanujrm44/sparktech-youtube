import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserOrdersQuery } from '../slices/orderApiSlice'
import { useUpdateUserProfileMutation } from '../slices/userApiSlice'
import { toast } from 'react-toastify'
import { setCredentials } from '../slices/userSlice'
import Spinner from '../components/Spinner'
import { addOrderItems } from '../../../server/controllers/orderController'

export default function ProfileScreen() {
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.user)

    const [name, setName] = useState(userInfo.name)
    const [email, setEmail] = useState(userInfo.email)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const { data: userOrders, isLoading, error } = useGetUserOrdersQuery()
    const [updateUser, { isLoading: isUpdating }] = useUpdateUserProfileMutation()

    const handleUpdateProfile = async e => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error("Passwords do not match")
            return
        }

        const res = await updateUser({ _id: userInfo._id, name, email, password }).unwrap()
        dispatch(setCredentials({ ...res }))
        toast.success("Updated Profile")
    }

    if (error) {
        return toast.error(error.message)
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="flex">
            <div className="w-1/4 p-4">
                <h1 className="text-xl font-semibold mb-4">Profile</h1>
                <form className="mb-6" onSubmit={handleUpdateProfile}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border p-2 w-full rounded-md"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border p-2 w-full rounded-md"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="border p-2 w-full rounded-md"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="border p-2 w-full rounded-md"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md" onClick={handleUpdateProfile}>
                        Update Profile
                    </button>
                    {isUpdating && <Spinner />}
                </form>
            </div>
            <div className="w-3/4 p-4">
                <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-2">Order ID</th>
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Total</th>
                            <th className="border p-2">Delivered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userOrders?.map(order => (
                            <tr key={order._id}>
                                <td className='border p-2'> {order._id} </td>
                                <td className='border p-2'> {order.createdAt.slice(0, 10)} </td>
                                <td className='border p-2'> {order.totalPrice} </td>
                                <td className='border p-2'> {order.isDelivered ? "Yes" : "No"} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {userOrders.length === 0 && <p className='text-gray-400 text-xl text-center mt-5'>No Orders</p>}
            </div>
        </div>
    )
}

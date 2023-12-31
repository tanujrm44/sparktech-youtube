import React from 'react'
import { useGetOrderDetailsQuery } from '../slices/orderApiSlice'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'

export default function OrderScreen() {
    const { id: orderId } = useParams()
    const { userInfo } = useSelector(state => state.user)
    const { data: order, isLoading, error, refetch } = useGetOrderDetailsQuery(orderId)

    if (error) {
        return toast.error(error.message)
    }

    if (isLoading) {
        return <Spinner />
    }


    const { shippingAddress, user, isDelivered, orderItems } = order

    const calculateTotal = orderItems => {
        return orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    }
    return (
        <div className="flex flex-col md:flex-row justify-center items-start">
            <div className="md:w-2/3 p-4">
                <h2 className="text-3xl font-semibold mb-4">Order Details</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Order Number:</h3>
                    <p>{orderId}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Shipping Details:</h3>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Address: {shippingAddress.address}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Order Status:</h3>
                    <p className={isDelivered ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}>{isDelivered ? "Delivered" : "Not Delivered"}</p>
                </div>
            </div>

            <div className="md:w-1/3 bg-gray-100 p-4">
                <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="text-left">Product</th>
                            <th className="text-right">Quantity</th>
                            <th className="text-right">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderItems?.map(item => (
                            <tr key={item._id} className='border-b border-gray-400'>
                                <th className="text-left">{item.name}</th>
                                <th className="text-right">{item.qty}</th>
                                <th className="text-right">{(item.price * item.qty).toFixed(2)}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4">
                    <p className="text-right font-semibold">Total: {calculateTotal(orderItems).toFixed(2)}</p>
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 mr-3"
                >
                    Pay with Stripe
                </button>
                {userInfo.isAdmin && !order.isDelivered && <button
                    className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4 hover:bg-gray-950"
                >
                    Mark as Delivered
                </button>}
            </div>
        </div>
    )
}

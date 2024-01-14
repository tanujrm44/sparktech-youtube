import React from 'react'
import { useCreateOrderMutation } from "../slices/orderApiSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import { clearCartItems } from '../slices/cartSlice'

export default function PlaceOrderScreen() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    const { cartItems, shippingAddress: { address, city, postalCode, country }, paymentMethod, itemsPrice, shippingPrice, taxPrice, totalPrice } = cart

    const [createOrder, { isLoading }] = useCreateOrderMutation()

    const handlePlaceOrder = async () => {
        try {
            const res = await createOrder({
                orderItems: cartItems,
                shippingAddress: { address, city, postalCode, country },
                paymentMethod,
                itemsPrice,
                shippingPrice,
                taxPrice,
                totalPrice
            }).unwrap()
            dispatch(clearCartItems())
            toast.success("Order Placed!")
            navigate(`/order/${res._id}`)
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    }

    return (
        <div className="flex flex-col md:flex-row justify-center items-start">
            <div className="md:w-2/3 p-4">
                <h2 className="text-2xl font-semibold mb-4">Place Order</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Shipping Address:</h3>
                    <p>{address}, {city}, {postalCode}, {country}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Payment Method:</h3>
                    <p>{paymentMethod}</p>
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
                        {cartItems.map(item => (
                            <tr key={item._id} className='border-b border-gray-400'>
                                <td className="text-left">{item.name}</td>
                                <td className="text-right">{item.qty}</td>
                                <td className="text-right">${(item.price * item.qty).toFixed(2)}</td>
                            </tr>
                        ))}
                        <tr className="border-b border-gray-400">
                            <td className="text-left font-semibold">Shipping</td>
                            <td className="text-right"></td>
                            <td className="text-right">${shippingPrice}</td>
                        </tr>
                        <tr className="border-b border-gray-400">
                            <td className="text-left font-semibold">Tax</td>
                            <td className="text-right"></td>
                            <td className="text-right">${taxPrice}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-4">
                    <p className="text-right font-semibold">Total: ${totalPrice}</p>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded w-full mt-4" onClick={handlePlaceOrder}>Place Order</button>
                {isLoading && <Spinner />}
            </div>
        </div >
    )
}

import React from 'react'

export default function PlaceOrderScreen() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-start">
            <div className="md:w-2/3 p-4">
                <h2 className="text-2xl font-semibold mb-4">Place Order</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Shipping Address:</h3>
                    <p>address, city, postalCode</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Payment Method:</h3>
                    <p>Stripe</p>
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
                    </tbody>
                </table>
                <div className="mt-4">
                    <p className="text-right font-semibold">Total: </p>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded w-full mt-4">Place Order</button>
            </div>
        </div>
    )
}

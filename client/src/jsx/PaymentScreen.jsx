import React from 'react'

export default function PaymentScreen() {
    return (
        <div className='mb-64'>
            <h2 className="text-2xl font-semibold mb-4 mt-28">Payment Method</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Select Payment:</label>
                <div className="mb-2">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            value="Stripe or Credit card"
                            className="form-radio h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2">Stripe or Credit Card</span>
                    </label>
                </div>
            </div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                Continue
            </button>
        </div>
    )
}

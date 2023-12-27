import React from 'react'

export default function ShippingScreen() {
    return (
        <div className="container mx-auto mt-8 mb-28 p-4 max-w-md ">
            <h3 className="text-3xl font-semibold mb-4">Shipping</h3>
            <form>
                <div className="mb-4">
                    <label htmlFor="address" className="text-gray-700">
                        Address:
                    </label>
                    <input
                        type="text"
                        id="address"
                        className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
                        placeholder="Enter your address"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="text-gray-700">
                        City:
                    </label>
                    <input
                        type="text"
                        id="city"
                        className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
                        placeholder="Enter your city"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="postalCode" className="text-gray-700">
                        Postal Code:
                    </label>
                    <input
                        type="text"
                        id="postalCode"
                        className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
                        placeholder="Enter your postal code"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="text-gray-700">
                        Country:
                    </label>
                    <input
                        type="text"
                        id="country"
                        className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
                        placeholder="Enter your country"
                    />
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Continue to Payment
                </button>
            </form>
        </div>
    )
}

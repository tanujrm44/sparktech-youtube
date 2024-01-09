const OrderScreen = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-start">
            <div className="md:w-2/3 p-4">
                <h2 className="text-3xl font-semibold mb-4">Order Details</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Order Number:</h3>
                    <p>orderId</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Shipping Details:</h3>
                    <p>Name:</p>
                    <p>Email:</p>
                    <p>Address:</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Order Status:</h3>
                    <p className="">Delivered</p>
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
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 mr-3"
                >
                    Pay with Stripe
                </button>
                <button
                    className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4 hover:bg-gray-950"
                >
                    Mark as Delivered
                </button>
            </div>
        </div>
    )
}


export default OrderScreen
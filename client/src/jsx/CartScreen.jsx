const CartScreen = () => {

    return (
        <div className="flex flex-col md:flex-row justify-center items-start">
            <div className="md:w-2/3 p-4">
                <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                </div>
            </div>

            <div className="md:w-1/3 bg-gray-100 p-4">
                <h2 className="text-xl font-semibold">Subtotal</h2>
                <p className="text-gray-600">Total Items: </p>
                <p className="text-gray-600">Total Price: </p>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}
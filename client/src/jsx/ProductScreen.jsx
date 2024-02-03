

const ProductScreen = () => {

    return (
        <div className="container mx-auto mt-8 p-4">
            <Link to="/">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md mb-4">Go Back</button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-1">
                    <img src="" alt="" className="w-3/4 mx-auto" />
                </div>
                <div className="md:col-span-1">
                    <h1 className="text-2xl font-semibold"></h1>
                    <p className="text-gray-700 mt-2"></p>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-500 mr-1"></span>
                        <span className="text-gray-500"></span>
                    </div>
                    <p className="text-gray-700 mt-2"></p>
                    <p className="text-gray-700 mt-2">In Stock: </p>
                    <div className="mt-4">
                        <label htmlFor="quantity" className="text-gray-700 mr-3">Quantity:</label>
                        <select
                            id="quantity"
                            className="bg-white border border-gray-300 p-2 rounded-md mt-2"
                        >
                        </select>
                    </div>
                    <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-yellow-600"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Customer Reviews</h2>
                <div className="mt-4">
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Write a Review</h3>
                    <div className="mt-2">
                        <label htmlFor="userReview" className="text-gray-700">Your Review:</label>
                        <textarea
                            id="userReview"
                            className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
                            rows="4"
                            placeholder="Write your review here..."
                        />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="rating" className="text-gray-700 mr-2">Rating:</label>
                        <select
                            id="rating"
                            className="bg-white border border-gray-300 p-2 rounded-md mt-2"
                        >

                        </select>
                    </div>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
                    >
                        Submit Review
                    </button>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Write a Review</h3>
                    <p className="text-gray-700">Please <Link to="/login" className="text-blue-500 hover:underline">log in</Link> to write a review.</p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen

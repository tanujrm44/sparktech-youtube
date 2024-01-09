const UserProfile = () => {
    return (
        <div className="flex">
            <div className="w-1/4 p-4">
                <h1 className="text-xl font-semibold mb-4">Profile</h1>
                <form className="mb-6">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border p-2 w-full rounded-md"
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
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                        Update Profile
                    </button>
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserProfile

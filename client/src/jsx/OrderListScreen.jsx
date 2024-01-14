export default function OrderListScreen() {
    return (
        <div className="mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Orders List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">ID</th>
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">User</th>
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">Date</th>
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">Total</th>
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">Delivered</th>
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

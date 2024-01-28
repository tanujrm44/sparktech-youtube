export default function UsersListScreen() {
    return (
        <div className="mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Users</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">ID</th>
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">Name</th>
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">Email</th>
                            <th className="border border-gray-300 py-2 px-4 sm:px-6 md:px-8">isAdmin</th>
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

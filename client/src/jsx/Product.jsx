import React from 'react'

export default function Product() {
    return (
        <div className="bg-white p-4 shadow-md rounded-md cursor-pointer">
            <img src="" alt="" className="w-full h-48 object-contain mb-2" />
            <h2 className="text-lg font-semibold overflow-ellipsis"></h2>
            <div className="flex items-center mt-1">
                <span className="text-yellow-500 mr-1"></span>
                <span className="text-gray-500"></span>
            </div>
            <p className="mt-2 text-gray-700"></p>
        </div>
    )
}

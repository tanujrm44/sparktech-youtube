import React from 'react'
import { Link } from 'react-router-dom'

export default function Paginate({ pages, page, isAdmin = false, keyword = '' }) {
    const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1)

    return pages > 1 ? (
        <ul className='flex space-x-2'>
            {pageNumbers?.map(pageNumber => (
                <Link to={!isAdmin ? keyword ? `/search/${keyword}/page/${pageNumber}` : `/page/${pageNumber}` : `/admin/products/${pageNumber}`}
                    key={pageNumber}
                    className={`px-3 py-2 rounded-md border ${page === pageNumber ? 'bg-blue-500 text-white' : 'border-gray-300 hover:bg-gray-100'}`}
                >{pageNumber}</Link>
            ))}
        </ul>
    ) : null
}

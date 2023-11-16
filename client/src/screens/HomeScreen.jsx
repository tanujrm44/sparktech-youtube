import React from 'react'
import { products } from '../data/products'
import Product from '../components/Product'

export default function HomeScreen() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
            {
                products.map((product, i) => (
                    <Product key={i} product={product} />
                ))
            }
        </div>
    )
}

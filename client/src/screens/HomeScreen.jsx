import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import axios from "axios"
import { BACKEND_URL } from '../constants'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../slices/userSlice'
import { useParams } from 'react-router-dom'

export default function HomeScreen() {
    const { keyword } = useParams()
    const dispatch = useDispatch()
    const { data: products, isLoading, error } = useGetProductsQuery(keyword)

    const getUser = async () => {
        try {
            const res = await axios.get(`${BACKEND_URL}/auth/login/success`, {
                withCredentials: true
            })
            dispatch(setCredentials({ ...res.data.user._json, _id: res.data._id, isAdmin: res.data.user.isAdmin }))
        } catch (error) {
            toast.error(error?.data?.message || error?.error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    if (isLoading) {
        return <Spinner />
    }

    if (error) {
        toast.error(error?.data?.message || error?.error)
    }

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                {products?.map((product, i) => (
                    <Product key={i} product={product} />
                ))}
            </div>
        </>
    )
}

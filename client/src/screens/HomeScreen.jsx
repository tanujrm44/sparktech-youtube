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
import Paginate from '../components/Paginate'

export default function HomeScreen() {
    const dispatch = useDispatch()
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

    const { keyword, pageNumber } = useParams()

    const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber })

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : error ? (
                toast.error(error)
            ) : (
                <>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                        {data?.products?.map((product, i) => (
                            <Product key={i} product={product} />
                        ))}
                    </div>
                    <div className='flex justify-center mt-12'>
                        <Paginate pages={data.pages} page={data.pageNumber} keyword={keyword ? keyword : ""} />
                    </div>
                </>)}
        </>
    )
}

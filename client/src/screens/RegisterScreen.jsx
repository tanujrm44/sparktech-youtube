import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRegisterMutation } from '../slices/userApiSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCredentials } from '../slices/userSlice'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'

export default function LoginScreen() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [register, { isLoading }] = useRegisterMutation()

    const handleRegister = async e => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert("Passwords do not match")
        } else {
            try {
                const res = await register({ name, email, password }).unwrap()
                dispatch(setCredentials({ ...res }))
                navigate("/")
                toast.success("Register Successful")
            } catch (error) {
                toast.error(error?.data?.message || error?.error)
            }
        }
    }

    const handleGoogleAuth = () => {
        try {
            window.location.href = `${BACKEND_URL}/auth/google/callback`
        } catch (err) {
            toast.error(err?.data?.message || err.error)

        }
    }

    return (
        <div className="container mx-auto mt-8 mb-28 p-4 max-w-md ">
            <h2 className="text-2xl font-semibold mb-4">Register</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-4">
                    <label htmlFor="name" className="text-gray-700">Name:</label>
                    <input
                        type="name"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="text-gray-700">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="bg-white border border-gray-300 p-2 rounded-md mt-2 w-full"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
                    onClick={handleRegister}
                    disabled={isLoading}
                >
                    Register
                </button>
                <button
                    type='button'
                    className="bg-red-600 text-white px-4 py-2 rounded-md mt-4 ml-3 hover:bg-red-700"
                    onClick={handleGoogleAuth}
                >
                    Sign up with Google
                </button>
                {isLoading && <Spinner />}
            </form>
            <p className="mt-4">
                Already have an account? <Link to="/login" className="text-blue-500">Sign In</Link>.
            </p>
        </div>
    )
}

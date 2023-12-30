import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PrivateRoute() {
    const { userInfo } = useSelector(state => state.user)
    return userInfo ? <Outlet /> : <Navigate to="/login" replace />
}

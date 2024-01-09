import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function AdminRoute() {
    const { userInfo } = useSelector(state => state.user)
    return userInfo?.isAdmin ? <Outlet /> : <Navigate to="/" replace />
}

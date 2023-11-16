import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className='container py-3 mx-auto flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

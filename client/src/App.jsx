import React from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className='container py-3 mx-auto flex-grow'>
          lihfvodi
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

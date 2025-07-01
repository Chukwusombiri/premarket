import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { SiFuturelearn } from "react-icons/si";

function App() {
  return (
    <main className='bg-secondary min-h-screen px-8'>
      <header className='h-16 max-w-7xl mx-auto flex items-center'>
        <Link to={'/'} className='flex items-center'>          
          <span className="text-gray-100 inter-extrabold text-sm md:text-md tracking-wide">Premarket</span>
        </Link>
      </header>
      <Outlet />
      <footer className='h-14 flex justify-center items-center text-sm text-gray-400'>@copyright {new Date().getFullYear()} Premarket</footer>
    </main>
  )
}

export default App

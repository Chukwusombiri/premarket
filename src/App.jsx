import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
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
      <nav className='w-full flex justify-center items-center gap-3 mt-4 flex-nowrap'>
        <NavLink to={'/'} className={({isActive}) => (`inter-extrabold text-sm md:text-md tracking-wide ${isActive ? 'border-b-2 text-gray-100' : 'text-gray-300'}`) } >          
          Home
        </NavLink>
        <NavLink to={'/documentation'} className={({isActive}) => (`text-gray-100 inter-extrabold text-sm md:text-md tracking-wide ${isActive ? 'border-b-2 text-gray-100' : 'text-gray-300'}`) } >          
          Docs
        </NavLink>
      </nav>
      <footer className='h-14 flex justify-center items-center text-sm text-gray-400'>@copyright {new Date().getFullYear()} Premarket</footer>
    </main>
  )
}

export default App

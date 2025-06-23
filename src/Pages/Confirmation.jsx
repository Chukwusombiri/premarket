import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Confirmation() {
  const {storedEmail} = useLoaderData();
  
  return (
    <div className='h-[80vh] flex justify-center items-center text-gray-200'>
      <div className="flex flex-col items-center gap-y-4 w-full max-w-3xl mx-auto">
        <h1 className='text-4xl inter-bold text-emerald-500 tracking-wide'>Congratulations!</h1>
        <h4 className='text-xl inter-semibold tracking-wide'>You have been added to the Waitlist using {storedEmail}</h4>
        <Link to={'/'} 
        className="bg-cyan-700 text-gray-100 text-sm inter-bold capitalize rounded-full disabled:bg-cyan-800 hover:bg-cyan-600 tracking-wider px-6 py-2 cursor-pointer"
        >Go back home</Link>
      </div>
    </div>
  )
}


export function loader() {
  const storedEmail = localStorage.getItem('email');
  if (!storedEmail) {
    throw new Response("You are not permitted to view this page", {
      status: 403,
      statusText: "Forbidden",
    });
  }
  return { storedEmail };
}

export default Confirmation
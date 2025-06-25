import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineNotStarted } from "react-icons/md";
import { TiArrowRepeat } from "react-icons/ti";
import { FiArrowUpCircle } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { LiaTelegram } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = ({msg}) => (<div className='flex flex-nowrap items-center gap-3 text-blue-600 max-w-[90vw]'>
    <AiOutlineLoading3Quarters className='size-6 animate-spin shrink-0'/>
    <span className='text-sm tracking-wider inter-semibold break-words'>{msg}</span>
</div>)


function Home() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const navigate = useNavigate();
    const handleClick = async() => {
        setIsLoading(true);        
        if(!email || email.length==0 || !emailRegex.test(email)){
            setIsLoading(false);
            setError('Email address must be valid');
            return;
        }
        setTimeout(()=>{
            setIsLoading(false)
            localStorage.setItem('email', email);
            navigate('/confirmation')
        },3000)

        toast(<Loading msg={"Request processing..."}/>, {
            autoClose: 2900,
        })
    }
    return (
        <div className="min-h-[80vh] py-10 md:py-16 max-w-7xl mx-auto inter-regular">
            <ToastContainer 
            toastClassName="!w-full !max-w-xs sm:!max-w-sm md:!max-w-md"
            bodyClassName="flex items-center gap-2"/>
            <div className="pb-12 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-x-8 gap-y-24">
                {/* first grid */}
                <div className="flex flex-col justify-center items-center md:items-start">
                    <div className='mb-6'>
                        <span className="p-2 rounded-full border border-blue-600 inline-flex items-center">
                            <IoMdCheckmarkCircleOutline className='text-blue-600 size-5 mr-2' />
                            <span className="text-blue-600 text-sm inter-light">Leverage AI and predict the future</span>
                        </span>
                    </div>
                    <h1 className="text-center md:text-start mb-6 text-4xl lg:text-5xl inter-bold text-gray-100 capitalize tracking-wide leading-tight max-w-sm">
                        An all in one App to predict the future
                    </h1>
                    <p className="text-center md:text-start mb-8 lg:mb-12 text-lg text-gray-400 inter-regular max-w-sm">Build and scale your future predictions with Premarket app.</p>
                    <div>
                        <h4 className="text-center md:text-start inter-regular text-sky-600 mb-3 tracking-wider">Request for better tester access</h4>
                        <div className="text-center md:text-start flex gap-2 flex-wrap justify-center md:justify-start">
                            {
                                error && <p className='text-red-600 text-sm w-full'>{error}</p>
                            }
                            <input
                                required                                
                                type="email"
                                name="email"
                                id="email"
                                placeholder='your-email@example.com'
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if(error)setError(null);                                    
                                }}
                                className='block w-full bg-gray-600 text-gray-50 p-4 rounded-lg outline-none text-sm placeholder:text-sm border border-transparent focus:border-gray-100' />
                            <button 
                            onClick={handleClick}
                            disabled={isLoading}
                            type='button' 
                            className="mt-2 bg-cyan-700 text-gray-100 text-sm inter-bold capitalize rounded-full disabled:bg-cyan-800 hover:bg-cyan-600 tracking-wider px-6 py-2 cursor-pointer">Join Waitlist</button>
                        </div>
                    </div>
                </div>
                {/* second grid */}
                <div className="flex flex-col justify-center items-center gap-y-8 lg:gap-y-12">
                    <span className="bg-gray-100 text-gray-900 inter-medium px-8 py-1.5 rounded-xl tracking-wider inline-flex items-center gap-3">
                        <span className="bg-green-200 rounded-xl p-2 shadow">
                            <MdOutlineNotStarted className='size-7 text-green-800' />
                        </span>
                        <span className="text-lg capitalize">start</span>
                    </span>
                    <div className="flex gap-6 items-center relative">
                        <span className='absolute -left-10 -top-2 bg-indigo-300 pb-5 pt-2 px-2 rounded text-xs'>1</span>
                        <span className="w-72 bg-gray-100 text-gray-900 inter-medium px-8 py-1.5 text-md rounded-xl tracking-wider inline-flex items-center gap-3">
                            <span className="bg-indigo-300 rounded-xl p-2 shadow">
                                <FiArrowUpCircle className="rotate-45 size-7 text-indigo-800" />
                            </span>
                            Visit PreMarket App
                        </span>
                    </div>
                    <div className="flex gap-6 items-center relative">
                        <span className='absolute -left-10 -top-2 bg-purple-300 pb-5 pt-2 px-2 rounded text-xs'>2</span>
                        <span className="w-72 bg-gray-100 text-gray-900 inter-medium px-8 py-1.5 text-md rounded-xl tracking-wider inline-flex items-center gap-3">
                            <span className="bg-purple-300 rounded-xl p-2 shadow">
                                <IoSearch className='size-7 text-purple-800' />
                            </span>
                            Find a market
                        </span>
                    </div>
                    <div className="flex gap-6 items-center relative">
                        <span className='absolute -left-10 -top-2 bg-orange-300 pb-5 pt-2 px-2 rounded text-xs'>3</span>
                        <span className="w-72 bg-gray-100 text-gray-900 inter-medium px-8 py-1.5 text-md rounded-xl tracking-wider inline-flex items-center gap-3">
                            <span className="bg-orange-300 rounded-xl p-2 shadow">
                                <LiaTelegram className='size-7 text-orange-800' />
                            </span>
                            Predict
                        </span>
                    </div>
                    <div className="flex gap-6 items-center">                        
                        <span className="bg-gray-100 text-gray-900 inter-medium px-8 py-1.5 text-md rounded-xl tracking-wider inline-flex items-center gap-3">
                            <span className="bg-transparent p-2">
                                <TiArrowRepeat className='size-7' />
                            </span>
                            Repeat
                        </span>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Home
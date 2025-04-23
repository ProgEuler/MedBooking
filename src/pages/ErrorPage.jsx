import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router'

export default function ErrorPage() {
  return (
    <div>
        <NavBar />
        <div className="flex items-center justify-center bg-[#EFEFEF] h-screen">
            <div className="bg-blue-600 text-white rounded-xl shadow-lg p-10 relative lg:w-[400px] text-center border border-white/20">
                {/* Dotted corners (top-left & bottom-right) */}
                <div className="absolute top-4 left-4 space-y-1">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex space-x-1">
                    {[...Array(3)].map((_, j) => (
                        <span
                        key={j}
                        className="w-1 h-1 bg-white/70 rounded-full"
                        ></span>
                    ))}
                    </div>
                ))}
                </div>
                <div className="absolute bottom-4 right-4 space-y-1">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex space-x-1">
                    {[...Array(3)].map((_, j) => (
                        <span
                        key={j}
                        className="w-1 h-1 bg-white/70 rounded-full"
                        ></span>
                    ))}
                    </div>
                ))}
                </div>

                <h1 className="text-6xl font-bold">404</h1>
                <h2 className="text-xl mt-4 font-semibold">Here Is Some Problem</h2>
                <div className="mt-2 text-sm text-white/90">
                The page you are looking for it maybe deleted
                </div>
                <Link to='/'>
                    <button className="mt-6 px-5 py-2 bg-white text-blue-600 font-medium rounded-lg shadow hover:bg-gray-200 transition cursor-pointer">
                    Go To Home
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

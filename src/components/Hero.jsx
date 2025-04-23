import React from 'react'
import heroDoc from '../assets/banner-img-1.png'

export default function Hero() {
  return (
    <div className="border-4 border-white bg-gradient-to-b from-[#EFEFEF] to-white pt-16 pb-8 rounded-3xl shadow-lg mx-4 lg:mx-10">
        <div className="text-center ">
            <div className='flex flex-col items-center justify-center'>
                <h1 className="text-3xl lg:text-5xl font-bold">Dependable Care, Backed by Trusted <br /> Professionals.</h1>
                <p className="py-6">
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
               <form>
                    <input
                        type="text"
                        placeholder="Search any doctors..."
                        className='border-2 border-gray-300 rounded-full px-4 lg:w-[600px] h-12 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0 bg-white mr-3'
                    />
                    <button
                        className="bg-blue-700 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-800 transition duration-300 ease-in-out"
                    >
                            Search Now
                    </button>
               </form>
               <div className='flex flex-col lg:flex-row gap-8 mt-10'>
                <img src={heroDoc} alt="" />
                <img src={heroDoc} alt="" />
               </div>
            </div>
        </div>
    </div>
  )
}

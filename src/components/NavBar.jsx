import React from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../assets/logo.png'

export default function NavBar() {
  return (
    <div className="navbar bg-[#EFEFEF] mx-auto py-6 pb-8 md:px-10 lg:px-24">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow">
                    <li>
                        <NavLink
                            to="/"
                            className={(({ isActive }) => isActive ? 'border-b-2 border-primary' : '')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/my-bookings"
                            className={(({ isActive }) => isActive ? 'border-b-2 border-primary' : '')}
                        >
                            My-Bookings
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to="/Blogs"
                            className={(({ isActive }) => isActive ? 'border-b-2 border-primary' : '')}
                        >
                            Blogs
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={(({ isActive }) => isActive ? 'border-b-2 border-primary' : '')}
                        >
                            Contact Us
                        </NavLink>

                    </li>
            </ul>
            </div>
            <Link to='/' className="font-bold lg:text-xl flex items-center gap-2">
                <img src={logo} className='size-8' alt="logo" />
                <span>MedBooking</span>
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 flex gap-6 font-semibold text-gray-800">
                <NavLink
                    to="/"
                    className={(({ isActive }) => isActive ? 'border-b-2 border-primary' : '')}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/my-bookings"
                    className={(({ isActive }) => isActive ? 'border-b-2 border-primary' : '')}
                >
                    My-Bookings
                </NavLink>
                <NavLink
                    to="/Blogs"
                    className={(({ isActive }) => isActive ? 'border-b-2 border-primary' : '')}
                >
                    Blogs
                </NavLink>
                <NavLink
                    to="/contact"
                    className={(({ isActive }) => isActive ? 'border-b-2 border-primary' : '')}
                >
                    Contact Us
                </NavLink>
            </ul>
        </div>
        <div className="navbar-end">
            <button
            className="bg-blue-700 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-800 transition duration-300 ease-in-out"
            >
                Emergency
            </button>
        </div>
    </div>
  )
}

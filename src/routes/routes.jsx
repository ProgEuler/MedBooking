import React from 'react'
import { createBrowserRouter } from 'react-router';
import MyBookings from '../pages/MyBookings';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';
import MainLayout from '../layouts/MainLayout';
import Doctor from '../pages/Doctor';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                hydrateFallbackElement:
                    <div className="flex justify-center items-center h-screen">
                        <span className="loading loading-bars loading-xl"></span>
                    </div>,
                loader: () => fetch('../doctors.json')
            },
            {
                path: '/doctor/:id',
                element: <Doctor />,
                hydrateFallbackElement:
                    <div className="flex justify-center items-center h-screen">
                        <span className="loading loading-bars loading-xl"></span>
                    </div>,
                loader: () => fetch('../doctors.json')
            },
            {
                path: '/my-bookings',
                element: <MyBookings />,
                hydrateFallbackElement:
                    <div className="flex justify-center items-center h-screen">
                        <span className="loading loading-bars loading-xl"></span>
                    </div>,
            },
            {
                path: '/blogs',
                element: <Blogs />,
                hydrateFallbackElement:
                    <div className="flex justify-center items-center h-screen">
                        <span className="loading loading-bars loading-xl"></span>
                    </div>,
                loader: () => fetch('blogs.json')

            },
        ]
    },
  ]);

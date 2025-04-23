import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import DynamicTitle from '../components/DynamicTitle'

export default function MainLayout() {
  return (
    <div>
        <DynamicTitle />
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

import React from 'react'
import Hero from '../components/Hero'
import DoctorsContainer from '../components/DoctorsContainer'
import { useLoaderData } from 'react-router'
import TotalStats from '../components/TotalStats'

export default function Home() {
    const doctors = useLoaderData()
  return (
    <div className='bg-[#EFEFEF]'>
        <Hero />
        <DoctorsContainer doctors={doctors} />
        <TotalStats />
    </div>
  )
}

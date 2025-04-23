import React, { useEffect, useState } from 'react'
import AppointmentContainer from '../components/AppointmentContainer'
import { Toaster } from 'react-hot-toast'
import Chart from '../components/Chart'
import { cancelAppointment, getBookings } from '../utils'
import { Link } from 'react-router'
export default function MyBookings() {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })

    const [displayAppointments, setDisplayAppointment] = useState([])

        useEffect( () => {
            const bookedAppointments = getBookings()
            setDisplayAppointment(bookedAppointments)
        }, [])

        const handleCancel = (id) =>{
            cancelAppointment(id)
            setDisplayAppointment(getBookings())
        }
  return (
    <div className='bg-[#EFEFEF] pb-8'>

            <Toaster
                position='top-right'
                reverseOrder={false}
            />
        {
            displayAppointments.length < 1 ?

                    <div className='px-4 md:px-10 lg:px-24'>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold mb-4'>My Today Appointments</h1>
                            <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                        </div>
                    <div className='bg-white p-6 my-8 rounded-xl flex flex-col justify-center items-center'>

                        <span className='text-3xl font-bold'>Doctor is not booked yet</span>
                        <p className='mt-2'>Please go back to the homepage and select a doctor to proceed with booking.</p>
                        <br />
                        <Link to='/'>
                            <button className='btn bg-blue-600 text-lg p-6 text-white'>
                                See Doctors
                            </button>
                        </Link>
                    </div>
                    </div>

                : <div>
                    <Chart data={displayAppointments} />
                    <AppointmentContainer
                        displayAppointments={displayAppointments}
                        handleCancel={handleCancel}
                        cancelAppointment={cancelAppointment}
                    />
                </div>
        }

    </div>
  )
}

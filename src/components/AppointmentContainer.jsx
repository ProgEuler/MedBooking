import React, { useEffect, useState } from 'react'
import { cancelAppointment, getBookings } from '../utils'
import Appointment from './Appointment'
import { Link } from 'react-router'


export default function AppointmentContainer({
    displayAppointments,
    handleCancel
}) {

  return (
    <div className='px-4 md:px-10 lg:px-24'>
        <div className='text-center'>
            <h1 className='text-4xl font-bold mb-4'>My Today Appointments</h1>
            <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

            {
                 displayAppointments?.map( doctor =>
                    <Appointment key={doctor.id} doctor={doctor} handleCancel={handleCancel} />
                )
            }

        </div>
    </div>
  )
}

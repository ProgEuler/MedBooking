import React, { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function DynamicTitle({ doctorName }) {
    const location = useLocation()

    useEffect(() => {
        const path = location.pathname

        if (path.startsWith('/my-booking')) {
            document.title = 'Bookings'
        }
        else if (path.startsWith('/doctor')) {
            document.title = doctorName || 'Doctor'
        }
        else {
            document.title = 'MedBooking'
        }

    }, [location, doctorName])
    return null
}

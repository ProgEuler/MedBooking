import React from 'react'

export default function DoctorCardAvailability({ availability }) {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long'})
    const isAvailable = availability.some( day => day === today)
  return (
    <div>
        {
            isAvailable ?
                <div
                className="badge badge-dash bg-green-50 badge-success">
                    Available
                </div>
            :
                <div
                className="badge badge-dash bg-red-50 badge-error">
                    Unavailable
                </div>
        }
    </div>
  )
}

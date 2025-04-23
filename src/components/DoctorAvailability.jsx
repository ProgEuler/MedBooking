import React from 'react'

export default function DoctorAvailability({ availability }) {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long'})
    const isAvailable = availability.some( day => day === today)
  return (
    <div>
        {
            isAvailable ?
                <div
                    className="badge badge-dash bg-green-50 badge-success ">
                    Doctor Available Today
                </div>
            :
                <div
                    className="badge badge-dash bg-red-50 badge-error">
                    Doctor is not Available Today
                </div>
        }
    </div>
  )
}

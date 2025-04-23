import React from 'react'
import { Link } from 'react-router'
import DoctorCardAvailability from './DoctorCardAvailability'

export default function DoctorCard({ doctor }) {
  const { id, name, image, speciality, education, experience, registrationNumber, availability } = doctor
  return (
    <div className='p-6 lg:px-0 w-11/12 rounded-xl bg-white flex flex-col justify-center lg:items-center'>
        <div className='space-y-6'>
            <div>

                <img
                    src={image}
                    alt="doc-img"
                    className='w-70 h-60 object-cover object-top rounded-lg'
                />
            </div>
            <div className='text-left space-y-2'>
                <div className='flex flex-col lg:flex-row gap-2'>
                    {
                        <DoctorCardAvailability availability={availability} />
                    }
                    <div className="badge badge-dash bg-blue-50 text-blue-600 badge-info">{experience} experience</div>
                </div>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p>{`${education} - ${speciality}`}</p>
                <div className='border-1 border-dashed w-9/10 my-2 opacity-20'></div>
                <p>{`Reg No : ${registrationNumber}`}</p>
                <Link to={`/doctor/${id}`}>
                    <button
                        className="btn btn-outline border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-full mt-2 w-full"
                        >
                            View Details
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

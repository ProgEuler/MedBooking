import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router'
import { addBooking } from '../utils'
import toast, { Toaster } from 'react-hot-toast'
import DynamicTitle from './DynamicTitle'
import DoctorAvailability from './DoctorAvailability'

export default function DoctorDetails() {

    const data = useLoaderData()
    const { id } = useParams()
    const DoctorDetails = data.find(doc => doc.id === parseInt(id))
    const {
        image,
        name,
        education,
        speciality,
        hospital,
        fee,
        availability,
        registrationNumber
     } = DoctorDetails || {}

     const navigate = useNavigate()

     const handleBookings = () => {
        const isAdded = addBooking(DoctorDetails);

        if (isAdded) {
            toast.error(`${name}'s Appointment is already taken.`);
        } else {
            toast.success(`Booked ${name}'s appointment`)
            navigate('/my-bookings')
        }
     }

     window.scroll({
        top: 0,
        behavior: "smooth"
     })
  return (
    <div className='px-4 md:px-10 lg:px-24 pt-8'>
        <Toaster
            position='top-right'
            reverseOrder={false}
        />
        <DynamicTitle doctorName={name} />
        <div className='bg-white text-center space-y-4 mb-8 p-12 rounded-4xl'>
            <h1 className='text-4xl font-bold'>Doctor's Profile Details</h1>
            <p>
                Browse detailed profiles of certified medical professionals. Learn about their expertise, years of experience, specialties, and patient reviews — all in one place, to help you make informed healthcare decisions.
            </p>
        </div>

        <div className='flex flex-col lg:flex-row bg-white gap-8 px-10 py-14 rounded-4xl'>
            <img
                src={image}
                alt=""
                className='rounded-xl object-cover w-[335px]'
            />
            <div className='space-y-6'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p>{education} <br /> {speciality}</p>
                <div>
                    Working at <br /> <span className='font-bold'>{hospital}</span>
                </div>
                <div className='border-1 border-dashed w-9/10 opacity-20'></div>
                <p>Reg No: {registrationNumber}</p>
                <div className='border-1 border-dashed w-9/10 opacity-20'></div>
                <span className='font-bold flex flex-wrap gap-4'>
                    Availabilty :
                    {
                        availability?.map((day, index) =>
                            <div key={index} className="badge badge-dash bg-green-50 badge-success ">{day}</div>
                        )
                    }
                </span>
                <p className='font-bold'>
                    Consultation Fee :
                    <span className='text-red-500 ml-2'>
                        <span className='text-3xl text-blue-700'>
                            ৳{fee}
                        </span>
                        <span className='text-gray-600 font-normal mx-2'>(incl. Vat)</span>
                        Per consultation
                    </span>
                </p>
            </div>
        </div>

        <div className='flex flex-col gap-8 p-12 bg-white rounded-4xl mt-8 text-center lg:text-lg '>
            <h1 className='text-xl lg:text-3xl font-bold'>Book an Appointment</h1>
            <div className='border-1 border-dashed opacity-20'></div>
            <span className='font-bold flex flex-wrap justify-between'>
                Availability :

                {
                    <DoctorAvailability availability={availability}/>
                }

            </span>
            <div className='border-1 border-dashed opacity-20'></div>
            <div className="badge badge-dash bg-yellow-50 badge-warning h-full">
                 Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
            </div>

                <button
                    onClick={() => {
                        handleBookings()
                    }}
                    className="bg-blue-700 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-800 transition duration-300 ease-in-out w-full"
                >
                    Book Appointment Now
                </button>
        </div>
    </div>
  )
}

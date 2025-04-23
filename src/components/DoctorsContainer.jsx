import React, { useEffect, useState } from 'react'
import DoctorCard from './DoctorCard'

export default function DoctorsContainer({ doctors }) {

    const [displayDoctors, setDisplayDoctors] = useState([])
    const [viewAll, setViewAll] = useState(false)

    useEffect( () => {
        viewAll ? setDisplayDoctors(doctors) : setDisplayDoctors(doctors.slice(0, 6))
    }, [doctors, viewAll])

  return (
    <div className='text-center py-12 px-4'>
        <h1 className='text-4xl font-bold py-8'>Our Best Doctors</h1>
        <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-12 md:px-10 lg:px-24'>

            {
                displayDoctors.map(doctor =>
                    <DoctorCard key={doctor.id} doctor={doctor}/>
                )
            }


        </div>
            <button
                onClick={() => {
                        setViewAll( prev => !prev)
                        if(viewAll){
                            window.scroll({
                            top: 1000,
                            behavior: "smooth",
                            });
                        }
                    }
                }
                className="bg-blue-700 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-800 transition duration-300 ease-in-out"
            >
                    {viewAll ? 'View Less Doctors' : 'View All Doctors'}
            </button>
    </div>
  )
}

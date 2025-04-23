import React from 'react'
import doctorsCount from '../assets/success-doctor.png'
import patientsCount from '../assets/success-patients.png'
import reviewsCount from '../assets/success-review.png'
import staffsCount from '../assets/success-staffs.png'
import CountUp from 'react-countup';

export default function TotalStats() {
  return (
    <div className='py-6 pb-8 px-4 md:px-10 lg:px-24 text-center'>
        <h1 className='text-4xl font-bold mb-4'>We Provide Best Medical Services</h1>
        <p>
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-16 mt-8'>
            <div className='text-left bg-white p-8 rounded-xl flex flex-col gap-2'>
                <img
                src={doctorsCount} alt=""
                className='size-16'
                />
                <span className='text-5xl font-bold'>
                    <CountUp
                        start={0}
                        end={199}
                        duration={3}
                        separator=" "
                        decimal=","
                        suffix="+"
                    />
                </span>
                <p>Total Doctors</p>
            </div>
            <div className='text-left bg-white p-8 rounded-xl flex flex-col gap-2'>
                <img
                src={reviewsCount} alt=""
                className='size-16'
                />
                <span className='text-5xl font-bold'>
                <CountUp
                        start={0}
                        end={467}
                        duration={4}
                        separator=" "
                        decimal=","
                        suffix="+"
                    />
                </span>
                <p>Total Reviews</p>
            </div>
            <div className='text-left bg-white p-8 rounded-xl flex flex-col gap-2'>
                <img
                src={patientsCount} alt=""
                className='size-16'
                />
                <span className='text-5xl font-bold'>
                <CountUp
                        start={0}
                        end={1900}
                        duration={6}
                        separator=" "
                        decimal=","
                        suffix="+"
                    />
                </span>
                <p>Patients</p>
            </div>
            <div className='text-left bg-white p-8 rounded-xl flex flex-col gap-2'>
                <img
                src={staffsCount} alt=""
                className='size-16'
                />
                <span className='text-5xl font-bold'>
                <CountUp
                        start={0}
                        end={300}
                        duration={4}
                        separator=" "
                        decimal=","
                        suffix="+"
                    />
                </span>
                <p>Total Staffs</p>
            </div>

        </div>
    </div>
  )
}

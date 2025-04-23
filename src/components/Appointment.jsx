import React from 'react'

export default function Appointment({ doctor, handleCancel }) {
    const { id, name, image, education, speciality, fee } = doctor || {}

  return (

    <div className='bg-white p-8 rounded-2xl space-y-4 lg:space-y-8 mt-8'>
        <div className='flex flex-wrap items-center justify-between'>
            <div className='flex w-full items-center gap-4 lg:gap-8 mb-4 lg:mb-0'>
                <img src={image} alt="" className='size-34 object-cover rounded-2xl'/>

                <div className='text-left w-full flex flex-col lg:flex-row justify-between gap-2'>
                    <div>
                        <h1 className='font-bold lg:text-2xl mb-2'>{name}</h1>
                        <p>{education} - {speciality}</p>
                    </div>

                    <div className='lg:text-right'>
                        <span className='text-xl lg:text-4xl font-bold text-blue-700'>৳{fee}</span>
                        <p>Appointment Fee + Vat</p>
                    </div>
                </div>
            </div>

        </div>
        <div className='border-1 border-dashed opacity-20'></div>
        <button
            onClick={() =>  handleCancel(id)}
            className="btn btn-outline rounded-full border-2 text-red-500 border-red-500 lg:text-lg hover:bg-red-500 hover:text-black w-full">
                Cancel Appointment
        </button>

    </div>
  )
}

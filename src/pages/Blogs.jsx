import React from 'react'
import { useLoaderData } from 'react-router'
import DynamicTitle from '../components/DynamicTitle'

export default function Blogs() {
    const data = useLoaderData()
  return (
    <div className='bg-[#EFEFEF] pb-8'>
        <DynamicTitle />
        <div className='p-4 md:p-10 lg:p-24'>
            {
                data.map((q, index) => (
                    <div key={index} className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-semibold">
                            {q.question}
                        </div>
                        <div className="collapse-content text-sm">
                            {q.answer}
                        </div>
                    </div>
                ))
            }

        </div>

    </div>
  )
}

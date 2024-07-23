import { companies } from '@/data'
import Image from 'next/image'
import React from 'react'

const Techstack = () => {
  return (
    <section className='p-20'>
      <div className="flex flex-col items-center py-20 " id="techstack">
        <h1 className="heading">My{' '}
        <span className="text-purple">Tech-Stack</span>
        </h1>

          <div className="items-center justify-center ml-10 md:gap-10 gap-6 mt-16 grid grid-cols-4 00 py-2">
            {companies.map((company) => (
              <React.Fragment key={company.id}>
                <div className=" gap-2 justify-center">
                  <img
                    src={company.img}
                    alt={company.name}
                    className="w-20 pb-10"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

    </section>
  )
}

export default Techstack

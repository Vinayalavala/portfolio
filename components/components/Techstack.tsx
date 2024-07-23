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

          <div className="items-center justify-center gap-10 mt-16 flex flex-wrap py-2">
            {companies.map((company) => (
              <React.Fragment key={company.id}>
                <div className=" gap-2 justify-center">
                  <img
                    src={company.img}
                    alt={company.name}
                    className="w-14 pb-10"
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

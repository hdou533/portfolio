import React from 'react'
import Image from 'next/image'
import { experience } from '@/libs/data'


const Resume = () => {
  return (
    <div className='w-full max-w-screen-lg h-auto text-justify flex flex-col justify-center items-center gap-8 mb-16 lg:w-[80%] xl:w-[60%]'>
      
      <div className='flex flex-col gap-8 p-8'>
        <Image src="/code-alt-regular-48.png" width={48} height={48} alt='' />
        
        <p className='mt-8'>With a year of commercial experience as a Software Developer, I&apos;ve had the opportunity to work on diverse projects that have enriched my technical prowess. I thrive on the challenges that coding presents, constantly seeking innovative ways to enhance user interfaces and create seamless interactions.</p>
        <div className=''>

          <div className='flex items-center gap-4 my-8'>
            <Image src="/game-regular-48.png" width={48} height={48} alt='' />
            <span className='text-2xl'>· · ·</span>
            <span className='text-2xl ml-2'>· · ·</span>
          </div>

          {
            experience.map(item => (
              <div key={`${item.title}-${item.organisation}`} className='my-8'>
                <h1 className='text-lg underline decoration-pink-600 underline-offset-8 mb-2'>{ item.title}</h1>
                <p>{ item.organisation}</p>
                <p className='text-sm'>{ item.year}</p>
                <p className='rouned-md my-8 p-8 border-1 bg-primary w-full h-40 overflow-y-auto'>{item.desc}</p>
                <div className='flex gap-2 flex-wrap'>
                  {item.tech.map((t, index) => (
                  <span key={`tech_${index}`} className='p-1 bg-btn-blue border-grey-100'>{t}</span>
                  ))}
                </div>
              </div>
            ))
          }
          
          
          
        </div>
        
        <div className='my-8'>
          {/* <div className='flex gap-2 mb-8'>
          <Image src="/ghost-regular-48.png" width={48} height={48} alt='' />
          <Image src="/ghost-solid-48.png" width={48} height={48} alt='' />
          <Image src="/ghost-regular-48.png" width={48} height={48} alt='' />
          </div> */}
          
          <a href="/pdfs/cv-sallydou.pdf" className='underline decoration-pink-600 underline-offset-8'>Download CV</a>
        </div>
        </div>
    </div>
  )
}

export default Resume

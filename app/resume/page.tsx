import React from 'react'
import Image from 'next/image'
import { experience } from '@/libs/data'
import ResumeCard from '@/components/ResumeCard'


const Resume = () => {
  return (
    <div className='w-full max-w-screen-lg h-auto text-left flex flex-col justify-center items-center gap-8 mb-16 lg:w-[80%] xl:w-[60%]'>
      
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
              <div className='' key={`${item.title}-${item.organisation}`}>
                <ResumeCard title={item.title} organisation={item.organisation} year={item.year} desc={item.desc} tech={item.tech} />
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

import React from 'react'
import Image from 'next/image'


const Resume = () => {
  return (
    <div className='w-full max-w-screen-lg h-auto p-8 text-justify flex flex-col justify-center items-center gap-8 lg:w-[80%] xl:w-[60%]'>
      
      <div className='flex flex-col gap-8'>
        <Image src="/code-alt-regular-48.png" width={48} height={48} alt='' />
        {/* <div className='flex gap-2'>
          <Image src="/ghost-regular-48.png" width={48} height={48} alt='' />
          <Image src="/ghost-solid-48.png" width={48} height={48} alt='' />
          <Image src="/ghost-regular-48.png" width={48} height={48} alt='' />
          <Image src="/ghost-solid-48.png" width={48} height={48} alt='' />
        </div> */}
        <p className='mt-8'>With a year of hands-on experience as a Software Developer, I&apos;ve had the opportunity to work on diverse projects that have enriched my technical prowess. I thrive on the challenges that coding presents, constantly seeking innovative ways to enhance user interfaces and create seamless interactions.</p>
        <div className=''>

          <div className='flex items-center gap-4 my-8'>
            <Image src="/game-regular-48.png" width={48} height={48} alt='' />
            <span className='text-2xl'>· · ·</span>
            <span className='text-2xl ml-2'>· · ·</span>
          </div>
          
          <h1 className='text-xl underline decoration-pink-600 underline-offset-8 mb-2'>Software Developer</h1>
          <p>SmartLeader</p>
          <p className='text-sm'>2022.06 - 2023.04</p>
          <p className='mt-8'></p>
          
        </div>
        <div className=''>
          
        {/* <div className='flex items-center gap-8 my-8'>
            <Image src="/game-regular-48.png" width={48} height={48} alt='' />
            <span className='text-2xl'>· · ·</span>
          </div> */}
          
          <h1 className='text-xl underline decoration-pink-600 underline-offset-8 mb-2'>Digital Marketing Specialist</h1>
          <p>New Zealand Business Association</p>
          <p className='text-sm'>2021.10 - 2022.06</p>
          <p className='mt-8'></p>
        </div>
        <div className=''>
         
        {/* <div className='flex items-center gap-6 my-8'>
            <Image src="/game-regular-48.png" width={48} height={48} alt='' />
            <span className='text-2xl'>· · ·</span>
          </div> */}
          
          <h1 className='text-xl underline decoration-pink-600 underline-offset-8 mb-2'>IT Support</h1>
          <p>Lifewise NZ</p>
          <p className='text-sm'>2021.03 - 2021.05</p>
          <p className='mt-8'></p>
        </div>
        <div className=''>
          
        {/* <div className='flex items-center gap-2 my-8'>
            <Image src="/game-regular-48.png" width={48} height={48} alt='' />
            <span className='text-2xl'>· · ·</span>
          </div> */}
          <h1 className='text-xl underline decoration-pink-600 underline-offset-8 mb-2'>Master of Information Technology</h1>
          <p>University of Auckland</p>
          <p className='text-sm'>2019.07 - 2021.06</p>
          <p className='mt-8'></p>
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

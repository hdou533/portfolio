import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {
  return (
    
    <div className='w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-8 md:flex-row md:h-[calc(100vh-3rem)]'>
      <div className='absolute top-25 w-4/5 h-3/4 flex flex-wrap items-center gap-8 md:w-1/2 md:gap-2'>
        <h1 className='text-4xl md:text-5xl'>I&apos;m <b className='text-secondary'>Sally</b> — a Software Developer with a focus on the Frontend and UX Design.</h1>
        <p className='italic md:text-xl'><span className='text-xl'>&#34;</span>I bring a dynamic blend of frontend expertise and UX design sensibilities to create captivating and user-centric digital experiences. With a passion for crafting seamless interactions and visually appealing interfaces, I thrive at the intersection of technology and design.<span className='text-lg'>&#34;</span></p>
      </div>
      <div className="area" >
        <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
      </div >
      {/* <div className='absolute right-10 bottom-20 translate-x-0 translate-y-2'>
        <Image src="/arrow-down.png" width={64} height={64} alt='' className='objetct-contain'/>
      </div> */}
    </div>
  )
}

export default Hero

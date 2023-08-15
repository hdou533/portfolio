import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {
  return (
    
    <div className='w-full h-[calc(100vh-4rem)] flex flex-col justify-center p-8 md:flex-row md:justify-around md:items-center'>
      <div className='flex flex-col text-2xl uppercase gap-6'>
        <span>Hey there,</span>
        <span>I&apos;m <b className='text-pink-600'>Sally</b></span>
        <span className='text-lg'>A Frontend Developer</span>
      </div>
      <div>
        Some animated Background
      </div>
    </div>
  )
}

export default Hero

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
      <div className='w-full h-12 left-0 bottom-0 bg-btn-blue text-white flex text-[0.6rem] fixed lg:justify-center lg:text-sm lg:static xl:text-base z-10 lg:z-0'>
            <nav className='w-full flex justify-around items-center bg-color-btn-blue lg:w-3/4 '>
          <Link href="/" className='flex-1 w-full h-full flex flex-col items-center justify-center gap-1 active:bg-background'>
              <div className='lg:hidden'>
                  <Image src='/house-chimney-blank.png'width={16} height={16} alt='' className='object-contain'/>
              </div>
              <span className='active:underline'>Home</span>
          </Link>
          <Link href="/about" className='flex-1 w-full flex flex-col items-center justify-center gap-1 '>
              <div className='lg:hidden'>
                  <Image src='/user-robot.png'width={16} height={16} alt='' className='object-contain'/>
              </div>
              <span>About</span>
          </Link>
          <Link href="/resume" className='flex-1 w-full h-full flex flex-col items-center justify-center gap-1 '>
              <div className='lg:hidden'>
                  <Image src='/file-invoice.png'width={16} height={16} alt='' className='object-contain'/>
              </div>
              <span>Resume</span>
                </Link>
                <Link href="/contact" className='flex-1 w-full h-full flex flex-col items-center justify-center gap-1 '>
              <div className='lg:hidden'>
                  <Image src='/comment-dots.png'width={16} height={16} alt='' className='object-contain'/>
              </div>
              <span>Contact</span>
          </Link>
          

    </nav>
      </div>
      
  )
}

export default Navbar

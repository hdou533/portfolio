import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
      <div className='w-full h-12 left bottom-0 bg-color-bg text-white flex text-[0.6rem] fixed lg:justify-center lg:text-sm lg:top-0 lg:static'>
            <nav className='w-full flex justify-around items-center bg-color-btn-blue lg:w-3/4 '>
          <Link href="/" className='w-full h-full flex flex-col items-center justify-center gap-1 active:bg-color-bg'>
              <div className='lg:hidden'>
                  <Image src='/house-chimney-blank.png'width={16} height={16} alt='' className='object-contain'/>
              </div>
              <span className='active:underline'>Home</span>
          </Link>
          <Link href="/about" className='w-full flex flex-col items-center justify-center gap-1 '>
              <div className='lg:hidden'>
                  <Image src='/user-robot.png'width={16} height={16} alt='' className='object-contain'/>
              </div>
              <span>About</span>
          </Link>
          <Link href="/resume" className='w-full h-full flex flex-col items-center justify-center gap-1 '>
              <div className='lg:hidden'>
                  <Image src='/file-invoice.png'width={16} height={16} alt='' className='object-contain'/>
              </div>
              <span>Resume</span>
                </Link>
                <Link href="/contact" className='w-full h-full flex flex-col items-center justify-center gap-1 '>
              <div className='lg:hidden'>
                  <Image src='/comment-dots.png'width={16} height={16} alt='' className='object-contain'/>
              </div>
              <span>Contact</span>
          </Link>
          

    </nav>
      </div>
      
  )
}

export default Header

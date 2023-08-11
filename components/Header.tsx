import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='text-white bg-color-bg'>
          <div className='px-8 py-4 flex justify-between items-center lg:justify-center lg:py-0'>
        
            <Link href="/"><Image src="/logo.png" width={24} height={24} alt=''/></Link>
            <Navbar />
            <div className='flex justify-end gap-4  items-center'>
            <a href=""><Image src="/github.png" width={20} height={20} alt=''/></a>
            <a href=""><Image src="/instagram.png" width={20} height={20} alt='' /></a>
             <a href=""><Image src="/linkedin.png" width={22} height={22} alt='' /></a>
          
            </div>
          </div>
        </div>
  )
}

export default Header

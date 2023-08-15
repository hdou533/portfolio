import React from 'react'
import { navLinks } from '../libs/data'
import Link from 'next/link'

const Footer = () => {
  return (
      <footer className='w-full text-white bg-color-bg flex flex-col text-sm xl:text-base'>
          <div className='flex justify-center items-center gap-8'>
          {navLinks.map((navLink) => 
              <Link key={navLink.id} href={navLink.address}>
                  <span>{navLink.title}</span>
              </Link>
         )}
          </div>
          
         <hr className='border-t border-pink-600 my-4 mx-auto w-5/6'/>
   
          <div className='flex justify-center items-center text-xs mb-24'>
              <p> A project by Sally &copy; 2023 | Follow me on &nbsp;
                  <a href="https://github.com/hdou533" target="_blank" className='hover:text-pink-600'>
                  @github
                  </a>
              </p>
          </div>
          

    </footer>
  )
}

export default Footer

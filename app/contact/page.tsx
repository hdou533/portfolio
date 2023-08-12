import React from 'react'
import Image from 'next/image'
import ContactForm from './../../components/ContactForm';

const Contact = () => {
  return (
    
    <div className='w-full h-auto text-justify flex flex-col justify-center lg:items-center gap-8 mb-16 sm:w-[512px]'>
      <div className='flex flex-col gap-8 p-8'>
        <Image src="/message-square-dots-solid-48.png" width={48} height={48} alt='' />
      </div>
      <div className='p-8 flex flex-col gap-4'>
        <p>Hey there!</p>
        <p> I&apos;m thrilled that you&apos;re reaching out. Whether you want to collaborate on a project, chat about the latest tech trends, or simply share your favorite anime recommendations, I&apos;d love to hear from you. Feel free to use the form below to drop me a message. I&apos;ll get back to you as soon as I can.</p>

        <p>And hey, if forms aren&apos;t your thing, you can always hit me up directly through my social media handles linked below. Let&apos;s connect and make some magic happen!</p>

        <p>Looking forward to our conversation,</p>
        <p>Sally</p>
        <div className='flex gap-4 items-center justify-start'>
        <a href="https://github.com/hdou533"><Image src="/github.png" width={24} height={24} alt=''/></a>
        <a href="https://www.instagram.com/sallydddous/"><Image src="/instagram.png" width={24} height={24} alt='' /></a>
         <a href="https://www.linkedin.com/in/hongnan-dou/"><Image src="/linkedin.png" width={26} height={26} alt='' /></a>
      
        </div>
      </div>

      
      <ContactForm title={'Get in Touch'}/>
    </div>
  )
}

export default Contact

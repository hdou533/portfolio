import React from 'react'
import Image from 'next/image'
import { hobby } from '@/libs/data'
import Link from 'next/link'
import AboutCard from '@/components/AboutCard'

const About = () => {
  return (
    <div className='w-full h-auto text-left flex flex-col justify-center items-center gap-8 mb-16 lg:w-[80%] 2xl:w-[60%]'>
      <div className='flex flex-col gap-8 p-8'>
        <Image src="/face-regular-48.png" width={48} height={48} alt='' />
        <p className='mt-8'>Hello there!</p>
        <p>I&apos;m Sally, a passionate software developer with a strong foundation in IT. I hold a degree in Information Technology from the University of Auckland, where I honed my skills and developed a deep love for crafting exceptional digital experiences.</p>
        
        <p>When I&apos;m not immersed in the world of coding, you&apos;ll catch me hanging out in my garden, getting my hands dirty and loving every bit of it. Lately, I&apos;ve also been all about pottery – there&apos;s something oddly satisfying about shaping clay into cool stuff. Oh, and anime? Yep, I&apos;m totally into that too. Whether I&apos;m tweaking a website or binge-watching a new anime series, I&apos;m all about embracing the awesome variety life has to offer!</p>
      </div>
      <div className='w-full p-8 flex flex-col justify-center items-center flex-wrap gap-10 sm:flex-row'>
        {hobby.map(item => (
          <Link href={`/about/${item.title}`} key={item.title} >
            <AboutCard title={item.title} desc={item.desc} img={item.img} color={item.color} />

          </Link>
        ))}


      </div>



    </div>
  )
}

export default About

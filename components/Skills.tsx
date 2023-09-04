import React from 'react'
import { skills } from '@/libs/data'
import Image from 'next/image'


const Skills = () => {
  return (

      <div className='snap-start w-full text-white flex flex-col justify-start items-center gap-8 my-12'>
        <div className='text-center gap-8'>
        <h1 className='text-3xl font-bold underline decoration-secondary underline-offset-8 uppercase mt-8 lg:text-5xl'>Skills</h1>

        </div>
      <div className='w-4/5 my-24 overflow-x-auto skill-scrollbar pb-12'>
        <div className='w-fit flex justify-center items-center'>
        {skills.map(skill => (
              <div key={skill.title} className='m-8 relative w-24 h-24'>
                <Image src={skill.img} layout='fill' alt={skill.title} className='object-contain' />
              </div>
              
           
          ))}
        </div>
          
        </div>

            
        </div>

  )
}

export default Skills

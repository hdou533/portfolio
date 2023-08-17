import React from 'react'
import { skills } from '@/libs/data'
import Image from 'next/image'


const Skills = () => {
  return (

      <div className='w-full text-white flex flex-col justify-center items-center'>
        <div className='text-center gap-8'>
        <h1 className='text-3xl font-bold underline decoration-secondary underline-offset-8 uppercase mt-8 lg:text-5xl'>Skills</h1>

        </div>
        <div className='flex gap-4 flex-wrap justify-center items-center m-24 md:w-2/3 xl:w-1/2'>
          {skills.map(skill => (
            <div key={skill.title} className='p-8 '>
              <Image src={skill.img} width={96} height={96} alt={ skill.title} />
            </div>
          ))}
        </div>

            
        </div>

  )
}

export default Skills

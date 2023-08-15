import React from 'react'
import { skills } from '@/libs/data'
import Image from 'next/image'


const Skills = () => {
  return (

      <div className='text-white flex flex-col justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold underline decoration-pink-600 underline-offset-8 uppercase'>Skills</h1>
        </div>
        <div className='flex gap-4 flex-wrap bg-white my-16'>
          {/* {skills.map(skill => (
            <div key={skill.title} className='w-12 h-12 '>
              <Image src={skill.img} width={48} height={48} alt={ skill.title} />
            </div>
          ))} */}
        </div>

            
        </div>

  )
}

export default Skills

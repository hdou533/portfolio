import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
    title: string,
    desc: string,
    demolink: string,
    codelink: string,
    thumbnail: string,
    tech:string[],
}

const ProjectCard: React.FC<CardProps> = ({ title, desc, demolink, codelink, thumbnail, tech }) => {
    
  return (
      <div className='w-full h-[520px] flex flex-col justify-center items-center rounded-lg sm:flex-row sm:w-[520px] sm:h-[260px]  bg-btn-blue drop-shadow-md gap-4 sm:px-8 sm:gap-8'>
          <div className='relative w-[80%] h-[240px] sm:flex-1 sm:h-[80%]'>
              <Image src={thumbnail}  layout='fill' alt='' className='object-cover opacity-70 rounded-lg'/>
          </div> 
          <div className='flex flex-col w-[80%] justify-between sm:flex-1 sm:h-[80%]'>
              <div className='flex flex-col gap-2'>
                <h2 className='font-bold text-lg text-secondary'>{title}</h2>
                <p className='text-sm text-white/75'>{desc}</p>
                
                <div className='text-sm text-white/75 underline underline-offset-4'>
                    <a href={demolink} target='_blank'  className=' hover:text-light-pink mr-4'><span>demo</span></a>
                    <a href={codelink} target='_blank'  className=' hover:text-light-pink mr-4'><span>code</span></a>
                    
                    
                </div>
              </div>
              
              
              
              <div className='text-xs flex gap-2 flex-wrap mt-4'>
                  {tech && tech.map(item => (
                      <span className='p-1 bg-light-pink/70 rounded-sm' key={item}>{ item }</span>
                  ))}
              </div>
          </div>
      </div>

  )
}

export default ProjectCard

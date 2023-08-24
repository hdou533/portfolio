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

const ProjectCard:React.FC<CardProps> = ({title, desc, demolink, codelink, thumbnail, tech}) => {
  return (
      <div className='w-full h-[480px] flex flex-col justify-center items-center rounded-lg sm:flex-row sm:w-[520px] sm:h-[260px]  bg-btn-blue drop-shadow-md gap-4 sm:px-8 sm:gap-8'>
          <div className='relative w-[80%] h-[240px] sm:flex-1 sm:h-[80%]'>
              <Image src={thumbnail}  layout='fill' alt='' className='object-cover opacity-70 rounded-lg'/>
          </div> 
          <div className='flex flex-col gap-2 w-[80%] sm:flex-1'>
              
              <h2 className='font-bold text-lg text-secondary'>{title}</h2>
              <p>{desc}</p>
              <div className='underline underline-offset-4'>
                  <a href={demolink} target='_blank' rel='noopener noreferrer' className=' hover:text-light-pink mr-4'><span>demo</span></a>
                  <a href={codelink} target='_blank' rel='noopener noreferrer' className=' hover:text-light-pink mr-4'><span>code</span></a>
                  
                  
              </div>
              <div className='flex flex-wrap'>
                  {tech && tech.map(item => (
                      <span className='bg-white/50 mr-4 mt-4' key={item}>{ item }</span>
                  ))}
              </div>
          </div>
      </div>

  )
}

export default ProjectCard

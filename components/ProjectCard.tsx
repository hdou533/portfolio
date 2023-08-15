import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
    title: string,
    desc: string,
    demolink: string,
    codelink: string,
    thumbnail: string
}

const ProjectCard:React.FC<CardProps> = ({title, desc, demolink, codelink, thumbnail}) => {
  return (
      <div className='w-[80vw] h-96 border border-pink-600 border-y-2 sm:w-[340px] '>
          <div className='relative w-full h-[60%]'>
              <Image src={thumbnail} fill className='object-cover' alt=''/>
          </div>
          <div className='flex flex-col gap-2 p-4'>
              <h2 className='text-lg font-bold'>{title}</h2>
              <p className='h-12 overflow-hidden'>{desc}</p>
              <div className='underline flex gap-4 underline-offset-4'>
                  <Link href={demolink}><span>demo</span></Link>
                  <Link href={codelink}><span>code</span></Link>
              </div>
          </div>
    </div>

  )
}

export default ProjectCard

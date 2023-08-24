import React from 'react'

type ResumeCardProps = {
  title: string,
  organisation: string,
  year: string,
  desc: string,
  tech: string[]
}

const ResumeCard: React.FC<ResumeCardProps> = ( {title, organisation,year, desc,tech}  ) => {
  return (
    <div className='my-8 bg-btn-blue rounded-lg p-6 text-left'>
      <h1 className='text-lg underline decoration-pink-600 underline-offset-8 mb-2'>{title}</h1>
      <p className='text-xs'>{organisation}</p>
      <p className='text-xs'>{ year}</p>
      <p className='text-sm  my-4 w-full h-40 overflow-y-auto overscroll-contain scrollbar-hide'>{desc}</p>
      <div className='text-xs flex gap-1 flex-wrap'>
        {tech.map((t, index) => (
        <span key={`tech_${index}`} className='p-1 bg-light-pink/60 border-grey-100'>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default ResumeCard

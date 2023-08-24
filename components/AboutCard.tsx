import React from 'react'
import Image from 'next/image'

type AboutCardProps = {
    title: string,
    desc: string,
    img: string,
    color: string,
}

const AboutCard: React.FC<AboutCardProps> = ({ title, desc, img, color }) => {
  
  return (
    <div className='w-[260px] h-[320px] relative'>
      <div className={`w-full h-[50%] bg-orange-100 rounded-t-lg`}></div>
      <div className='w-full h-[50%] bg-btn-blue rounded-b-lg flex justify-center items-center text-center'>
              <h2 className='pt-8'>{ desc }</h2>  
      </div>
      <div className='absolute top-[10%] left-0 w-full h-[50%] flex flex-col justify-center items-center gap-4'>
        <Image src={img} width={160} height={160} alt={title} />
        
      </div>
          
    </div>
  )
}

export default AboutCard

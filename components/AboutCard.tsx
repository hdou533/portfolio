"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'





type AboutCardProps = {
    
    title: string,
    desc: string,
    img: string,
    group: string,
}

const AboutCard: React.FC<AboutCardProps> = ({ title, desc, img, group }) => {
  const router = useRouter()
  return (
    <div className=''>
      <div className='w-[260px] h-[320px] relative' onClick={() => router.push(`/about/${group}`)}>
      <div className={`w-full h-[50%] bg-orange-100 rounded-t-lg`}></div>
      <div className='w-full h-[50%] bg-btn-blue rounded-b-lg flex justify-center items-center text-center'>
              <h2 className='pt-8'>{ desc }</h2>  
      </div>
      <div className='absolute top-[10%] left-0 w-full h-[50%] flex flex-col justify-center items-center gap-4'>
        <Image src={img} width={160} height={160} alt={title} />
        
      </div>

      
      </div>
      
          
    </div>
    
  )
}

export default AboutCard

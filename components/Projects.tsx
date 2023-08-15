import React from 'react'
import { projects } from '@/libs/data'
import ProjectCard from './ProjectCard'


const Projects = () => {
  return (

      <div className='text-white flex flex-col justify-center'>
        <div className='text-center'>
            <h1 className='uppercase text-2xl font-bold underline decoration-pink-600 underline-offset-8'>Projects</h1>
        </div>
        <div className='flex flex-wrap gap-8 justify-center items-center my-16'>
          {projects.map(project =>
            
            <ProjectCard
              key={project.title}
                title={project.title}
                desc={project.desc}
                demolink={project.demolink}
                codelink={project.codelink}
                thumbnail={project.thumbnail}
              />
          
          )}
        </div>

        </div>

  )
}

export default Projects

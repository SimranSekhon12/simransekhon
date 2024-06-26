import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'
import '../styles/Projects.css'

function Projects() {
  return (
    <div className='projects'>
      
      <div className='projectList'></div>
      {ProjectList.map((project, idx) => {
        return <ProjectItem id={idx} name={project.name} image={project.image}/>
      })}
    </div>
  )
}

export default Projects
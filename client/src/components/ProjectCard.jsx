import React from 'react'

function ProjectCard({ project }) 
{
  return (
    <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
    </div>
  )
}

export default ProjectCard
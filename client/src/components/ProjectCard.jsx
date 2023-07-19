import React from 'react';
import { useNavigate } from "react-router-dom"


function ProjectCard({ project }) 
{
    const navigate = useNavigate();

    const handleClick = () =>
    {
        navigate("/projects/"+ project._id);
    }
 
    return (
        <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <button>Delete</button> <button>Update</button> <button onClick={handleClick}>Details</button>
        </div>
    )
}

export default ProjectCard
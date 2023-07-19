import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from '../graphql/projects';

function ProjectForm() 
{
    const [project, setProject] = useState({
        name: '',
        description: ''
    })

    const [createProject, { loading, error, data }] = useMutation(CREATE_PROJECT, {
        refetchQueries: [
            {
                query: GET_PROJECTS,
            },
            'GetProjects',
        ]
    });

    const handleChange = ( { target: { name, value } } ) =>
    {
        setProject({ ...project, [name]: value });
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        createProject
        ({
            variables: 
            {
                name: project.name,
                description: project.description
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>

            {error && <p>{error.message}</p>}

            <input type='text' name='name' placeholder='Write a title...' onChange={handleChange}/>
            <textarea name='description' rows={3} placeholder='Write a description...' onChange={handleChange}/>

            <button disabled={!project.name || !project.description || loading}>Create project</button>
        </form>
    )
}

export default ProjectForm
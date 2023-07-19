import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom';
import { GET_PROJECT } from '../graphql/projects';
import TaskList from '../components/tasks/TaskList';
import TaskForm from '../components/tasks/TaskForm';


function ProjectDetails() 
{
    const params = useParams();

    const {data, loading, error} = useQuery(GET_PROJECT, { 
        variables: { 
            id: params.id
        }
    });

    if(loading)
    {
        return <p>Loading...</p>
    }

    if(error)
    {
        return <p>{error}</p>
    }

    return (
        <div>
            <h1>{data.project.name}</h1>
            <p>{data.project.description}</p>

            <TaskForm/>

            <TaskList tasks={data.project.tasks}/>
        </div>
    )
}

export default ProjectDetails
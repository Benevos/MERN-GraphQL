import { useMutation } from '@apollo/client';
import React from 'react'
import { CREATE_TASK } from '../../graphql/task';
import { useParams } from 'react-router-dom';

function TaskForm() 
{
    const [createTask, { loading, error, data }] = useMutation(CREATE_TASK, {
        refetchQueries: ['getProject']
    });

    const params = useParams();

    const handleSumbit = async (e) =>
    {
        e.preventDefault();

        const data = await createTask({
            variables: {
                title: e.target.title.value,
                projectId: params.id,
            }
        })

        e.target.reset();

        e.target.focus();
    }
 
    return (
        <form onSubmit={handleSumbit}>
            <input type='text' name='title' placeholder='Write a task...'/>
            <button>Add task</button>
        </form>
    )
}

export default TaskForm
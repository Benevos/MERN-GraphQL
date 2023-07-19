import React from 'react'

function TaskCard({ task }) 
{


    return (
        <div>
            <h2>{task.title}</h2>
            <button>Delete</button> <button>Update</button>
        </div>
    )
}

export default TaskCard
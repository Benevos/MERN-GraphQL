import gql from "graphql-tag";

export const CREATE_TASK = gql`
    mutation($title: String!, $projectId: ID)
    {
        createTask(title: $title, projectId: $projectId) 
        {
            _id
            title
            project 
            {
                _id
            }
            createdAt
            updatedAt
        }
    }
`;
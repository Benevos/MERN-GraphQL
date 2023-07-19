import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
    query
    {
        projects 
        {
            _id
            name
            description
            updatedAt
            createdAt
            tasks 
            {
            _id
            title
            createdAt
            updatedAt
            }
        }
    }
`;

export const CREATE_PROJECT = gql`
    mutation($name: String!, $description: String)
    {
        createProject(name: $name, description: $description) 
        {
            _id
            name
            description
            createdAt
            updatedAt
        }
    }
`
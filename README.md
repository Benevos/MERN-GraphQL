# About the project

The purpose of this project it to create a MERN (MongoDB with Mongoose, Express, React and Node) stack compatible with GraphQl.

## How to execute the project

First of all, install the necessary npm dependencies for the server in the root folder:

```bash
npm i nodemon mongoose graphql graphql-tag express dotenv cors @apollo/server
```
Then navigate to `client` folder and do the same with these packages:

```bash
npm i react react-dom react-router-dom graphql @apollo/client
```

Now, you can do `npm run dev` i `root` and `client` folders to run both client and server.
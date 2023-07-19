import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from "@apollo/server/express4"
import cors from 'cors';
import http from 'http'
import { DB_NAME, MONGO_URI, PORT } from './config.js';
import { typeDefs } from './graphql/typeDef.js';
import { resolvers } from './graphql/resolvers.js';

//? commando from docker docker run --name grapgqldb -p 9000:27017  -d  mongo 

//! connectDB() DATABASE.JS
try
{
    const conn = await mongoose.connect(MONGO_URI + DB_NAME);
    const db = conn.connection;

    console.log("MongoDB connected to:", db.name);
}
    
catch({ message })
{
    console.error("Error:", message);
    process.exit(1);
}

//! connectDB() DATABASE.JS


//! startApolloServer(resolvers, typeDefs) APP.JS
const app = express();
const httpServer = http.createServer(app);

app.get('/', (req, res) =>
{
    res.send("Welcome to my GraphQL API!");
});

const server = new ApolloServer({ 
    typeDefs: typeDefs,
    resolvers: resolvers
});

await server.start();

app.use("/graphql", cors(), express.json(), expressMiddleware(server));

await new Promise(resolve => httpServer.listen(
    {
        port: PORT,
    }, 
    resolve
))

console.log('Server on port: '+ PORT);

//! startApolloServer(resolvers, typeDefs) APP.JS


const express = require('express');
// const graphqlHTTP = require('express-graphql');
const { ApolloServer } = require('apollo-server');
const schema = require('./schema');
const rootValue = require("./resolver");

const app = express();

const graph = new ApolloServer({ schema, rootValue });

// app.listen(4000, () => {
//     console.log('server running at port 4000');
// });

graph.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
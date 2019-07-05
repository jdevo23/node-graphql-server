const express = require("express");

const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers/resolvers");

const { ApolloServer } = require("apollo-server-express");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 8000 }, () => {
  console.log("Apollo server on http://localhost:8000/graphql");
});

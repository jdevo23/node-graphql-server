const express = require("express");
const Sequelize = require("sequelize");

const typeDefs = require("./src/schema");
const resolver = require("./src/resolvers");
const Motorcycle = require("./src/models/motorcycle");
const keys = require("./keys");

const { ApolloServer } = require("apollo-server-express");

const app = express();

const sequelize = new Sequelize({
  host: keys.host,
  dialect: "mysql",
  username: keys.user,
  password: keys.password,
  database: keys.database,
  define: {
    timestamps: false
  }
});

const server = new ApolloServer({
  typeDefs,
  resolver,
  context: Motorcycle(sequelize, Sequelize)
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 8000 }, () => {
  console.log("Apollo server on http://localhost:8000/graphql");
});

//   const createTable = "CREATE TABLE motorcycles (? VARCHAR(255), ? VARCHAR(255))"
//   const createRow = "INSERT INTO motorcycles(make, model) VALUES(?, ?)"
//   const createMultipleRows = "INSERT INTO motorcycles(make, model) VALUES ?"
//   const selectAll = "SELECT * FROM motorcycles"
//   const update = `UPDATE motorcycles
//     SET id = ?
//     WHERE model = ?`
//   const remove = `DELETE FROM motorcycles where model = ?`

//   connection.query(selectAll, (err, res, fields) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log(res)
//   })

//   console.log('connected as id ' + connection.threadId);
// });

// connection.end();

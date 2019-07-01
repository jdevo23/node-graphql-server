const express = require('express');
const mysql = require('mysql');
const keys = require('./keys');
const app = express();

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo server on http://localhost:8000/graphql');
});

const connection = mysql.createConnection({
  host: keys.host,
  user: keys.user,
  password: keys.password,
  database: keys.database,
  port: '3306'
});

// connection.connect((err) => {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

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

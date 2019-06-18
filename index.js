const express = require('express')
const mysql = require('mysql')
const keys = require('./keys')

const connection = mysql.createConnection({
  host: keys.host,
  user: keys.user,
  password: keys.password,
  database: keys.database,
  port: '3306'
})

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  const createTable = "CREATE TABLE motorcycles (? VARCHAR(255), ? VARCHAR(255))"
  const createRow = "INSERT INTO motorcycles(make, model) VALUES(?, ?)"
  const createMultipleRows = "INSERT INTO motorcycles(make, model) VALUES ?"
  const selectAll = "SELECT * FROM motorcycles"
  const update = `UPDATE motorcycles 
    SET make = ?
    WHERE model = ?`
  const query = `DELETE FROM motorcycles where model = ?`
  
  // connection.query(selectAll, (err, res, fields) => {
  //   if (err) {
  //     return console.error(err.message);
  //   }
  //   console.log(res)
  // })

  console.log('connected as id ' + connection.threadId);
});

// connection.end();

const app = express()
const PORT = 5000

// app.get('/', (req, res) => {
//   res.send('hello world')
// })
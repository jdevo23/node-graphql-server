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

  // add table
  // const createTable = "CREATE TABLE motorcycles (make VARCHAR(255), model VARCHAR(255))"
  // connection.query(createTable, (err, res) => {
  //   if (err) throw err;
  //   console.log('Table created!')
  // })
  
  // add row
  // const createRow = "INSERT INTO motorcycles(make, model) VALUES('Yamaha', 'R1')"
  // connection.query(createRow, (err, res) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('Row created:', res)
  //   }
  // })

  console.log('connected as id ' + connection.threadId);
});

// connection.end();

const app = express()
const PORT = 5000

// app.get('/', (req, res) => {
//   res.send('hello world')
// })
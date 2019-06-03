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

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

const app = express()
const PORT = 5000

app.get('/', (req, res) => {
  res.send('hello world')
})
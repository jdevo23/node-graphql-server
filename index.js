const express = require('express')
const mysql = require('mysql')
const keys = require('./keys')

const connection = mysql.createConnection({
  host: keys.host,
  user: keys.user,
  password: keys.password,
  database: keys.database
})

connection.connect()

const app = express()
const PORT = 5000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
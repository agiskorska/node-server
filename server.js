const express = require('express')
const mysql = require('mysql');

const app = express()
const port = 8000

const db = mysql.createConnection({
  host: "database-1.crygjk68zr6u.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "qwerty123",
  database: "mydb",
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dupa', (req, res) => {
  res.send('Hello dupa!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

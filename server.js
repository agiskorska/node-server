const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 8000
app.use(cors())
app.use(bodyParser.json())
const db = mysql.createConnection({
  host: "mysqldbtest.crygjk68zr6u.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "qwerty123",
  database: "mydb",
})

db.connect(err => {
  if(err) {
    console.log(err)
    return;
  }
  console.log("Database connected!")
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dupa', (req, res) => {
  res.send('Hello dupa!')
})

app.post('/todb', (req, res) => {
  console.log(req.body)
  const firstName=req.body.firstName.toString()
  const lastName=req.body.lastName.toString()
  const email=req.body.email.toString()
  const password=req.body.password.toString()
  db.query("INSERT INTO `mydb`.`users` (firstName, lastName, email, password) VALUES ('"+firstName+"', '"+ lastName+"', '" + email+"', '" + password +"')", function(err, result){
          if(err) throw err;
          console.log("1 record inserted");
        });
  res.send('dupa');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

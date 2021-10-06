const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Ayrton')`

connection.query(sql)

connection.end()

app.get('/', (request, response) => {
  response.send('<h1>Full Cycle</h1>')
})

app.listen(port, () => {
  console.log('Application started and running on port:', port)
})

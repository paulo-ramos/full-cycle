const express = require('express')

const app = express()

const port = 3001

const config = {
    host: 'db',
    user: 'root',
    password: 'ÉSérioQueVocêEstáProcurandoARootPasswordAqui?',
    database: 'nodedb'

}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Rafael')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Mai que merda</h1>')
})

app.listen(port, ()=>{
    console.log('Porta: ' + port)
})


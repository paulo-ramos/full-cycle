const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Mai que merda</h1>')
})

app.listen(port, ()=>{
    console.log('Porta: ' + port)
})


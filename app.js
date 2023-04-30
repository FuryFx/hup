const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.status(200)
    res.sendFile('index.html')
})



app.listen(6000, (e) => {
    console.log('http://localhost:6000')
})
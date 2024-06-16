require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("sain rizwan")
})

app.get('/login' , (req , res) => {
    res.send("<h1> Please login here on my site </h1>")
})

app.listen(port , () => {
  console.log(`Example app listening on port ${port}`)
})
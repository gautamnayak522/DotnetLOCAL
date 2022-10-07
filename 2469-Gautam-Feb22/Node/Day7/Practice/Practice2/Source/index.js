console.log("MIDDLEWARE-ERROR HANDLING");
const express = require('express')
const fs = require('fs')
const app = express()
app.disable("x-powered-by");

app.use(express.json())

app.get('/', (req, res, next) => {
  fs.readFile('data.json', (err, data) => {
    if (err) {
      next(err)
    } else {
      res.send(JSON.stringify(JSON.parse(data)))
      res.end()
    }
  })
})

app.listen(1000, function () {
  console.log("listening at 1000..........");
})

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send('Something broke!')
    console.log("APP BROKEN");
    next()
  }
})








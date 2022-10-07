
const express = require('express')
const app = express()
app.disable("x-powered-by");

const morgan = require("morgan")
app.use(morgan("common"))

const myroutes = require('./myroutes')

app.listen(1000, function () {
    console.log("listening at 1000....");
})


app.use('/', myroutes)
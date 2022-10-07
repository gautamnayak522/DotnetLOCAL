console.log("MIDDLEWARE");
const express = require('express')
const app = express()
app.disable("x-powered-by");
app.listen(1000, function () {
    console.log("listening at 1000..........");
})

app.use((req, res, next) => {
    console.log('date:'+ Date());
    next()
})

app.use('/user/:id', (req, res, next) => {
    const d = new Date();
    console.log('A request for User received on : ' + d.toLocaleTimeString());
    console.log('Request Type:', req.method)
    next()
})

app.get('/', (req, res) => {
    res.send("HOME")
    res.end();
})

app.get('/user/:id', (req, res) => {
    res.send("USER ID is : " + req.params.id)
    res.end();
})

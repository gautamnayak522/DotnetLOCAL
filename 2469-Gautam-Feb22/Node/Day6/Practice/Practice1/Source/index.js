console.log("Hello");
var express = require('express');
const fs = require('fs');
const app = express();
app.disable("x-powered-by");
//app.use(express.json())

var server = app.listen(5000, function () {
    console.log("listening at 5000..........");
})

app.get("/", (req, res) => {
    console.log("Welcome to the Express");
    res.send("<h1>Welcome to Express</h1> <br/> <p>Go to localhost:5000/customers to view customer details");
    res.end();
})

app.get("/customers", (req, res) => {
    fs.readFile("./customer.json", (err, data) => {
        res.send(JSON.parse(data));
        console.log(JSON.parse(data));
        res.end();
    })
})
console.log("Hello");
var express = require('express');
const fs = require('fs');
var app = express();
app.disable("x-powered-by");
app.use(express.json())

var server = app.listen(5000, function () {
    console.log("listening at 5000..........");
})

app.get("/", (req, res) => {
    console.log("Welcome to the Customer API");
    res.send("<h1>Welcome to Customer</h1> <br/> <p>Go to <strong>localhost:5000/customers</strong> to view customer details");
    res.end();
})

app.get("/customers", (req, res) => {
    fs.readFile("./customer.json", (err, data) => {

        res.send("<br/> <p>Go to <strong>localhost:5000/customers/:id</strong> to view customer detail <br/><br/>" + data);
        console.log(JSON.parse(data));
        res.end();
    })
})

app.get("/customers/:id", (req, res) => {
    fs.readFile("./customer.json", (err, data) => {

        const result = JSON.parse(data).find((data) => {
            return data.Id === parseInt(req.params.id);
        })
        res.send(result);
        console.log(result);
        res.end();
    })
})
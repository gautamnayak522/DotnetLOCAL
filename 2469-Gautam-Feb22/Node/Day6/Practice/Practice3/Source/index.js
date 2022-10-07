console.log("Hello");
var express = require('express');
const fs = require('fs');
var app = express();
app.disable("x-powered-by");
app.use(express.json())

app.listen(5000, function () {
    console.log("listening at 5000..........");
})


app.get("/", (req, res) => {
    console.log("Welcome to the Customer API");
    res.send("<h1>Welcome to Customer API</h1> <br/> <p>Go to <strong>localhost:5000/customers</strong> to view customer details");
    res.end();
})

//Get all records
app.get("/customers", (req, res) => {
    fs.readFile("./customer.json", (err, data) => {

        res.send("<br/> <p>Go to <strong>localhost:5000/customers/:id</strong> to view customer detail <br/><br/>" + data);
        console.log(JSON.parse(data));
        res.end();
    })
})

//Search by Id
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

//Post new data
app.post("/customers", (req, res) => {
    let data1 = [];
    fs.readFile("./customer.json", "utf-8", (err, data) => {
        data1 = JSON.parse(data);
        data1.push(req.body);
        console.log(data1);
        fs.writeFile("./customer.json", JSON.stringify(data1), (err) => {
            console.log("File written");
        })
        res.send(data1);
        res.end();
    })
})

// Put/Update a record
app.put("/customers/:id", (req, res) => {
    let data1 = [];
    fs.readFile("./customer.json", "utf-8", (err, data) => {
        data1 = JSON.parse(data);
        let result = data1.find((data) => {
            return data.Id === parseInt(req.params.id);
        })
       

        result.Name = req.body.Name;
        result.Address = req.body.Address;
        fs.writeFile("./customer.json", JSON.stringify(data1), (err) => {
            console.log("File updated");
        })
        res.send(data1);
        res.end();
    })
})

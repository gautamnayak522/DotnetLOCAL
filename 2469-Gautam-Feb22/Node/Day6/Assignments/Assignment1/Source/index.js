
var express = require('express');
const fs = require('fs');
var app = express();
app.disable("x-powered-by");
app.use(express.json())

app.listen(3000, function () {
    console.log("listening at 3000...");
})

let StudentsData;
fs.readFile("./Students.json", (err, data) => {
    if (err){console.log(err);}
    StudentsData= data;
})


//msg on root
app.get("/", (req, res) => {
    console.log("Welcome to the Student API");
    res.send("<h1>Welcome to Student API</h1> <br/> <p>Go to <strong>localhost:3000/students</strong> to view customer details");
    res.end();
})

//Get all records
app.get("/students", (req, res) => {
        res.send("<br/> <p>Go to <strong>localhost:3000/students/:id</strong> to view customer detail <br/><br/>" + StudentsData);
        console.log(JSON.parse(StudentsData));
        res.end();
})

//Get Record By Id
app.get("/students/:id", (req, res) => {
        const result = JSON.parse(StudentsData).find((data) => {
            return data.ID === parseInt(req.params.id);
        })
        res.send(result);
        console.log(result);
        res.end();
})

//Get Fees of Perticular Id
app.get("/students/:id/fees", (req, res) => {
    const result = JSON.parse(StudentsData).find((data) => {
        return data.ID === parseInt(req.params.id);
    })

    res.send(result.Fees);
    console.log(result.Fees);
    res.end();
})

//Get Result of Perticular Id
app.get("/students/:id/result", (req, res) => {
    const result = JSON.parse(StudentsData).find((data) => {
        return data.ID === parseInt(req.params.id);
    })

    res.send(result.Result);
    console.log(result.Result);
    res.end();
})


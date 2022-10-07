const express = require('express');
const app=express();
app.disable("x-powered-by");
const port = 3000;
app.use(express.json());
const LoggerMiddleware = require('./middleware/logger');
const login = require('./Controller/login/login');
const students = require("./Controller/Student/studentindex");
const employees = require("./Controller/Employee/employeeindex");
const checklogin = require("./Authentication/checklogin")

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Day10assi')
.then(()=>console.log("Connected MongoDB"))
.catch(()=>console.log("Could not connect to MongoDB "))

app.listen(port,()=>{
    console.log(`App listening on : ${port} `);
}) 

app.use(LoggerMiddleware);

app.get("/", (req, res) => {
    res.send("Welocome to APP Home page");
    res.end();
  });

  app.use("/login", login);
  app.use(checklogin.checklogin);
  app.use("/students", students);
  app.use("/employees", employees);
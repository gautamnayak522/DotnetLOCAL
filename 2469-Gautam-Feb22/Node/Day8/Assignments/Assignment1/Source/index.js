const express = require('express');
const fs = require('fs');
let app = express();
app.disable("x-powered-by");
global.config=require("./config");
app.use(express.json());
let jwt=require("jsonwebtoken");
let checklogin = require("./Middleware/checklogin")

app.listen(3000, () => {
    console.log("Running at 3000.......");
})
let Feesdata ;
fs.readFile("./Json/feesdata.json",(err,data)=>{
    Feesdata= data;
})
let Resultdata ;
fs.readFile("./Json/resultdata.json",(err,data)=>{
    Resultdata= data;
})

app.post('/login', (req, res) => {
    let userdata = {
        username: req.body.username,
        password: req.body.password,
    }
    console.log(userdata);
    let token = jwt.sign(userdata,global.config.secretKey,{
        algorithm: global.config.algorithm,
        expiresIn: global.config.expiresin});

    if (userdata.username == 'admin' && userdata.password == 'admin') {
        res.status(200).send({status:"login successful",Token:token})
        console.log("Logged in");
    }
    else{
        res.status(401).send({status:"Invalid user"})
        console.log("Invalid User");
        res.end()
    }
})

app.get('/',(req,res)=>{
    res.send("Hello Admin...Kindly login and go to /fees or /result to print");
    res.end();
})

app.get('/fees',[checklogin.checklogin],(req,res)=>{
    res.send(Feesdata);
    res.end();
})
app.get('/result',[checklogin.checklogin],(req,res)=>{
    res.send(Resultdata);
    res.end();
})

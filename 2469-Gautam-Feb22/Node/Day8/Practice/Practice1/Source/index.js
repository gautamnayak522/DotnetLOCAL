console.log("Hello");
const express = require('express');
let app = express();
app.disable("x-powered-by");
global.config=require("./config");
app.use(express.json());
let jwt=require("jsonwebtoken");

app.listen(3000, () => {
    console.log("Running at 3000.......");
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
    }
    else{
        res.status(401).send({status:"Invalid user"})
    }
})
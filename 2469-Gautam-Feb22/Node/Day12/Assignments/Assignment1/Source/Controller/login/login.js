var express = require("express");
var router = express.Router({ mergeParams: true });
const jwt = require("jsonwebtoken");
global.config=require("../../Authentication/config");
let checklogin = require("../../Authentication/checklogin")

router.get('/',(req,res)=>{
    res.send("Send post request and login");
    res.end()
})

router.post('/', (req, res) => {
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

module.exports = router;

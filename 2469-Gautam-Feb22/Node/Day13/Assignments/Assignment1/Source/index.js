const express = require('express');
const app = express();
app.disable("x-powered-by");
const port = 3000;
const Doctor=require("./Controller/Doctor");
const Patient=require("./Controller/Patient");
const Department=require("./Controller/Department");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/HospitalManagement')
.then(()=>{console.log("Connected to MongoDB")})
.catch((err)=>{console.log(err);})

app.use(express.json());
app.listen(port,()=>{
    console.log("listening on 3000.....");
})

app.get('/',(req,res)=>{
    res.send("MAIN PAGE OF HOSPITAL MANAGEMENT")
})
app.use("/doctor",Doctor);
app.use("/patient",Patient);
app.use("/department",Department);
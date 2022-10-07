console.log("Hello");

const express = require('express');
const app = express();
app.disable("x-powered-by");
const port = 3000;
const Category = require("./Controller/Category")
const Product = require("./Controller/Product")

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testdb1')
.then(()=>{console.log("Connected to MongoDB")})
.catch((err)=>{console.log(err);})

app.use(express.json());
app.listen(port,()=>{
    console.log("listening on 3000.....");
})

app.get('/',(req,res)=>{
    res.send("MAIN PAGE")
})

app.use("/category",Category);
app.use("/product",Product);
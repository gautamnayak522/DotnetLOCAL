const mongoose = require("mongoose")
const express = require("express")
const prodModel = require("../Model/ProductModel")
var router = express.Router();

router.get("/", async (req, res) => {

    var data= await prodModel.find().populate("Category","CategoryName")
    res.send(data);
    res.end();
})

router.post("/", (req, res) => {
    var data = new prodModel(req.body);
    data.save();
    res.end();
})
module.exports = router
const mongoose = require("mongoose")
const express = require("express")
const CategoryModel = require("../Model/CategoryModel")
var router = express.Router();

router.get("/", (req, res) => {
    CategoryModel.find((err, data) => {
        res.send(data);
        res.end();
    })
})

router.post("/", (req, res) => {
    var data = new CategoryModel(req.body);
    data.save();
    res.end();
})
module.exports = router
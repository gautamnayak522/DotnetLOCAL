const mongoose = require("mongoose")
const express = require("express")
const DepartmentModel = require("../Model/DepartmentModel")
var router = express.Router();

router.get("/", (req, res) => {
    DepartmentModel.find((err, data) => {
        res.send(data);
        res.end();
    })
})
router.post("/", (req, res) => {
    var data = new DepartmentModel(req.body);
    data.save();
    res.send("Department Added")
    res.end();
})

router.delete("/:deptId",(req, res)=>
 {
    var idtodelte = req.params.deptId;
    DepartmentModel.deleteOne({ _id: idtodelte }, function (err) {
        if (!err) {
            res.send("Department Deleted")
            console.log("Department Deleted");
        }
        else {
            res.send("Unable to delete")
            console.log("Unable to delete");
        }
        res.end()
    })
})

module.exports = router
var express = require("express");
var router = express.Router();
var assignments = require("./child/assignments");
const mongoose = require('mongoose');
const Emp = require("../../schema/EmployeeSchema");
router.use(express.json());

router.get("/", async (req, res) => {
  let data = await Emp.find();
  res.send(data);
  res.end();
});

router.get("/:empid", (req,res)=>{
  console.log(req.params.empid);
  Emp.findById(req.params.empid, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
})

router.use("/:empid/assignments", assignments);
module.exports = router;

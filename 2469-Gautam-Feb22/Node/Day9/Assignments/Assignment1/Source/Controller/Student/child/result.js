var express = require("express");
var router = express.Router({ mergeParams: true });
const fs = require("fs");
var students = require("../../../json/Students.json");


router.get("/",(req,res)=>{
    let id = parseInt(req.params.stdid);
    let a = students.find((d) => d.ID == id);
    if (a) {
      students.forEach((value) => {
        if (id == value.ID) {
          res.json(value.Result);
        }
      });
    } else {
      res.send("Record Not Available");
    }
  }
)

module.exports = router;

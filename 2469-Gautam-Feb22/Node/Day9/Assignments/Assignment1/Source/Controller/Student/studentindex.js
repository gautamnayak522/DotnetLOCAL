var express = require("express");
var router = express.Router();
var students = require("../../json/Students.json");
var fees = require("./child/fees");
var result = require("./child/result");

router.get("/",(req,res)=>{
    res.json(students);
    res.end()
});
router.get("/:stdid", (req,res)=>{
    let id = req.params.stdid;
    let a = students.find((d) => d.ID == id);
    if (a) {
      students.forEach((value) => {
        if (id == value.ID) {
          res.json(value);
        }
      });
    } else {
      res.send("Record Not Available");
    }
})

router.use("/:stdid/fees", fees);
router.use("/:stdid/result", result);


module.exports = router;

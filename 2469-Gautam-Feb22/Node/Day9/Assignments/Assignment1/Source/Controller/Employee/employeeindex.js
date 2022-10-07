var express = require("express");
var router = express.Router();
var employees = require("../../json/Employees.json");
var assignments = require("./child/assignments");


router.get("/",(req,res)=>{
    res.json(employees);
    res.end()
});
router.get("/:empid", (req,res)=>{
    let id = parseInt(req.params.empid);
    let a = employees.find((d) => d.EmpId == id);
    if (a) {
        employees.forEach((value) => {
        if (id == value.EmpId) {
          res.json(value);
        }
      });
    } else {
      res.send("Record Not Available");
    }
})

router.use("/:empid/assignments", assignments);



module.exports = router;

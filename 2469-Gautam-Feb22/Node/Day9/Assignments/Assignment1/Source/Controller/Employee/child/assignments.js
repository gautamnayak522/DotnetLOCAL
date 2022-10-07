var express = require("express");
var router = express.Router({ mergeParams: true });
const fs = require("fs");
var employees = require("../../../json/Employees.json");


router.get("/",(req,res)=>{
    let id = parseInt(req.params.empid);
    let a = employees.find((d) => d.EmpId == id);
    if (a) {
        employees.forEach((value) => {
        if (id == value.EmpId) {
          res.json(value.Assignments);
        }
      });
    } else {
      res.send("Record Not Available");
    }
  }
)

router.get("/:assiid",(req,res)=>{

    const result = employees.find((data) => {
        return data.EmpId === parseInt(req.params.empid);
      });
    
      const result2 = result.Assignments.find((data) => {
        return data.AssignmentId == parseInt(req.params.assiid);
      });

      res.send(result2);
  }
)

module.exports = router;

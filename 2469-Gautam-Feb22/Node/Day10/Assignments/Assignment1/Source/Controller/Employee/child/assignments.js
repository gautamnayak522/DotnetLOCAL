var express = require("express");
var router = express.Router({ mergeParams: true });
const Emp = require("../../../schema/EmployeeSchema");

router.get("/", (req, res) => {
  Emp.findOne({ "_id": req.params.empid }, function (err, result) {
    if (err) {
      res.send("No data available");
    } else {
      res.send(result);
    }
  }).select({Assignments:1});
}
)

router.get("/:assiid", (req, res) => {

  Emp.findOne({ "_id": req.params.empid, "Assignments.AssignmentId" : parseInt(req.params.assiid) },
    (err, data) => {
      if (err) {
        res.send("No record");
      }
      else{
      res.send(data.Assignments.find((d)=>d.AssignmentId==parseInt(req.params.assiid)));
      }
    });
  });
module.exports = router;

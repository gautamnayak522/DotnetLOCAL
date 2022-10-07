var express = require("express");
var router = express.Router({ mergeParams: true });
const mongoose = require('mongoose');
const Emp = require("../../../Models/EmployeeModel");
const assiSchema = require("../../../Models/AssignmentModel");
const Assi = mongoose.model("Assignment", assiSchema);

class AssignmentController {
  static async GetAssignments(req, res) {
    Emp.findOne({ "_id": req.params.empid }, function (err, result) {
      if (err) {
        res.send("No data available");
      } else {
        res.send(result);
      }
    }).select({ Assignments: 1 });
  }

  static async GetAssignmentbyId(req, res) {
    Emp.findOne({ "_id": req.params.empid, "Assignments.AssignmentId": parseInt(req.params.assiid) },
      (err, data) => {
        if (err) {
          res.send("No record");
        }
        else {
          res.send(data.Assignments.find((d) => d.AssignmentId == parseInt(req.params.assiid)));
        }
      });
  }

  
  static async PostAssignment(req, res) {
    var myobj = new Assi(req.body);
    Emp.findOne({ "_id": req.params.empid },
      (err, data) => {
        if (err) {
          res.send("No record");
        }
        else {
          data.Assignments.push(myobj);
          data.save().then(()=>{
            console.log("Assignment Added");
            res.send("Assignment Added");
            res.send();
          }).catch((err)=>{console.log("Error : Unable to add assignment" + err.message)})
        }
      });
  }
}
router.get("/", AssignmentController.GetAssignments)
router.get("/:assiid", AssignmentController.GetAssignmentbyId)
router.post("/", AssignmentController.PostAssignment)

module.exports = router;


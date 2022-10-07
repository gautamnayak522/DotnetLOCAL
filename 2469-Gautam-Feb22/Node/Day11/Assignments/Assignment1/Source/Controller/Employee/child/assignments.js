var express = require("express");
var router = express.Router({ mergeParams: true });
const mongoose = require('mongoose');
const Emp = require("../../../Models/EmployeeModel");

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
}
router.get("/", AssignmentController.GetAssignments)
router.get("/:assiid", AssignmentController.GetAssignmentbyId)

module.exports = router;

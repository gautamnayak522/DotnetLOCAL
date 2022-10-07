var express = require("express");
var router = express.Router();
var assignments = require("./child/assignments");
const mongoose = require('mongoose');
const Emp = require("../../Models/EmployeeModel");
router.use(express.json());

class EmployeeController {

  static async GetEmployees(req, res) {
    let data = await Emp.find();
    res.send(data);
    res.end();
  }

  static async GetEmployeesbyId(req, res) {
    console.log(req.params.empid);
    Emp.findById(req.params.empid, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }

  static async PostEmployee(req, res) {
    var myobj = new Emp(req.body);
    myobj.save((err, data) => {
      if (err) { console.log(err); }
      else {
        console.log("Data Entered");
        res.send("Entered")
        res.end()
      }
    })
  }

  
  static async DeleteEmployee(req, res) {
    var idtodelte = req.params.objid;
    Emp.deleteOne({ _id: idtodelte }, function (err) {
      if (!err) {
        res.send("Deleted")
        console.log("Document Deleted");
      }
      else {
        res.send("Unable to delete")
        console.log("Unable to delete");
      }
      res.end()
    })
  }

  static async PutEmployee(req, res) {
    Emp.findById(req.params.objid).then((model) => {
      return Object.assign(model, {
        EmpId: req.body.EmpId,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Assignments: req.body.Assignments
      });
    }).then((model) => {
      res.send("Document Updated");
      console.log("Updated");
      res.end();
      return model.save();
    }).catch((err) => {
      res.send(err);
    });
  }
}

router.get("/", EmployeeController.GetEmployees);
router.get("/:empid", EmployeeController.GetEmployeesbyId);
router.post("/", EmployeeController.PostEmployee);
router.delete("/:objid", EmployeeController.DeleteEmployee);
router.put("/:objid", EmployeeController.PutEmployee);
router.use("/:empid/assignments", assignments);
module.exports = router;

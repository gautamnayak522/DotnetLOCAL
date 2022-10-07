var express = require("express");
var router = express.Router();
var fees = require("./child/fees");
var result = require("./child/result");
const Std = require("../../Models/StudentModel");
router.use(express.json());

class StudentController {

  static async GetStudents(req, res) {
    let data = await Std.find();
    res.send(data);
    res.end();
  }

  static async GetStudentByid(req, res) {
    Std.findById(req.params.stdid, function (err, data) {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  }

  static async PostStudent(req, res) {
    var myobj = new Std(req.body);
    myobj.save((err, data) => {
      if (err) { console.log(err); res.send(err.message) }
      else {
        console.log("Data Entered");
        res.send("Entered")
        res.end()
      }
    })
  }

  static async DeleteStudentByid(req, res) {
    var idtodelte = req.params.objid;
    Std.deleteOne({ _id: idtodelte }, function (err) {
      if (!err) {
        res.send("Deleted")
        console.log("Document Deleted");
      }
      else {
        res.send("Unable to delete")
        console.log("Unable to delete");
      }
      res.end()
    });
  }

  static async PutStudentByid(req, res) {
    Std.findById(req.params.objid).then((model) => {
      return Object.assign(model, {
        ID: req.body.ID,
        Name: req.body.Name,
        Address: req.body.Address,
        Fees: req.body.Fees,
        Result: req.body.Result
      });
    }).then((model) => {
      return model.save().then(() => { res.send("Updated") }).catch((err) => { res.send(err.message); })
    })
  }
}


router.get("/", StudentController.GetStudents)
router.get("/:stdid", StudentController.GetStudentByid)
router.post("/", StudentController.PostStudent)
router.delete("/:objid", StudentController.DeleteStudentByid)
router.put("/:objid", StudentController.PutStudentByid)

router.use("/:stdid/fees", fees);
router.use("/:stdid/result", result);

module.exports = router;

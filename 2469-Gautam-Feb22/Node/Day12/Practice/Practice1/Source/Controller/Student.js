const mongoose = require("mongoose");
const express = require('express');
var router = express.Router();
router.use(express.json());
const Student = require('../Model/StudentModel');

class StudentController {

    static async GetStudent(req, res) {
        let data = await Student.find();
        res.send(data);
        res.end();
    }

    static async GetStudentById(req, res) {
        Student.findById(req.params.stdid,(err,data)=>{
            if(!data){
                res.send("No data Available") 
                res.end()
            }
            else{
            res.send(data)
            }
        })
    }

    static async PostStudent(req, res) {
        let stddata = new Student(req.body)
        stddata.save((err, data) => {
            if (err) {
                console.log(err.message);
                res.send(err.message)
                res.end()
            }
            else {
                console.log("Student Data Entered");
                res.send("Student Data Entered");
                res.end()
            }
        })
    }

    static async DeleteStudentByid(req, res) {
        var idtodelte = req.params.stdid;
        Student.deleteOne({ _id: idtodelte }, function (err) {
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

}


router.get("/", StudentController.GetStudent)
router.get("/:stdid", StudentController.GetStudentById)
router.post("/", StudentController.PostStudent)
router.delete("/:stdid", StudentController.DeleteStudentByid)

module.exports = router

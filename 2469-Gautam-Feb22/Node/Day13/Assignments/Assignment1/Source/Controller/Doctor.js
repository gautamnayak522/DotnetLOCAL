const mongoose = require("mongoose")
const express = require("express")
const DoctorModel = require("../Model/DoctorModel")
var router = express.Router();
const PatientModel = require("../Model/PatientModel")

class DoctorController {
    static async GetDoctors(req, res) {
        DoctorModel.find((err, data) => {
            res.send(data);
            res.end();
        })
    }

    static async PostDoctor(req, res) {
        var data = new DoctorModel(req.body);
        data.save();
        res.send("Doctor Details Added")
        res.end();
    }

    static async GetDoctorByID(req, res) {
        var data = await DoctorModel.findById(req.params.doctId)
        res.send(data);
        res.end();
    }

    static async UpdateDoctor(req, res) {
        DoctorModel.findById(req.params.doctId).then((model) => {
            return Object.assign(model, {
                DoctorID: req.body.DoctorID,
                DoctorName: req.body.DoctorName,
                DoctorContact: req.body.DoctorContact,
                DoctorQualification: req.body.DoctorQualification
            });
        }).then((model) => {
            return model.save().then(() => { res.send("Docter Details Updated") }).catch((err) => {
                res.send(err.message)
                res.end()
            })
        }
        )
    }


    static async DeleteDoctor(req, res) {
        var idtodelte = req.params.doctId;
        DoctorModel.deleteOne({ _id: idtodelte }, function (err) {
            if (!err) {
                res.send("Document Deleted")
                console.log("Document Deleted");
            }
            else {
                res.send("Unable to delete")
                console.log("Unable to delete");
            }
            res.end()
        })
    }
    
    static async PatientsUnderDocter(req, res) {

        var data = await PatientModel.find({ Doctor: { $in: [req.params.doctId] } }, "FirstName Diseases")
        res.send(data)

    }
}

router.get("/", DoctorController.GetDoctors);
router.get("/:doctId", DoctorController.GetDoctorByID);
router.post("/", DoctorController.PostDoctor);
router.put("/:doctId", DoctorController.UpdateDoctor);
router.delete("/:doctId", DoctorController.DeleteDoctor);
router.get("/:doctId/patients", DoctorController.PatientsUnderDocter);


module.exports = router
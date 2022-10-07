const mongoose = require("mongoose")
const express = require("express")
const PatientModel = require("../Model/PatientModel")
var router = express.Router();


class PatientController {
    static async GetPatients(req, res) {
        var data = await PatientModel.find().populate("Doctor", "DoctorName").populate("Department", "DepartmentrName")
        res.send(data);
        res.end();
    }
    static async GetPatientById(req, res) {
        var data = await PatientModel.findById(req.params.patientId).populate("Doctor", "DoctorName").populate("Department", "DepartmentrName")
        res.send(data);
        res.end();
    }
    static async PostPatient(req, res) {
        var data = new PatientModel(req.body);
        data.save();
        res.send("Patient Details Added")
        res.end();
    }

    static async GetPatientsMedicine(req, res) {
        var data = await PatientModel.findById(req.params.patientId)
    res.send(data.Medicine);
    res.end();
    }
}

router.get("/", PatientController.GetPatients);
router.get("/:patientId", PatientController.GetPatientById);
router.post("/", PatientController.PostPatient);
router.get("/:patientId/medicins", PatientController.GetPatientsMedicine);

module.exports = router
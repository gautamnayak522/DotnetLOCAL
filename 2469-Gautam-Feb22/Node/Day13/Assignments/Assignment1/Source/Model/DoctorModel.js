const mongoose = require("mongoose");
const DoctorSchema = new mongoose.Schema( {
    DoctorID : Number,
    DoctorName : String,
    DoctorContact : Number,
    DoctorQualification : [String]
});
const DoctorModel = mongoose.model('Doctors',DoctorSchema)
module.exports=DoctorModel;
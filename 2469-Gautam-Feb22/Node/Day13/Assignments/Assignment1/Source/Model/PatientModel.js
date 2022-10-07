const mongoose = require("mongoose");
const DoctorModel = require("./DoctorModel");
const DepartmentModel = require("./DepartmentModel");
const PatientSchema = new mongoose.Schema( {
    FirstName : String,
    LastName : String,
    ContactNo : Number,
    DOB:Date,
    Gender:String,
    Diseases:[String],
    Doctor:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:DoctorModel,
    }],
    Department:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:DepartmentModel,
    }],
    Medicine:{
        Morning:[String],
        AfterNoon:[String],
        Night:[String]
    }
    
});
const PatientModel = mongoose.model('Patients',PatientSchema)
module.exports=PatientModel;
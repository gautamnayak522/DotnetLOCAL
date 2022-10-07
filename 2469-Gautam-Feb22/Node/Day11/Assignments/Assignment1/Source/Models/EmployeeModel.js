const mongoose = require('mongoose');
let empSchema = new mongoose.Schema({
    EmpId: {type:Number,required:true},
    FirstName: {type:String,required:true},
    Lastname: {type:String,required:true},
    Assignments: [{
        AssignmentId: Number,
        AssignmentCategory: String,
        AssignmentName: String,
        AssignmentStatus: String
    }]
})

const Emp = mongoose.model("Employees", empSchema);
module.exports =  Emp 
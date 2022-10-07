const mongoose = require('mongoose');
let empSchema = new mongoose.Schema({
    EmpId: Number,
    FirstName: String,
    Lastname: String,
    Assignments: [{
        AssignmentId: Number,
        AssignmentCategory: String,
        AssignmentName: String,
        AssignmentStatus: String
    }]
})

const Emp = mongoose.model("Employees", empSchema);
module.exports =  Emp 
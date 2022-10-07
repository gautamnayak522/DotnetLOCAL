const mongoose = require('mongoose');
var assiSchema = require('./AssignmentModel');
let empSchema = new mongoose.Schema({
    EmpId: Number,
    FirstName: String,
    Lastname: String,
    Assignments: [assiSchema]
})

const Emp = mongoose.model("Employees", empSchema);
module.exports =  Emp 
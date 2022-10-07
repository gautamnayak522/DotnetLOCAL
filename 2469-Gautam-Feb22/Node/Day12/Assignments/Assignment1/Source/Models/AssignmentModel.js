const mongoose = require('mongoose');
let assiSchema = new mongoose.Schema({

    AssignmentId: Number,
    AssignmentCategory: String,
    AssignmentName: String,
    AssignmentStatus: String
})

module.exports = assiSchema 

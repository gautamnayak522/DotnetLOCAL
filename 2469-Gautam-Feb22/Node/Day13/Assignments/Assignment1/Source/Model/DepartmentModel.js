const mongoose = require("mongoose");
const DepartmentSchema = new mongoose.Schema( {
    DepartmentID : Number,
    DepartmentrName : String,
    HealthCareAssistants : [{
        AssiId:Number,
        AssiName:String
    }]
});
const DepartmentModel = mongoose.model('Departments',DepartmentSchema)
module.exports=DepartmentModel;
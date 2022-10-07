const mongoose = require("mongoose");
const CategoryModel = require("./CategoryModel");
const prodSchema = new mongoose.Schema( {
    Name : String,
    Price:Number,
    Category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:CategoryModel,
        trim: true,
    }
});
const prodModel = mongoose.model('Product',prodSchema)
module.exports=prodModel;
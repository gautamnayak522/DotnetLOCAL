const mongoose = require('mongoose');
let stdSchema = new mongoose.Schema({
    ID: {type:Number,required:true},
    Name: {type:String,required:true},
    Address: {type:String,required:true},
    Fees: {
        Amount: Number,
        PaymentDate: Date,
        Status: String,
    },
    Result: {
        Hindi: Number,
        Eng: Number,
        Math: Number,
        Total: Number,
        Grade: String,
    }
})

const Std = mongoose.model("Students", stdSchema);
module.exports =  Std 
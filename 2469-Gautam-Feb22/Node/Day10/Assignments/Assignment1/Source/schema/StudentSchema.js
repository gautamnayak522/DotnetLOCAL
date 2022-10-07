const mongoose = require('mongoose');
let stdSchema = new mongoose.Schema({
    ID: Number,
    Name: String,
    Address: String,
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
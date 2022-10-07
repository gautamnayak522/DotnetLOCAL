const mongoose = require('mongoose');
let stdSchema = new mongoose.Schema({
    ID: {
        type:Number,
        required:[true,'ID is required']
    },
    Name: {
        type:String,
        required:true,
        minlength:[4,'Name is too short'],
        match : [/^[a-zA-Z-]+$/,'Name should contain alpha-numeric characters only']
    },
    Address: {
        type:String,
        required:[true,'Address is required']
    },
    Fees: {
        Amount: Number,
        PaymentDate: Date,
        Status: String,
    },
    Result: {
        Hindi: {
            type:Number,
            required:true,
            min:0,
            max:100
        },
        Eng: {
            type:Number,
            required:true,
            min:0,
            max:100
        },
        Math: {
            type:Number,
            required:true,
            min:0,
            max:100
        },
        Total: {
            type:Number,
            required:true,
            min:0,
            max:300
        },
        Grade: {
            type:String,
            required:true
        },
    }
})

const Std = mongoose.model("Students", stdSchema);
module.exports =  Std 
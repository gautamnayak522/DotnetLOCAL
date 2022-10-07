const mongoose = require("mongoose");

let StdSchema = new mongoose.Schema({
    _id:{type:Number,required:[true,'ID is required']},
    Name:{
        type:String,
        required:true,
        minlength:[4,'Name is too short'],
        match : [/^[a-zA-Z-]+$/,'Name should contain alpha-numeric characters only']
    },
    Email:{
        type:String,
        required:true,
        match: [/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/, 'Please fill a valid email address']
    },
    Phone:{
        type:String,
        required:[true,'Enter Mobile Number'],
        match:[/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/,'Invalid Mobile Number']
    },
    DOB:{type:String,required:true}
})

const Student = mongoose.model("Students",StdSchema)
module.exports = Student
const mongoose = require("mongoose");
const catSchema = new mongoose.Schema( {
    CategoryName : {type:String}
});
const CatModel = mongoose.model('Category',catSchema)
module.exports=CatModel;
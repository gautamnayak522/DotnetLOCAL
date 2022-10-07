var express = require("express");
var router = express.Router({ mergeParams: true });
const Std = require("../../../Models/StudentModel");

router.get("/",(req,res)=>{

  Std.findOne({ "_id": req.params.stdid }, function (err, result) {
    if (err) {
      res.send("No data available");
    } else {
      res.send(result);
      console.log(result);
    }
  }).select({Fees:1});
  }
)
module.exports = router;

var express = require("express");
var router = express.Router();
var fees = require("./child/fees");
var result = require("./child/result");
const Std = require("../../schema/StudentSchema");
router.use(express.json());

router.get("/",async (req,res)=>{
    let data = await Std.find();
    res.send(data);
    res.end();
});
router.get("/:stdid", (req,res)=>{
    Std.findById(req.params.stdid, function(err, data) {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
})

router.use("/:stdid/fees", fees);
router.use("/:stdid/result", result);
module.exports = router;

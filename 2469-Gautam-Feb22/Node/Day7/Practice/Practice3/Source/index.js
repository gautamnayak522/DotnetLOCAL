const express = require('express');
const app = express();
app.disable("x-powered-by");
app.use(express.static('public'));
const morgan = require("morgan")
app.use(morgan("common"))
app.listen(3000,()=>{
    console.log("listening at 3000.........");
});

app.get("/", (req, res) => {
    res.send("Hello Stranger! How are you?");
  });

  app.get("/abcd", (req, res) => {
    res.send("Hello Stranger! welcome to abcd");
  });
const express = require('express');
const app = express();
app.disable("x-powered-by");
const port = 3000;
app.use(express.json());

app.listen(port, () => {
    console.log(`App listening on : ${port} `);
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => console.log("Connected MongoDB"))
    .catch(() => console.log("Could not connect to MongoDB "))


const empSchema = new mongoose.Schema({
    EmpId: Number,
    FirstName: String,
    Lastname: String,
    Assignments: [{
        AssignmentId: Number,
        AssignmentCategory: String,
        AssignmentName: String,
        AssignmentStatus: String
    }]
})

const Emp = mongoose.model('Emp', empSchema);

app.get("/", async (req, res) => {

    let data = await Emp.find();
    console.log(data);
    res.send(data);
    console.log("Main Page");
    res.end();
});

app.post("/", (req, res) => {

    var myobj = new Emp(req.body);
    console.log(myobj);

    myobj.save((err, data) => {
        if (err) { console.log(err); }
        else {
            console.log("Data Entered");
            res.send("Entered")
            res.end()
        }
    })
});

app.delete("/", async (req, res) => {

    var idtodelte = req.body._id;
    console.log(idtodelte);

    Emp.deleteOne({ _id: idtodelte }, function (err) {
        if (!err) {
            console.log("Document Deleted");
        }
        else {
            console.log("Unable to delete");
        }
        res.end()
    });

});


app.put('/', (req, res) => {
    const newFirstName = req.body.FirstName;
    const newLastname = req.body.Lastname;
    Emp.findById(req.body._id).then((model) => {
        return Object.assign(model, {FirstName: newFirstName,Lastname:newLastname});
    }).then((model) => {
        res.send("Document Updated");
        res.end();
        return model.save();
    }).catch((err) => {
        res.send(err);
    });
});


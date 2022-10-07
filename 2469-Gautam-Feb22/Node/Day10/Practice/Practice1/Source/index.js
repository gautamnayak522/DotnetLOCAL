console.log("Hello");
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

const Emp = mongoose.model('Emp',empSchema);

const emp1 = new Emp({
    EmpId: 2,
    FirstName: "ABC",
    Lastname: "AAA",
    Assignments: [{
        AssignmentId: 1,
        AssignmentCategory: "Frontend",
        AssignmentName: "Angular",
        AssignmentStatus: "Pending"
    },
    {
        AssignmentId: 2,
        AssignmentCategory: "Frontend",
        AssignmentName: "React",
        AssignmentStatus: "Done"
    }]
})

emp1.save();

async function getEmps(){
    app.get("/", async (req, res) => {

        let data = await Emp.find();
         console.log(data);
        res.send(data);
        console.log("Main Page");
        res.end();
    });
}

getEmps()



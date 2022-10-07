const express = require('express')
const router = express.Router()
router.use(express.json())
var childrouter = express.Router({mergeParams: true});
let middlewares=require('./middlewares')

const fs = require('fs')
let mydata;
fs.readFile('./data.json', (err, data) => {
    if (err) {
        console.log(err);
    }
    mydata = JSON.parse(data);
})

router.use((req,res,next)=>{
    console.log("------------------------------");
    next()
});

//MAIN PAGE
router.get('/',[middlewares.main],(req, res) => {
    res.send("MAIN PAGE : go to /emps");
    res.end()
    console.log("MAIN PAGE");
})


//GET FULL JSON
router.get('/emps',[middlewares.m1],(req, res) => {
    res.send(mydata);
    res.end()
    console.log("PRINTING ALL JSON DATA");
})

router.use('/emps/:empid/child/assignments', childrouter);

// GET all assignments of employee
childrouter.get('/',[middlewares.m2], (req, res) => {
    console.log("PRINTING all assignments of employee : " + parseInt(req.params.empid));
    const result = mydata.find((data) => {
        return data.id === parseInt(req.params.empid);
    });
    res.send(result.assignments);
    res.end()

})

// GET assignment of employee
childrouter.get('/:assiid',[middlewares.m3], (req, res) => {
    console.log(`PRINTING assignment ${parseInt(req.params.assiid)} of employee  ${parseInt(req.params.empid)}`);
    const result = mydata.find((data) => {
        return data.id === parseInt(req.params.empid);
    });

    const result2 = result.assignments.find((data) => {
        return data.AssignmentId == parseInt(req.params.assiid);
    });
    console.log("");
    res.send(result2);
    res.end()
})

// UPDATE assignment of employee
childrouter.put('/:assiid', (req, res) => {


    console.log(`UPDATING assignment ${parseInt(req.params.assiid)} of employee  ${parseInt(req.params.empid)}`);

    const result = mydata.find((data) => {
        return data.id === parseInt(req.params.empid);
    });
    const result2 = result.assignments.find((data) => {
        return data.ActionCode == parseInt(req.params.assiid);
    });

    result2.ActionCode = req.body.ActionCode;
    result2.ActionReasonCode = req.body.ActionReasonCode;
    result2.ActualTerminationDate = req.body.ActualTerminationDate;
    result2.AssignmentCategory = req.body.AssignmentCategory;
    result2.AssignmentName = req.body.AssignmentName;
    result2.AssignmentNumber = req.body.AssignmentNumber;
    result2.AssignmentProjectedEndDate = req.body.AssignmentProjectedEndDate;
    result2.AssignmentStatus = req.body.AssignmentStatus;
    result2.AssignmentStatusTypeId = req.body.AssignmentStatusTypeId;
    result2.BusinessUnitId = req.body.BusinessUnitId;
    result2.CreationDate = req.body.CreationDate;
    result2.DefaultExpenseAccount = req.body.DefaultExpenseAccount;
    result2.DepartmentId = req.body.DepartmentId;
    result2.EffectiveEndDate = req.body.EffectiveEndDate;
    result2.EffectiveStartDate = req.body.EffectiveStartDate;
    result2.EndTime = req.body.EndTime;
    result2.Frequency = req.body.Frequency;
    result2.FullPartTime = req.body.FullPartTime;
    result2.GradeId = req.body.GradeId;
    result2.GradeLadderId = req.body.GradeLadderId;
    result2.JobId = req.body.JobId;
    result2.LastUpdateDate = req.body.LastUpdateDate;
    result2.LegalEntityId = req.body.LegalEntityId;
    result2.LocationId = req.body.LocationId;
    result2.ManagerAssignmentId = req.body.ManagerAssignmentId;
    result2.ManagerId = req.body.ManagerId;
    result2.assignmentDFF = req.body.assignmentDFF;
    result2.assignmentExtraInformation = req.body.assignmentExtraInformation;
    result2.empreps = req.body.empreps;
    result2.links = req.body.links;

    fs.writeFile('./data.json', JSON.stringify(mydata), (err) => {
        console.log('File updated');
    });
    res.send(result2);
    res.end();
})


module.exports = router
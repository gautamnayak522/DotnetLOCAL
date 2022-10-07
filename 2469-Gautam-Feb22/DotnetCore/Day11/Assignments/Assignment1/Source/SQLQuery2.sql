SELECT * FROM Doctors;
SELECT * FROM Departments;
SELECT * FROM Assistants;
SELECT * FROM Patients;
SELECT * FROM Drugs;
SELECT * FROM DRUG_TIMINGS;

INSERT INTO Doctors VALUES ('BBB',1);

INSERT INTO Assistants VALUES ('Assistant1',2)
INSERT INTO Assistants VALUES ('Assistant2',3)
INSERT INTO Assistants VALUES ('Assistant3',1)
INSERT INTO Assistants VALUES ('Assistant4',3)

INSERT INTO Patients VALUES ('Patient1','M',3,1);
INSERT INTO Patients VALUES ('Patient2','F',5,1);
INSERT INTO Patients VALUES ('Patient3','M',6,2);
INSERT INTO Patients VALUES ('Patient4','F',4,3);
INSERT INTO Patients VALUES ('Patient5','F',4,3);

INSERT INTO Drugs VALUES ('DOLO');
INSERT INTO Drugs VALUES ('Metformin');
INSERT INTO Drugs VALUES ('Metoprolol');
INSERT INTO Drugs VALUES ('D-350');

INSERT INTO DRUG_TIMINGS VALUES (1,1,'Morning')
INSERT INTO DRUG_TIMINGS VALUES (1,2,'Night')
INSERT INTO DRUG_TIMINGS VALUES (2,3,'Afternoon')
INSERT INTO DRUG_TIMINGS VALUES (3,4,'Night')

-- Find a report of patient assigned to a particular doctor 

SELECT p.PatientID,p.PatientName,p.Gender,a.AssistantName 
FROM Patients p JOIN Assistants a 
ON p.AssistantID = a.AssistantID 
WHERE p.DoctorID = 4;

SELECT PatientID,PatientName,Gender FROM Patients WHERE DoctorID = 4;


--Find a report of medicine list for a particular patient

--enter patient ID

SELECT dt.DrugID,d.DrugName,dt.DrugTime 
FROM DRUG_TIMINGS dt JOIN Drugs d  
ON d.DrugID = dt.DrugID
WHERE dt.PatientID = 1;


-- Display summary report of Doctor and patient

SELECT p.PatientID,p.PatientName,p.Gender,p.DoctorID,d.DoctorName ,dp.DepatName
FROM Patients P JOIN Doctors D 
ON p.DoctorID = d.DoctorID
JOIN Departments dp
ON d.DeptID = dp.DeptID
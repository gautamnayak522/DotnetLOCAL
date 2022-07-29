USE HospitalManagement
GO
--1
CREATE TABLE Departments
(
	DeptID INT PRIMARY KEY IDENTITY(1,1),
	DepatName VARCHAR(50) NOT NULL
)
GO
--2
CREATE TABLE Doctors
(
	DoctorID INT PRIMARY KEY IDENTITY(1,1),
	DoctorName	VARCHAR(50) NOT NULL,
	DeptID INT,
	CONSTRAINT DOCTOR_DEPT FOREIGN KEY(DeptID) REFERENCES Departments(DeptID)
)
GO
--3
CREATE TABLE Assistants
(
	AssistantID INT PRIMARY KEY IDENTITY(1,1),
	AssistantName VARCHAR(50) NOT NULL,
	DeptID INT,
	CONSTRAINT ASSISTANT_DEPT FOREIGN KEY(DeptID) REFERENCES Departments(DeptID)
)
GO
--4
CREATE TABLE Drugs
(
	DrugID INT PRIMARY KEY IDENTITY(1,1),
	DrugName VARCHAR(50) NOT NULL,
)
Go
--5
CREATE TABLE Patients
(
	PatientID INT PRIMARY KEY IDENTITY(1,1),
	PatientName VARCHAR(50) NOT NULL,
	Gender CHAR,
	DoctorID INT,
	AssistantID INT,
	CONSTRAINT FKPatient_Doctor FOREIGN KEY(DoctorID) REFERENCES Doctors(DoctorID),
	CONSTRAINT FKpatient_Assistant FOREIGN KEY(AssistantID) REFERENCES Assistants(AssistantID),
	CONSTRAINT CHK_GENDER CHECK (Gender IN ('M','F'))
)
GO
--6

CREATE TABLE DRUG_TIMINGS
(
	Drug_timeID INT PRIMARY KEY IDENTITY(1,1),
	PatientID INT,
	DrugID INT,
	DrugTime VARCHAR(50) NOT NULL,
	CONSTRAINT FKDrugs_DRUG FOREIGN KEY(DrugID) REFERENCES Drugs(DrugID),
	CONSTRAINT FKDrugt_PatID FOREIGN KEY(PatientID) REFERENCES Patients(PatientID),
	CONSTRAINT CHK_DrugTime CHECK (DrugTime IN ('Morning','Afternoon','Night'))
)

DROP TABLE DRUG_TIMINGS
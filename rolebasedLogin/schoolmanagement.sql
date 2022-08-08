CREATE DATABASE SchoolManagement;
GO
USE SchoolManagement;

CREATE TABLE Departments(
	deptID int PRIMARY KEY IDENTITY(1,1),
	deptName VARCHAR(50) NOT NULL
)
INSERT INTO Departments VALUES ('Computer');
INSERT INTO Departments VALUES ('Civil');
INSERT INTO Departments VALUES ('Electrical');


CREATE TABLE Students
(
	stdID int PRIMARY KEY IDENTITY(1,1),
	stdName VARCHAR(50) NOT NULL,
	Address VARCHAR(50),
	Department INT,
	CONSTRAINT FK_std_deptID FOREIGN KEY (Department) REFERENCES Departments(deptID)
)

SELECT * FROM Departments
SELECT * FROM Students

INSERT INTO Students VALUES('Gautam','Porbandar',1);
INSERT INTO Students VALUES('Pramod','Somnath',2);
INSERT INTO Students VALUES('Sanjay','Junagadh',3);
INSERT INTO Students VALUES('Bhargav','Vankaner',1);


CREATE TABLE Users(
	UserID INT PRIMARY KEY IDENTITY(1,1),
	UserName VARCHAR(50) NOT NULL,
	Password VARCHAR(50) NOT NULL,
	EmailAddress VARCHAR(50) UNIQUE,
	UserRole VARCHAR(50),
	CONSTRAINT CHK_ROLE CHECK(UserRole IN ('Admin','Basic'))
)


INSERT INTO Users VALUES('Gautam','123','g@g.com','Admin');
INSERT INTO Users VALUES('Yash','123','y@y.com','Basic');

SELECT * FROM Users

CREATE DATABASE USERDB

USE HospitalManagement



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


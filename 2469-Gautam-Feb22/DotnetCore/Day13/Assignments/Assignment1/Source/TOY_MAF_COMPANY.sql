CREATE DATABASE TOY_MAF_COMPANY
GO
USE TOY_MAF_COMPANY

CREATE TABLE ToyTypes
(
	ToyTypeID INT PRIMARY KEY IDENTITY(1,1),
	ToyType VARCHAR(50) NOT NULL
)

CREATE TABLE ToyCompanies
(
	PlantId INT PRIMARY KEY IDENTITY(1,1),
	PlantName VARCHAR(50) NOT NULL,
	PlantAddress VARCHAR(50) NOT NULL,
	ToyTypeID INT,
	CONSTRAINT FK_Comp_ToyType FOREIGN KEY(ToyTypeID) REFERENCES ToyTypes(ToyTypeID)
)
CREATE TABLE Toys
(
	ToyID INT PRIMARY KEY IDENTITY(1,1),
	ToyName VARCHAR(50) NOT NULL,
	ToyPrice INT,
	Toy_mafAt INT,
	CONSTRAINT FK_Toy_PlantID FOREIGN KEY(Toy_mafAt) REFERENCES ToyCompanies(PlantId)
)

CREATE TABLE Customers
(
	CustID INT PRIMARY KEY IDENTITY(1,1),
	CustName VARCHAR(50) NOT NULL,
	CustEmail VARCHAR(50) UNIQUE,
)
CREATE TABLE Cust_Addresses
(
	AddressID INT PRIMARY KEY IDENTITY(1,1),
	CustID INT,
	Address VARCHAR(50) NOT NULL,
	IsDefaultAddress BIT,
	CONSTRAINT FK_Address_CustID FOREIGN KEY(CustID) REFERENCES Customers(CustID)
)

CREATE TABLE CompanySchems
(
	SchemeID INT PRIMARY KEY IDENTITY(1,1),
	SchemeName VARCHAR(50),
	CretedOn date DEFAULT GETDATE(),
	ExpireOn date
)

CREATE TABLE Orders
(
	OrderID INT PRIMARY KEY IDENTITY(1,1),
	CustID INT,
	OrderDate date DEFAULT GETDATE(),
	AddtoDeliever INT,
	AppliedSchemeID INT,
	CONSTRAINT FK_Orders_CustID FOREIGN KEY(CustID) REFERENCES Customers(CustID),
	CONSTRAINT FK_Orders_AddID FOREIGN KEY(AddtoDeliever) REFERENCES Cust_Addresses(AddressID),
	CONSTRAINT FK_AppScheme_SchemeID FOREIGN KEY(AppliedSchemeID) REFERENCES CompanySchems(SchemeID)
)

CREATE TABLE OrderedItems
(
	OrderItemID INT PRIMARY KEY IDENTITY(1,1),
	OrderID INT,
	ToyID INT,
	Qty INT,
	CONSTRAINT FK_OrderItem_OrderID FOREIGN KEY(OrderID) REFERENCES Orders(OrderID),
	CONSTRAINT FK_OrderItem_ToyID FOREIGN KEY(ToyID) REFERENCES Toys(ToyID)
)

SELECT * FROM ToyTypes;
SELECT * FROM ToyCompanies;
SELECT * FROM Toys;
SELECT * FROM CompanySchems;
SELECT * FROM Customers;
SELECT * FROM Cust_Addresses;
SELECT * FROM Orders;
SELECT * FROM OrderedItems;

--Inserting Values

--ToyTypes
INSERT INTO ToyTypes VALUES ('Animals');
INSERT INTO ToyTypes VALUES ('Doll');
INSERT INTO ToyTypes VALUES ('Action_Heroes');

--ToyCompanies
INSERT INTO ToyCompanies VALUES ('ACOMPANY','AAA_ADD',1);
INSERT INTO ToyCompanies VALUES ('BCOMPANY','BBB_ADD',2);
INSERT INTO ToyCompanies VALUES ('CCOMPANY','CCC_ADD',3);

--Toys
INSERT INTO Toys VALUES ('Barbie',500,2);
INSERT INTO Toys VALUES ('Lion',600,1);
INSERT INTO Toys VALUES ('Monkey',300,1);
INSERT INTO Toys VALUES ('SpiderMan',800,3);
INSERT INTO Toys VALUES ('Queen',1400,2);
INSERT INTO Toys VALUES ('Hulk',500,3);

--CompanySchems
INSERT INTO CompanySchems VALUES ('GET_50_pr_OFF',GETDATE(),'2023-07-30');
INSERT INTO CompanySchems VALUES ('GET_free_Delievery',GETDATE(),'2023-07-30')

--Customers
INSERT INTO Customers VALUES ('GAUTAM','g@g.com');
INSERT INTO Customers VALUES ('YASH','y@y.com');
INSERT INTO Customers VALUES ('SAUMYA','s@s.com');
INSERT INTO Customers VALUES ('JAY','j@j.com');
INSERT INTO Customers VALUES ('VIKAS','v@v.com');

--Cust_Addresses

INSERT INTO Cust_Addresses VALUES (1,'Porbandar','false');
INSERT INTO Cust_Addresses VALUES (1,'Rajkot','false');
INSERT INTO Cust_Addresses VALUES (1,'Ahmedabad','true');
INSERT INTO Cust_Addresses VALUES (2,'Junagadh','false');
INSERT INTO Cust_Addresses VALUES (2,'Ahmedabad','true');
INSERT INTO Cust_Addresses VALUES (5,'Porbandar','true');
INSERT INTO Cust_Addresses VALUES (6,'Dhoraji','true');
INSERT INTO Cust_Addresses VALUES (5,'Vapi','true');   

--Orders
INSERT INTO Orders VALUES (1,GETDATE(),1,2);
INSERT INTO Orders VALUES (2,GETDATE(),2,2);      

--OrderedItems

INSERT INTO OrderedItems VALUES (1,2,3);
INSERT INTO OrderedItems VALUES (1,6,1);

INSERT INTO OrderedItems VALUES (4,1,1);
INSERT INTO OrderedItems VALUES (4,5,1);
INSERT INTO OrderedItems VALUES (4,4,1);

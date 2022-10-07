USE OrderManagement

--Create Table

CREATE TABLE Products
(
	ProductId INT PRIMARY KEY IDENTITY(1,1),
	ProductName VARCHAR(50),
	Price INT,
	MafDate Date DEFAULT GETDATE(),
	MafAt VARCHAR(50),
	SKU VARCHAR(50),
	CategoryName VARCHAR(50),
	SubCategoryName VARCHAR(50),
	Description VARCHAR(50),
	Quantity INT,
	Supplier VARCHAR(50)
)


CREATE TABLE ProductsTest
(
	ProductId INT IDENTITY(1,1),
	ProductName VARCHAR(50),
	Price INT,
	MafDate Date DEFAULT GETDATE(),
	MafAt VARCHAR(50),
	SKU VARCHAR(50),
	CategoryName VARCHAR(50),
	SubCategoryName VARCHAR(50),
	Description VARCHAR(50),
	Quantity INT,
	Supplier VARCHAR(50)
)

SELECT * FROM Products
SELECT * FROm ProductsTest


USE OrderManagement
--Insert Data

--Products

SET NOCOUNT ON
DECLARE @count as INT
SET @count = 2
WHILE @count < 200000
BEGIN
	
	INSERT INTO Products (ProductName,Price,MafDate,MafAt,SKU,CategoryName,SubCategoryName,Description,Quantity,Supplier) VALUES
	(CONCAT('Product',@count),2500,GETDATE(),'Ahmedabad',CONCAT('ABC-00',@count),'Test','Test','This is Product Description',500,'Radix');
	SET @count = @count+1

END


--ProductsTest

SET NOCOUNT ON
DECLARE @count as INT
SET @count = 1
WHILE @count < 200000
BEGIN
	
	INSERT INTO ProductsTest (ProductName,Price,MafDate,MafAt,SKU,CategoryName,SubCategoryName,Description,Quantity,Supplier) VALUES
	(CONCAT('Product',@count),2500,GETDATE(),'Ahmedabad',CONCAT('ABC-00',@count),'Test','Test','This is Product Description',500,'Radix');
	SET @count = @count+1

END





USE OrderManagement

DBCC FREEPROCCACHE
DBCC DROPCLEANBUFFERS



SELECT * FROM Products

SELECT * FROM Products WHERE ProductId <200000


SELECT * FROM ProductsTest

SELECT * FROM ProductsTest WHERE ProductId < 15000

SELECT * FROM ProductsTest WHERE ProductId BETWEEN 15000 AND 30000
SELECT * FROM ProductsTest WHERE ProductId <200000


SELECT * FROM Products Where SKU = 'ABC-0011'

SELECT * FROM ProductsTest Where SKU = 'ABC-0011'

SELECT * FROM ProductsTest WHERE mafAt = 'Ahmedabad' ORDER BY ProductId DESC







SET NOCOUNT ON
DECLARE @count as INT
SET @count = 1
WHILE @count < 50000
BEGIN
	
	INSERT INTO Users (UserName,Password) VALUES (CONCAT('user',@count),'12345');
	SET @count = @count+1

END

SELECT * from Users

SELECT * FROM Users WHERE UserId = 27500

USE OrderManagement

--table without index

CREATE TABLE UsersTest
(
	UserId INT IDENTITY(1,1),
	UserName VARCHAR(50),
	Password VARCHAR(50)
)

SELECT * FROM UsersTest



SET NOCOUNT ON
DECLARE @count as INT
SET @count = 1
WHILE @count < 50000
BEGIN
	INSERT INTO UsersTest (UserName,Password) VALUES (CONCAT('user',@count),'123456789');
	SET @count = @count+1
END
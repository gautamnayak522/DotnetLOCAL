CREATE DATABASE SHOPING_SYSTEM
GO
USE SHOPING_SYSTEM

CREATE TABLE Product (
	ProductID INT PRIMARY KEY IDENTITY(1,1),
	Name VARCHAR(50),
	Price INT,
	Status VARCHAR(50) DEFAULT 'InStock',
	CreatedDate datetime DEFAULT GETDATE(),
	CONSTRAINT CHK_STATUS CHECK( Status IN ('InStock','OutofStock'))
)


INSERT INTO Product(Name,Price,CreatedDate) VALUES ('Toy',500,'2022-02-01')
INSERT INTO Product(Name,Price,CreatedDate) VALUES ('Mobile Phone',18000,'2022-03-02')
INSERT INTO Product(Name,Price,CreatedDate) VALUES ('Monitor',10000,'2022-03-03')
INSERT INTO Product(Name,Price,CreatedDate) VALUES ('Mouse',600,'2022-03-04')

-----------------------------

CREATE TABLE Users
(
	UserID INT PRIMARY KEY IDENTITY(1,1),
	UserName VARCHAR(50) NOT NULL,
	isPrime BIT
)

INSERT INTO Users VALUES ('Reema',0)
INSERT INTO Users VALUES ('Ronit',1)
INSERT INTO Users VALUES ('Megha',1)
INSERT INTO Users VALUES ('Rohit',0)

---------------------------------

CREATE TABLE Orders
(
	OrderID  INT PRIMARY KEY IDENTITY(1,1),
	UserID INT,
	OrderDate date,
	OrderStatus VARCHAR(50) DEFAULT 'Placed',
	OrderAmount INT,
	DiscountAmount INT,
	PayableAmount INT,
	CONSTRAINT FK_UserID FOREIGN KEY(UserID) REFERENCES Users(UserID)
)

INSERT INTO Orders VALUES (1,'2022-03-01','Placed',65000,5550,59450)

------------------

CREATE TABLE Discount
(
	DiscountID INT PRIMARY KEY IDENTITY(1,1),
	ProductID INT,
	DiscountPercentage INT,
	DateStart date,
	DateEnd date,
	CONSTRAINT FK_ProductID FOREIGN KEY(ProductID) REFERENCES Product(ProductID)
)

INSERT INTO Discount VALUES (1,15,'2022-03-01','2022-03-01')
INSERT INTO Discount VALUES (2,10,'2022-03-02','2022-03-02')
INSERT INTO Discount VALUES (4,20,'2022-07-07','2022-07-08')

--------------------------------

CREATE TABLE OrderItem(
	OrderItemID INT PRIMARY KEY IDENTITY(1,1),
	ProductID INT,
	OrderID INT,
	Qty INT,
	CONSTRAINT FK_ProductID2 FOREIGN KEY(ProductID) REFERENCES Product(ProductID),
	CONSTRAINT FK_UserID2 FOREIGN KEY(OrderID) REFERENCES Orders(OrderID)
)

INSERT INTO OrderItem VALUES (1,1,2)
INSERT INTO OrderItem VALUES (2,1,3)
INSERT INTO OrderItem VALUES (3,1,1)

-------------------------------------

SELECT * FROM Product
SELECT * FROM Users
SELECT * FROM Orders
SELECT * FROM Discount
SELECT * FROM OrderItem


---------------------------------------


SELECT * from OrderItem OI JOIN Product P
ON OI.ProductID = P.ProductID
WHERE OrderID IN (SELECT OrderID FROM Orders WHERE UserID=1);


--ORDERS OF USER1

GO

CREATE PROC ORDERSOFUSER1
AS
BEGIN
SELECT OI.ProductID,P.Name,OI.Qty,P.Price,(OI.Qty*P.Price) AS TOTAL_PRICE 
FROM OrderItem OI JOIN Product P
ON OI.ProductID = P.ProductID
WHERE OrderID IN (SELECT OrderID FROM Orders WHERE UserID=1)
END


EXEC ORDERSOFUSER1;


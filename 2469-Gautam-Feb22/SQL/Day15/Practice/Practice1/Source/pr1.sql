
SELECT * FROM Products
DELETE FROM Products WHERE Id >3

ALTER TABLE Products
ADD Quantity INT

UPDATE Products
SET Quantity = 10

--Transactions

BEGIN TRANSACTION

INSERT INTO Products VALUES('Headphones',1500,12)

UPDATE Products 
SET Quantity = 25
WHERE Id=1
SELECT * FROM Products

COMMIT TRANSACTION


DBCC CHECKIDENT ('Products')
DBCC CHECKIDENT ('Products', RESEED, 6)

--------------------------------------

SELECT * FROM Products

SET IMPLICIT_TRANSACTIONS ON

--ROLLBACK TO SAVEPOINT

BEGIN TRAN
INSERT INTO Products VALUES('Headphones',1500,12)

SAVE TRANSACTION InsertStatement

UPDATE Products 
SET Quantity = 25
WHERE Id=1
SELECT * FROM Products 

ROLLBACK TRAN InsertStatement

SELECT * FROM Products 


--ROLLBACK

BEGIN TRAN
INSERT INTO Products VALUES('Headphones',1500,12)

UPDATE Products 
SET Quantity = 25
WHERE Id=1
SELECT * FROM Products 
SELECT @@TRANCOUNT AS OpenTransactions 


ROLLBACK TRAN 
SELECT * FROM Products 
SELECT @@TRANCOUNT AS OpenTransactions 


--AUTO COMMIT

BEGIN TRAN

UPDATE Products 
SET Quantity = 25
WHERE Id=1

INSERT INTO Products VALUES('Headphones','1500','c')

SELECT * FROM Products 

COMMIT TRAN 

SELECT * FROM Products 


--
USE myDB;  
GO  
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;  
GO  
BEGIN TRANSACTION;  
GO  
SELECT *   
    FROM employees
GO  
SELECT *   
    FROM Employees2
GO  
COMMIT TRANSACTION;  
GO



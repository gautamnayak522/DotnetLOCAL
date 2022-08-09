USE master
DROP DATABASE FlipkartDB
GO
CREATE DATABASE FlipkartDB

GO
USE FlipkartDB

CREATE TABLE product_category
(
	catID INT PRIMARY KEY IDENTITY(1,1),
	catName VARCHAR(30),
	description VARCHAR(MAX),
	thumbnail VARCHAR(50),
	active BIT DEFAULT 1,
	created_at datetime DEFAULT GETDATE(),
	modified_at datetime
)

CREATE TABLE product_subcategory
(
	subcatID INT PRIMARY KEY IDENTITY(1,1),
	catID INT,
	subcatName VARCHAR(30),
	description VARCHAR(MAX),
	thumbnail VARCHAR(50),
	active BIT DEFAULT 1,
	created_at datetime DEFAULT GETDATE(),
	modified_at datetime,
	CONSTRAINT FK_subcat_catID FOREIGN KEY(CatID) REFERENCES product_category(catID)
)

CREATE TABLE product_brands
(
	brandID INT PRIMARY KEY IDENTITY(1,1),
	brandName VARCHAR(30),
	description VARCHAR(MAX),
	thumbnail VARCHAR(50),
	created_at datetime DEFAULT GETDATE(),
	modified_at datetime
)


CREATE TABLE products
(
	productID INT PRIMARY KEY IDENTITY(1,1),
	productName VARCHAR(50) NOT NULL,
	description VARCHAR(MAX),
	catID INT,
	brandID INT,
	price INT,
	created_at datetime DEFAULT GETDATE(),
	modified_at datetime,
	CONSTRAINT FK_products_catID FOREIGN KEY(CatID) REFERENCES product_subcategory(subcatID),
	CONSTRAINT FK_products_brandID FOREIGN KEY(brandID) REFERENCES product_brands(brandID),
	CONSTRAINT CHK_PRICE CHECK(price>0)
)

CREATE TABLE products_inventory
(
	prodInvID INT PRIMARY KEY IDENTITY(1,1),
	productID INT,
	qty INT,
	created_at datetime DEFAULT GETDATE(),
	modified_at datetime,
	CONSTRAINT FK_productInv_productID FOREIGN KEY(productID) REFERENCES products(productID),
	CONSTRAINT CHK_QTY CHECK(Qty>0)
)

CREATE TABLE product_images
(
	prodImgID INT PRIMARY KEY IDENTITY(1,1),
	productID INT,
	imageURL VARCHAR(50),
	created_at datetime DEFAULT GETDATE(),
	modified_at datetime,
	CONSTRAINT FK_productImg_productID FOREIGN KEY(productID) REFERENCES products(productID)
)

CREATE TABLE product_colours
(
	prodColorID INT PRIMARY KEY IDENTITY(1,1),
	productID INT,
	color VARCHAR(50),
	isAvailable BIT DEFAULT 1,
	created_at datetime DEFAULT GETDATE(),
	modified_at datetime,
	CONSTRAINT FK_productColors_productID FOREIGN KEY(productID) REFERENCES products(productID)
)

CREATE TABLE product_sizes
(
	prodsizeID INT PRIMARY KEY IDENTITY(1,1),
	productID INT,
	Size VARCHAR(50),
	isAvailable BIT DEFAULT 1,
	created_at datetime DEFAULT GETDATE(),
	modified_at datetime,
	CONSTRAINT FK_productSizes_productID FOREIGN KEY(productID) REFERENCES products(productID)
)

CREATE TABLE users
(
	userID INT PRIMARY KEY IDENTITY(1,1),
	mobileNo VARCHAR(50) UNIQUE,
	emailAddress VARCHAR(50) UNIQUE,
	password VARCHAR(MAX),
	isAdmin BIT DEFAULT 0,
	firstName VARCHAR(50),
	lastName VARCHAR(50),
	otp VARCHAR(10),
	created_at datetime DEFAULT GETDATE(),
	modified_at datetime
)

CREATE TABLE states
(
	stateID INT PRIMARY KEY IDENTITY(1,1),
	stateName VARCHAR(50),
	created_at datetime DEFAULT GETDATE(),
	modified_at datetime
)

CREATE TABLE user_Addresses
(
	userAddID INT PRIMARY KEY IDENTITY(1,1),
	userID INT,
	Addressline1 VARCHAR(MAX),
	Addressline2 VARCHAR(MAX),
	landMark VARCHAR(50),
	city VARCHAR(50),
	pin INT,
	stateID INT,
	isHome BIT DEFAULT 1,
	isOffice BIT DEFAULT 0,
	created_at datetime DEFAULT GETDATE(),
	modified_at datetime,
	CONSTRAINT FK_UserAddresses_userID FOREIGN KEY(userID) REFERENCES users(userID),
	CONSTRAINT FK_UserAddress_stateID FOREIGN KEY(stateID) REFERENCES states(stateID)
)

CREATE TABLE order_statuses
(
	orderstatusID INT PRIMARY KEY IDENTITY(1,1),
	status VARCHAR(30),
	created_at datetime DEFAULT GETDATE(),
	modified_at datetime
)

CREATE TABLE orders
(
	orderID INT PRIMARY KEY IDENTITY(1,1),
	orderNo VARCHAR(20),
	userID INT,
	orderDate datetime DEFAULT GETDATE(),
	orderstatusID INT,
	deleveryAddressID INT,
	totalAmount INT,
	created_at datetime DEFAULT GETDATE(),
	modified_at datetime,
	CONSTRAINT FK_Orders_userID FOREIGN KEY(userID) REFERENCES users(userID),
	CONSTRAINT FK_Orders_orderstatusID FOREIGN KEY(orderstatusID) REFERENCES order_statuses(orderstatusID),
	CONSTRAINT FK_Orders_delieveryAddress FOREIGN KEY(deleveryAddressID) REFERENCES user_Addresses(userAddID)
)

CREATE TABLE orderitems
(
	orderitemID INT PRIMARY KEY IDENTITY(1,1),
	orderID INT,
	productID INT,
	qty INT,
	created_at datetime DEFAULT GETDATE(),
	modified_at datetime,
	CONSTRAINT FK_orderitems_orderID FOREIGN KEY(orderID) REFERENCES orders(orderID),
	CONSTRAINT FK_orderitems_productID FOREIGN KEY(productID) REFERENCES products(productID),
)


SELECT * FROM users


Update users
SET isAdmin = 'True'
WHERE userID =1

SELECT * FROM product_category
SELECT * FROM product_category
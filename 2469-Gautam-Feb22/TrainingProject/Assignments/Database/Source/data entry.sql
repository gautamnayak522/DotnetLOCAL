SELECT * FROM product_category
SELECT * FROM product_subcategory
SELECT * FROM product_brands
SELECT * FROM products
SELECT * FROM products_inventory
SELECT * FROM product_images
SELECT * FROM product_colours
SELECT * FROM product_sizes
SELECT * FROM users
SELECT * FROM states
SELECT * FROM user_Addresses
SELECT * FROM order_statuses
SELECT * FROM orders
SELECT * FROM orderitems
SELECT * FROM shoping_cart
SELECT * FROM cartitems


ALTER TABLE product_category
ALTER COLUMN thumbnail VARCHAR(MAX)

UPDATE users SET password = '123' where userID = 1


DELETE FROM product_subcategory
DBCC CHECKIDENT (product_subcategory, RESEED, 0)

DELETE FROM product_category
DBCC CHECKIDENT (product_category, RESEED, 0)

--product_category
INSERT INTO product_category(catName,description,thumbnail,modified_at) VALUES ('Electronics','This is Electronics category','https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',GETDATE());
INSERT INTO product_category(catName,description,thumbnail,modified_at) VALUES ('Home','This is Home category','https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100',GETDATE());
INSERT INTO product_category(catName,description,thumbnail,modified_at) VALUES ('Fashion','This is Fashion category','https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100',GETDATE());


--product_subcategory
INSERT INTO product_subcategory(catID,subcatName, description,thumbnail,modified_at) VALUES (1,'Mobile','This is Mobile subcategory under Electronics category',NULL,GETDATE());
INSERT INTO product_subcategory(catID,subcatName, description,thumbnail,modified_at) VALUES (1,'TV','This is TV subcategory under Electronics category',NULL,GETDATE());
INSERT INTO product_subcategory(catID,subcatName, description,thumbnail,modified_at) VALUES (1,'Laptop','This is Laptop subcategory under Electronics category',NULL,GETDATE());

INSERT INTO product_subcategory(catID,subcatName, description,thumbnail,modified_at) VALUES (2,'Home Decore','This is Home Decore subcategory under Home category',NULL,GETDATE());
INSERT INTO product_subcategory(catID,subcatName, description,thumbnail,modified_at) VALUES (2,'Kitchen','This is Kitchen subcategory under Home category',NULL,GETDATE());
INSERT INTO product_subcategory(catID,subcatName, description,thumbnail,modified_at) VALUES (2,'Bedroom Furniture','This is Bedroom Furniture subcategory under Home category',NULL,GETDATE());

INSERT INTO product_subcategory(catID,subcatName, description,thumbnail,modified_at) VALUES (3,'Men','This is Men subcategory under Grocery Fashion',NULL,GETDATE());
INSERT INTO product_subcategory(catID,subcatName, description,thumbnail,modified_at) VALUES (3,'Women','This is Women subcategory under Fashion category',NULL,GETDATE());
INSERT INTO product_subcategory(catID,subcatName, description,thumbnail,modified_at) VALUES (3,'Children','This is Children subcategory under Fashion category',NULL,GETDATE());

INSERT INTO product_subcategory(catID,subcatName, description,thumbnail,modified_at) VALUES (4,'HairOil','This is HairOil subcategory under Beauty&Toys Categoty',NULL,GETDATE());
INSERT INTO product_subcategory(catID,subcatName, description,thumbnail,modified_at) VALUES (3,'Shampoo','This is Shampoo subcategory under Beauty&Toys category',NULL,GETDATE());
INSERT INTO product_subcategory(catID,subcatName, description,thumbnail,modified_at) VALUES (3,'Toys','This is Toys subcategory under Beauty&Toys category',NULL,GETDATE());


INSERT INTO product_brands(brandName,description,thumbnail,modified_at) VALUES('SAMSUNG','samsung brand for electronics',NULL,GETDATE());
INSERT INTO product_brands(brandName,description,thumbnail,modified_at) VALUES('TOSHIBA','TOSHIBA brand for electronics',NULL,GETDATE());
INSERT INTO product_brands(brandName,description,thumbnail,modified_at) VALUES('LG','LG brand for electronics',NULL,GETDATE());
INSERT INTO product_brands(brandName,description,thumbnail,modified_at) VALUES('NOKIA','NOKIA brand for electronics',NULL,GETDATE());
INSERT INTO product_brands(brandName,description,thumbnail,modified_at) VALUES('MI','MI brand for electronics',NULL,GETDATE());
INSERT INTO product_brands(brandName,description,thumbnail,modified_at) VALUES('PUMA','PUMA brand for fashion',NULL,GETDATE());
INSERT INTO product_brands(brandName,description,thumbnail,modified_at) VALUES('ONEPLUS','ONEPLUS brand for electronics',NULL,GETDATE());
INSERT INTO product_brands(brandName,description,thumbnail,modified_at) VALUES('DELL','DELL brand for electronics',NULL,GETDATE());
INSERT INTO product_brands(brandName,description,thumbnail,modified_at) VALUES('NIKE','NIKE brand for Fashion',NULL,GETDATE());
INSERT INTO product_brands(brandName,description,thumbnail,modified_at) VALUES('BOAT','BOAT brand for electronics',NULL,GETDATE());
INSERT INTO product_brands(brandName,description,thumbnail,modified_at) VALUES('Fasttrack','Fasttrack brand for fashion',NULL,GETDATE());
INSERT INTO product_brands(brandName,description,thumbnail,modified_at) VALUES('Adidas','Adidas brand for fashion',NULL,GETDATE());



ALTER TABLE product_images
ALTER COLUMN imageURL VARCHAR(MAX)

INSERT INTO product_images VALUES (1,'https://rukminim1.flixcart.com/image/416/416/l1tmf0w0/mobile/s/k/y/nord-ce-2-iv2201-oneplus-original-imagdbygzxe83p9p.jpeg?q=70',1,GETDATE(),GETDATE())
INSERT INTO product_images VALUES (1,'https://rukminim1.flixcart.com/image/416/416/l0jwbrk0/shopsy-cases-covers/m/z/f/assspcameratrans-0ne-plss-n0rd-ce-2-tpu4-back-cover-lilliput-original-imagcbd9vrqkzckg.jpeg?q=70',0,GETDATE(),GETDATE())

INSERT INTO product_images VALUES (2,'https://rukminim1.flixcart.com/image/416/416/l0fm07k0/television/7/x/9/-original-imagc8fnpx39evgc.jpeg?q=70',1,GETDATE(),GETDATE())
INSERT INTO product_images VALUES (2,'https://rukminim1.flixcart.com/image/416/416/l3lx8cw0/television/x/t/y/-original-imagepfn24c6yxk2.jpeg?q=70',0,GETDATE(),GETDATE())

INSERT INTO product_images VALUES (3,'https://rukminim1.flixcart.com/image/416/416/kyeqjrk0/mobile/y/u/t/-original-imagan9qzdf2hbgy.jpeg?q=70',1,GETDATE(),GETDATE())
INSERT INTO product_images VALUES (3,'https://rukminim1.flixcart.com/image/416/416/kyeqjrk0/mobile/l/c/m/-original-imagan9qjhbd84rh.jpeg?q=70',0,GETDATE(),GETDATE())

INSERT INTO product_images VALUES (4,'https://rukminim1.flixcart.com/image/416/416/ku5ufm80/computer/x/4/j/g15-5515-gaming-laptop-dell-original-imag7chqvu3veeaz.jpeg?q=70',1,GETDATE(),GETDATE())
INSERT INTO product_images VALUES (4,'https://rukminim1.flixcart.com/image/416/416/ku5ufm80/computer/l/h/q/g15-5515-gaming-laptop-dell-original-imag7chqkagbejbf.jpeg?q=70',0,GETDATE(),GETDATE())

SELECT * FROM products
SELECT * FROM product_images

update product_images
set isMain = 1
where prodImgID = 3


delete from product_images where prodImgID=29


insert into product_colours VALUES (1,'Blue',1,GETDATE(),GETDATE());
insert into product_colours VALUES (1,'Black',1,GETDATE(),GETDATE());

insert into products_inventory VALUES (1,10,GETDATE(),GETDATE());


ALTER TABLE users
ALTER COLUMN emailAddress VARCHAR(50)

INSERT INTO order_statuses(status,modified_at) VALUES ('Placed',GETDATE());
INSERT INTO order_statuses(status,modified_at) VALUES ('Ready to pickup',GETDATE());
INSERT INTO order_statuses(status,modified_at) VALUES ('Cancelled',GETDATE());
INSERT INTO order_statuses(status,modified_at) VALUES ('Completed',GETDATE());
INSERT INTO order_statuses(status,modified_at) VALUES ('Refunded',GETDATE());

INSERT INTO states(stateName) VALUES ('ANDHRA PRADESH');  
INSERT INTO states(stateName) VALUES ('ASSAM');  
INSERT INTO states(stateName) VALUES ('ARUNACHAL PRADESH');  
INSERT INTO states(stateName) VALUES ('GUJRAT');  
INSERT INTO states(stateName) VALUES ('BIHAR');  
INSERT INTO states(stateName) VALUES ('HARYANA');  
INSERT INTO states(stateName) VALUES ('HIMACHAL PRADESH');  
INSERT INTO states(stateName) VALUES ('JAMMU & KASHMIR');  
INSERT INTO states(stateName) VALUES ('KARNATAKA');  
INSERT INTO states(stateName) VALUES ('KERALA');  
INSERT INTO states(stateName) VALUES ('MADHYA PRADESH');  
INSERT INTO states(stateName) VALUES ('MAHARASHTRA');  
INSERT INTO states(stateName) VALUES ('Telangana');  
INSERT INTO states(stateName) VALUES ('MANIPUR');  
INSERT INTO states(stateName) VALUES ('MEGHALAYA');  
INSERT INTO states(stateName) VALUES ('MIZORAM');  
INSERT INTO states(stateName) VALUES ('NAGALAND');  
INSERT INTO states(stateName) VALUES ('ORISSA');  
INSERT INTO states(stateName) VALUES ('PUNJAB');  
INSERT INTO states(stateName) VALUES ('RAJASTHAN');  
INSERT INTO states(stateName) VALUES ('SIKKIM');  
INSERT INTO states(stateName) VALUES ('TAMIL NADU');  
INSERT INTO states(stateName) VALUES ('TRIPURA');  
INSERT INTO states(stateName) VALUES ('UTTAR PRADESH');  
INSERT INTO states(stateName) VALUES ('WEST BENGAL');  
INSERT INTO states(stateName) VALUES ('GOA');  
INSERT INTO states(stateName) VALUES ('PONDICHERY');  
INSERT INTO states(stateName) VALUES ('LAKSHDWEEP');  
INSERT INTO states(stateName) VALUES ('DAMAN & DIU');  
INSERT INTO states(stateName) VALUES ('DADRA & NAGAR');  
INSERT INTO states(stateName) VALUES ('CHANDIGARH');  
INSERT INTO states(stateName) VALUES ('ANDAMAN & NICOBAR');  
INSERT INTO states(stateName) VALUES ('UTTARANCHAL');  
INSERT INTO states(stateName) VALUES ('JHARKHAND');  
INSERT INTO states(stateName) VALUES ('CHATTISGARH');  
INSERT INTO states(stateName) VALUES ('ASSAM'); 

INSERT INTO user_Addresses VALUES (1,'ranavav2','ranavav','railway station road','Porbandar',360550,4,1,0,GETDATE(),GETDATE())


SELECT * FROM orders;
SELECT * FROM orderitems;

DELETE FROM orders
DBCC CHECKIDENT (orders, RESEED, 0)

DELETE FROM orderitems
DBCC CHECKIDENT (orderitems, RESEED, 0)


delete from users where userID = 15

SELECT * FROM users


delete from product_category where catID = 5

INSERT INTO product_sizes values (5,'M',1,GETDATE(),GETDATE())
INSERT INTO product_sizes values (5,'S',1,GETDATE(),GETDATE())
INSERT INTO product_sizes values (5,'L',1,GETDATE(),GETDATE())
INSERT INTO product_sizes values (5,'XL',1,GETDATE(),GETDATE())



delete from orders where orderID >=21


--Mathematical Functions

SELECT ABS(-1.0), ABS(0.0), ABS(-8.0);

DECLARE @var FLOAT  
SET @var = 10  
SELECT EXP(@var)
SELECT 'The EXP of the variable is: ' + CONVERT(VARCHAR, EXP(@var))  
GO  

SELECT FLOOR(123.99), FLOOR(-123.45), FLOOR($123.45);

SELECT LOG(10);

SELECT PI();  
GO  

SELECT POWER(2, 3);

SELECT RAND(100), RAND(), RAND()

DECLARE @counter SMALLINT;  
SET @counter = 1;  
WHILE @counter < 5  
   BEGIN  
      SELECT RAND() Random_Number  
      SET @counter = @counter + 1  
   END;  
GO

SELECT ROUND(123.9994, 3), ROUND(123.9995, 3);  
GO
SELECT ROUND(5000.959,0)
SELECT ROUND(5000.959,1)
SELECT ROUND(5000.959,2)

SELECT SQRT(1.00), SQRT(10.00);

SELECT SQUARE(4)

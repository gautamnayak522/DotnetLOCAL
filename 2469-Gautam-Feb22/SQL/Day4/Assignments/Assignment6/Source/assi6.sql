SELECT DepartmentId, MIN(SALARY) AS 'MIN SALARY'
FROM EMPLOYEES
GROUP BY DepartmentID ORDER BY 'MIN SALARY'
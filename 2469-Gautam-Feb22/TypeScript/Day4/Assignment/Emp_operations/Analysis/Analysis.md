The Date object represents a date and time functionality in TypeScript. It allows us to get or set the year, month and day, hour, minute, second, and millisecond.
first in assigment we passed date as paramameter in Date()
and created one employee aray which contain,
Id,Name,City and Date
After creating an array following operations are performed,

Search Employee by ID
here we search in employee array where Id=2
by emparray.filter(user => user.id == 2)

Search the employees who has joined after year 2020
Before search into array of employee we want year from date object,
date.getFullYear() - returns year of date object and based on if year > 2020 it searching in array of employee.

Search the employee who has joined after year 2020 and stays in Mumbai city
in this we checking two parameteres if date.getFullYear()>2020 and city of employee ='mumbai' in array of employee.
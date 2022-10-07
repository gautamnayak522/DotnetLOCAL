var employee: [number, string] = [1, "ABC"];
employee.push(6, "Bill"); 

console.log(employee);
console.log(employee[0]);
console.log(employee[1]);
employee[1] = employee[1].concat(" XYZ"); 
console.log(employee[1]);
console.log(employee);

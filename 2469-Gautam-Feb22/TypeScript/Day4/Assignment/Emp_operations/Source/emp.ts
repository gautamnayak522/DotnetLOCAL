let date1:Date = new Date("11-11-2015")
let date2:Date = new Date("05-06-2019")
let date3:Date = new Date("03-25-2022")
let date4:Date = new Date("01-05-2021")
let date5:Date = new Date("10-06-2011")

var emparray: {id:number,name:string,city:string,date:Date}[] = [
{'id':1,'name':'Gautam','city':'Vadodara','date':date1},
{'id':2,'name':'Yash','city':'Rajkot','date':date2},
{'id':3,'name':'Saumya','city':'Porbandar','date':date3},
{'id':4,'name':'Naveen','city':'mumbai','date':date4},
{'id':5,'name':'Amit','city':'mumbai','date':date5},
];

console.log("search employee by ID");
console.log(emparray.filter(user => user.id == 2))

console.log("Search the employees who has joined after year 2020")
for(let i of emparray){
    if(i.date.getFullYear()>2020)
        console.log(i);
}

console.log("Search the employee who has joined after year 2020 and stays in Mumbai city")
for(let i of emparray){
        if(i.date.getFullYear()>2020 && i.city == 'mumbai')
            console.log(i);
}
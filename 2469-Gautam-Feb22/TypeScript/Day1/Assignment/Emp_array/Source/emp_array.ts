var  emp: {id:number,fname:string,lname:string, address:any, salary:number}[]=
[
 {id:111,fname:"Gautam",lname:"Nayak", address:"2,akota,vadodara",salary:22000},
 {id:112,fname:"Raj",lname:"Patar", address:"50,nagka,porbandar",salary:21000},
 {id:113,fname:"Yash",lname:"Rupa", address:"88,vip,ahmedabad",salary:40000},
 {id:114,fname:"Saumya",lname:"Majithia", address:"87,ranavav,porbandar",salary:18000},
 {id:115,fname:"Bharat",lname:"Jadav", address:"63,samras,baroda",salary:40000}
]

let find=111;
let search = emp.filter((value)=>{
    return value.id == find;
})
console.log(search);

for (var i of emp){
    let address1=i.address.split(",");
    var pf=i.salary*0.083;
    console.log(`ID:= ${i.id}  Employee's Full Name:${i.fname} ${i.lname}`);
    console.log(`Address:Flat no. ${address1[0]} City:${address1[1]} State:${address1[2]}`);
    console.log(`Salary:${i.salary} PF:${pf}`);
}

var emps:{id:number,fname:string ,lname :string ,address:any , salary: number}[] = [
    {"id":7,"fname":"Dennny","lname":"Adamsss" ,"address":"20,Dallas ,Texas,Us","salary":150000 }];
    
    emp=emp.concat(emps);
    console.log(emp);


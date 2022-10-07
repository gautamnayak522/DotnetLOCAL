let empId:string|number
empId="test"
empId=50
console.log(empId);

function display(a:number|string){
    console.log(a);
    if(typeof(a)=="number")
        console.log("NUMBER");
    else if(typeof(a)=="string")
        console.log("STRING");
}
display("abc")
display(111)
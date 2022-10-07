import { Charges } from "./charges";
import { GenerateBillId } from "./bill";
import { pincity } from "./pincity";
type pincitydata = keyof typeof pincity;

class Customers{
    ConsumerlD:number;
    Name:string;
    Pincode:number;
    billId:string
    unit:number;
    amount:number;

    date:Date = new Date();
    month=(this.date.getMonth()+ 1);
    year=this.date.getFullYear();
    
    constructor(n:string,add:pincitydata,u:number){
       
        this.ConsumerlD=pincity[add];
        this.Name=n;
        this.Pincode=pincity[add];
       
        this.billId=GenerateBillId(this.Name,this.Pincode,this.ConsumerlD,this.month,this.year);
        this.unit=u;
        this.amount=Charges(u);
    }  

    getData():string{
        return `
        Name : ${this.Name}, 
        Customer Id : ${this.ConsumerlD},
        PIN : ${this.Pincode}, 
        Bill Id  : ${this.billId},
        Month : ${this.month},
        Year : ${this.year},
        Units Consumed : ${this.unit},
        Payable Amount : ${this.amount}.
        `      
    }
}


let s1=new Customers("ABC","Porbandar",41);
let s2=new Customers("XYZ","Akota",180);

console.log(s1.getData());
console.log(s2.getData());

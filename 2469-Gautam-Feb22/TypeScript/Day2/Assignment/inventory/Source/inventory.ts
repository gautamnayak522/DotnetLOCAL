interface Inventory{
    product:string;
    quantity:number;
}

class Data implements Inventory{
    product: string;
    quantity: number;

    constructor(p:string,q:number){
        this.product=p;
        this.quantity=q;
    }

    purchase(q:number){
        if(this.quantity>5){
        console.log(`${q} ${this.product} Purchased Successfully`);
        this.quantity=this.quantity-q;
        }
        else{
            console.log(`product ${this.product} quantity is less than 5, please reorder after some time`);
        }
        
    }
}

let p1=new Data("Mobile",10)
let p2=new Data("Buds",7)
let p3=new Data("Charger",8)
console.log(p1);
console.log(p2);
console.log(p3);

p1.purchase(2);
console.log(p1);  //8
console.log(p2);
console.log(p3);

p1.purchase(3);
console.log(p1); //5
console.log(p2);
console.log(p3);

p1.purchase(1);
console.log(p1); //interrupt
console.log(p2);
console.log(p3);

p2.purchase(2);
console.log(p1); //5
console.log(p2);
console.log(p3);

p2.purchase(2);
console.log(p1); //interrupt
console.log(p2);
console.log(p3);


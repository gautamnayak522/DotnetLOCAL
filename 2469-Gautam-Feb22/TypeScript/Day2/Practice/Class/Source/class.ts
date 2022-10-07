class Student{
    er:number;
    name:string

    constructor(e:number,n:string){
        this.er=e;
        this.name=n;
    }  
    getData():string{
        return `Name:${this.name} and 
Er no:${this.er}`      
    }
}
let s1=new Student(1,"ABC");
console.log(s1)
console.log(s1.getData())
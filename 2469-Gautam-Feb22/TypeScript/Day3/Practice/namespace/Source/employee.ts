//// <reference path="namespace.ts" />
import {ToCapital} from './namespace'
export class Employee {
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = ToCapital(name);
        this.empCode = code;
    }
    displayEmployee(): void {
        console.log ("Employee Code: " + this.empCode + ", Employee Name: " + this.empName );
    }
}
let e1 = new Employee("ABCD",55);
e1.displayEmployee();
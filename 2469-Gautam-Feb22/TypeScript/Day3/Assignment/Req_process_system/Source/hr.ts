import {Vacancies,Applicant} from './operations'
//Add new vacancies
var v1 = new Vacancies(1, "PHP", "Software Engineer", 2);
var v2 = new Vacancies(2, "DOTNET", "Software Engineer", 4);
var v3 = new Vacancies(3, "NodeJS", "Software Engineer", 6);

//Add new applicant
var a1 = new Applicant("ABC", "Ahmedabad", 9999999999, "PHP");
var a2 = new Applicant("XYZ", "Porbandar", 8888888888, "DOTNET");

//set Interview time
a1.setInterview()
console.log("Interview schedule of "+a1.name+" At "+a1.Itime);

//Check Result
a1.marks=500;
a1.checkStatus()
console.log(a1.name +" is "+ a1.result +" in " +a1.technology);

a1.printReport();



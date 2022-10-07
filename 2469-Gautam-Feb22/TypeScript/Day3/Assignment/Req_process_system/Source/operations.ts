export 
class Vacancies {
    vacanyID: number;
    technology: string;
    role: string;
    vacantno: number;
    constructor(id: number, tech: string, role: string, vacant: number) {
        this.vacanyID = id;
        this.technology = tech;
        this.role = role;
        this.vacantno = vacant;
    }
    printvacancy() {
        console.log('\nvacancyID : ' + this.vacanyID + '\ntechnology : ' + this.technology + '\nrole : ' + this.role + '\nvacantno : ' + this.vacantno);
    }
}

export
class Applicant{
    name: string;
    address: string;
    phone: number;
    technology: string;
    Itime?:string;
    marks:number=0;
    result?:string;
  
    constructor(name: string, address: string, phone: number, technology: string) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.technology = technology;       
    }

    setInterview(){
        this.Itime="10:30 AM";
    }
    checkStatus(){
       if(this.marks>250)
            this.result="Hired";
        else
            this.result="Not Hired";
    }
    printReport(){
        console.log(
        `
        Name : ${this.name},
        Technology : ${this.technology},
        Address = ${this.address},
        Phone = ${this.phone},
        Result = ${this.result}
        `)
    }
}



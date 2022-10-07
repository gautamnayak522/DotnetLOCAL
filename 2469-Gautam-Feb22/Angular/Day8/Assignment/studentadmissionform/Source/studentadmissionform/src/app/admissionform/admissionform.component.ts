import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.css']
})
export class AdmissionformComponent implements OnInit {
  studentList:any[]=[];

  admissionForm = this.formbuilder.group({
    Name: this.formbuilder.group({
      firstName: ['',Validators.compose([Validators.required, Validators.minLength(4)])],
      middleName: ['',Validators.required],
      lastName: ['',Validators.required]
    }),
    DOB: ['',Validators.required],
    place_of_birth: ['',Validators.required],
    first_language: ['',Validators.required],
    Address: this.formbuilder.group({
      City: ['',Validators.required],
      State: ['',Validators.required],
      Country: ['',Validators.required],
      Pin: ['',Validators.compose([Validators.required,Validators.pattern('[0-9 ]*')])]
    }),
    FathersDetails: this.formbuilder.group({
      FatherName: this.formbuilder.group({
        firstName: ['',Validators.required],
        middleName: ['',Validators.required],
        lastName: ['',Validators.required]
      }),
      Email: ['',Validators.compose([Validators.required,Validators.email])],
      Education_q: ['',Validators.required],
      profession: ['',Validators.required],
      designation: ['',Validators.required],
      phone: ['',Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
    }),
    MothersDetails: this.formbuilder.group({
      MotherName: this.formbuilder.group({
        firstName: ['',Validators.required],
        middleName: ['',Validators.required],
        lastName: ['',Validators.required]
      }),
      Email: ['',Validators.compose([Validators.required,Validators.email])],
      Education_q: ['',Validators.required],
      profession: ['',Validators.required],
      designation: ['',Validators.required],
      phone: ['',Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
    }),
   
    emergency:this.formbuilder.array([
        this.formbuilder.control('',Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]))
    ]),
    Reference: this.formbuilder.group({
      ref_through: ['',Validators.required],
      address:['',Validators.required],
      contact:['',Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
    })
  });
  
  onSubmit() {
    console.warn(this.admissionForm.value);
    this.studentList.push(this.admissionForm.value)
  }
  get emergency() {
    return this.admissionForm.get('emergency') as FormArray;
  }
  addemr(){
    this.emergency.push(this.formbuilder.control('',Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])))
  }
  removeemr(i:any){
    this.emergency.removeAt(i);
  }

  get getfirstname() { return this.admissionForm.get('Name.firstName'); }
  get getmiddlename() { return this.admissionForm.get('Name.middleName'); }
  get getlastname() { return this.admissionForm.get('Name.lastName'); }
  get getdob() { return this.admissionForm.get('DOB'); }
  get getpob() { return this.admissionForm.get('place_of_birth'); }
  get getfl() { return this.admissionForm.get('first_language'); }
  get getcity() { return this.admissionForm.get('Address.City'); }
  get getstate() { return this.admissionForm.get('Address.State'); }
  get getcountry() { return this.admissionForm.get('Address.Country'); }
  get getpin() { return this.admissionForm.get('Address.Pin'); }
  get fatherfname() { return this.admissionForm.get('FathersDetails.FatherName.firstName'); }
  get fathermname() { return this.admissionForm.get('FathersDetails.FatherName.middleName'); }
  get fatherlname() { return this.admissionForm.get('FathersDetails.FatherName.lastName'); }
  get femail() { return this.admissionForm.get('FathersDetails.Email'); }
  get feq() { return this.admissionForm.get('FathersDetails.Education_q'); }
  get fprof() { return this.admissionForm.get('FathersDetails.profession'); }
  get fdesg() { return this.admissionForm.get('FathersDetails.designation'); }
  get fphone() { return this.admissionForm.get('FathersDetails.phone'); }
  get motherfname() { return this.admissionForm.get('MothersDetails.MotherName.firstName'); }
  get mothermname() { return this.admissionForm.get('MothersDetails.MotherName.middleName'); }
  get motherlname() { return this.admissionForm.get('MothersDetails.MotherName.lastName'); }
  get memail() { return this.admissionForm.get('MothersDetails.Email'); }
  get meq() { return this.admissionForm.get('MothersDetails.Education_q'); }
  get mprof() { return this.admissionForm.get('MothersDetails.profession'); }
  get mdesg() { return this.admissionForm.get('MothersDetails.designation'); }
  get mphone() { return this.admissionForm.get('MothersDetails.phone'); }
  get getrefthrough() { return this.admissionForm.get('Reference.ref_through'); }
  get getaddress() { return this.admissionForm.get('Reference.address'); }
  get getphone() { return this.admissionForm.get('Reference.contact'); }
  
  

  get admissionFormControl() {
    return this.admissionForm.controls;
  }

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'GAUTAM',
      address: {
        street: 'Police Line'
      }
    });
  }

  profileForm = this.formbuilder.group({
    firstName:['',Validators.required],
    lastName:[''],
    address:this.formbuilder.group({
      street:[''],
      city:[''],
      state:[''],
      zip:['']
    }),
    hobbies:this.formbuilder.array([
    this.formbuilder.control('')
    ])
  });

  get hobbies() {
    return this.profileForm.get('hobbies') as FormArray;
  }
  addHobbies() {
    this.hobbies.push(this.formbuilder.control(''));
  }

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }

}

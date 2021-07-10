import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  myForm: FormGroup

  constructor(private fb: FormBuilder) {

    let formControls = {
      firstname : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      email : new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      phone : new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ])
    }

    this.myForm = this.fb.group(formControls);

  }

  get firstname(){
    return this.myForm.get('firstname');
  };
  get lastname(){
    return this.myForm.get('lastname');
  };
  get email(){
    return this.myForm.get('email');
  };
  get phone(){
    return this.myForm.get('phone');
  };

  ngOnInit(): void {

  }

  saveUser(){
    console.log(this.myForm.value);
  }


}
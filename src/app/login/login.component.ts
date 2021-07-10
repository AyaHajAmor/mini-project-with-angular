import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup

  constructor(private fb: FormBuilder) {

    let formControls = {
      email : new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      password : new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }

    this.myForm = this.fb.group(formControls);

  }

  get email(){
    return this.myForm.get('email');
  };
  get password(){
    return this.myForm.get('password');
  };

  ngOnInit(): void {

  }

  logIn(){
    console.log(this.myForm.value);
  }


}
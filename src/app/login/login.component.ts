import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup

  constructor(private fb: FormBuilder,private userService:UserService ,private router:Router  ,private toastr: ToastrService) {

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

    let isLoggedIn = this.userService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/']);
    } 
  }

  logIn(){
    let data= this.myForm.value;
    let user = new User('','','',data.email,'',data.password);
    this.userService.logIn(user).subscribe(
      result =>{
        let token = result.token;
        localStorage.setItem("myToken",token);
        this.toastr.success('', 'Welcome !');
        this.router.navigate(['/'])
      },
      error =>{
        console.log(error);
      }
    ) ;
  }
  

}
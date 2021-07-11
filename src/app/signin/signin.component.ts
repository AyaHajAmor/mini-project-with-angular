import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup

  constructor(private fb: FormBuilder,private userService:UserService ,private router:Router  ,private toastr: ToastrService) {

    let formControls = {
      fname : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(3)
      ]),
      email : new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      phone : new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]),
      password : new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      repeatpassword : new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      
    }

    this.myForm = this.fb.group(formControls);

  }

  get fname(){
    return this.myForm.get('fname');
  };
  get email(){
    return this.myForm.get('email');
  };
  get phone(){
    return this.myForm.get('phone');
  };
  get password(){
    return this.myForm.get('password');
  };
  get repeatpassword(){
    return this.myForm.get('repeatpassword');
  };

  ngOnInit(): void {

    let isLoggedIn = this.userService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/']);
    } 
  }

  signIn(){
    let data= this.myForm.value;
    let user = new User('','',data.fname,data.email,data.phone,data.password);
    this.userService.signIn(user).subscribe(
      result=>{
        this.toastr.info('', 'Successfully!');
        this.router.navigate(['/connection'])
      },
      error=>{
        console.log(error);
      }
    ) ;
  }

  
}
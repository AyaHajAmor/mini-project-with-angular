import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  myForm: FormGroup

  constructor(private fb: FormBuilder ,private userService:UserService ,private router:Router  ,private toastr: ToastrService) {

    let formControls = {
      firstname : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      lastname : new FormControl('',[
        Validators.required,
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
    let data= this.myForm.value;
    let user = new User(data.firstname,data.lastname,'',data.email,data.phone,'');
    this.userService.addUser(user).subscribe(
      result=>{
        console.log(result);
          this.toastr.info('User Aded!', 'Successfully!');
        this.router.navigate(['/'])
      },
      error=>{
        console.log(error);
        
      }
    );
  }


}
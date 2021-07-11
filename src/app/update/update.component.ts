import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  myForm: FormGroup

  constructor(private fb: FormBuilder, private route :ActivatedRoute,private toastr: ToastrService, private userService:UserService,private router:Router) {

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
    // pour acceder a id user a travers route
    let idUser = this.route.snapshot.params.id;
    console.log(idUser);
    this.userService.getUserById(idUser).subscribe(
      result=>{
        let user = result;
        
        this.myForm.patchValue({
          firstname:user.firstname,
          lastname: user.lastname,
          email:user.email,
          phone:user.phone,

        })
        
      },
      error=>{
        console.log(error);
        
      }
    )
    
  }

  updateUser(){
    let data = this.myForm.value;
    let idUser = this.route.snapshot.params.id;
    let user = new User(data.firstname,data.lastname,'',data.email,data.phone,'',idUser);
    
    this.userService.updateUser(user).subscribe(
      result=>{
        console.log(result);
        this.toastr.warning('User Deleted !', 'Successfully!');
        this.router.navigate(['/'])
      },
      error=>{
        console.log(error);
        
      }
    );
  }


}
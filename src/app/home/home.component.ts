import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usersList : any[] = [];
  constructor(private userService:UserService ,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result => {
        this.usersList = result ;
        console.log(this.usersList)
      },
      error => {
        console.log(error);
        
      }
    )
  };
  delete(user : any) {
    let index = this.usersList.indexOf(user);
    this.usersList.splice(index, 1);
    this.userService.deleteUser(user._id).subscribe(
      result =>{
        this.toastr.error('User Deleted!', 'Success!');
        console.log(result)
      },
      error=> {
        console.log(error);
      }
    )
  }

}

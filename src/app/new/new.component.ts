import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  name = "Ayaa" ;
  ListName = ['Aya ',' Hend ','Doniez', 'Salma'] ;
  userslist = [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  Me(Myname : String){
    alert("Welcome " + Myname) ;
  }

}

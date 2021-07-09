import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  getListURl = "https://backend-people-crud-app.herokuapp.com/users";
  deleteListURl = "https://backend-people-crud-app.herokuapp.com/users/";

  constructor( private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<any>(this.getListURl);
  }
  
  deleteUser(id : String){
    return this.http.delete<any>(this.deleteListURl+id);
  }
}

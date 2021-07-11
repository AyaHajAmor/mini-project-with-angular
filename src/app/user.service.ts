import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getListURl = "https://backend-people-crud-app.herokuapp.com/users";
  private getUserByIdURL = "https://backend-people-crud-app.herokuapp.com/users/";
  private updateUserURL = "https://backend-people-crud-app.herokuapp.com/users/update";
  private deleteUserURl = "https://backend-people-crud-app.herokuapp.com/users/";
  private postUserURl = "https://backend-people-crud-app.herokuapp.com/users/add";

  constructor( private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<any>(this.getListURl);
  }
  getUserById(id : String){
    return this.http.get<any>(this.getUserByIdURL+id);
  }
  deleteUser(id : String){
    return this.http.delete<any>(this.deleteUserURl+id);
  }
  addUser(user : User){
    return this.http.post<any>(this.postUserURl , user);
  }
  updateUser(user : User){
    let userUpdated = this.http.put<any>(this.updateUserURL, user);
    console.log(userUpdated);
    
    return userUpdated;
  }
}

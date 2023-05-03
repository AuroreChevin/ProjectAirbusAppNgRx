import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userConnected : User = new User("","");
  constructor(private http:HttpClient) { }
  public getUsers() {
    return this.http.get<User[]>(environment.host + "/users");
  }

  public getUserByEmail(email : string) {
    return this.http.get<User[]>(environment.host + "/users?email=" + email);
  }
 
  public login(email: string){
    return this.getUserByEmail(email);
  }
  public isConnected(){
    return localStorage.getItem('user') !== null;

  }
  public disconnected(){
    localStorage.removeItem('user');
  }
  setUser(user : User):any{
    this.userConnected = user;
    localStorage.setItem('user',(JSON.stringify(user))); 
  }
}

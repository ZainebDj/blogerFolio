import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private sharedData: any;

  apiurl='http://localhost:3000/user';
  constructor(private http:HttpClient) {

   }
  signUpUser(inputdata:any){    
    return this.http.post(this.apiurl,inputdata)
  }
  getUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  getall(){
    return this.http.get(this.apiurl);
  }
  getAllRole(){
    return this.http.get('http://localhost:3000/role');
  }
  getAllEduction(){
    return this.http.get('http://localhost:3000/education');
  }
  proceedSignup(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }
  isLoggedIn(){
  return sessionStorage.getItem('username')!=null;
  }
  getRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():''
  }
  updateUser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/user/${id}`);
  }
  logout() {
    localStorage.removeItem('token')
  }

}

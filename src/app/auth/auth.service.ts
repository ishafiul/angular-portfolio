import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
const BASE_URL = environment.apiEndPoint;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(payload:any): Observable<any> {
    return this.http.post(BASE_URL+'auth/login',payload);
  }
  getUserData(){

  }
}

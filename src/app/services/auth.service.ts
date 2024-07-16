import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "http://localhost:8000/";
  constructor(private http: HttpClient) { }

  signup(userObj:any){
    return this.http.post<any>(`${this.baseUrl}signin`, userObj);
  }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}login`, loginObj);
  }
}

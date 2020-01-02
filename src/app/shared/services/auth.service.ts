import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IReqUserLogin } from '../interfaces/IReqUserLogin';

@Injectable({ providedIn: 'root' })
export class AuthService {


  constructor(
    private http: HttpClient
  ) { }

  login(userLogin: IReqUserLogin): Observable<any> {
    return this.http.post('auth/login', userLogin);
  }


  isAuth() {
    return localStorage.getItem('bearer') !== null ;
  }

  logOut() {
    this.removeInfo();
    this.removeToken();
  }

  setToken(token: string): void {
    localStorage.setItem('bearer', token);
  }

  setInfo(name, email): void {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  }

  removeInfo(): void {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }

  removeToken(): void {
    localStorage.removeItem('bearer');
  }

  getToken(): string {
    return localStorage.getItem('bearer');
  }

}

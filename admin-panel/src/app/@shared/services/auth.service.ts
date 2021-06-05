import { AuthCredential } from './../interfaces/auth.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly END_POINT = `${environment.API_ENDPOINT}auth/`;

  constructor(private readonly http: HttpClient) {}

  adminLogin(authCredential: AuthCredential) {
    return this.http.post(`${this.END_POINT}login/admin`, authCredential);
  }
  adminRegister(authCredential: AuthCredential) {
    return this.http.post(`${this.END_POINT}register/admin`, authCredential);
  }

  getAuthorizationToken() {
    const token = localStorage.getItem('token');
    return token?.length ? String(token) : false;
  }
  isLoggedIn() {
    return Boolean(this.getAuthorizationToken());
  }
  logout() {
    window.localStorage.clear();
  }
}

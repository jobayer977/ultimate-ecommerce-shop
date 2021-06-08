import { HttpClient } from '@angular/common/http';
import { IFChangePassword } from '../interfaces/auth.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthChangePasswordService {
  private readonly END_POINT = `${environment.API_ENDPOINT}auth/changePassword/`;

  constructor(private readonly http: HttpClient) {}

  admin(payload: IFChangePassword) {
    return this.http.post(`${this.END_POINT}admin`, payload);
  }
}

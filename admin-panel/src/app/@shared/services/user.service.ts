import { HttpClient } from '@angular/common/http';
import { IFChangePhoneNumber } from '../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly END_POINT = `${environment.API_ENDPOINT}user/`;

  constructor(private readonly http: HttpClient) {}

  changePhoneNumber(payload: IFChangePhoneNumber) {
    return this.http.put(`${this.END_POINT}changePhoneNumber`, payload);
  }
}

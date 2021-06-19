import { HttpClient } from '@angular/common/http';
import { IFBaseFilterQuery } from '../interfaces/base.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly END_POINT = `${environment.API_ENDPOINT}order/`;
  constructor(private readonly http: HttpClient) {}

  filter(option: IFBaseFilterQuery) {
    return this.http.get(
      `${this.END_POINT}filter?searchTerm=${option.searchTerm || ''}&page=${
        option.page || ''
      }&take=${option.take || ''}`
    );
  }
}

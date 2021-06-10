import { HttpClient } from '@angular/common/http';
import { IFBaseAttributeFilterQuery } from '../interfaces/base.interface';
import { Injectable } from '@angular/core';
import { baseAttributeFilterQueryUtils } from './../utils/filterquery.utils';
import { environment } from 'src/environments/environment';
import { routesConstant } from 'src/app/@constant/routes.constant';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  routesConstant = routesConstant;

  private readonly END_POINT = `${environment.API_ENDPOINT}department/`;

  constructor(private readonly http: HttpClient) {}

  filter(option: IFBaseAttributeFilterQuery) {
    return this.http.get(
      `${this.END_POINT}filter?${baseAttributeFilterQueryUtils(option)}`
    );
  }
}

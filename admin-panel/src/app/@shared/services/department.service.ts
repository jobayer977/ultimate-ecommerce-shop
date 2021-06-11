import { CreatDepartment } from './../interfaces/department.interface';
import { HttpClient } from '@angular/common/http';
import { IFBaseAttributeFilterQuery } from '../interfaces/base.interface';
import { Injectable } from '@angular/core';
import { baseAttributeFilterQueryUtils } from './../utils/filterquery.utils';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private readonly END_POINT = `${environment.API_ENDPOINT}department/`;

  constructor(private readonly http: HttpClient) {}

  filter(option: IFBaseAttributeFilterQuery) {
    return this.http.get(
      `${this.END_POINT}filter?${baseAttributeFilterQueryUtils(option)}`
    );
  }
  create(payload: CreatDepartment) {
    return this.http.post(`${this.END_POINT}`, payload);
  }

  delete(id: string) {
    return this.http.delete(`${this.END_POINT}${id}`);
  }

  update(id: string, payload: CreatDepartment) {
    return this.http.put(`${this.END_POINT}${id}`, payload);
  }
}

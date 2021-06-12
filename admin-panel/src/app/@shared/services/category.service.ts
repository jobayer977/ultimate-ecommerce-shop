import { CategoryStore } from 'src/app/@shared/stores/categories/category.store';
import { HttpClient } from '@angular/common/http';
import { IFBaseAttributeFilterQuery } from '../interfaces/base.interface';
import { IFCreatCategory } from './../interfaces/category.interface';
import { Injectable } from '@angular/core';
import { baseAttributeFilterQueryUtils } from '../utils/filterquery.utils';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly END_POINT = `${environment.API_ENDPOINT}category/`;
  constructor(
    private readonly http: HttpClient,
    private categoryStore: CategoryStore
  ) {}

  filter(option: IFBaseAttributeFilterQuery) {
    return this.http
      .get(`${this.END_POINT}filter?${baseAttributeFilterQueryUtils(option)}`)
      .pipe(
        tap((data) => {
          this.categoryStore.update(data);
        })
      );
  }
  create(payload: IFCreatCategory) {
    return this.http.post(`${this.END_POINT}`, payload).pipe(
      tap((x: any) => {
        this.categoryStore.createCategory(x?.data);
      })
    );
  }
  update(id: string, payload: IFCreatCategory) {
    return this.http.put(`${this.END_POINT}${id}`, payload).pipe(
      tap((x: any) => {
        this.categoryStore.updateCategory(x?.data);
      })
    );
  }
  delete(id: string) {
    return this.http.delete(`${this.END_POINT}${id}`).pipe(
      tap((x: any) => {
        this.categoryStore.deleteCategory(x?.data?.id);
      })
    );
  }
}

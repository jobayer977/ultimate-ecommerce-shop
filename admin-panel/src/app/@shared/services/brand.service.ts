import { BrandStore } from './../stores/brands/brand.store';
import { HttpClient } from '@angular/common/http';
import { IFBaseFilterQuery } from './../interfaces/base.interface';
import { IFBaseResponse } from 'src/app/@shared/interfaces/base.interface';
import { IFBrand } from './../interfaces/brand.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private readonly END_POINT = `${environment.API_ENDPOINT}brands/`;
  constructor(
    private readonly http: HttpClient,
    private brandStore: BrandStore
  ) {}

  filter(option: IFBaseFilterQuery) {
    return this.http
      .get(
        `${this.END_POINT}filter?searchTerm=${option.searchTerm || ''}&page=${
          option.page || ''
        }&take=${option.take || ''}`
      )
      .pipe(
        tap((bannerResponse: IFBaseResponse) => {
          this.brandStore.update(bannerResponse);
        })
      );
  }

  create(payload: IFBrand) {
    return this.http.post(`${this.END_POINT}`, payload).pipe(
      tap((banner: IFBaseResponse) => {
        this.brandStore.createBanner(banner?.data);
      })
    );
  }
  update(id: string, payload: IFBrand) {
    return this.http.put(`${this.END_POINT}${id}`, payload).pipe(
      tap((banner: IFBaseResponse) => {
        this.brandStore.updateBanner(banner?.data);
      })
    );
  }
  delete(id: string) {
    return this.http.delete(`${this.END_POINT}${id}`).pipe(
      tap((banner: IFBaseResponse) => {
        this.brandStore.deleteBanner(banner?.data?.id);
      })
    );
  }
}

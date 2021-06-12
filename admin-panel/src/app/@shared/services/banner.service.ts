import {
  IFBannerCreate,
  IFBannerFilter,
} from './../interfaces/banner.interface';

import { BannerStore } from './../stores/banner/banner.store';
import { HttpClient } from '@angular/common/http';
import { IFBaseResponse } from 'src/app/@shared/interfaces/base.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  private readonly END_POINT = `${environment.API_ENDPOINT}banners/`;
  constructor(
    private readonly http: HttpClient,
    private bannerStore: BannerStore
  ) {}

  filter(option: IFBannerFilter) {
    return this.http
      .get(
        `${this.END_POINT}filter?searchTerm=${option.searchTerm || ''}&page=${
          option.page || ''
        }&take=${option.take || ''}&type=${option.type || ''}`
      )
      .pipe(
        tap((bannerResponse: IFBaseResponse) => {
          this.bannerStore.update(bannerResponse);
        })
      );
  }

  create(payload: IFBannerCreate) {
    return this.http.post(`${this.END_POINT}`, payload).pipe(
      tap((banner: IFBaseResponse) => {
        this.bannerStore.createBanner(banner?.data);
      })
    );
  }
  update(id: string, payload: IFBannerCreate) {
    return this.http.put(`${this.END_POINT}${id}`, payload).pipe(
      tap((banner: IFBaseResponse) => {
        this.bannerStore.updateBanner(banner?.data);
      })
    );
  }
  delete(id: string) {
    return this.http.delete(`${this.END_POINT}${id}`).pipe(
      tap((banner: IFBaseResponse) => {
        this.bannerStore.deleteBanner(banner?.data?.id);
      })
    );
  }
}

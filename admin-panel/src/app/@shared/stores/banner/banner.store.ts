import { Store, StoreConfig } from '@datorama/akita';

import { Injectable } from '@angular/core';

export interface IFBannerState {
  data: [];
  page: 0;
  take: 0;
  total: 0;
}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({
  name: 'banner',
})
export class BannerStore extends Store<IFBannerState> {
  constructor() {
    super({
      data: [],
      page: 0,
      take: 0,
      total: 0,
    });
  }
  //* Crete Banner
  createBanner(cat: any) {
    const _newDates: any = [cat, ...this.getValue().data];
    this.update({
      ...this.getValue(),
      data: _newDates,
    });
  }

  //* Delete Banner
  deleteBanner(id: string) {
    const _updatedData: any = this.getValue().data.filter(
      (x: any) => x.id !== id
    );
    this.update({
      ...this.getValue(),
      data: _updatedData,
    });
  }

  //* Update Banner
  updateBanner(data: any) {
    const _data: any = [...this.getValue().data];
    const fIdx = _data.findIndex((x: any) => x.id === data.id);
    _data[fIdx] = data;
    this.update({
      ...this.getValue(),
      data: _data,
    });
  }
}

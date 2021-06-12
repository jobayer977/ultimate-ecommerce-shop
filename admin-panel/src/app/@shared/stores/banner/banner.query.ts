import { BannerStore, IFBannerState } from './banner.store';

import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

@Injectable({
  providedIn: 'root',
})
export class BannerQuery extends Query<IFBannerState> {
  constructor(protected store: BannerStore) {
    super(store);
  }
}

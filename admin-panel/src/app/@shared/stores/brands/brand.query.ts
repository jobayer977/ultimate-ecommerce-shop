import { BrandStore, IFBrandState } from './brand.store';

import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

@Injectable({
  providedIn: 'root',
})
export class BrandQuery extends Query<IFBrandState> {
  constructor(protected store: BrandStore) {
    super(store);
  }
}

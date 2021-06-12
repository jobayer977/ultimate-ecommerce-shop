import { IFProductsState, ProductsStore } from './products.store';

import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

@Injectable({
  providedIn: 'root',
})
export class ProductsQuery extends Query<IFProductsState> {
  constructor(protected store: ProductsStore) {
    super(store);
  }
}

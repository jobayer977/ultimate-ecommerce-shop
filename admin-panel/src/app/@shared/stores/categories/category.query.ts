import { CategoryStore } from 'src/app/@shared/stores/categories/category.store';
import { IFCategoryState } from './category.store';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

@Injectable({
  providedIn: 'root',
})
export class CategoryQuery extends Query<IFCategoryState> {
  selectCategories$ = this.select('data');
  selectPage$ = this.select('page');
  selectTake$ = this.select('take');
  selectTotal$ = this.select('total');

  constructor(protected store: CategoryStore) {
    super(store);
  }
}

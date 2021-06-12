import { Store, StoreConfig } from '@datorama/akita';

import { Injectable } from '@angular/core';

export interface IFCategoryState {
  data: [];
  page: 0;
  take: 0;
  total: 0;
}

export function createInitialState(): IFCategoryState {
  return {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };
}
@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'category' })
export class CategoryStore extends Store<IFCategoryState> {
  constructor() {
    super(createInitialState());
  }

  //* Crete Category
  createCategory(cat: any) {
    const _newDates: any = [cat, ...this.getValue().data];
    this.update({
      ...this.getValue(),
      data: _newDates,
    });
  }

  //* Delete Category
  deleteCategory(id: string) {
    const _updatedData: any = this.getValue().data.filter(
      (x: any) => x.id !== id
    );
    this.update({
      ...this.getValue(),
      data: _updatedData,
    });
  }

  //* Update category
  updateCategory(data: any) {
    const _data: any = [...this.getValue().data];
    const fIdx = _data.findIndex((x: any) => x.id === data.id);
    _data[fIdx] = data;
    this.update({
      ...this.getValue(),
      data: _data,
    });
  }
}

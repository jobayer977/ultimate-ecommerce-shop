import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../../@shared/services/category.service';
import { IFBaseAttributeFilterQuery } from './../../@shared/interfaces/base.interface';

@Component({
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.filterCategories({
      page: 1,
      take: 10,
    });
  }

  //* Filter Categories
  filterLoading = false;
  categories: any = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };

  filterCategories(option: IFBaseAttributeFilterQuery) {
    this.filterLoading = true;
    this.categoryService.filter(option).subscribe((res: any) => {
      this.filterLoading = false;
      this.categories = res;
    });
  }

  onChangePage(page: number) {
    this.filterCategories({ page, take: 10 });
  }
  onChangeSearch(e: any) {
    this.filterCategories({
      page: this.categories?.page,
      take: 10,
      searchTerm: e?.target?.value,
    });
  }
}

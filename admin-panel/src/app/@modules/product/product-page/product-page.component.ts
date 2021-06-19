import { Component } from '@angular/core';
import { IFBannerFilter } from 'src/app/@shared/interfaces/banner.interface';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductService } from './../../../@shared/services/product.service';
import { ProductsQuery } from 'src/app/@shared/stores/products/products.query';

@Component({
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  constructor(
    private productService: ProductService,
    private productQuery: ProductsQuery,
    private nzNotificationService: NzNotificationService
  ) {}
  products = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };

  ngOnInit() {
    this.filterData({ page: 1, take: 12 });
    this.productQuery.select().subscribe((res: any) => {
      this.products = res;
    });
  }

  //*Crate
  isCreateModalOpen = false;
  onCloseCreateModal() {
    this.isCreateModalOpen = false;
  }
  onOpenCreateModal() {
    this.isCreateModalOpen = true;
  }

  //*Filter
  async filterData(option: IFBannerFilter) {
    console.log('I am called');
    await this.productService.filter(option).toPromise();
  }

  onChangeSearch(e: any) {
    this.filterData({
      page: this.products.page,
      take: this.products.take,
      searchTerm: e.target.value,
    });
  }
  onChangePage(e: any) {
    this.filterData({
      page: e,
      take: this.products.take,
    });
  }
}

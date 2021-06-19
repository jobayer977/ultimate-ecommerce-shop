import { BrandQuery } from './../../../@shared/stores/brands/brand.query';
import { BrandService } from './../../../@shared/services/brand.service';
import { Component } from '@angular/core';
import { IFBannerFilter } from 'src/app/@shared/interfaces/banner.interface';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  templateUrl: './brand-page.component.html',
})
export class BrandPageComponent {
  constructor(
    private brandService: BrandService,
    private brandQuery: BrandQuery,
    private nzNotificationService: NzNotificationService
  ) {}
  banners = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };

  ngOnInit() {
    this.filterData({ page: 1, take: 12 });
    this.brandQuery.select().subscribe((res: any) => {
      this.banners = res;
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
  filterData(option: IFBannerFilter) {
    this.brandService.filter(option).toPromise();
  }

  onChangeSearch(e: any) {
    this.filterData({
      page: this.banners.page,
      take: this.banners.take,
      searchTerm: e.target.value,
    });
  }
  onChangePage(e: any) {
    this.filterData({
      page: e,
      take: this.banners.take,
    });
  }
}

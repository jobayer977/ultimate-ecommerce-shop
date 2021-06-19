import { Component, OnInit } from '@angular/core';

import { BannerQuery } from './../../../@shared/stores/banner/banner.query';
import { BannerService } from './../../../@shared/services/banner.service';
import { IFBannerFilter } from './../../../@shared/interfaces/banner.interface';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  templateUrl: './banner-page.component.html',
})
export class BannerPageComponent implements OnInit {
  constructor(
    private bannerService: BannerService,
    private bannerQuery: BannerQuery,
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
    this.bannerQuery.select().subscribe((res: any) => {
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
    this.bannerService.filter(option).toPromise();
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

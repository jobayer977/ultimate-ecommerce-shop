import { Component, Input, OnInit } from '@angular/core';

import { BannerService } from 'src/app/@shared/services/banner.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
})
export class BannerItemComponent implements OnInit {
  @Input() banner: any = {};

  constructor(
    private bannerService: BannerService,
    private nzNotificationService: NzNotificationService
  ) {}
  ngOnInit(): void {}

  //* update
  isUpdateModalOpen = false;
  onOpenUpdateModal() {
    this.isUpdateModalOpen = true;
  }
  onCloseUpdateModal() {
    this.isUpdateModalOpen = false;
  }
  onDelete(id: string) {
    this.bannerService.delete(id).subscribe((res: any) => {
      this.nzNotificationService.success('Deleted', '');
    });
  }
}

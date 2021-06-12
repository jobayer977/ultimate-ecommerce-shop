import { Component, Input, OnInit } from '@angular/core';

import { BrandService } from 'src/app/@shared/services/brand.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-brand-item',
  templateUrl: './brand-item.component.html',
})
export class BrandItemComponent implements OnInit {
  @Input() data: any = {};

  constructor(
    private brandService: BrandService,
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
    this.brandService.delete(id).subscribe((res: any) => {
      this.nzNotificationService.success('Deleted', '');
    });
  }
}

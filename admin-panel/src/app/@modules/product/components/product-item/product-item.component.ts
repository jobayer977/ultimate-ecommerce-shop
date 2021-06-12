import { Component, Input, OnInit } from '@angular/core';

import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProductService } from './../../../../@shared/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit {
  @Input() data: any = {};

  constructor(
    private productService: ProductService,
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
    this.productService.delete(id).subscribe((res: any) => {
      this.nzNotificationService.success('Deleted', '');
    });
  }
}

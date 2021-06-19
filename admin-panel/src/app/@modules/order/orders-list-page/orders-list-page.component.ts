import { Component, OnInit } from '@angular/core';
import {
  IFBaseFilterQuery,
  IFBaseFilterResponse,
} from './../../../@shared/interfaces/base.interface';

import { OrderService } from './../../../@shared/services/order.service';

@Component({
  templateUrl: './orders-list-page.component.html',
})
export class OrderListComponent implements OnInit {
  loading = false;
  orders: any = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };

  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.fetchUsers({ page: 1, take: 10 });
  }

  //* Fetching Users
  fetchUsers(option: IFBaseFilterQuery) {
    this.loading = true;
    this.orderService.filter(option).subscribe((res: IFBaseFilterResponse) => {
      this.orders = res;
    });
    this.loading = false;
  }

  //*Table Pagination
  onChangePage(page: number) {
    this.fetchUsers({ page: page, take: 10 });
  }
  onChangeSearch(e: any) {
    this.fetchUsers({
      page: this.orders?.page,
      take: 10,
      searchTerm: e.target.value,
    });
  }
}

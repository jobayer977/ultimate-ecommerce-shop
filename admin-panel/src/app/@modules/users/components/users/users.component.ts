import { Component, OnInit } from '@angular/core';

import { IFBaseFilterResponse } from './../../../../@shared/interfaces/base.interface';
import { IFFilterUser } from './../../../../@shared/interfaces/user.interface';
import { UserService } from 'src/app/@shared/services/user.service';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  loading = false;
  users: any = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.fetchUsers({ page: 1, take: 10, type: 'ADMIN' });
  }

  //* Fetching Users
  fetchUsers(option: IFFilterUser) {
    this.loading = true;
    this.userService.filter(option).subscribe((res: IFBaseFilterResponse) => {
      this.loading = false;
      this.users = res;
    });
  }

  //*Table Pagination
  onChangePage(page: number) {
    this.fetchUsers({ page: page, take: 10 });
  }
  onChangeSearch(e: any) {
    this.fetchUsers({
      page: this.users?.page,
      take: 10,
      searchTerm: e.target.value,
      type: 'ADMIN',
    });
  }
}

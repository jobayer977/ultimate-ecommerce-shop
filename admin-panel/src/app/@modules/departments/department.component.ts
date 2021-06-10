import { Component, OnInit } from '@angular/core';
import {
  IFBaseAttributeFilterQuery,
  IFBaseFilterResponse,
} from './../../@shared/interfaces/base.interface';

import { DepartmentService } from './../../@shared/services/department.service';

@Component({
  templateUrl: './department.component.html',
})
export class DepartmentComponent implements OnInit {
  createModalShow = false;
  loading = false;
  departments: any = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.fetchDepartments({
      page: 1,
      take: 10,
    });
  }

  //* Fetch departments
  private fetchDepartments(option: IFBaseAttributeFilterQuery) {
    this.loading = true;
    this.departmentService
      .filter(option)
      .subscribe((res: IFBaseFilterResponse) => {
        this.departments = res;
        this.loading = false;
      });
  }

  //*Table Pagination
  onChangePage(page: number) {
    this.fetchDepartments({ page: page, take: 10 });
  }
  onChangeSearch(e: any) {
    this.fetchDepartments({
      page: Number(this.departments?.page),
      take: 10,
      searchTerm: e?.target?.value,
    });
  }

  //* Create Department
  showModal(): void {
    this.createModalShow = !this.createModalShow;
  }
}

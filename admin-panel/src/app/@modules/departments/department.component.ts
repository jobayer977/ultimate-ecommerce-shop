import { Component, OnInit } from '@angular/core';
import {
  IFBaseAttributeFilterQuery,
  IFBaseFilterResponse,
} from './../../@shared/interfaces/base.interface';

import { DepartmentService } from './../../@shared/services/department.service';
import { IFBaseResponse } from 'src/app/@shared/interfaces/base.interface';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  templateUrl: './department.component.html',
})
export class DepartmentComponent implements OnInit {
  constructor(
    private departmentService: DepartmentService,
    private nzNotificationService: NzNotificationService
  ) {}
  ngOnInit(): void {
    this.fetchDepartments({
      page: 1,
      take: 10,
    });
  }

  //* Fetch departments
  loading = false;
  departments: any = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };
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
      page: this.departments?.page,
      take: 10,
      searchTerm: e?.target?.value,
    });
  }

  //* Create Department
  isOpenCreateDepartmentPopup = false;
  onCloseCreatePopup() {
    this.isOpenCreateDepartmentPopup = false;
  }

  onCreateSuccess(department: any) {
    this.departments.data = [department, ...this.departments.data];
  }

  //* Delete Department
  onDeleteDepartment(id: string) {
    this.departmentService.delete(id).subscribe((res: IFBaseResponse) => {
      this.departments.data = this.departments.data.filter(
        (x: any) => x.id !== id
      );
      this.nzNotificationService.success('Deleted', '');
    });
  }

  //* Update success
  updateDataSuccess(updatedData: any) {
    const _departments = this.departments.data;
    const fIdx = _departments.findIndex((x: any) => x.id === updatedData.id);
    _departments[fIdx] = updatedData;
    this.departments = {
      ...this.departments,
      data: [..._departments],
    };
  }
}

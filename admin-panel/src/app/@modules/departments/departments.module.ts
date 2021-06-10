import { AntDesignModule } from 'src/app/@core/ant-design.module';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department.component';
import { DepartmentsRouteingModule } from './departments.routeing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DepartmentComponent],
  imports: [DepartmentsRouteingModule, CommonModule, AntDesignModule],
})
export class DepartmentModule {}

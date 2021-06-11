import { AntDesignModule } from 'src/app/@core/ant-design.module';
import { CommonModule } from '@angular/common';
import { CreateDepartment } from './create-department/create-department.component';
import { DepartmentComponent } from './department.component';
import { DepartmentsRouteingModule } from './departments.routeing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateDepartment } from './update-department/update-department.component';

@NgModule({
  declarations: [DepartmentComponent, CreateDepartment, UpdateDepartment],
  imports: [
    DepartmentsRouteingModule,
    CommonModule,
    AntDesignModule,
    ReactiveFormsModule,
  ],
})
export class DepartmentModule {}

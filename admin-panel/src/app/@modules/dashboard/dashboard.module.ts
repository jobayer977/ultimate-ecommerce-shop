import { AntDesignModule } from './../../@core/ant-design.module';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    AntDesignModule,
  ],
})
export class DashboardModule {}

import { AntDesignModule } from './../../@core/ant-design.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderListComponent } from './orders-list-page/orders-list-page.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [OrderListComponent],
  imports: [OrderRoutingModule, CommonModule, AntDesignModule],
})
export class OrderModule {}

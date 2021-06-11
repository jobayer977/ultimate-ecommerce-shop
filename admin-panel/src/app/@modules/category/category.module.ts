import { AntDesignModule } from './../../@core/ant-design.module';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CategoryRoutingModule, CommonModule, AntDesignModule],
})
export class CategoryModule {}

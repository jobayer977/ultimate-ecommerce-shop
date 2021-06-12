import { AntDesignModule } from './../../@core/ant-design.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductsCreateComponent } from './components/product-create/products-create-component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductItemComponent,
    ProductsCreateComponent,
    ProductUpdateComponent,
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    AntDesignModule,
  ],
})
export class ProductModule {}

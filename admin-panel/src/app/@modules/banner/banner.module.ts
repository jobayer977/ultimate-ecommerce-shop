import { AntDesignModule } from './../../@core/ant-design.module';
import { BannerCreateComponent } from './components/banner-create/banner-create-component';
import { BannerItemComponent } from './components/banner-item/banner-item.component';
import { BannerPageComponent } from './banner-page/banner-page.component';
import { BannerRoutingModule } from './banner-routing.module';
import { BannerUpdateComponent } from './components/banner-update/banner-update.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BannerPageComponent,
    BannerCreateComponent,
    BannerItemComponent,
    BannerUpdateComponent,
  ],
  imports: [
    BannerRoutingModule,
    CommonModule,
    AntDesignModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class BannerModule {}

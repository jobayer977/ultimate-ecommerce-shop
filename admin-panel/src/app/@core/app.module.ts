import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

import { AntDesignModule } from 'src/app/@core/ant-design.module';
import { AppComponent } from './components/app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorizationInterceptor } from '../@shared/interceptor/authorization.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpConfigInterceptor } from '../@shared/interceptor/httpconfig.interceptor';
import { IconsProviderModule } from './icons-provider.module';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgModule } from '@angular/core';
import { SharedModule } from './../@shared/shared.module';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    SharedModule,
    AppRoutingModule,
    AntDesignModule,
    LoadingBarHttpClientModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

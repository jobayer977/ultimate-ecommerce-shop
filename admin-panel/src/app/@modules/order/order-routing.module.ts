import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { OrderListComponent } from './orders-list-page/orders-list-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: OrderListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class OrderRoutingModule {}

import { RouterModule, Routes } from '@angular/router';

import { DefaultDashboardPageComponent } from './default-dashboard-page/default-dashboard-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'default',
  },
  {
    path: 'default',
    component: DefaultDashboardPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DashboardRoutingModule {}

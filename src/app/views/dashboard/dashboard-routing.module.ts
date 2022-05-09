import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'administration',
        loadChildren: () => import('./views/administration/administration.module').then((m) => m.AdministrationModule),
      },
  
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}


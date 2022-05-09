import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../dashboard.component';



import { PortfolioComponent } from './views/portfolio/portfolio.component';

export const ADMINISTRATION_ROUTES: Routes = [
 
  {
    path: '',
    component: DashboardComponent,

  }, 
  
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },

 
  

];

@NgModule({
  imports: [RouterModule.forChild(ADMINISTRATION_ROUTES)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}


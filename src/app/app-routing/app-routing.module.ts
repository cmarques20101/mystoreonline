import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../dashboard/dashboard.component';

import { ServicoListComponent } from '../servico-list/servico-list.component';
import { ServicoViewComponent }  from '../servico-view/servico-view.component';

import { ProductComponent }  from '../product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'app-servico-view/:id', component: ServicoViewComponent },
  { path: 'app-servico-list', component: ServicoListComponent }
  ,{ path: 'app-product-list', component: ProductComponent }

];
//app-product-list
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

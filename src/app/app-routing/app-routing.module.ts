import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../dashboard/dashboard.component';

import { ServicoListComponent } from '../servico-list/servico-list.component';
import { ServicoViewComponent }  from '../servico-view/servico-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'servicoview/:id', component: ServicoViewComponent },
  { path: 'servicolist', component: ServicoListComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

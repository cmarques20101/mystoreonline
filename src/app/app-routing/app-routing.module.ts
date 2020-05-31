import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicoListComponent } from '../servico-list/servico-list.component';

const routes: Routes = [
  { path: 'servicoslist', component: ServicoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
*/
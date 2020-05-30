import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HelloxComponent } from './hellox/hellox.component';
import { HelloyComponent } from './helloy/helloy.component';

import { TopBarComponent } from './top-bar/top-bar.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductAlertsNotComponent } from './product-alerts-not/product-alerts-not.component';

import { ServicoListComponent } from './servico-list/servico-list.component';
import { ServicoEditComponent } from './servico-edit/servico-edit.component';
import { ServicoViewComponent } from './servico-view/servico-view.component';
import { ServicoListEditComponent } from './servico-list-edit/servico-list-edit.component';

@NgModule({
  imports: [
    BrowserModule,
      FormsModule,

    ReactiveFormsModule,
    /**/
    RouterModule.forRoot([
      //{ path: '', component: ProductListComponent },
      { path: '', component: ServicoListComponent },
    /**/
    ])
  ],
  declarations: [
    AppComponent,
    
    TopBarComponent,
    
    HelloyComponent
    , HelloxComponent,

    ProductListComponent,
    ProductAlertsComponent,
    ProductAlertsNotComponent,
    
    ServicoListComponent
    , ServicoEditComponent, ServicoViewComponent, ServicoListEditComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
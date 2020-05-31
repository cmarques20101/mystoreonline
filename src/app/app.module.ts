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


import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicoViewComponent } from './servico-view/servico-view.component';
import { ServicoListComponent } from './servico-list/servico-list.component';

import { ServicoListItemComponent } from './servico-list-item/servico-list-item.component';

import { ServicoEditComponent } from './servico-edit/servico-edit.component';


import { ServicoService } from './servico.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


import { AppRoutingModule }     from './app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    //ReactiveFormsModule,
    
    /* 
    RouterModule.forRoot([
      //{ path: '', component: ProductListComponent },
      { path: '', component: ServicoListComponent },
    */
    
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
    , ServicoListItemComponent
    , ServicoEditComponent
    , ServicoViewComponent
    
    , DashboardComponent
    , MessagesComponent
    
  ],
  bootstrap: [ AppComponent ]
  //,
  //providers: [ServicoService, MessageService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
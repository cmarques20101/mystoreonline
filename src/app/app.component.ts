import { Component, VERSION } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  nameApp = 'Angular ' + VERSION.major + "";
  //@Input titlex; // = 'my store online 2';
  title = 'Serve';
  subtitle = 'Plataforma de Intermediação de Serviços Técnicos Certificados';
  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
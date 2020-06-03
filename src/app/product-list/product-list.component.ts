import { Component } from '@angular/core';

import { products } from '../produtos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  /*
  mprodutos: Servico[] = []; //start empty

  constructor(private ServicoService: ServicoService) { }
  *

  share() {
    window.alert('The product has been shared/Produto será partilhado via email!');
  }

  onNotify1() {
    window.alert('You/Você will/irá be/ser notified when the product goes on sale');
  }
  onNotify2() {
    window.alert('You/Você will/irá NOT/NÂO be/ser notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
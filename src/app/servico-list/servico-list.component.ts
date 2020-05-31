import { Component, OnInit  } from '@angular/core';
import { Input } from '@angular/core';

import { Servico } from '../servico';
//import { servicos } from '../servicos';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.css']
})
export class ServicoListComponent {
  servicox: Servico;
  servicos = servicos;
  
  constructor() { }

  ngOnInit() {
    servicox = {id:0, name:'', price:0, description: '.'}
  }

  onSelect(servico: Servico): void {
    this.servicox = servico;
  }

}
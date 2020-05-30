import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { Servico } from '../servico';
import { Dataservicos } from '../servicos';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.css']
})
export class ServicoListComponent {
  servicox: Servico;
  servicos = Dataservicos;
  
  constructor() { }

  onSelect(servico: Servico): void {
    this.servicox = servico;
  }

}
import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { Servico } from '../servico';
import { servicos } from '../servicos';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.css']
})
export class ServicoListComponent {
  @Input() title;
  servico: Servico;
  servicos = servicos;
  
  constructor() { }

  onSelect(servico: Servico): void {
    this.selServico = servico;
  }

}